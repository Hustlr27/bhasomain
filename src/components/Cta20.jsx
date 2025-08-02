"use client";

import { Button, Input, Textarea } from "@relume_io/relume-ui";
import React from "react";

export function Cta20() {
  return (
    <section
      id="relume"
      className="relative bg-white text-black px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Form side */}
        <div className="w-full lg:w-1/2 bg-green-800 p-8 rounded-lg shadow-lg text-white">
          {/* Heading and paragraph */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl md:text-3xl font-semibold leading-tight">
              Stay Updated with BHASO
            </h2>
            <p className="text-sm md:text-base text-green-200">
              Subscribe to our newsletter and stay informed about our efforts to
              combat HIV/AIDS and climate change. You can also leave a short
              message if you have questions.
            </p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 gap-4">
            <Input
              id="name"
              type="text"
              placeholder="Full Name"
              required
              className="text-white placeholder-green-300 border-white focus:ring-white focus:border-white"
            />
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              required
              className="text-white placeholder-green-300 border-white focus:ring-white focus:border-white"
            />
            <Input
              id="phone"
              type="tel"
              placeholder="Phone Number (optional)"
              className="text-white placeholder-green-300 border-white focus:ring-white focus:border-white"
            />
            <Textarea
              id="message"
              placeholder="Any message or inquiry?"
              rows={3}
              className="text-white placeholder-green-300 border-white focus:ring-white focus:border-white"
            />

            <Button
              title="Subscribe"
              type="submit"
              className="bg-green-900 text-white hover:bg-green-950"
            >
              Subscribe
            </Button>
          </form>

          <p className="mt-2 text-xs text-green-300 text-center">
            By clicking Subscribe you're confirming that you agree with our{" "}
            <a href="#" className="underline text-green-100">
              Terms and Conditions
            </a>
            .
          </p>
        </div>

        {/* Google Maps side */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Map of Zimbabwe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12626790.07295316!2d25.011463278142245!3d-19.015438021268196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1936933e7f9c3461%3A0x89b51d33f88eaaed!2sZimbabwe!5e0!3m2!1sen!2s!4v1690769612345!5m2!1sen!2s"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
