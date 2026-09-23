"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";

const phases = [
  {
    id: "trainee",
    title: "Trainee",
    phase: "Phase 1",
    image: "/images/internship/trainee.webp",
    description:
      "Participants receive foundational training on various products and services, preparing them for real-world applications.",
  },
  {
    id: "shadower",
    title: "Shadower",
    phase: "Phase 1",
    image: "/images/internship/shadower.webp",
    description:
      "Interns observe and learn the dynamics of client interactions, including pre- and post-sales engagements.",
  },
  {
    id: "apprentice",
    title: "Apprentice",
    phase: "Phase 2",
    image: "/images/internship/apprentice.webp",
    description:
      "Upon demonstrating professional and business skills, interns gain opportunities to collaborate closely with teams, simulating coworker responsibilities.",
  },
  {
    id: "full-time",
    title: "Full time intern",
    phase: "Phase 2",
    image: "/images/internship/full-time.webp",
    description:
      "After successful completion of the apprenticeship phase and obtaining relevant certifications, participants are positioned to transition into paid roles.",
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

                <div className="relative z-10 flex justify-between items-center gap-2.5 pt-8.75 px-4 pb-3.75 rounded-b-2xl bg-[#e6edf9] transition-colors duration-300 group-hover/box:bg-[#0f1f4b]">
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
