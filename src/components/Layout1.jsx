"use client";

import React from "react";

export function Layout1() {
  const pillars = [
    {
      title: "Wellness",
      description: "Comprehensive HIV/TB services, mental health support, and NCD prevention",
      icon: "🩺",
      color: "bg-blue-100",
    },
    {
      title: "Climate Justice",
      description: "Addressing climate impacts on health through sustainable agriculture and resilience programs",
      icon: "🌱",
      color: "bg-green-100",
    },
    {
      title: "Gender & Human Rights",
      description: "Reducing GBV, promoting equality, and protecting rights of marginalized groups",
      icon: "⚖️",
      color: "bg-purple-100",
    },
    {
      title: "Strategic Information",
      description: "Data-driven programming and research to enhance our impact",
      icon: "📊",
      color: "bg-yellow-100",
    },
    {
      title: "Resource Mobilization",
      description: "Ensuring sustainable funding to continue our vital work",
      icon: "🤝",
      color: "bg-red-100",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Strategic Pillars (2023-2027)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {pillars.map((pillar, index) => (
          <div 
            key={index}
            className={`p-6 rounded-lg shadow-md ${pillar.color} transition-transform hover:scale-105`}
          >
            <div className="text-4xl mb-4">{pillar.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
            <p className="text-gray-700">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}