pipeline {
    agent any

    environment {
        IMAGE_NAME = "ctslab/hms"
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {

        stage('Build Application') {
            steps {
                bat "npm install"
                bat "npm run lint"
                bat "npm run build"
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME%:%IMAGE_TAG% ."
            }
        }

        stage('Verify Docker Image') {
            steps {
                bat "docker image inspect %IMAGE_NAME%:%IMAGE_TAG%"
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    bat '''
                    echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                bat "docker push %IMAGE_NAME%:%IMAGE_TAG%"
            }
        }

        stage('Verify Docker Hub Push') {
            steps {
                bat "docker pull %IMAGE_NAME%:%IMAGE_TAG%"
            }
        }

        stage('Docker Logout') {
            steps {
                bat "docker logout"
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully.'
        }

        failure {
            echo 'Pipeline execution failed.'
        }

        always {
            bat "docker image prune -f"
        }
    }
}
