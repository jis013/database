const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(cors());
app.use(express.json());


// Serve HTML from "public" folder
app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// API route
app.use('/api/cart', cartRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));