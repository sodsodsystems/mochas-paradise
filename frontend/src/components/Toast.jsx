import React from 'react';
import { useCart } from '../context/CartContext';

const Toast = () => {
  const { toast } = useCart();

  return (
    <div className={`toast ${toast.show ? 'show' : ''}`} id="toast">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        {toast.message}
      </div>
    </div>
  );
};

export default Toast;
