"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";

export function Cta8() {
  return (
    <section
      className="relative px-[5%] py-16 md:py-24 lg:py-28 text-white flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6191559/pexels-photo-6191559.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Join Our Mission Today
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Support our fight against HIV/AIDS and climate change. Whether you volunteer,
          spread awareness, or simply stay informed, your voice matters. Together, we can
          build healthier, more resilient communities across Zimbabwe and beyond.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="bg-white text-green-900 hover:bg-green-100 font-medium px-6 py-3 rounded-md text-sm w-full sm:w-auto"
            onClick={() => alert("Volunteer signup coming soon!")}
          >
            Become a Volunteer
          </Button>

          <Button
            className="bg-green-800 text-white hover:bg-green-700 font-medium px-6 py-3 rounded-md text-sm w-full sm:w-auto"
            onClick={() => alert("Signup feature coming soon!")}
          >
            Sign Up for Updates
          </Button>
        </div>
      </div>
    </section>
  );
}
