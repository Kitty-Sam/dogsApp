require('dotenv').config();
const cors = require('cors');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const express = require('express');

const app = express();

const PORT = process.env.PORT || 4242;

app.use(cors());
app.use(express.json());

app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post('/create-payment-intent', async (req, res) => {
  const { currency, amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(PORT, () => console.log(`Node server listening at PORT ${PORT}`));
