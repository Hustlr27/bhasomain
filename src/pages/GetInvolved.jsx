import React from "react";

export default function GetInvolved() {
  const volunteerPrograms = [
    {
      title: "HIV/AIDS Community Support",
      description:
        "Join our community health workers in providing testing, treatment support, and education about HIV prevention and care.",
    },
    {
      title: "Gender Rights Advocacy",
      description:
        "Help empower women and marginalized groups through rights education, support groups, and advocacy initiatives.",
    },
    {
      title: "Climate Resilience Teams",
      description:
        "Assist with agroecology projects and climate adaptation programs in vulnerable communities.",
    },
    {
      title: "Psychosocial Support Volunteer",
      description:
        "Provide counseling and mental health support to people living with HIV and affected communities.",
    },
  ];

  return (
    <div className="bg-white text-green-900">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
            alt="Community Health Workers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Join BHASO's Mission
          </h1>
          <p className="mt-4 text-xl">
            Building HIV- and health-resilient communities in Zimbabwe
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded overflow-hidden">
          <img
            src="https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg"
            alt="BHASO Community Work"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm uppercase text-green-900 font-semibold mb-2">
            Our Strategic Focus
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Creating Healthier, More Resilient Communities
          </h2>
          <p className="mb-6">
            BHASO works to address HIV/AIDS, gender equality, climate justice, and human rights through community-driven programs. 
            Our volunteers are essential in helping us achieve our 2023-2027 strategic goals across Zimbabwe.
          </p>
          {/* Progress Bar */}
          <div className="mb-2 flex justify-between text-sm font-medium">
            <span>Communities Reached: 120+</span>
            <span>Target: 200 by 2027</span>
          </div>
          <div className="w-full bg-green-100 rounded-full h-3">
            <div
              className="bg-green-900 h-3 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold">1.2M</p>
            <p>People on ART Supported</p>
          </div>
          <div>
            <p className="text-3xl font-bold">10K+</p>
            <p>Community Health Workers</p>
          </div>
          <div>
            <p className="text-3xl font-bold">95%</p>
            <p>Viral Suppression Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold">4</p>
            <p>Provinces Served</p>
          </div>
        </div>
      </section>

      {/* Volunteer Signup */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-sm uppercase text-green-900 font-semibold mb-2">
            Join Our Movement
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Volunteer With BHASO
          </h2>
          <p className="mb-6">
            Your skills and time can help us achieve our mission of improving HIV and health outcomes while fostering community resilience.
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-900">✔️</span> Comprehensive training provided
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-900">✔️</span> Flexible time commitments
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-900">✔️</span> Make measurable impact in communities
            </li>
          </ul>
          <div>
            <p className="mb-2">📞 +263 242 123 456</p>
            <p>✉️ volunteer@bhaso.org</p>
          </div>
        </div>
        <form className="space-y-4 bg-green-50 p-6 rounded-lg shadow">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-green-300 rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-green-300 rounded px-4 py-2"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-green-300 rounded px-4 py-2"
          />
          <select className="w-full border border-green-300 rounded px-4 py-2">
            <option value="">Select Province</option>
            <option value="masvingo">Masvingo</option>
            <option value="matabeleland">Matabeleland South</option>
            <option value="manicaland">Manicaland</option>
            <option value="midlands">Midlands</option>
          </select>
          <div className="flex gap-4">
            <select className="w-1/2 border border-green-300 rounded px-4 py-2">
              <option value="">Availability</option>
              <option value="full">Full-time</option>
              <option value="part">Part-time</option>
              <option value="occasional">Occasional</option>
            </select>
            <select className="w-1/2 border border-green-300 rounded px-4 py-2">
              <option value="">Program Interest</option>
              <option value="hiv">HIV/AIDS Support</option>
              <option value="gender">Gender Rights</option>
              <option value="climate">Climate Justice</option>
              <option value="mental">Mental Health</option>
            </select>
          </div>
          <textarea
            placeholder="Why do you want to volunteer with BHASO?"
            rows="4"
            className="w-full border border-green-300 rounded px-4 py-2"
          />
          <button
            type="submit"
            className="w-full bg-green-900 text-white font-semibold py-2 rounded hover:bg-green-800 transition"
          >
            Submit Volunteer Application
          </button>
        </form>
      </section>

      {/* Volunteer Programs */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Volunteer Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {volunteerPrograms.map((program, index) => (
            <div
              key={index}
              className="p-6 bg-green-50 border border-green-200 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-green-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join BHASO in creating HIV- and health-resilient communities across Zimbabwe.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-green-900 font-semibold px-6 py-3 rounded hover:bg-green-50 transition"
        >
          Volunteer With Us Today
        </a>
      </section>
    </div>
  );
}