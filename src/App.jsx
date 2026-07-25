import React, { useState } from 'react';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Services from './components/Services';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [resId, setResId] = useState('');

  const handleOpenBooking = (details = null) => {
    setBookingPrefill(details);
    setBookingConfirmed(false);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingConfirmed(false);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    // Simulate generation of Reservation ID
    const randomId = 'AH-' + Math.floor(100000 + Math.random() * 900000);
    setResId(randomId);
    setBookingConfirmed(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} onOpenBooking={handleOpenBooking} />;
      case 'rooms':
        return <Rooms onOpenBooking={handleOpenBooking} />;
      case 'services':
        return <Services />;
      default:
        return <Home onNavigate={setCurrentPage} onOpenBooking={handleOpenBooking} />;
    }
  };

  return (
    <>
      {/* Sticky Navigation Bar */}
      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-brand" style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
            ✦ Aura <span>Haven</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <span 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => setCurrentPage('home')}
                >
                  Home
                </span>
              </li>
              <li>
                <span 
                  className={`nav-link ${currentPage === 'rooms' ? 'active' : ''}`}
                  onClick={() => setCurrentPage('rooms')}
                >
                  Rooms & Suites
                </span>
              </li>
              <li>
                <span 
                  className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
                  onClick={() => setCurrentPage('services')}
                >
                  Services & Contact
                </span>
              </li>
            </ul>
          </nav>
          <div>
            <button className="btn-gold" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }} onClick={() => handleOpenBooking()}>
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="modal-overlay">
          <div className="modal-content glass-card">
            <button className="modal-close" onClick={handleCloseBooking}>&times;</button>
            
            {!bookingConfirmed ? (
              <>
                <h3 className="modal-title">Book Your Sanctuary</h3>
                <p className="modal-subtitle">Experience luxury redefined</p>
                
                <form onSubmit={handleConfirmBooking}>
                  <div className="form-grid" style={{ marginBottom: '2rem' }}>
                    <div className="form-field">
                      <label htmlFor="modal-name">Full Name</label>
                      <input type="text" id="modal-name" required placeholder="John Doe" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="modal-email">Email Address</label>
                      <input type="email" id="modal-email" required placeholder="john@example.com" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="modal-checkin">Arrival Date</label>
                      <input 
                        type="date" 
                        id="modal-checkin" 
                        required 
                        defaultValue={bookingPrefill?.checkin || "2026-07-15"} 
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="modal-checkout">Departure Date</label>
                      <input 
                        type="date" 
                        id="modal-checkout" 
                        required 
                        defaultValue={bookingPrefill?.checkout || "2026-07-22"} 
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="modal-room">Suite Selected</label>
                      <select id="modal-room" defaultValue={bookingPrefill?.roomType || "Deluxe Ocean Room"}>
                        <option value="Deluxe Ocean Room">Deluxe Ocean Room</option>
                        <option value="Executive Grand Suite">Executive Grand Suite</option>
                        <option value="Presidential Infinity Villa">Presidential Infinity Villa</option>
                        <option value="Royal Horizon Penthouse">Royal Horizon Penthouse</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="modal-guests">Total Guests</label>
                      <select id="modal-guests" defaultValue={bookingPrefill?.guests || "2"}>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4+ Guests</option>
                      </select>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <button type="button" className="btn-outline" onClick={handleCloseBooking}>Cancel</button>
                    <button type="submit" className="btn-gold">Confirm Booking</button>
                  </div>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <span style={{ fontSize: '4rem', color: 'var(--gold-primary)', display: 'block', marginBottom: '1.5rem' }}>✦</span>
                <h3 className="modal-title" style={{ color: 'white', marginBottom: '1rem' }}>Reservation Confirmed</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  We are delighted to welcome you to Aura Haven. Your booking confirmation and itinerary have been sent.
                </p>
                <div className="glass-card" style={{ padding: '1.5rem', display: 'inline-block', borderStyle: 'dashed', borderColor: 'var(--gold-primary)', marginBottom: '2.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>Your Reservation ID</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--gold-light)', letterSpacing: '0.05em', fontWeight: 'bold' }}>{resId}</span>
                </div>
                <div>
                  <button className="btn-gold" onClick={handleCloseBooking}>Done</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>✦ Aura <span>Haven</span></h3>
            <p>
              A private luxury sanctuary designed to inspire rest, rejuvenation, and peak sensory indulgence.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><span style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>Home</span></li>
              <li><span style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('rooms')}>Rooms & Suites</span></li>
              <li><span style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('services')}>Services & Contact</span></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>concierge@aurahaven.com</li>
              <li>+1 (800) 456-9000</li>
              <li>777 Ocean Crest Drive, CA</li>
            </ul>
          </div>
          
          <div className="footer-col footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to receive exclusive access and private invitations.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Newsletter!'); }}>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aura Haven Resort & Spa. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </>
  );
}

export default App;
