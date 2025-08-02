"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="bg-green-900 px-[5%] py-16 md:py-24 lg:py-28 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-3xl leading-[1.3] font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Empowering Communities: Transforming Lives Through Health and Environmental Initiatives
            </h1>
            <p className="mb-6 md:mb-8 md:text-md max-w-xl">
              BHASO is dedicated to uplifting local communities by addressing the dual challenges of HIV/AIDS and climate change. Our initiatives foster resilience, promote holistic health, and enhance the quality of life for those we serve through education, support services, and sustainable environmental practices. By working closely with communities, we aim to build long-term capacity, encourage sustainable livelihoods, and create a future where health and environmental balance go hand-in-hand for a thriving society.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 max-w-xl">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Health Support
                </h6>
                <p>
                  Providing essential healthcare services and education to combat HIV/AIDS in vulnerable populations.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Environmental Action
                </h6>
                <p>
                  Implementing sustainable practices to mitigate climate change and protect local ecosystems.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/16629767/pexels-photo-16629767.jpeg"
              className="w-full rounded-image object-cover"
              alt="Community engagement"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
