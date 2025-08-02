import React from "react";

export default function GetInvolved() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Get Involved</h2>
      
      <p className="mb-6 text-center text-lg">
        Join us in making a difference! Here are some ways you can get involved with our cause:
      </p>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
          <p>
            Volunteer your time and skills to support our projects and help communities in need.
            Whether it’s on the ground or remote support, every bit helps.
          </p>
          <button className="mt-3 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Sign Up to Volunteer
          </button>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Donate</h3>
          <p>
            Your donations help us fund essential programs and reach more people. 
            No amount is too small.
          </p>
          <button className="mt-3 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Donate Now
          </button>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Attend Events</h3>
          <p>
            Participate in our community events, workshops, and fundraisers to learn more and show support.
          </p>
          <button className="mt-3 px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            View Events
          </button>
        </div>
      </div>
    </section>
  );
}
