import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="contact-info fade-up visible">
          <span className="section-tag">Find Us</span>
          <h2 className="section-title">Visit<br /><em>Our Clinic</em></h2>
          <p className="contact-body">Nestled in the heart of the neighborhood, Mocha's Paradise is designed to feel less like a clinic and more like a warm, welcoming home for your pets.</p>
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div>
                <div className="contact-label">Address</div>
                <div className="contact-value">123 Paws Avenue, Quezon City<br />Metro Manila, Philippines</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Phone size={20} /></div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">(02) 8123-4567 &nbsp;|&nbsp; 0917-000-1234</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Mail size={20} /></div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value"><a href="mailto:hello@mochasparadise.com">hello@mochasparadise.com</a></div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Instagram size={20} /></div>
              <div>
                <div className="contact-label">Social</div>
                <div className="contact-value">@mochasparadiseph · Facebook &amp; Instagram</div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-placeholder fade-up visible">
          <div className="map-pin">
            <span className="map-pin-icon"><MapPin size={64} /></span>
            <div className="map-pin-label">Mocha's Paradise</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
