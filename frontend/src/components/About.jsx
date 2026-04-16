import React from 'react';
import { PawPrint } from 'lucide-react';

const About = () => {
  return (
    <section id="about">
      <div className="about-visual fade-up">
        <div className="about-img-box">
          <img src="/mocha-abt-img.png" alt="Caring for Golden Retriever"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="about-paw-bg"><PawPrint size={240} /></div>
        </div>
        <div className="about-accent-box">
          <span className="about-accent-num">98%</span>
          <div className="about-accent-label">Client Satisfaction</div>
        </div>
      </div>
      <div className="about-content fade-up">
        <span className="section-tag">Our Story</span>
        <h2 className="section-title">A Sanctuary Built<br />on <em>Love &amp; Trust</em></h2>
        <p className="about-body">Mocha's Paradise was born from a simple belief — that every pet deserves to be treated like
          family. Founded by Dr. Maria Santos in 2018, our clinic combines clinical excellence with a deeply personal
          approach to animal wellness.<br /><br />We named our clinic after Mocha, the golden retriever who inspired our
          founder to pursue veterinary medicine. Her spirit lives on in the warm, nurturing environment we've built for
          every pet that walks through our doors.</p>
        <div className="about-features">
          <div className="about-feature">
            <div className="feature-dot"></div>
            <div className="feature-text">Fully equipped in-house laboratory for same-day diagnostic results</div>
          </div>
          <div className="about-feature">
            <div className="feature-dot"></div>
            <div className="feature-text">Separate wards for cats and dogs to minimize stress and anxiety</div>
          </div>
          <div className="about-feature">
            <div className="feature-dot"></div>
            <div className="feature-text">Fear-free certified staff trained in low-stress handling techniques</div>
          </div>
          <div className="about-feature">
            <div className="feature-dot"></div>
            <div className="feature-text">Emergency care available 7 days a week with on-call veterinarians</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
