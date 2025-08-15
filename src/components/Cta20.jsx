"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const volunteerHighlights = [
  {
    title: "Community Health Educator",
    description:
      "Help educate rural communities on HIV prevention and support testing efforts. Make a direct impact with your voice and passion.",
  },
  {
    title: "Agriculture Field Trainer",
    description:
      "Teach climate-smart farming techniques to smallholder farmers. Empower sustainable agriculture and help communities thrive.",
  },
  {
    title: "Youth Mentor",
    description:
      "Mentor adolescent girls and young women, fostering life skills and HIV prevention awareness through our DREAMS program.",
  },
];

export function Cta20() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % volunteerHighlights.length
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const { title, description } = volunteerHighlights[currentIndex];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/joinCommunityContactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Contact information submitted successfully");
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      } else {
        alert("Failed to submit contact information.");
      }
    } catch (err) {
      console.error("Error submitting", err);
      alert("Failed to submit contact information.");
    }
  };

  return (
    <section className="relative w-full bg-green-900 min-h-[500px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/20457262/pexels-photo-20457262.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 flex justify-between items-center gap-12">
        {/* Left - Rotating content */}
        <div className="max-w-xl text-white">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-green-100 text-lg">{description}</p>
        </div>

        {/* Right - Form */}
        <div className="w-full max-w-md bg-green-700 p-8 rounded-lg shadow-xl">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Join BHASO's Community
            </h2>
            <p className="mt-2 text-green-100">
              Connect with us to receive updates, volunteer opportunities, and
              learn how you can support our mission for healthier communities in
              Zimbabwe.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="bg-white/10 border-green-600 text-white placeholder-green-200"
              />
              <Input
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="bg-white/10 border-green-600 text-white placeholder-green-200"
              />
            </div>

            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/10 border-green-600 text-white placeholder-green-200"
            />

            <Input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white/10 border-green-600 text-white placeholder-green-200"
            />

            <div className="flex items-center">
              <input
                id="newsletter"
                type="checkbox"
                className="h-4 w-4 text-green-600 border-green-300 rounded"
              />
              <label
                htmlFor="newsletter"
                className="ml-2 text-sm text-green-100"
              >
                Subscribe to our monthly newsletter
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                type="submit"
                className="bg-white text-green-700 hover:bg-green-100 flex-1"
              >
                Submit
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="border-white text-white hover:bg-green-600 flex-1"
                onClick={() =>
                  window.open("https://www.bhaso.org/donate", "_blank")
                }
              >
                Donate Now
              </Button>
            </div>
          </form>

          <div className="mt-6 flex flex-col items-center">
            <p className="text-sm text-green-200 mb-3">
              Follow us on social media:
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-green-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
