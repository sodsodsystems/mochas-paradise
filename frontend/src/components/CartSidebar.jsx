import React from 'react';
import { X, ShoppingBag, Package, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = ({ onCheckout }) => {
  const { cart, isCartOpen, setIsCartOpen, updateCartQty, removeFromCart, subtotal } = useCart();

  return (
    <>
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-title">Your Cart</div>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}><X size={24} /></button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon"><ShoppingBag size={48} color="var(--text-light)" /></span>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', color: 'var(--text-mid)', marginTop: '1rem' }}>
                Your cart is empty.
              </p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-icon"><Package size={20} color="var(--mocha)" /></div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₱{(item.price * item.qty).toLocaleString()}</div>
                </div>
                <div className="cart-item-controls">
                  <button className="ci-qty-btn" onClick={() => updateCartQty(item.id, -1)}><Minus size={14} /></button>
                  <span className="ci-qty">{item.qty}</span>
                  <button className="ci-qty-btn" onClick={() => updateCartQty(item.id, 1)}><Plus size={14} /></button>
                  <button className="cart-remove" onClick={() => removeFromCart(item.id)}><Trash2 size={16} /></button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span className="cart-subtotal-label">Total</span>
              <span className="cart-subtotal-val">₱{subtotal.toLocaleString()}</span>
            </div>
            <button className="checkout-btn" onClick={onCheckout}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
