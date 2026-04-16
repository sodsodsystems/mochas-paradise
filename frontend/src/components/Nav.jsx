import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Nav = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav id="mainNav">
      <a href="#hero" className="nav-logo">
        <img src="/MochasParadiseLogo.png" alt="Mocha's Paradise"
          style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
        <div className="nav-logo-text">Mocha's <span>Paradise</span></div>
      </a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Shop</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={18} />
            <span>Cart</span>
            <span className={`cart-count ${cartCount === 0 ? 'hidden' : ''}`} id="cartCount">{cartCount}</span>
          </button>
        </li>
        <li><a href="#appointment" className="nav-cta">Book Now</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
