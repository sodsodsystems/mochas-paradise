import React, { useState } from 'react';
import axios from 'axios';
import { CheckCircle2, X } from 'lucide-react';

const Appointment = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [apptRef, setApptRef] = useState('');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    petname: '',
    pettype: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id.replace('appt-', '').replace('-sel', '')]: e.target.value });
  };

  const handleBook = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.petname || !form.pettype || !form.service || !form.date || !form.time) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/appointments', form);
      if (res.data.success) {
        setApptRef(res.data.ref);
        setIsSuccess(true);
        // Reset form
        setForm({
          name: '',
          phone: '',
          email: '',
          petname: '',
          pettype: '',
          service: '',
          date: '',
          time: '',
          notes: ''
        });
      }
    } catch (err) {
      console.error("Booking error", err);
      alert("Something went wrong during booking.");
    } finally {
      setLoading(false);
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment">
      <div className="appt-info fade-up visible">
        <span className="section-tag">Schedule a Visit</span>
        <h2 className="section-title">Book an<br /><em>Appointment</em></h2>
        <p className="appt-body">Scheduling a visit is simple and stress-free. Choose your preferred service, date, and time —
          and we'll take care of the rest with the warmth your pet deserves.</p>
        <div className="appt-hours">
          <div className="appt-hour-row"><span className="appt-day">Monday – Friday</span><span className="appt-time-label">8:00 AM – 7:00 PM</span></div>
          <div className="appt-hour-row"><span className="appt-day">Saturday</span><span className="appt-time-label">9:00 AM – 6:00 PM</span></div>
          <div className="appt-hour-row"><span className="appt-day">Sunday</span><span className="appt-time-label">10:00 AM – 4:00 PM</span></div>
          <div className="appt-hour-row"><span className="appt-day">Emergency Line</span><span className="appt-time-label">24 / 7 Available</span></div>
        </div>
      </div>
      
      <div className="appt-form fade-up visible">
        <div className="form-title">Reserve Your Slot</div>
        <div className="form-subtitle">We'll confirm your appointment within 24 hours.</div>
        <form onSubmit={handleBook}>
          <div className="form-row">
            <div className="form-group"><label>Your Name *</label><input type="text" id="appt-name" value={form.name} onChange={handleChange} placeholder="Full name" required /></div>
            <div className="form-group"><label>Phone Number *</label><input type="tel" id="appt-phone" value={form.phone} onChange={handleChange} placeholder="+63 9XX XXX XXXX" required /></div>
          </div>
          <div className="form-group"><label>Email *</label><input type="email" id="appt-email" value={form.email} onChange={handleChange} placeholder="your@email.com" required /></div>
          <div className="form-row">
            <div className="form-group"><label>Pet's Name *</label><input type="text" id="appt-petname" value={form.petname} onChange={handleChange} placeholder="Your pet's name" required /></div>
            <div className="form-group"><label>Pet Type *</label>
              <select id="appt-pettype" value={form.pettype} onChange={handleChange} required>
                <option value="">Select...</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Rabbit</option>
                <option>Bird</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group"><label>Service *</label>
              <select id="appt-service" value={form.service} onChange={handleChange} required>
                <option value="">Select service...</option>
                <option>General Wellness</option>
                <option>Dental Care</option>
                <option>Diagnostics &amp; Lab</option>
                <option>Vaccinations</option>
                <option>Grooming &amp; Spa</option>
                <option>Surgery Consultation</option>
              </select>
            </div>
            <div className="form-group"><label>Preferred Date *</label><input type="date" id="appt-date" value={form.date} onChange={handleChange} min={todayStr} required /></div>
          </div>
          <div className="form-group"><label>Preferred Time *</label>
            <select id="appt-time-sel" value={form.time} onChange={handleChange} required>
              <option value="">Select time...</option>
              <option>8:00 AM</option>
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
              <option>5:00 PM</option>
            </select>
          </div>
          <div className="form-group"><label>Notes (Optional)</label><textarea id="appt-notes" value={form.notes} onChange={handleChange} placeholder="Any symptoms, concerns, or special requests..."></textarea></div>
          <button type="submit" className="appt-submit" disabled={loading}>{loading ? 'Booking...' : 'Confirm Appointment'}</button>
        </form>
      </div>

      {isSuccess && (
        <div className="modal-overlay open">
          <div className="modal-box">
            <div className="success-screen show">
              <div className="success-icon"><CheckCircle2 size={64} color="var(--sage)" /></div>
              <div className="success-title">Appointment Booked!</div>
              <p className="success-subtitle">Your appointment has been received. We'll confirm within 24 hours via phone or email. See you soon!</p>
              <div className="success-ref">Reference: <strong>{apptRef}</strong></div>
              <button className="modal-submit" style={{ maxWidth: '200px', marginTop: '1.5rem' }} onClick={() => setIsSuccess(false)}>Done</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Appointment;
