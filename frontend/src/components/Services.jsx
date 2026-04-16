import React from 'react';
import { Stethoscope, Sparkle, Microscope, Syringe, Scissors, Hospital } from 'lucide-react';

const services = [
  { icon: Stethoscope, name: 'General Wellness', text: 'Complete physical exams, vaccinations, parasite prevention, and routine health monitoring for long, happy lives.', price: 'From ₱500' },
  { icon: Sparkle, name: 'Dental Care', text: 'Professional teeth cleaning, oral health assessments, and dental procedures under safe anesthesia protocols.', price: 'From ₱1,200' },
  { icon: Microscope, name: 'Diagnostics & Lab', text: 'In-house blood panels, urinalysis, digital X-rays, and ultrasound for fast, accurate diagnosis.', price: 'From ₱800' },
  { icon: Syringe, name: 'Vaccinations', text: 'Core and non-core vaccines on a personalized schedule to keep your pet protected year-round.', price: 'From ₱350' },
  { icon: Scissors, name: 'Grooming & Spa', text: 'Full bath, breed-specific styling, nail trim, ear cleaning, and de-shedding treatments by certified groomers.', price: 'From ₱450' },
  { icon: Hospital, name: 'Surgery & Recovery', text: 'Soft tissue surgery, spay & neuter procedures, and monitored post-operative recovery in a calm environment.', price: 'From ₱2,500' }
];

const Services = () => {
  return (
    <section id="services">
      <div className="services-header fade-up">
        <div>
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Care Tailored for<br /><em>Every Companion</em></h2>
        </div>
        <p className="services-desc">From routine wellness to specialized treatment, we provide comprehensive care with compassion and expertise.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card fade-up" key={index}>
            <div className="service-icon"><service.icon size={40} strokeWidth={1.5} /></div>
            <div className="service-name">{service.name}</div>
            <p className="service-text">{service.text}</p>
            <div className="service-price">{service.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
