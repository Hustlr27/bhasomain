"use client";

import React from "react";

export function impact() {
  const stats = [
    {
      label: "People Reached",
      value: "120,000+",
      description: "Across rural and urban regions in Zimbabwe.",
    },
    {
      label: "Meals Distributed",
      value: "850,000+",
      description: "Delivered to families and children in need.",
    },
    {
      label: "Communities Supported",
      value: "75+",
      description: "From Matabeleland to Manicaland and beyond.",
    },
    {
      label: "Volunteers Engaged",
      value: "2,500+",
      description: "Local champions driving impact on the ground.",
    },
  ];

  return (
    <section className="px-[5%] py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 md:text-4xl text-green-900">
          Our Impact in Zimbabwe
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Through our grassroots efforts, partnerships, and relentless commitment, we've been able to make meaningful change in some of Zimbabwe's most underserved communities.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-green-900">{stat.value}</div>
              <div className="mt-2 text-lg font-semibold">{stat.label}</div>
              <p className="text-sm text-gray-600 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <img
            src="https://source.unsplash.com/400x300/?children,africa,school"
            alt="Children being helped"
            className="rounded-xl object-cover w-full h-64"
          />
          <img
            src="https://source.unsplash.com/400x300/?community,africa"
            alt="Community gathering"
            className="rounded-xl object-cover w-full h-64"
          />
          <img
            src="https://source.unsplash.com/400x300/?volunteer,africa"
            alt="Volunteers working"
            className="rounded-xl object-cover w-full h-64"
          />
        </div>
      </div>
    </section>
  );
}
