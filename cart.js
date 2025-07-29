const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// GET all cart items
router.get('/', async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching cart items' });
  }
});

// POST add to cart
router.post('/add', async (req, res) => {
  try {
    const { productId, name, price, quantity, image } = req.body;
    const newItem = new CartItem({ productId, name, price, quantity, image });
    await newItem.save();
    res.status(201).json({ message: 'Item added to cart' });
  } catch (err) {
    res.status(500).json({ error: 'Error adding item to cart' });
  }
});

module.exports = router;