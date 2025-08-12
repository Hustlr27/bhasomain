"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Put your Stripe publishable key here
// STRIPE_SECRET_KEY=sk_test_51RvGIlGcjoUFoNC9MqL9SAvErMkyXFDAm6bHGIn7Q4NV9UbqWcXncExYEsZ8lEDyZBeKjSijSjlb6KxRaXmjdogO00mPsDq7DX
//PAYPAL_CLIENT_ID=your_paypal_client_id_here
//PORT=5000

const stripePromise = loadStripe(
  "pk_test_51RvGIlGcjoUFoNC9F4xjaRMbrO0VwvRWZaCLTPbjaPZooOtNSM2u52oAYszmFPMlh3s5EYC7N3xlv3PF9Sy1MNnk007fuAFf5z"
);

function CheckoutForm({ donationType, currency, amount, formData }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);
    setSuccess(false);

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet.");
      setProcessing(false);
      return;
    }

    // Create PaymentIntent on backend
    try {
      const response = await fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency }),
      });
      const { clientSecret, error: backendError } = await response.json();

      if (backendError) {
        setError(backendError);
        setProcessing(false);
        return;
      }

      // Confirm Card Payment
      const cardElement = elements.getElement(CardElement);
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: `${formData.name} ${formData.surname}`,
            email: formData.email,
            phone: formData.phone,
          },
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
        setProcessing(false);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        setSuccess(true);
        setProcessing(false);
      }
    } catch (err) {
      setError(err.message);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        options={{
          style: {
            base: { fontSize: "16px", color: "#424770", "::placeholder": { color: "#aab7c4" } },
            invalid: { color: "#9e2146" },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-green-900 text-white py-4 rounded-lg font-semibold hover:bg-green-800"
      >
        {processing ? "Processing..." : donationType === "monthly" ? "Become a Monthly Supporter" : "Make a Donation"}
      </button>
      {error && <div className="text-red-600 mt-2">{error}</div>}
      {success && <div className="text-green-600 mt-2">Payment Successful! Thank you!</div>}
    </form>
  );
}

export function Cta19() {
  const [donationType, setDonationType] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [paymentMethod, setPaymentMethod] = useState("card"); // default card for Stripe
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const [amount, setAmount] = useState(100); // default donation amount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen" id="Cta19">
      {/* ... your existing left side content here ... */}

      <div className="flex-1 bg-white p-10 flex flex-col justify-center max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Support BHASO's <span className="text-green-700">Strategic Mission</span>
        </h1>

        {/* Donation type buttons */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setDonationType("monthly")}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              donationType === "monthly"
                ? "bg-green-100 text-green-900 border border-green-900"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Monthly Support
          </button>
          <button
            onClick={() => setDonationType("one-time")}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              donationType === "one-time"
                ? "bg-green-100 text-green-900 border border-green-900"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            One-time Donation
          </button>
        </div>

        {/* Amount + Currency */}
        <div className="flex items-center border border-gray-300 rounded-lg p-3 w-full max-w-xs mb-6">
          <span className="mr-2 text-gray-500">$</span>
          <input
            type="number"
            value={amount}
            min={1}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="flex-1 outline-none"
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="ml-2 outline-none bg-transparent"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="ZWL">ZWL</option>
          </select>
        </div>

        {/* User info inputs */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          />
        </form>

        {/* Wrap Stripe payment form */}
        <Elements stripe={stripePromise}>
          <CheckoutForm
            donationType={donationType}
            currency={currency.toLowerCase()}
            amount={amount}
            formData={formData}
          />
        </Elements>
      </div>
    </section>
  );
}
