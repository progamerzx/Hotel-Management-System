import React from 'react';

function Home({ onNavigate, onOpenBooking }) {
  const handleSubmitBooking = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingDetails = {
      checkin: formData.get('checkin'),
      checkout: formData.get('checkout'),
      guests: formData.get('guests'),
      roomType: formData.get('roomType'),
    };
    onOpenBooking(bookingDetails);
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-container" 
        style={{ backgroundImage: `url('/hotel_hero.png')` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to Aura Haven Resort</span>
          <h1 className="hero-title">Experience the Art of Luxury Living</h1>
          <p className="hero-description">
            Escape to an exquisite oasis of tranquility, where world-class service meets 
            unrivaled comfort and sophistication.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-gold" onClick={() => onNavigate('rooms')}>Explore Rooms</button>
            <button className="btn-outline" onClick={() => onOpenBooking()}>Book Your Stay</button>
          </div>
        </div>
      </section>

      {/* Booking Bar */}
      <div className="section" style={{ padding: '0 2rem' }}>
        <form onSubmit={handleSubmitBooking} className="booking-bar glass-card">
          <div className="booking-field">
            <label htmlFor="checkin">Check-in</label>
            <input type="date" id="checkin" name="checkin" required defaultValue="2026-07-15" />
          </div>
          <div className="booking-field">
            <label htmlFor="checkout">Check-out</label>
            <input type="date" id="checkout" name="checkout" required defaultValue="2026-07-22" />
          </div>
          <div className="booking-field">
            <label htmlFor="guests">Guests</label>
            <select id="guests" name="guests">
              <option value="1">1 Guest</option>
              <option value="2" selected>2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </div>
          <div className="booking-field">
            <label htmlFor="roomType">Room Type</label>
            <select id="roomType" name="roomType">
              <option value="Deluxe Suite">Deluxe Room</option>
              <option value="Executive Penthouse">Executive Suite</option>
              <option value="Presidential Villa">Presidential Villa</option>
            </select>
          </div>
          <button type="submit" className="btn-gold" style={{ height: '43px' }}>Search</button>
        </form>
      </div>

      {/* Amenities Section */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Amenities</span>
          <h2 className="section-title">Designed for Ultimate Comfort</h2>
          <p className="section-desc">
            We provide a curate selection of services and activities designed to ensure 
            your time with us is restorative and indulgent.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon">✦</div>
            <h3 className="feature-title">Infinity Pools</h3>
            <p>Dive into bliss with temperature-controlled pools overlooking scenic cliffs.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">✦</div>
            <h3 className="feature-title">Luxury Spa & Wellness</h3>
            <p>Rejuvenate your senses with bespoke holistic massage therapies and facials.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">✦</div>
            <h3 className="feature-title">Fine Dining Restaurants</h3>
            <p>Savor Michelin-starred cuisines prepared by world-renowned culinary master chefs.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">✦</div>
            <h3 className="feature-title">24/7 Butler Service</h3>
            <p>Experience ultra-customized hospitality with dedicated room butler assistance.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">✦</div>
            <h3 className="feature-title">Private Beach Access</h3>
            <p>Walk straight from your suite onto soft white sands and crystal clear oceans.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">✦</div>
            <h3 className="feature-title">Private Yacht Charters</h3>
            <p>Explore gorgeous coastline settings with custom maritime day excursions.</p>
          </div>
        </div>
      </section>

      {/* Signature Experience Section */}
      <section style={{ background: 'var(--bg-secondary)', padding: '6rem 2rem' }}>
        <div className="section" style={{ padding: '0' }}>
          <div className="service-row">
            <div className="service-img-container">
              <img src="/hotel_spa.png" alt="Spa sanctuary" className="service-img" />
            </div>
            <div className="service-content">
              <span className="section-tag">Signature Sanctuary</span>
              <h2 className="service-title">The Soma Spa</h2>
              <p>
                Our award-winning spa sanctuary is built entirely from organic local stone and 
                designed to induce complete tranquility. Choose from clinical grade facials, 
                deep tissue muscle release, or hot basalt stone therapy.
              </p>
              <button 
                className="btn-outline" 
                style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
                onClick={() => onNavigate('services')}
              >
                Explore Wellness Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
