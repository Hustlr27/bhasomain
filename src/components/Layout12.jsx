"use client";

import React, { useState } from "react";

const programs = [
  {
    id: "wellness",
    title: "Wellness",
    description:
      "Our wellness program is centered on enhancing the physical, emotional, and social well-being of individuals and communities. We take a holistic approach by combining mental health support, preventive care, and community-driven initiatives. From organizing local health camps to providing accessible therapy resources, the wellness program builds resilient communities capable of supporting one another. We also partner with local organizations to ensure that our approach is inclusive, culturally sensitive, and tailored to the unique needs of each group we serve.",
  },
  {
    id: "education",
    title: "Education",
    description:
      "Education is the foundation of empowerment, and our education program is dedicated to bridging learning gaps and expanding access to quality resources. We focus on early childhood education, after-school support, and adult literacy programs that are adapted to the digital age. Our mobile classrooms and learning hubs bring education directly to underserved areas, promoting lifelong learning opportunities and reducing dropout rates. By investing in teacher training and digital literacy, we ensure that education remains relevant, engaging, and accessible to all.",
  },
  {
    id: "climate",
    title: "Climate Action",
    description:
      "The climate action program champions community-led solutions to mitigate and adapt to the effects of climate change. We work closely with local stakeholders to implement sustainable agriculture practices, renewable energy solutions, and ecosystem restoration efforts. Through education, advocacy, and hands-on training, we equip individuals with the knowledge and tools to protect their environment. Our initiatives are science-backed and rooted in the belief that every community has the power to contribute meaningfully to climate resilience.",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    description:
      "Our entrepreneurship program fuels innovation and economic independence through hands-on business development support. We offer mentorship, funding opportunities, and skill-building workshops to aspiring entrepreneurs, particularly from marginalized backgrounds. Whether it's launching a local craft business or scaling a tech startup, we provide tools that help businesses thrive. With a focus on sustainability and social impact, our program nurtures responsible business practices and fosters inclusive local economies.",
  },
  {
    id: "advocacy",
    title: "Advocacy",
    description:
      "The advocacy program empowers individuals to influence change at the systemic level. We support grassroots campaigns, policy reform efforts, and leadership development initiatives that elevate underrepresented voices. By educating communities about their rights and amplifying their stories, we build networks of informed advocates ready to take action. Our team also collaborates with lawmakers and civil society groups to drive reforms in healthcare, education, climate, and human rights policies that reflect community needs and priorities.",
  },
];

export function Layout12() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
          Our Programs
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => setSelectedProgram(program)}
              className={`px-4 py-2 rounded-md font-medium border transition ${selectedProgram.id === program.id
                  ? "bg-green-900 text-white border-green-900"
                  : "text-green-900 border-green-900 hover:bg-green-100"
                }`}
            >
              {program.title}
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-lg leading-relaxed">
          <h3 className="mb-4 text-2xl font-semibold text-green-900">
            {selectedProgram.title}
          </h3>
          <p>{selectedProgram.description}</p>
        </div>
      </div>
    </section>
  );
}
