import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Nav = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav id="mainNav">
      <a href="#hero" className="nav-logo">
        <img src="./MochasParadiseLogo.png" alt="Mocha's Paradise"
          style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
        <div className="nav-logo-text">Mocha's <span>Paradise</span></div>
      </a>
      
      {/* Desktop Links */}
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

      {/* Mobile Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="cart-btn mobile-cart-btn" style={{ display: 'none' }} onClick={() => setIsCartOpen(true)}>
          <ShoppingCart size={18} />
          <span className={`cart-count ${cartCount === 0 ? 'hidden' : ''}`}>{cartCount}</span>
        </button>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={closeMenu}><X size={24} /></button>
        <a href="#hero" onClick={closeMenu}>Home</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#products" onClick={closeMenu}>Shop</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <button className="cart-btn" onClick={() => { setIsCartOpen(true); closeMenu(); }}>
          <ShoppingCart size={18} /> Cart ({cartCount})
        </button>
        <a href="#appointment" className="nav-cta" onClick={closeMenu}>Book Now</a>
      </div>
    </nav>
  );
};

export default Nav;
