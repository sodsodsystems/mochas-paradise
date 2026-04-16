import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand-name">Mocha's <span>Paradise</span></div>
          <p className="footer-tagline">Premium veterinary care<br />delivered with love and expertise.</p>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><a href="#services">General Wellness</a></li>
            <li><a href="#services">Dental Care</a></li>
            <li><a href="#services">Grooming &amp; Spa</a></li>
            <li><a href="#services">Surgery</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Clinic</div>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Shop</a></li>
            <li><a href="#appointment">Book Appointment</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Hours</div>
          <ul className="footer-links">
            <li><a href="#">Mon–Fri: 8am–7pm</a></li>
            <li><a href="#">Saturday: 9am–6pm</a></li>
            <li><a href="#">Sunday: 10am–4pm</a></li>
            <li><a href="#">Emergency: 24/7</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2024 Mocha's Paradise Pet Care Clinic. All rights reserved.</span>
        <span>Made with <Heart size={14} style={{ fill: 'var(--caramel)', stroke: 'none' }} /> for pets everywhere</span>
      </div>
    </footer>
  );
};

export default Footer;
