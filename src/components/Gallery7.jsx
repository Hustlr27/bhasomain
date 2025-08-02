"use client";

import React, { useState, useRef } from "react";

export function Gallery7() {
  const featuredVideo = {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    alt: "Featured Video: Impact Story",
  };

  const images = [
    {
      src: "https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg",
      alt: "Community Health Drive",
    },
    {
      src: "https://images.pexels.com/photos/7659565/pexels-photo-7659565.jpeg",
      alt: "Sustainable Farming Initiative",
    },
    {
      src: "https://images.pexels.com/photos/28101466/pexels-photo-28101466.jpeg",
      alt: "Climate Education Campaign",
    },
    {
      src: "https://images.pexels.com/photos/8728317/pexels-photo-8728317.jpeg",
      alt: "Youth Empowerment Event",
    },
    {
      src: "https://images.pexels.com/photos/5217880/pexels-photo-5217880.jpeg",
      alt: "Mental Health Awareness Workshop",
    },
    {
      src: "https://images.pexels.com/photos/2347266/pexels-photo-2347266.jpeg",
      alt: "Local Farming Community",
    },
    {
      src: "https://images.pexels.com/photos/3028997/pexels-photo-3028997.jpeg",
      alt: "Clean Water Initiative",
    },
    {
      src: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg",
      alt: "Education for All",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  // selectedIndex: 0 = featured video, 1+ = images index +1
  const [selectedIndex, setSelectedIndex] = useState(null);

  const scrollRef = useRef(null);

  const scrollBy = (distance) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28 text-green-900 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Gallery</h2>
          <p className="text-md md:text-lg text-green-700">
            Explore our impact through video stories and photo highlights.
          </p>
        </div>

        {selectedIndex === null ? (
          <>
            {/* Arrows */}
            <button
              onClick={() => scrollBy(-400)}
              aria-label="Scroll Left"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-green-900 p-2 hover:bg-green-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy(400)}
              aria-label="Scroll Right"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-green-900 p-2 hover:bg-green-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto no-scrollbar"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {/* Featured Video */}
              <div
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedIndex(0)}
                className="relative overflow-hidden shadow-lg cursor-pointer flex-shrink-0"
                style={{
                  width: hoveredIndex === 0 ? "480px" : "320px",
                  height: hoveredIndex === 0 ? "288px" : "192px",
                  scrollSnapAlign: "start",
                  transition: "width 0.3s ease, height 0.3s ease",
                }}
              >
                <video
                  src={featuredVideo.src}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                />
                <div
                  className="absolute bottom-1 left-2 right-2 text-xs italic text-white drop-shadow-md select-none pointer-events-none"
                  style={{ userSelect: "none" }}
                >
                  {featuredVideo.alt}
                </div>
              </div>

              {/* Images */}
              {images.map((img, index) => {
                const i = index + 1; // video is index 0
                const isHovered = hoveredIndex === i;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedIndex(i)}
                    className="relative overflow-hidden shadow-sm cursor-pointer flex-shrink-0"
                    style={{
                      width: isHovered ? "480px" : "320px",
                      height: isHovered ? "288px" : "192px",
                      scrollSnapAlign: "start",
                      transition: "width 0.3s ease, height 0.3s ease",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div
                      className="absolute bottom-1 left-2 right-2 text-xs italic text-white drop-shadow-md select-none pointer-events-none"
                    >
                      {img.alt}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          // Expanded view
          <div className="flex flex-col items-center space-y-4">
            {selectedIndex === 0 ? (
              // Featured video expanded
              <video
                src={featuredVideo.src}
                className="w-full max-w-5xl rounded-lg shadow-lg object-contain"
                controls
                autoPlay
                preload="metadata"
              />
            ) : (
              <img
                src={images[selectedIndex - 1].src}
                alt={images[selectedIndex - 1].alt}
                className="w-full max-w-5xl rounded-lg shadow-lg object-contain"
                draggable={false}
              />
            )}

            <p className="max-w-5xl text-center italic text-green-900 text-lg font-medium px-4">
              {selectedIndex === 0
                ? featuredVideo.alt
                : images[selectedIndex - 1].alt}
            </p>

            <button
              onClick={handleClose}
              className="mt-4 bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>

      <style>{`
        /* Remove all margins between items */
        .flex > div {
          margin-left: 0 !important;
        }
        /* Hide scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}
