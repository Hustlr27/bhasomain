"use client";

import React from "react";

export function Header62() {
  const images = [
    "https://images.pexels.com/photos/5384621/pexels-photo-5384621.jpeg", // Healthcare workers
    "https://images.pexels.com/photos/753772/pexels-photo-753772.jpeg", // Community meeting
    "https://images.pexels.com/photos/6238028/pexels-photo-6238028.jpeg", // Climate impact
  ];

  return (
    <section
      id="relume"
      className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto"
    >
      {/* Left side - Text */}
      <div className="md:w-1/2 text-green-900">
        <p className="mb-6 text-2xl md:text-3xl uppercase tracking-widest font-semibold">
          Our Work in Zimbabwe
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Creating Healthier, More Resilient Communities
        </h1>
        <p className="mb-4 text-lg leading-relaxed">
          Since 1992, BHASO has been at the forefront of HIV/AIDS response,
          climate justice, and gender equality initiatives across Zimbabwe's
          most vulnerable communities. We focus on empowering local leaders,
          advocating for sustainable development, and providing essential
          health services to those most in need.
        </p>
        <p className="text-lg leading-relaxed">
          Our programs include community education, environmental conservation,
          gender-based violence prevention, and improving access to healthcare.
          We work hand-in-hand with grassroots organizations to foster lasting
          change and build a more equitable future.
        </p>
      </div>

      {/* Right side - Images container */}
      <div className="md:w-1/2 relative flex items-center justify-center mt-1 md:mt-0" style={{ minHeight: "440px" }}>
        {/* Two stacked square images behind */}
        <div className="absolute left-12 top-0 flex flex-col gap-4 z-0">
          <img
            src={images[1]}
            alt="Community meeting"
            className="w-40 h-50 object-cover  shadow-md"
          />
          <img
            src={images[2]}
            alt="Climate impact"
            className="w-40 h-50 object-cover  shadow-md"
          />
        </div>

        {/* Large rectangle image in front */}
        <img
          src={images[0]}
          alt="Healthcare workers"
          className="w-140 h-60 object-cover  shadow-lg relative z-10"
          style={{ marginLeft: "16rem" }}
        />
      </div>
    </section>
  );
}
