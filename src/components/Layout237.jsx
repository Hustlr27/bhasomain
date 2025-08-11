"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export function Layout237() {
  return (
    <section className="bg-white px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        {/* Vision, Mission, and Pillar at top right below header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
          <div className="bg-green-900 p-6 rounded-md text-white font-bold text-center">
            Vision
            <p className="mt-3 font-normal text-sm">
              A healthy and resilient community free from HIV/AIDS and climate vulnerabilities by 2027.
            </p>
          </div>
          <div className="bg-green-900 p-6 rounded-md text-white font-bold text-center">
            Mission
            <p className="mt-3 font-normal text-sm">
              To improve HIV and health outcomes while alleviating poverty and fostering resilience through integrated community programs.
            </p>
          </div>
          <div className="bg-green-900 p-6 rounded-md text-white font-bold text-center">
            Strategic Pillars
            <p className="mt-3 font-normal text-sm">
              Wellness, Climate Justice, Gender & Human Rights, Strategic Information, and Resource Mobilization
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side bigger image */}
          <div className="flex justify-center">
            <img
              src="src/assets/bhaso1.png"
              alt="BHASO community health workers"
              className="rounded-lg shadow-lg w-full max-w-[600px] h-auto"
            />
          </div>

          {/* Right side brief about us and buttons */}
          <div className="max-w-xl mx-auto md:mx-0">
            <p className="font-semibold text-green-700 uppercase mb-3 tracking-widest">
              About BHASO
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-green-900">
              Pioneering Community Health & Climate Resilience Since 1992
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-black">
              Batanai HIV & AIDS Services Organisation (BHASO) is a Zimbabwean leader in HIV/AIDS response and climate justice. We implement innovative models like SWAG and CHASA to deliver comprehensive health services, promote gender equality, and build climate-resilient communities across four provinces. Our work aligns with the Global AIDS Strategy 2021-2026 and Zimbabwe's national health priorities.
            </p>

            {/* Buttons aligned left with text */}
           <div className="flex gap-6">
  <Link
    to="/about"
    className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 inline-block text-center"
  >
    Learn More
  </Link>

  <Link
    to="/our-work"
    className="flex items-center text-green-700 hover:text-green-900 px-0 py-0"
  >
    View Strategic Plan
    <RxChevronRight className="ml-1" />
  </Link>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}