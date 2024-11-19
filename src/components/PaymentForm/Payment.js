import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./Payment.css";

// Load Stripe
const stripePromise = loadStripe('pk_test_51PuaNcRrQKZfM8jFprXyvHUMHImaQzDy6DTgGzvdnwH2O5kBeA9b6pyGsfEWq8tHBytlzFDqgZTxqnTx0hNNedcI00xY4bsmsA'); // Replace with your Stripe Publishable Key

const PaymentForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(totalPrice);
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Update amount when totalPrice changes
    setAmount(totalPrice);
  }, [totalPrice]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      setMessage("Stripe is not loaded yet!");
      setIsProcessing(false);
      return;
    }

    try {
      const { data: { clientSecret } } = await axios.post('http://localhost:5000/create-payment-intent', {
        amount,
      });

      const cardElement = elements.getElement(CardElement);

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: "Customer Name", 
          },
        },
      });

      if (paymentResult.error) {
        setMessage(`Payment failed: ${paymentResult.error.message}`);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        setMessage("Payment succeeded!");
      }
    } catch (error) {
      setMessage(`Payment error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="payment-form-container">
      <h2>Make a Payment</h2>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="amount">Amount (USD):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="form-group">
          <label>Card Details:</label>
          <CardElement className="card-element" />
        </div>
        {message && <p className="payment-message">{message}</p>}
        <button type="submit" className="btn-primary" disabled={!stripe || isProcessing}>
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

const Payment = ({ totalPrice }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm totalPrice={totalPrice} />
    </Elements>
  );
};

export default Payment;
