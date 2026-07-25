pipeline{
    agent any

    environment{
        IMAGE_NAME = "ctslab/hms"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages{
        stage('Build'){
            steps{
                // Replaced 'npm run dev' with 'npm run lint' and 'npm run build'
                // as 'npm run dev' starts a server and will hang the pipeline.
                bat "npm install"
                bat "npm run lint"
                bat "npm run build"
            }
        }

        stage('Build the Docker Image'){
            steps{
                bat "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }
        
        stage('Verify the docker image'){
            steps{
                bat "docker image inspect ${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }

        stage('Login to the docker registry'){
            steps{
                withCredentials([
                    usernamePassword(
                        credentialsID: "docker-creds"
                        usernameVariable: "DOCKER_USER"
                        passwordVariable: "DOCKER_PASS"
                    )
                ])
                {
                    bat "docker login -u %DOCKER_USER% -p %DOCKER_PASS%"
                }
            }
        }

        stage('Push Docker Registry'){
            steps{
                bat "docker push ${IMAGE_NAME}:${IMAGE_TAG}"
                bat "docker logout"
            }
        }

        stage('Verify Dockerhub Push'){
            steps{
                bat "docker pull ${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }
        
    }

    post{
        success{
            echo "Pipeline successfully executed"
        }

        failure {
            echo "Pipeline Failed"
        }
    }
}