import React, { useState } from "react";

export default function ContactUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I volunteer with BHASO's HIV programs?",
      answer: "BHASO offers various volunteer opportunities in our HIV/AIDS programs including community outreach, testing support, and treatment adherence counseling. Volunteers receive training and can work in any of our four operational provinces. Complete our volunteer form or contact our volunteer coordinator at volunteer@bhaso.org."
    },
    {
      question: "What are BHASO's climate justice initiatives?",
      answer: "Our climate justice programs focus on agroecology, sustainable farming practices, and community resilience building. We train communities in climate-smart agriculture, promote water conservation, and implement income-strengthening activities to mitigate climate change impacts on health outcomes."
    },
    {
      question: "How does BHASO support gender equality?",
      answer: "Through our Gender and Human Rights pillar, we run programs that reduce gender-based violence by 40%, enhance economic opportunities for women, and provide legal support to marginalized groups. We establish advocacy groups and work with communities to change harmful gender norms."
    },
    {
      question: "Where does BHASO operate in Zimbabwe?",
      answer: "BHASO currently operates in four provinces: Masvingo, Matabeleland South, Manicaland, and Midlands. These areas were selected due to high HIV prevalence rates and vulnerability to climate change impacts."
    },
    {
      question: "How can my organization partner with BHASO?",
      answer: "We welcome partnerships with NGOs, government agencies, and private sector organizations. Potential partners can email partnerships@bhaso.org or complete our partnership inquiry form. We collaborate on program implementation, research, and resource mobilization."
    },
    {
      question: "What are BHASO's most urgent needs?",
      answer: "Our priority needs include: 1) Funding for our community health worker programs, 2) Technical expertise in climate-resilient agriculture, 3) Partnerships to scale our gender rights initiatives, and 4) Volunteers with medical or counseling backgrounds."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Contact Form Section */}
      <section className="bg-white px-[5%] py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase text-green-900">Get Involved</p>
            <h2 className="text-4xl font-bold mt-2 mb-4 text-green-900">Contact BHASO</h2>
            <p className="mb-6 text-gray-600">
              Reach out to learn more about our HIV/AIDS programs, climate justice initiatives, 
              or gender rights advocacy. Whether you want to volunteer, partner, or support our work, 
              we'd love to hear from you.
            </p>
            <form className="bg-white p-6 rounded-xl border border-green-900/20 shadow-sm space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-green-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-900/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-green-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-900/50"
              />
              <select className="w-full border border-green-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-900/50">
                <option value="">Select Inquiry Type</option>
                <option value="volunteer">Volunteer Opportunities</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="donation">Donation Questions</option>
                <option value="program">Program Information</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-green-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-900/50"
              ></textarea>
              <button className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-green-900/20 shadow-sm text-center">
                <p className="font-semibold text-green-900">General Inquiries</p>
                <p className="text-sm text-gray-600">info@bhaso.org</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-green-900/20 shadow-sm text-center">
                <p className="font-semibold text-green-900">Phone</p>
                <p className="text-sm text-gray-600">+263 242 123 456</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-green-900/20 shadow-sm text-center">
                <p className="font-semibold text-green-900">Headquarters</p>
                <p className="text-sm text-gray-600">Harare, Zimbabwe</p>
              </div>
            </div>

            {/* Visit Us */}
            <div>
              <h3 className="text-2xl font-bold mb-2 text-green-900">
                Our Operational Areas
              </h3>
              <p className="text-gray-600 mb-4">
                BHASO works in four provinces across Zimbabwe: Masvingo, 
                Matabeleland South, Manicaland, and Midlands.
              </p>
              <button className="border-2 border-green-900 text-green-900 px-5 py-2 rounded-lg hover:bg-green-900 hover:text-white transition-colors">
                View Locations
              </button>
            </div>

            {/* Hours */}
            <div className="bg-green-900 text-white p-6 rounded-xl w-64">
              <p className="font-semibold">Monday – Friday</p>
              <p>8am – 5pm</p>
              <p className="font-semibold mt-4">Saturdays</p>
              <p>9am – 1pm</p>
              <p className="font-semibold mt-4">Sundays</p>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now only on left side */}
      <section className="bg-green-50 px-[5%] py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-green-900">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* FAQ Dropdowns - Left Side Only */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-green-900/20 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    className={`w-full text-left p-6 flex justify-between items-center ${activeIndex === index ? 'bg-green-900/10' : ''}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4 className="font-semibold text-green-900">{faq.question}</h4>
                    <svg 
                      className={`w-5 h-5 text-green-900 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={`px-6 pb-6 pt-2 ${activeIndex === index ? 'block' : 'hidden'}`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ask a Question Form - Right Side */}
            <div className="bg-white p-6 rounded-xl border border-green-900/20 shadow-sm">
              <h4 className="font-semibold text-lg mb-4 text-green-900">
                Ask about our strategic pillars
              </h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-green-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-900/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-green-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-900/50"
                />
                <select className="w-full border border-green-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-900/50">
                  <option value="">Select Strategic Pillar</option>
                  <option value="wellness">Wellness (HIV/TB/NCDs)</option>
                  <option value="climate">Climate Justice</option>
                  <option value="gender">Gender & Human Rights</option>
                  <option value="resources">Resource Mobilization</option>
                </select>
                <textarea
                  placeholder="Your Question"
                  rows="4"
                  className="w-full border border-green-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-900/50"
                ></textarea>
                <button className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Submit Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-green-900 text-white px-[5%] py-12 text-center">
        <h4 className="text-xl font-semibold mb-2">
          Join our mission to build HIV- and health-resilient communities
        </h4>
        <p className="mb-4">Email: info@bhaso.org | Phone: +263 242 123 456</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Donate Now
          </button>
          <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors">
            Volunteer Opportunities
          </button>
        </div>
      </footer>
    </div>
  );
}