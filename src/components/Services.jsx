import React, { useState } from 'react';

function Services() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Clear status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section className="section" style={{ minHeight: '80vh' }}>
      <div className="section-header">
        <span className="section-tag">Explore Aura Haven</span>
        <h2 className="section-title">Services & Contact</h2>
        <p className="section-desc">
          Indulge in tailored leisure programs, culinary excellence, and holistic wellness programs. 
          Get in touch with our concierge team to plan your arrival.
        </p>
      </div>

      {/* Services Showcase */}
      <div className="services-list" style={{ marginBottom: '8rem' }}>
        {/* Service 1: Dining */}
        <div className="service-row">
          <div className="service-img-container">
            <img src="/hotel_hero.png" alt="Lumiere Dining" className="service-img" />
          </div>
          <div className="service-content">
            <span className="section-tag">Gastronomy</span>
            <h3 className="service-title">L'Ambroisie Restaurant</h3>
            <p>
              Experience fine dining curated by world-class chefs. Our menus celebrate organic local ingredients 
              and global techniques, paired with vintage wines from our private cellar.
            </p>
            <ul className="service-features-list">
              <li className="service-feature"><span className="service-feature-bullet"></span> Michelin-starred signature menus</li>
              <li className="service-feature"><span className="service-feature-bullet"></span> Sommelier-guided wine tasting sessions</li>
              <li className="service-feature"><span className="service-feature-bullet"></span> Private terrace dining options</li>
            </ul>
          </div>
        </div>

        {/* Service 2: Wellness */}
        <div className="service-row reverse">
          <div className="service-img-container">
            <img src="/hotel_spa.png" alt="Soma Sanctuary" className="service-img" />
          </div>
          <div className="service-content">
            <span className="section-tag">Sanctuary</span>
            <h3 className="service-title">Anaya Wellness & Spa</h3>
            <p>
              Restore balance in your body and mind. The spa offers advanced therapeutic treatments, heated plunge 
              pools, steam rooms, and calming relaxation pods.
            </p>
            <ul className="service-features-list">
              <li className="service-feature"><span className="service-feature-bullet"></span> Organic oil message and facial treatments</li>
              <li className="service-feature"><span className="service-feature-bullet"></span> Heated mineral pools & sauna</li>
              <li className="service-feature"><span className="service-feature-bullet"></span> Daily morning yoga and meditation classes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-header" style={{ marginBottom: '3.5rem' }}>
        <span className="section-tag">Inquire</span>
        <h2 className="section-title">Contact Concierge</h2>
        <p className="section-desc">
          Do you have special requests or wishes? Our concierge team is ready to assist you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        {/* Info Column */}
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon-box">✉</div>
            <div className="contact-details">
              <h4>Email Concierge</h4>
              <p>concierge@aurahaven.com</p>
              <p>reservations@aurahaven.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon-box">☎</div>
            <div className="contact-details">
              <h4>Phone Reservations</h4>
              <p>+1 (800) 456-9000</p>
              <p>+1 (800) 456-9001 (International)</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-box">📍</div>
            <div className="contact-details">
              <h4>Our Location</h4>
              <p>777 Ocean Crest Drive</p>
              <p>Aura Heights, CA 90210</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form glass-card">
          {formSubmitted && (
            <div className="success-banner">
              <span style={{ fontSize: '1.5rem' }}>✓</span>
              <div>
                <strong>Message Sent Successfully!</strong>
                <p style={{ fontSize: '0.85rem', color: '#86efac', marginTop: '0.2rem' }}>
                  Our concierge team will respond to your request within 2 hours.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleFormSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-field full">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="How can we assist you?"
                />
              </div>
              <div className="form-field full">
                <label htmlFor="message">Message / Request Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Write your request here..."
                ></textarea>
              </div>
            </div>
            
            <div className="form-submit-row">
              <button type="submit" className="btn-gold">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Services;
