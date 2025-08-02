"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer12() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-16 lg:py-20 bg-green-800 text-white">
      <div className="container">
        <div className="border-b border-green-700">
          <div className="mb-12 grid grid-cols-1 gap-x-[8vw] gap-y-12 md:mb-16 md:gap-y-16 lg:mb-20 lg:grid-cols-[1fr_0.5fr] lg:gap-y-20">
            {/* Left column */}
            <div className="rb-6 max-w-md">
              <h1 className="mb-4 text-3xl font-bold md:mb-5 md:text-4xl lg:text-5xl">
                Stay Connected with Our Community Efforts
              </h1>
              <p className="text-sm md:text-base text-green-200">
                Join us in making a difference for those affected by HIV/AIDS and climate change.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <Button title="Learn" className="text-sm px-4 py-2 bg-green-900 hover:bg-green-700 text-white" />
                <Button title="Donate" variant="secondary" className="text-sm px-4 py-2 border-green-300 text-green-300 hover:bg-green-700" />
              </div>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              <ul>
                {["About Us", "Our Work", "Get Involved", "Blog Posts", "Contact Us"].map((item) => (
                  <li key={item} className="py-1.5 text-sm font-medium">
                    <a href="#" className="hover:underline text-green-200">{item}</a>
                  </li>
                ))}
              </ul>
              <ul>
                {["Privacy Policy", "Terms of Use", "Support Us", "Volunteer Today", "FAQs"].map((item) => (
                  <li key={item} className="py-1.5 text-sm font-medium">
                    <a href="#" className="hover:underline text-green-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo and avatars row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 md:pb-8">
            <a href="#">
              <img
                src="https://www.bhaso.org/images/BHASO-logo-236.png"
                alt="Logo image"
                className="h-8"
              />
            </a>
            <div className="flex ml-0 sm:ml-3">
              {Array(5).fill(0).map((_, i) => (
                <img
                  key={i}
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                  alt="Placeholder avatar"
                  className="relative -ml-3 size-10 min-w-10 min-h-10 rounded-full border-2 border-green-800 object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between pt-6 text-xs md:text-sm gap-4">
          <p>© 2025 Bhaso. All rights reserved.</p>
          <div className="flex gap-x-3">
            <a href="#"><BiLogoFacebookCircle className="size-5 text-green-200 hover:text-white" /></a>
            <a href="#"><BiLogoInstagram className="size-5 text-green-200 hover:text-white" /></a>
            <a href="#"><FaXTwitter className="size-5 text-green-200 hover:text-white" /></a>
            <a href="#"><BiLogoLinkedinSquare className="size-5 text-green-200 hover:text-white" /></a>
            <a href="#"><BiLogoYoutube className="size-5 text-green-200 hover:text-white" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
