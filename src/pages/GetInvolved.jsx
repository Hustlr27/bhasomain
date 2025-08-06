import React from "react";

export default function GetInvolved() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <img
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
          alt="Community members working together"
          className="object-cover w-full h-full absolute inset-0 z-0"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Movement</h1>
          <p className="text-xl mb-8">
            Whether you have time, resources, or skills to share, there are many ways to support
            BHASO's mission to create healthier, more resilient communities in Zimbabwe.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#volunteer"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
            >
              Volunteer
            </a>
            <a
              href="#donate"
              className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition"
            >
              Donate
            </a>
            <a
              href="#partner"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Volunteer Opportunities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join our team of dedicated volunteers helping to deliver programs, build capacity, and
            create lasting change in Zimbabwean communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Volunteer Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5726709/pexels-photo-5726709.jpeg"
                alt="Health education"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Community Health Educator</h3>
              <p className="text-gray-600 mb-4">
                Provide HIV prevention education and promote testing in rural communities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Public speaking</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Health education</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Community engagement</span>
              </div>
              <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Volunteer Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg"
                alt="Agriculture training"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Agriculture Field Trainer</h3>
              <p className="text-gray-600 mb-4">
                Teach climate-smart farming techniques to smallholder farmers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Agriculture</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Training</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Climate resilience</span>
              </div>
              <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Volunteer Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg"
                alt="Youth mentoring"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Youth Mentor</h3>
              <p className="text-gray-600 mb-4">
                Mentor adolescent girls and young women in life skills and HIV prevention.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Mentoring</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Youth development</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Gender issues</span>
              </div>
              <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-6 py-3 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-medium transition">
            View All Volunteer Opportunities
          </button>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Support Our Work</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your financial contribution helps us expand our programs and reach more communities in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">One-Time Donation</h3>
              <p className="text-gray-600 mb-4">
                Make an immediate impact with a single contribution to our programs.
              </p>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
                Donate Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">Monthly Giving</h3>
              <p className="text-gray-600 mb-4">
                Provide sustained support with automatic monthly donations.
              </p>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
                Become a Monthly Donor
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Corporate Sponsorship</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to fund large-scale community health initiatives.
              </p>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            BHASO works closely with local organizations, government agencies, and donors to
            maximize impact and create sustainable solutions.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
            Contact Our Partnerships Team
          </button>
        </div>
      </section>
    </div>
  );
}
