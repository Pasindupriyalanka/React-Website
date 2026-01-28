import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Star Salon</h1>
        <p>Luxury care for your beauty & confidence</p>
        <Link to="/contact" className="btn-primary">
          Book Appointment
        </Link>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-card">
            <h3>Hair Styling</h3>
            <p>Trendy cuts & professional styling.</p>
          </div>
          <div className="service-card">
            <h3>Facials</h3>
            <p>Glow-enhancing skincare treatments.</p>
          </div>
          <div className="service-card">
            <h3>Nail Care</h3>
            <p>Perfect manicures & pedicures.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
