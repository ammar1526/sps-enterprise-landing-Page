"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";

const phases = [
  {
    id: "AVNET Bluemix with IBM",
    title: "Learn More",
    phase: "Innovative & Real-world impact",
    image: "/images/about-us/c1.webp",
    heading: "AVNET Bluemix with IBM",
    description: "Finalist & Social Justice Award",
  },
  {
    id: "Winner of the Avnet Bluemix Hackathon",
    title: "Learn More",
    phase: "Mobile & IoT-based solutions",
    image: "/images/about-us/c2.webp",
    heading: "Winner of the Avnet Bluemix",
    description: "Sniff It & Watchover IoT",
  },
  {
    id: "IBM Cognitive Build Challenge",
    title: "Learn More",
    phase: "Award-winning innovation",
    image: "/images/about-us/c3.webp",
    heading: "IBM Cognitive Build Challenge",
    description: "Semi-finalist & Cloud Champions",
  },
];

export default function PhasesOfInternship() {
  return (
    <section
      id="phases-of-internship"
      className="bg-white 2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-[#0f1f4b] capitalize mb-0">
            Progressive Phases Of Internship
          </h2>
          <p className="max-w-3xl mt-5 mx-auto text-lg sm:text-xl text-slate-500/90 font-light leading-relaxed mb-8">
            SPS started business operations over 25 years ago to help
            organizations improve software development productivity. Since then
            we have come a long way...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="group/box relative rounded-2xl transition-all duration-300 bg-transparent hover:bg-[#e6edf9] pb-10"
            >
              <div className="relative rounded-2xl border-4 border-transparent bg-[#e6edf9] transition-colors duration-300 group-hover/box:bg-[#0f1f4b]">
                <div className="relative w-full aspect-4/3 overflow-hidden rounded-xl">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                </div>

                <div className="relative">
                  <button
                    type="button"
                    aria-label={`Appointment Now - ${phase.title}`}
                    className="absolute left-1/2 -translate-x-1/2 w-[90%] -top-4 opacity-0 pointer-events-none group-hover/box:-top-12 group-hover/box:opacity-100 group-hover/box:pointer-events-auto flex items-center justify-center gap-2 bg-[#6985d3] hover:bg-[#5570bd] text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    {phase.title}
                  </button>
                </div>

                <div className=" relative z-10 justify-between items-center gap-2.5 pt-8.75 px-4 pb-3.75 rounded-b-2xl bg-[#e6edf9] transition-colors duration-300 group-hover/box:bg-[#0f1f4b]">
                  <h2 className="text-lg sm:text-xl font-bold leading-snug tracking-tight mb-2 text-[#0f1f4b] transition-colors duration-300 group-hover/box:text-white">
                    {phase.heading}
                  </h2>
                  <p className="text-sm text-justify leading-relaxed text-[#0f1f4b] transition-colors duration-300 group-hover/box:text-white">
                    {phase.description}
                  </p>
                </div>
              </div>

              <ul className="absolute left-0 right-0 flex justify-center py-3 rounded-b-2xl bg-blue-100 opacity-0 -translate-y-3 pointer-events-none transition-all duration-300 group-hover/box:opacity-100 group-hover/box:translate-y-0 group-hover/box:pointer-events-auto">
                <li>
                  <p className="text-[#0f1f4b] text-sm font-medium">
                    {phase.phase}
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
