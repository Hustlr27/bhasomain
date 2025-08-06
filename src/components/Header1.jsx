"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header1() {
  const slide = {
    image:
      "https://images.pexels.com/photos/8124419/pexels-photo-8124419.jpeg",
    heading: "Empowering Communities for a Sustainable Future",
    text: "At BHASO, we are dedicated to transforming the lives of those affected by HIV/AIDS and climate change in Zimbabwe.",
  };

  return (
    <section
      id="relume"
      className="relative px-[5%] py-16 md:py-24 lg:py-28 text-white min-h-[720px] flex justify-center items-end text-center"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-3xl mb-[10px]">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl transition-opacity duration-700">
          {slide.heading}
        </h1>
        <p className="text-md mb-6 max-w-2xl mx-auto transition-opacity duration-700">
          {slide.text}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            title="Donate"
            className="bg-green-800 border border-green-600 text-white hover:bg-green-700"
          >
            Donate
          </Button>
          <Button
            title="Learn More"
            variant="secondary"
            className="border border-white text-white hover:bg-white hover:text-green-900"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
