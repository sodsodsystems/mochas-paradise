import React from 'react';
import { Sparkles, Calendar, PawPrint } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-badge"><Sparkles size={16} color="var(--caramel)" /> Premium Pet Care Since 2018</div>
        <h1 className="hero-title">Where Pets<br />Find Their<br /><em>Paradise</em></h1>
        <p className="hero-subtitle">Expert veterinary care wrapped in warmth and love — because your furry family deserves
          nothing less than extraordinary.</p>
        <div className="hero-buttons">
          <a href="#appointment" className="btn-primary">Book Appointment <Calendar size={18} /></a>
          <a href="#services" className="btn-secondary">Our Services</a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">2,400+</div>
            <div className="stat-label">Happy Pets</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">12</div>
            <div className="stat-label">Expert Vets</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">6 yrs</div>
            <div className="stat-label">Of Care</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img-wrap">
          <img src="/mocha-hero-img.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, zIndex: 0 }}
            alt="Mocha's Paradise Clinic" />
          <div className="hero-img-overlay"></div>
          <div className="hero-img-pattern"></div>
          <span className="hero-paw-deco"><PawPrint size={200} /></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
