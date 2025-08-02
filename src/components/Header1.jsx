"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Header1() {
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/8061642/pexels-photo-8061642.jpeg",
      heading: "Empowering Communities for a Sustainable Future",
      text: "At BHASO, we are dedicated to transforming the lives of those affected by HIV/AIDS and climate change in Zimbabwe.",
    },
    {
      image:
        "https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg",
      heading: "Health, Hope, and Harmony",
      text: "Working together to create resilient communities that thrive in both health and environment.",
    },
    {
      image:
        "https://images.pexels.com/photos/8060427/pexels-photo-8060427.jpeg",
      heading: "Fighting HIV/AIDS with Compassion",
      text: "Our programs focus on prevention, treatment, and empowerment through education and access.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [missionVisible, setMissionVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="relume"
      className="relative px-[5%] py-16 md:py-24 lg:py-28 text-white min-h-[650px] transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading & Text Positioned Bottom-Left with increased left margin */}
      <div className="absolute bottom-8 left-12 md:left-16 lg:left-24 max-w-xl">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl transition-opacity duration-700">
          {slides[currentSlide].heading}
        </h1>
        <p className="text-md mb-4 max-w-lg transition-opacity duration-700">
          {slides[currentSlide].text}
        </p>
        <div className="flex flex-wrap gap-4">
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

      {/* Manual Slide Controls */}
      <div className="absolute left-4 bottom-1/2 transform translate-y-1/2">
        <button
          onClick={goToPrevious}
          className="bg-green-800 bg-opacity-80 hover:bg-opacity-100 text-white p-2 rounded-full"
          aria-label="Previous Slide"
        >
          <ArrowLeft size={16} />
        </button>
      </div>
      <div className="absolute right-4 bottom-1/2 transform translate-y-1/2">
        <button
          onClick={goToNext}
          className="bg-green-800 bg-opacity-80 hover:bg-opacity-100 text-white p-2 rounded-full"
          aria-label="Next Slide"
        >
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Mission/Vision Info Box - green background, white text */}
      <div className="absolute bottom-8 right-8 max-w-xs rounded-md bg-green-800 p-4 text-white shadow-md text-sm">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold">
            {missionVisible ? "Our Mission" : "Our Vision"}
          </h3>
          <div className="flex space-x-1">
            <button
              onClick={() => setMissionVisible(true)}
              className="p-1 rounded hover:bg-green-700"
              aria-label="Show Mission"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => setMissionVisible(false)}
              className="p-1 rounded hover:bg-green-700"
              aria-label="Show Vision"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {missionVisible ? (
          <p>
            To empower vulnerable communities in Zimbabwe by fighting HIV/AIDS
            and addressing climate change.
          </p>
        ) : (
          <>
            <p className="mb-2">
              A sustainable Zimbabwe where communities thrive in health and
              harmony with the environment.
            </p>
            <Button
              title="Learn More"
              className="border border-white bg-transparent text-white hover:bg-white hover:text-green-900 px-3 py-1 text-xs"
              size="sm"
            >
              Learn More
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
