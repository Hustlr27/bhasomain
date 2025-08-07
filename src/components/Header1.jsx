"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "src/assets/bg2.png",
    heading: "Empowering Communities for a Sustainable Future",
    text: "At BHASO, we are dedicated to transforming the lives of those affected by HIV/AIDS and climate change in Zimbabwe.",
  },
  {
    image: "src/assets/bg2.png",
    heading: "Building Resilient Futures",
    text: "We support local communities through health, education, and empowerment programs.",
  },
  {
    image: "src/assets/bg2.png",
    heading: "Driving Change Through Advocacy",
    text: "Our work uplifts voices and drives policy change at grassroots levels.",
  },
];

export function Header1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section
      id="relume"
      className="relative px-[5%] py-16 md:py-24 lg:py-28 text-white min-h-[720px] flex justify-center items-center text-center transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl transition-opacity duration-700">
          {currentSlide.heading}
        </h1>
        <p className="text-md mb-6 max-w-2xl mx-auto transition-opacity duration-700">
          {currentSlide.text}
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
