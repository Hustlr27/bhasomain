"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout237() {
  return (
    <section className="bg-white px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        {/* Vision, Mission, and Pillar at top right below header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
          <div className="bg-green-900 p-6 rounded-md text-white font-bold text-center">
            Vision
            <p className="mt-3 font-normal text-sm">
              To empower communities in Zimbabwe with sustainable solutions for health and environment.
            </p>
          </div>
          <div className="bg-green-800 p-6 rounded-md text-white font-bold text-center">
            Mission
            <p className="mt-3 font-normal text-sm">
              Deliver education, support, and resources that address HIV/AIDS and climate challenges holistically.
            </p>
          </div>
          <div className="bg-green-700 p-6 rounded-md text-white font-bold text-center">
            Pillar
            <p className="mt-3 font-normal text-sm">
              We focus on community-led initiatives fostering resilience through health awareness and climate adaptation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side bigger image */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Community support"
              className="rounded-lg shadow-lg w-full max-w-[600px] h-auto"
            />
          </div>

          {/* Right side brief about us and buttons */}
          <div className="max-w-xl mx-auto md:mx-0">
            <p className="font-semibold text-green-700 uppercase mb-3 tracking-widest">
              About BHASO
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-green-900">
              Empowering Communities Through Sustainable Action
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-black">
              BHASO has a rich history of working across Zimbabwe to improve health outcomes and environmental sustainability. Our programs focus on HIV/AIDS awareness, climate adaptation, and community resilience, providing education, support, and resources to build stronger communities.
            </p>

            {/* Buttons aligned left with text */}
            <div className="flex gap-6">
              <Button className="bg-green-700 hover:bg-green-600 text-white px-6 py-3">
                Donate
              </Button>
              <Button
                variant="link"
                iconRight={<RxChevronRight />}
                size="link"
                className="text-green-700 hover:text-green-900"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
