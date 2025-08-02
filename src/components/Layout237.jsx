"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout237() {
  return (
    <section className="bg-white text-green-900 px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side image */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Community support"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Right side text content */}
          <div className="max-w-xl mx-auto md:mx-0">
            <p className="font-semibold text-green-700 uppercase mb-3 tracking-widest">
              About BHASO
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Empowering Communities Through Sustainable Action
            </h2>
            <p className="mb-8 text-lg leading-relaxed">
              BHASO is dedicated to transforming lives across Zimbabwe by addressing the complex challenges of HIV/AIDS and climate change. Our work focuses on holistic education, community empowerment, and fostering resilience through targeted programs that emphasize sustainable development. We believe in supporting vulnerable populations with knowledge, healthcare access, and practical tools to adapt and thrive in the face of adversity. Through collaboration and innovative strategies, BHASO strives to build healthier, stronger communities that can sustain positive change for generations to come.
            </p>

            <ul className="mb-10 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-700 text-xl font-bold">✓</span>
                <span>Comprehensive HIV/AIDS awareness and prevention campaigns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-700 text-xl font-bold">✓</span>
                <span>Climate adaptation strategies tailored for local communities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-700 text-xl font-bold">✓</span>
                <span>Support services including counseling and healthcare access</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-6">
              <Button className="bg-green-700 hover:bg-green-600 text-white px-6 py-3">
                Learn More
              </Button>
              <Button
                variant="link"
                iconRight={<RxChevronRight />}
                size="link"
                className="text-green-700 hover:text-green-900"
              >
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
