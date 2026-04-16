import React, { useState, useEffect } from 'react';
import { Minus, Plus, PlusCircle, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

const Shop = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [qtys, setQtys] = useState({});
  const { addToCart } = useCart();
  const [addedStatus, setAddedStatus] = useState({});

  useEffect(() => {
    const initialQtys = {};
    products.forEach(p => initialQtys[p.id] = 1);
    setQtys(initialQtys);
  }, [products]);

  const changeQty = (id, delta) => {
    setQtys(prev => ({
      ...prev,
      [id]: Math.max(1, Math.min(99, (prev[id] || 1) + delta))
    }));
  };

  const handleAddToCart = (product) => {
    const qty = qtys[product.id] || 1;
    addToCart(product, qty);
    
    // Reset local qty
    setQtys(prev => ({ ...prev, [product.id]: 1 }));
    
    // Show "Added" checkmark temporarily
    setAddedStatus(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedStatus(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="products">
      <div className="products-header fade-up visible">
        <div>
          <span className="section-tag" style={{ color: 'var(--caramel-light)' }}>Our Shop</span>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>Premium Products for<br />
            <em style={{ color: 'var(--caramel-light)' }}>Your Beloved Pets</em></h2>
        </div>
        <p className="products-desc">Curated essentials, supplements, and treats — only the finest for your companion.</p>
      </div>
      <div className="products-grid" id="productsGrid">
        {products.map(p => (
          <div className="product-card fade-up visible" key={p.id}>
            <div className="product-img">
                {/* Use relative path for GitHub Pages compatibility */}
                <img src={`./${p.img}`} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="product-info">
              <div className="product-name">{p.name}</div>
              <p className="product-desc">{p.desc}</p>
              <div className="product-price">₱{p.price.toLocaleString()} / {p.unit}</div>
              <div className="product-qty-row">
                <button className="qty-btn" onClick={() => changeQty(p.id, -1)}><Minus size={16} /></button>
                <span className="qty-display">{qtys[p.id]}</span>
                <button className="qty-btn" onClick={() => changeQty(p.id, 1)}><Plus size={16} /></button>
              </div>
              <button 
                className={`product-add ${addedStatus[p.id] ? 'added' : ''}`}
                onClick={() => handleAddToCart(p)}
              >
                {addedStatus[p.id] ? (
                  <><Check size={16} /> Added</>
                ) : (
                  <><PlusCircle size={16} /> Add to Cart</>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
