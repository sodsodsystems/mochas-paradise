import React, { useState } from 'react';
import { X, Package, PartyPopper } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cart, subtotal, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderRef, setOrderRef] = useState('');
  const [details, setDetails] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    province: '',
    payment: ''
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id.replace('co-', '')]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!details.name || !details.phone || !details.email || !details.address || !details.city || !details.payment) {
      alert("Please fill in all required fields.");
      return;
    }

    // SIMULATED SUCCESS (GitHub Pages compatible)
    // In a real environment, this would be an axios.post call
    const ref = 'MP-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    setOrderRef(ref);
    setIsSuccess(true);
    
    // Clear cart effectively
    clearCart();
    
    console.log(`Simulated Order: ${ref}`);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal-box">
        {!isSuccess ? (
          <div id="checkoutForm">
            <div className="modal-header">
              <div className="modal-title">Checkout</div>
              <button className="modal-close" onClick={handleClose}><X size={24} /></button>
            </div>
            <div className="modal-body">
              <div className="modal-section-title">Order Summary</div>
              <div id="orderSummaryItems">
                {cart.map(item => (
                  <div className="order-line" key={item.id}>
                    <span><Package size={14} style={{ verticalAlign: 'middle', marginRight: '0.4rem' }} /> {item.name} x{item.qty}</span>
                    <span>₱{(item.price * item.qty).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="order-total" style={{ marginTop: '0.5rem' }}>
                <span>Total</span><span id="orderTotal">₱{subtotal.toLocaleString()}</span>
              </div>
              
              <div className="modal-section-title" style={{ marginTop: '1.8rem' }}>Your Details</div>
              <div className="form-row">
                <div className="form-group"><label>Full Name *</label><input type="text" id="co-name" value={details.name} onChange={handleChange} placeholder="Maria Santos" /></div>
                <div className="form-group"><label>Phone *</label><input type="tel" id="co-phone" value={details.phone} onChange={handleChange} placeholder="+63 9XX XXX XXXX" /></div>
              </div>
              <div className="form-group"><label>Email *</label><input type="email" id="co-email" value={details.email} onChange={handleChange} placeholder="maria@email.com" /></div>
              
              <div className="modal-section-title">Delivery Address</div>
              <div className="form-group"><label>Street Address *</label><input type="text" id="co-address" value={details.address} onChange={handleChange} placeholder="123 Sample St, Brgy. Example" /></div>
              <div className="form-row">
                <div className="form-group"><label>City *</label><input type="text" id="co-city" value={details.city} onChange={handleChange} placeholder="Quezon City" /></div>
                <div className="form-group"><label>Province</label><input type="text" id="co-province" value={details.province} onChange={handleChange} placeholder="Metro Manila" /></div>
              </div>
              
              <div className="modal-section-title">Payment Method</div>
              <div className="form-group">
                <label>Select Payment *</label>
                <select id="co-payment" value={details.payment} onChange={handleChange}>
                  <option value="">Choose...</option>
                  <option value="gcash">GCash</option>
                  <option value="maya">Maya</option>
                  <option value="cod">Cash on Delivery</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>
              <button className="modal-submit" onClick={handlePlaceOrder}>Place Order</button>
            </div>
          </div>
        ) : (
          <div className="success-screen show" id="orderSuccess">
            <div className="success-icon"><PartyPopper size={64} color="var(--caramel)" /></div>
            <div className="success-title">Order Confirmed!</div>
            <p className="success-subtitle">Thank you! We'll prepare your items and have them delivered soon. Check your email for details.</p>
            <div className="success-ref">Reference No: <strong id="orderRef">{orderRef}</strong></div>
            <button className="modal-submit" style={{ maxWidth: '200px', marginTop: '1.5rem' }} onClick={handleClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
