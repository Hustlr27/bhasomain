"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout192() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg"
              className="w-full rounded-md object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-2 font-semibold text-green-800 uppercase">About Our Work</p>
            <h2 className="mb-5 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl text-gray-900">
              Transforming Lives Through Health & Sustainability
            </h2>
            <p className="text-md text-gray-700 mb-6">
              Our programs tackle the dual challenges of HIV/AIDS and climate change,
              empowering communities to thrive. Through education, training, and access to
              resources, we build sustainable, resilient futures for vulnerable populations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 text-sm font-medium">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
