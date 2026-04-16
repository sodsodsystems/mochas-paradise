import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const addToCart = (product, qty) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prevCart, { ...product, qty }];
    });
    showToast(`${product.name} added to cart!`);
  };

  const updateCartQty = (id, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return { ...item, qty: Math.max(0, newQty) };
        }
        return item;
      }).filter(item => item.qty > 0);
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateCartQty,
      removeFromCart,
      clearCart,
      subtotal,
      cartCount,
      isCartOpen,
      setIsCartOpen,
      toast,
      showToast
    }}>
      {children}
    </CartContext.Provider>
  );
};
