const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Mock database
const PRODUCTS = [
  { id: 1, name: 'Premium Kibble', desc: 'Grain-free, high-protein formula for dogs and cats of all breeds and life stages.', price: 890, unit: '2kg', img: 'product-1.png' },
  { id: 2, name: 'Daily Vitamins', desc: 'Vet-formulated multivitamin chews for immune support, coat health, and joint care.', price: 550, unit: '60 pcs', img: 'product-2.png' },
  { id: 3, name: 'Medicated Shampoo', desc: 'Antifungal and antibacterial formula gentle enough for sensitive, allergy-prone skin.', price: 420, unit: '250ml', img: 'product-3.png' },
  { id: 4, name: 'Dental Treats', desc: 'Clinically proven treats that reduce plaque and tartar while freshening breath.', price: 320, unit: '30 pcs', img: 'product-4.png' }
];

app.get('/api/products', (req, res) => {
  res.json(PRODUCTS);
});

app.post('/api/checkout', (req, res) => {
  const { cart, details } = req.body;
  
  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  // INDUSTRY BEST PRACTICE: Re-calculate total on server to prevent client-side price manipulation
  let serverTotal = 0;
  cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (product) {
      serverTotal += product.price * item.qty;
    }
  });

  const ref = 'MP-' + Date.now().toString(36).toUpperCase();
  
  console.log(`Order placed: ${ref}, Total: ${serverTotal}`);
  
  res.json({ success: true, ref, total: serverTotal });
});

app.post('/api/appointments', (req, res) => {
  const appointment = req.body;
  
  // Basic validation
  if (!appointment.name || !appointment.date) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const ref = 'APT-' + Date.now().toString(36).toUpperCase();
  console.log(`Appointment booked: ${ref}`);
  
  res.json({ success: true, ref });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
