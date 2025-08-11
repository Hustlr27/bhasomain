"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const programs = [
  {
    id: "wellness",
    title: "HIV/TB Management",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    shortDesc: "Comprehensive HIV and TB prevention, testing, and treatment programs",
    fullDesc: [
      "BHASO implements community-driven HIV/TB programs ensuring equitable access to services with focus on early diagnosis and treatment adherence.",
      "Our differentiated service delivery models reach vulnerable populations across Zimbabwe with 95% viral suppression rates among clients.",
      "Key components:",
      "- Community ART Refill Groups (CARGs)",
      "- Out-of-facility medication distribution",
      "- Psychosocial support groups",
      "- TB screening and treatment linkage"
    ],
    stats: "1.2M Zimbabweans on ART with 95% viral suppression",
    commitment: "6+ months preferred",
    skills: ["Health education", "Counseling", "Community engagement"]
  },
  {
    id: "climate",
    title: "Climate Justice",
    image: "https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg",
    shortDesc: "Agroecology and climate-resilient farming practices",
    fullDesc: [
      "We promote sustainable agriculture through training in climate-smart techniques, helping smallholder farmers adapt to changing weather patterns.",
      "Program highlights:",
      "- Training 5,000+ farmers in agroecology",
      "- Establishing community seed banks",
      "- Promoting water conservation techniques",
      "- Supporting nutrition gardens for PLHIV",
      "- Income-strengthening activities"
    ],
    stats: "5,000+ farmers trained in sustainable methods",
    commitment: "Seasonal (3-6 months)",
    skills: ["Agriculture", "Training", "Climate resilience"]
  },
  {
    id: "gender",
    title: "Gender & Human Rights",
    image: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg",
    shortDesc: "Reducing GBV and discrimination against marginalized groups",
    fullDesc: [
      "Our programs address gender-based violence and promote rights for women, youth, LGBTQ+ communities through:",
      "- Establishing 20+ advocacy groups",
      "- Providing legal aid services",
      "- Economic empowerment programs",
      "- Community sensitization campaigns",
      "- Safe spaces for vulnerable populations",
      "We've achieved 40% reduction in GBV incidents in our operational areas since 2020."
    ],
    stats: "40% reduction in GBV incidents since 2020",
    commitment: "Flexible options available",
    skills: ["Advocacy", "Gender sensitivity", "Community organizing"]
  },
  {
    id: "information",
    title: "Strategic Information",
    image: "https://images.pexels.com/photos/5905449/pexels-photo-5905449.jpeg",
    shortDesc: "Data-driven programming and research",
    fullDesc: [
      "BHASO strengthens evidence-based decision making through:",
      "- Robust monitoring & evaluation systems",
      "- Community-based research initiatives",
      "- Data collection and analysis training",
      "- Digital health solutions",
      "- Knowledge management platforms",
      "Our research center produces actionable insights that shape Zimbabwe's health and climate policies."
    ],
    stats: "7 research papers published in 2023",
    commitment: "Project-based or ongoing",
    skills: ["Data collection", "Analysis", "Research methods"]
  }
];

export function Layout12() {
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [showFullDetails, setShowFullDetails] = useState(false);

  const handleProgramClick = (programId) => {
    if (expandedProgram === programId) {
      setExpandedProgram(null);
      setShowFullDetails(false);
    } else {
      setExpandedProgram(programId);
      setShowFullDetails(false);
    }
  };

  return (
    <section className="px-[5%] py-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Our Strategic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any program to learn more about BHASO's key initiatives aligned with our 2023-2027 Strategic Plan
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program) => (
            <div 
              key={program.id}
              onClick={() => handleProgramClick(program.id)}
              className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer h-96 group transition-all duration-300 ${expandedProgram === program.id ? 'ring-4 ring-green-700' : ''}`}
            >
              {/* Program Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              
              {/* Green Hover Overlay (Bottom Up Animation) */}
              <div className={`absolute bottom-0 left-0 right-0 bg-green-900 bg-opacity-90 text-white p-6 transition-all duration-500 ${expandedProgram === program.id ? 'h-full' : 'h-1/3 group-hover:h-2/3'}`}>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm mb-4">{program.shortDesc}</p>
                
                {/* Expanded Content */}
                {expandedProgram === program.id && (
                  <div className={`transition-opacity duration-300 ${showFullDetails ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                    <div className="space-y-3">
                      {program.fullDesc.map((item, index) => (
                        <p key={index} className="text-sm">{item}</p>
                      ))}
                      <div className="pt-2">
                        <p className="font-semibold">Impact:</p>
                        <p className="text-sm">{program.stats}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {program.skills.map((skill, i) => (
                          <span key={i} className="bg-green-800 text-white px-2 py-1 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* See More/Less Button */}
                {expandedProgram === program.id && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowFullDetails(!showFullDetails);
                    }}
                    className="absolute bottom-4 left-6 flex items-center text-sm font-medium"
                  >
                    {showFullDetails ? (
                      <>
                        <span>Show Less</span>
                        <FiChevronUp className="ml-1" />
                      </>
                    ) : (
                      <>
                        <span>See More</span>
                        <FiChevronDown className="ml-1" />
                      </>
                    )}
                  </button>
                )}
                
                {/* Initial Hover Prompt */}
                {expandedProgram !== program.id && (
                  <div className="absolute bottom-4 left-6 text-sm font-medium animate-pulse">
                    Click to learn more
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Program Details (for larger screens) */}
        {expandedProgram && (
          <div className="hidden lg:block bg-green-50 rounded-xl p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {programs.find(p => p.id === expandedProgram).title} Program Details
                </h3>
                <div className="space-y-4">
                  {programs.find(p => p.id === expandedProgram).fullDesc.map((item, index) => (
                    <p key={index} className="text-gray-700">{item}</p>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-4">Quick Facts</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Impact:</p>
                    <p>{programs.find(p => p.id === expandedProgram).stats}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Time Commitment:</p>
                    <p>{programs.find(p => p.id === expandedProgram).commitment}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Key Skills:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {programs.find(p => p.id === expandedProgram).skills.map((skill, i) => (
                        <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-green-800 hover:bg-green-700 text-white py-3 rounded-lg">
                  Volunteer for This Program
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}