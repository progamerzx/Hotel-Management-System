import React, { useState } from 'react';

const ROOMS_DATA = [
  {
    id: 'deluxe-room',
    title: 'Deluxe Ocean Room',
    category: 'room',
    price: 250,
    desc: 'An exquisite room blending classic luxury styling with breathtaking panoramic views of the coastal shoreline.',
    image: '/hotel_suite.png',
    specs: { size: '45 m²', guests: '2 Guests', view: 'Ocean View' }
  },
  {
    id: 'executive-suite',
    title: 'Executive Grand Suite',
    category: 'suite',
    price: 490,
    desc: 'Features expansive living areas, state of the art workspace amenities, and customized luxury marble bath settings.',
    image: '/hotel_hero.png', // creative use of elegant architecture
    specs: { size: '85 m²', guests: '3 Guests', view: 'Skyline View' }
  },
  {
    id: 'presidential-villa',
    title: 'Presidential Infinity Villa',
    category: 'villa',
    price: 950,
    desc: 'The ultimate retreat featuring a private rooftop pool terrace, outdoor chef kitchen, and full butler service.',
    image: '/hotel_spa.png', // stunning spa/sanctuary feel
    specs: { size: '180 m²', guests: '6 Guests', view: 'Panoramic View' }
  },
  {
    id: 'royal-penthouse',
    title: 'Royal Horizon Penthouse',
    category: 'suite',
    price: 720,
    desc: 'A magnificent private penthouse on the top floor featuring a gorgeous floor-to-ceiling glass design and curated art.',
    image: '/hotel_suite.png',
    specs: { size: '120 m²', guests: '4 Guests', view: '360° Ocean View' }
  }
];

function Rooms({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredRooms = activeFilter === 'all' 
    ? ROOMS_DATA 
    : ROOMS_DATA.filter(room => room.category === activeFilter);

  return (
    <section className="section" style={{ minHeight: '80vh' }}>
      <div className="section-header">
        <span className="section-tag">Our Accommodations</span>
        <h2 className="section-title">Rooms & Suites</h2>
        <p className="section-desc">
          Immerse yourself in a luxurious private sanctuary. Every room is meticulously 
          configured with state of the art finishes and custom styling.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="rooms-filter-container">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Accommodations
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'room' ? 'active' : ''}`}
          onClick={() => setActiveFilter('room')}
        >
          Rooms
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'suite' ? 'active' : ''}`}
          onClick={() => setActiveFilter('suite')}
        >
          Suites
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'villa' ? 'active' : ''}`}
          onClick={() => setActiveFilter('villa')}
        >
          Villas
        </button>
      </div>

      {/* Rooms Grid */}
      <div className="rooms-grid">
        {filteredRooms.map((room) => (
          <div key={room.id} className="room-card glass-card">
            <div className="room-img-container">
              <img src={room.image} alt={room.title} className="room-img" />
              <div className="room-price-tag">${room.price} <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>/ Night</span></div>
            </div>
            
            <div className="room-body">
              <h3 className="room-title">{room.title}</h3>
              <p className="room-desc">{room.desc}</p>
              
              <ul className="room-specs">
                <li className="room-spec-item">
                  <span className="room-spec-icon">✦</span>
                  {room.specs.size}
                </li>
                <li className="room-spec-item">
                  <span className="room-spec-icon">✦</span>
                  {room.specs.guests}
                </li>
                <li className="room-spec-item">
                  <span className="room-spec-icon">✦</span>
                  {room.specs.view}
                </li>
              </ul>
              
              <button 
                className="btn-gold" 
                style={{ width: '100%' }}
                onClick={() => onOpenBooking({ roomType: room.title })}
              >
                Book This Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;
