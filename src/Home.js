import React from 'react';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to Star Salon</h1>
                <p>Experience the best care for your beauty</p>
                <button>Book an Appointment</button>
            </section>

            <section className="services">
                <h2>Our Services</h2>
                <div className="service-list">
                    <div className="service">
                        <h3>Hair Styling</h3>
                        <p>Transform your hair with our expert stylists.</p>
                    </div>
                    <div className="service">
                        <h3>Facials & Skincare</h3>
                        <p>Revitalize your skin with our premium facials.</p>
                    </div>
                    <div className="service">
                        <h3>Nail Care</h3>
                        <p>Experience impeccable manicures and pedicures.</p>
                    </div>
                    {/* Add more services as needed */}
                </div>
            </section>

            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <p>"I had a wonderful experience at Luxe Salon. Highly recommend their service!"</p>
                {/* Additional testimonials */}
            </section>

            {/* Additional sections like 'About Us', 'Contact', or 'Gallery' can go here */}
        </div>
    );
}

export default Home;