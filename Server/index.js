// require('dotenv').config();  // Load environment variables
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// // Correct MongoDB connection string
// const dbUri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// // MongoDB connection
// mongoose.connect(dbUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.log('MongoDB connection error:', err));

// // Booking Schema
// const bookingSchema = new mongoose.Schema({
//   flightId: String,
//   airlineName: String,
//   date: String,
//   returnDate: String,
//   ticketCount: Number,
//   totalPrice: Number,
//   seatClass: String,
//   ticketType: String,
//   name: String,
//   email: String
// });

// const Booking = mongoose.model('Booking', bookingSchema);

// // POST route to store booking
// app.post('/api/bookings', async (req, res) => {
//   try {
//     const bookingData = req.body;
//     const booking = new Booking(bookingData);
//     await booking.save();
//     res.status(200).json({ message: 'Booking successful' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to store booking' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Stripe = require('stripe');

// Initialize app
const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Environment variables for MongoDB
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// Correct MongoDB connection string
const dbUri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// MongoDB connection
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Booking Schema
const bookingSchema = new mongoose.Schema({
  flightId: String,
  airlineName: String,
  date: String,
  returnDate: String,
  ticketCount: Number,
  totalPrice: Number,
  seatClass: String,
  ticketType: String,
  name: String,
  email: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

// POST route to store booking
app.post('/api/bookings', async (req, res) => {
  try {
    const bookingData = req.body;
    const booking = new Booking(bookingData);
    await booking.save();
    res.status(200).json({ message: 'Booking successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to store booking' });
  }
});

// Stripe Payment Intent Route
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert amount to cents
      currency: 'usd',
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
