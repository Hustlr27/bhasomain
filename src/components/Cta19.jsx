"use client";

import React, { useState } from "react";
import { Button } from "@relume_io/relume-ui";

export function Cta19() {
  const presetAmounts = ["25", "50", "75", "99", "200"];
  const [selectedAmount, setSelectedAmount] = useState("99");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showLocalPayments, setShowLocalPayments] = useState(false);
  const [selectedLocalMethod, setSelectedLocalMethod] = useState(null);

  // Example progress for donation bar
  const donationGoal = 10000; // $10,000 goal
  const donationRaised = 7800; // $7,800 raised so far
  const progressPercent = Math.min(
    Math.round((donationRaised / donationGoal) * 100),
    100
  );

  const handleDonate = () => {
    const amount = customAmount.trim() !== "" ? customAmount : selectedAmount;
    alert(
      `Processing donation of $${amount} via ${paymentMethod.toUpperCase()} method. Donor: ${firstName} ${lastName}, Email: ${email}`
    );
  };

  const paymentMethods = [
    {
      id: "visa",
      label: "Visa",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    },
    {
      id: "mastercard",
      label: "Mastercard",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png",
    },
    {
      id: "paypal",
      label: "PayPal",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
    {
      id: "applepay",
      label: "Apple Pay",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      id: "googlepay",
      label: "Google Pay",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1280px-Google_Pay_Logo.svg.png",
    },
  ];
  

  const localMethodsInfo = {
    ecocash: {
      title: "Ecocash",
      instructions: [
        "Dial *151# on your phone.",
        "Select 'Payments' > 'Pay Merchant'.",
        "Enter Merchant ID: 1234567.",
        "Enter the donation amount.",
        "Confirm the payment.",
      ],
      account: "Merchant ID: 1234567",
    },
    mukuru: {
      title: "Mukuru",
      instructions: [
        "Visit any Mukuru agent location.",
        "Provide the recipient name: BHASO Donations.",
        "Provide the amount to send.",
        "Use reference: DONATE2025.",
        "Pay the agent and keep your receipt.",
      ],
      account: "Reference Code: DONATE2025",
    },
    bank: {
      title: "Bank Transfer",
      instructions: [
        "Use your banking app or visit your bank.",
        "Send funds to the following account:",
        "Bank: CBZ Bank",
        "Account Name: BHASO Donations",
        "Account Number: 9876543210",
        "Branch Code: 12345",
        "Use your full name as payment reference.",
      ],
      account: "Account Number: 9876543210",
    },
  };

  const localPaymentMethodsList = (
    <div className="bg-green-900/5 rounded-lg p-8 shadow-lg max-w-md mx-0 text-left">
      <h2 className="text-2xl font-semibold text-green-800 mb-6">
        Local Payment Methods
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {Object.entries(localMethodsInfo).map(([key, method]) => (
          <div
            key={key}
            onClick={() => setSelectedLocalMethod(key)}
            className="cursor-pointer border border-green-700 rounded-lg p-4 hover:bg-green-700 hover:text-white transition-shadow shadow-md"
          >
            <h3 className="font-semibold text-lg">{method.title}</h3>
          </div>
        ))}
      </div>
      <Button
        onClick={() => setShowLocalPayments(false)}
        className="mt-8 bg-green-800 text-white hover:bg-green-900 py-3 px-6 rounded-md font-semibold"
      >
        Back to Donation
      </Button>
    </div>
  );

  const selectedLocalPaymentDetails = selectedLocalMethod ? (
    <div className="bg-green-900/5 rounded-lg p-8 shadow-lg max-w-md mx-0 text-left">
      <h2 className="text-2xl font-semibold text-green-800 mb-6">
        {localMethodsInfo[selectedLocalMethod].title} Payment Instructions
      </h2>
      <ol className="list-decimal list-inside space-y-2 text-green-900 font-semibold text-lg">
        {localMethodsInfo[selectedLocalMethod].instructions.map(
          (step, idx) => (
            <li key={idx}>{step}</li>
          )
        )}
      </ol>
      <p className="mt-4 font-semibold text-green-700">
        {localMethodsInfo[selectedLocalMethod].account}
      </p>
      <Button
        onClick={() => setSelectedLocalMethod(null)}
        className="mt-8 bg-green-800 text-white hover:bg-green-900 py-3 px-6 rounded-md font-semibold"
      >
        Back to Payment Methods
      </Button>
    </div>
  ) : (
    <div className="text-green-700 font-semibold p-8 max-w-md">
      <p>Select a payment method on the left to see instructions here.</p>
    </div>
  );

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-gray-900">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Donation Form */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-green-800 mb-6">Donate</h1>

          {!showLocalPayments ? (
            <>
              <div className="bg-green-900/5 rounded-lg p-8 shadow-lg">
                <div className="mb-4 text-right text-lg font-semibold text-green-800">
                  ${customAmount !== "" ? customAmount : selectedAmount}
                </div>
                <div className="mb-6 flex flex-wrap gap-3">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`px-5 py-2 rounded-lg font-semibold text-sm ${
                        selectedAmount === amount && customAmount === ""
                          ? "bg-green-800 text-white"
                          : "bg-white text-green-800 border border-green-800 hover:bg-green-800 hover:text-white transition"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                  <input
                    type="number"
                    min="1"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount("");
                    }}
                    className="w-[130px] px-4 py-2 rounded-lg border border-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 text-green-800"
                  />
                </div>

                <div className="mb-6">
                  <div className="mb-2 font-semibold text-green-800">
                    Select Payment Method
                  </div>
                  <div className="flex gap-6">
                    {paymentMethods.map(({ id, label, imgSrc }) => (
                      <div
                        key={id}
                        onClick={() => setPaymentMethod(id)}
                        className={`cursor-pointer p-2 rounded-lg border-2 ${
                          paymentMethod === id
                            ? "border-green-800"
                            : "border-transparent"
                        } hover:border-green-600 transition`}
                        title={label}
                      >
                        <img
                          src={imgSrc}
                          alt={label}
                          className="h-10 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleDonate();
                  }}
                  className="space-y-4"
                >
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="flex-1 rounded-md border border-green-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="flex-1 rounded-md border border-green-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-md border border-green-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />

                  <div className="flex gap-4 items-center mt-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-green-800 text-white hover:bg-green-900 py-3 rounded-md font-semibold"
                    >
                      Donate Now
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        setShowLocalPayments(true);
                        setSelectedLocalMethod(null);
                      }}
                      className="flex-1 bg-green-600 text-white hover:bg-green-700 py-3 rounded-md font-semibold"
                    >
                      Local Payments
                    </Button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="flex gap-10">
              {/* Left: Local payment method cards */}
              <div className="flex-1 max-w-md">
                {localPaymentMethodsList}
              </div>

              {/* Right: Local payment instructions */}
              <div className="flex-1">
                {selectedLocalPaymentDetails}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="w-full max-w-sm flex flex-col gap-6">
          <div className="bg-green-900/5 rounded-lg p-6 shadow-lg flex flex-col gap-4">
            <img
              src="https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg"
              alt="Raise Funds For Clean & Healthy Food"
              className="rounded-lg w-full object-cover h-40"
            />
            <div>
              <div className="inline-block bg-green-800 text-white text-xs uppercase px-3 py-1 rounded-full mb-2">
                Food
              </div>
              <h3 className="font-bold text-lg mb-3">
                Raise Funds For Clean & Healthy Food
              </h3>

              {/* Donation progress bar */}
              <div className="w-full bg-green-200 rounded-full h-6 mb-2 overflow-hidden">
                <div
                  className="bg-green-800 h-6 text-white text-sm font-semibold flex items-center justify-center"
                  style={{ width: `${progressPercent}%` }}
                >
                  {progressPercent}%
                </div>
              </div>
              <div className="flex justify-between text-green-700 font-semibold text-sm mb-4">
                <span>${donationRaised.toLocaleString()} raised</span>
                <span>Goal: ${donationGoal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-green-900/5 rounded-lg p-6 shadow-lg flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Organizer"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <p className="text-green-900 font-semibold">
                Organizer: Kumbirai P Mahaso
              </p>
              <p className="text-green-900 text-sm mt-1">
                123 Samora Machel Ave, Harare, Zimbabwe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
