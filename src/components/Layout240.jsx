"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState } from "react";

export function Layout240() {
  const programs = [
    {
      src: "https://images.pexels.com/photos/8898677/pexels-photo-8898677.jpeg",
      alt: "Community Outreach",
      title: "Community Outreach & Support",
      desc: "Connecting individuals with vital resources and compassionate support.",
      detailed:
        "Our Community Outreach & Support program connects individuals with vital resources and compassionate care to improve their well-being and foster stronger communities. We organize events, provide direct support, and collaborate with partners to maximize impact. Through our trained volunteers, we engage with underserved populations to ensure their voices are heard and their needs met. Outreach teams travel to local communities, bridging the gap between people and the services they need most.",
    },
    {
      src: "https://images.pexels.com/photos/6257786/pexels-photo-6257786.jpeg",
      alt: "Education Programs",
      title: "Education & Awareness",
      desc: "Empowering communities through HIV/AIDS prevention and climate resilience education.",
      detailed:
        "Education & Awareness programs focus on empowering communities by spreading knowledge about HIV/AIDS prevention, climate resilience, and healthy living. We offer workshops, campaigns, and school programs to increase awareness and change behaviors. By engaging with both youth and adults, we create an informed population capable of making better health and environmental decisions. Our goal is not just information—but transformation through learning.",
    },
    {
      src: "https://images.pexels.com/photos/7655820/pexels-photo-7655820.jpeg",
      alt: "Health Services",
      title: "Health Services Access",
      desc: "Providing healthcare and support for those affected by HIV/AIDS and climate change.",
      detailed:
        "Health Services Access aims to remove barriers to healthcare for vulnerable populations affected by HIV/AIDS and environmental challenges. Our services include medical referrals, counseling, and health education. We partner with clinics, hospitals, and mobile health providers to extend our reach. Our trained staff and volunteers ensure everyone—regardless of location or income—has the opportunity to receive quality care and support.",
    },
    {
      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      alt: "Sustainable Agriculture",
      title: "Sustainable Agriculture",
      desc: "Promoting eco-friendly farming techniques to enhance food security.",
      detailed:
        "Sustainable Agriculture promotes eco-friendly farming practices that increase food security and protect the environment. We train farmers on climate-smart agriculture and provide resources for sustainable development. Our team educates communities on soil health, organic practices, and efficient water use. These initiatives support long-term food independence and protect natural ecosystems from degradation.",
    },
    {
      src: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      alt: "Counseling Services",
      title: "Counseling & Mental Health",
      desc: "Offering mental health support and counseling for affected individuals.",
      detailed:
        "Counseling & Mental Health services provide emotional and psychological support to individuals affected by HIV/AIDS and climate-related stressors. Our trained counselors offer individual and group sessions to promote healing and resilience. We also conduct outreach and awareness campaigns to reduce stigma surrounding mental health issues and create safe spaces where individuals can share and grow.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bg-green-900 text-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <p className="text-sm uppercase tracking-widest text-green-300 mb-2">
            Programs
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl leading-tight">
            {programs[selectedIndex].title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Scrollable List on the Left */}
          <div className="lg:w-1/3 max-h-[600px] overflow-y-auto space-y-4 pr-2">
            {programs.map(({ src, alt, title, desc }, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`cursor-pointer bg-green-800 rounded-lg p-4 transition-transform hover:scale-[1.02] ${
                  selectedIndex === i ? "ring-2 ring-green-300" : ""
                }`}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h4 className="text-lg font-semibold text-white">{title}</h4>
                <p className="text-sm text-green-200">{desc}</p>
              </div>
            ))}
          </div>

          {/* Main Selected Program on the Right */}
          <div className="lg:flex-1">
            <img
              src={programs[selectedIndex].src}
              alt={programs[selectedIndex].alt}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-md mb-6"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">{programs[selectedIndex].title}</h3>
              <p className="leading-relaxed text-green-100 mb-8">
                {programs[selectedIndex].detailed}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
