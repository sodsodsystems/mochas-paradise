import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Shop from './components/Shop';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';
import Toast from './components/Toast';

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <CartProvider>
      <div className="app-container">
        <Toast />
        <Nav />
        <main>
          <Hero />
          <Services />
          <About />
          <Shop />
          <Appointment />
          <Contact />
        </main>
        <Footer />
        
        <CartSidebar onCheckout={() => setIsCheckoutOpen(true)} />
        <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
