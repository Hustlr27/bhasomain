import React, { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "HIV/TB Management",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I volunteer with BHASO's health programs?",
      answer:
        "We train community health volunteers quarterly. Contact our HR department for upcoming training dates.",
    },
    {
      question: "What items can I donate to support your work?",
      answer:
        "We accept medical supplies, farming tools, and educational materials. View our current needs list.",
    },
    {
      question: "How does BHASO ensure donor accountability?",
      answer:
        "We publish annual reports and are audited by KPMG Zimbabwe. Request our financial statements.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    const data = {
      access_key: "dea587fe-1343-4a7f-96d3-03ea027a7f52", // replace with actual key
      name: formData.name,
      email: formData.email,
      program: formData.program,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", program: "HIV/TB Management", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="bg-white text-gray-900">
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
        <div className="relative text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect With BHASO</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Reach out to learn more about our HIV resilience, climate justice, and gender equality
            programs across Zimbabwe.
          </p>
        </div>
      </section>

      <section className="py-16 px-[5%] max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-green-50 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-4">
            <FiPhone className="text-green-800 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl mb-3 text-green-900">Phone</h3>
          <p className="text-gray-700">+263 242 123 456</p>
          <p className="text-gray-700">+263 772 987 654 (Mobile)</p>
        </div>

        <div className="bg-green-50 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-4">
            <FiMail className="text-green-800 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl mb-3 text-green-900">Email</h3>
          <p className="text-gray-700">info@bhaso.org</p>
          <p className="text-gray-700">volunteer@bhaso.org</p>
        </div>

        <div className="bg-green-50 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-4">
            <FiMapPin className="text-green-800 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl mb-3 text-green-900">Headquarters</h3>
          <p className="text-gray-700">12 Batanai Avenue</p>
          <p className="text-gray-700">Harare, Zimbabwe</p>
        </div>
      </section>

      <section className="py-16 px-[5%] max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-900">Visit Our Provincial Offices</h2>
          <p className="mb-6 text-lg text-gray-700">
            BHASO operates in four provinces across Zimbabwe. Our teams are available to discuss
            partnership opportunities, volunteer programs, or community collaborations.
          </p>
          <div className="space-y-4 mb-8">
            <p className="font-medium text-green-800">Masvingo Office</p>
            <p className="text-gray-700">45 Justice Street, Masvingo</p>

            <p className="font-medium text-green-800">Matabeleland South Office</p>
            <p className="text-gray-700">23 Resilience Road, Gwanda</p>

            <p className="font-medium text-green-800">Manicaland Office</p>
            <p className="text-gray-700">78 Equality Lane, Mutare</p>

            <p className="font-medium text-green-800">Midlands Office</p>
            <p className="text-gray-700">12 Health Avenue, Gweru</p>
          </div>
          <Button className="bg-green-800 hover:bg-green-700 text-white">Get Directions</Button>
        </div>

        <div className="bg-green-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <FiClock className="text-green-800 text-2xl mr-3" />
            <h3 className="text-xl font-semibold text-green-900">Operating Hours</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-medium">Weekdays:</span> 8:00 AM - 5:00 PM
            </p>
            <p>
              <span className="font-medium">Saturdays:</span> 9:00 AM - 1:00 PM
            </p>
            <p>
              <span className="font-medium">Sundays:</span> Closed
            </p>
            <p className="pt-4 text-sm">
              *Emergency health services available 24/7 for program participants
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-[5%] max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-900">
          Program-Specific Inquiries
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Updated FAQ Accordion */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-4 py-3 flex justify-between items-center font-medium text-green-800 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="ml-2 text-xl">{activeIndex === index ? "−" : "+"}</span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-4 py-3 text-gray-700 border-t">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Ask About Our Programs</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="program">
                  Program Interest
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                >
                  <option>HIV/TB Management</option>
                  <option>Climate Smart Agriculture</option>
                  <option>Gender Equality Programs</option>
                  <option>Youth Empowerment</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                ></textarea>
              </div>

              <Button type="submit" className="bg-green-800 hover:bg-green-700 text-white w-full">
                Submit Inquiry
              </Button>

              {submitStatus === "success" && (
                <p className="mt-4 text-green-800 font-semibold">Thank you! We will get back to you soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-600 font-semibold">
                  Sorry, something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

     <section className="py-16 bg-green-50 text-green-900 text-center">
  <h2 className="text-3xl font-bold mb-8">Follow Us on Social Media</h2>
  <div className="flex justify-center space-x-8 text-4xl">
    <a
      href="https://instagram.com/bhaso"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-green-700 transition-colors"
    >
      <FaInstagram />
    </a>
    <a
      href="https://facebook.com/bhaso"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="hover:text-green-700 transition-colors"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://twitter.com/bhaso"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="hover:text-green-700 transition-colors"
    >
      <FaTwitter />
    </a>
    <a
      href="https://linkedin.com/company/bhaso"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="hover:text-green-700 transition-colors"
    >
      <FaLinkedinIn />
    </a>
  </div>
</section>

      <section className="bg-white text-green-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-[5%]">
          <h2 className="text-3xl font-bold mb-6">Partner With BHASO</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in creating HIV-resilient, climate-smart communities across Zimbabwe by 2027.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-white text-green-900 hover:bg-gray-100"
              onClick={() =>
                window.open("/BHASO STRATEGIC PLAN. Final_Phoenix.pdf", "_blank")
              }
            >
              Download Strategic Plan
            </Button>
            <Button variant="secondary" className="border border-white text-green-900 hover:bg-green-800">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
