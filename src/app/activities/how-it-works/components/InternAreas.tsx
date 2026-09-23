"use client";

import React from "react";
import Image from "next/image";

const areas = [
  {
    id: "operations",
    tag: "Operations",
    image: "/images/internship/operations.webp",
    description:
      "Human Resource, Accounting, Legal & Compliance, Administration",
  },
  {
    id: "technical",
    tag: "Technical",
    image: "/images/internship/technical.webp",
    description:
      "Cybersecurity, Cloud Computing, AI & Automation, Learning & Events",
  },
  {
    id: "sales",
    tag: "Sales",
    image: "/images/internship/sales.webp",
    description: "Business Management , Sales , Marketing",
  },
];

export default function AreasOfInternship() {
  return (
    <section
      id="areas-of-internship"
      className="xl:py-17.5 md:py-5 py-7.5 bg-[#e6edf9]"
    >
      <div className="container mx-auto px-4">
        <div className="sm:mb-7.5 mb-5 text-center">
          <h4 className="text-2xl font-bold inline-block mb-0 relative text-[#0f1f4b] after:absolute after:top-1/2 after:-left-40 after:w-37.5 after:h-px after:bg-black after:opacity-15 before:absolute before:top-1/2 before:-right-40 before:w-37.5 before:h-px before:bg-black before:opacity-15">
            Areas of Internship
          </h4>
          <p className="mt-2 text-[#0f1f4b]/70">
            Interns can choose from over 20 career roles across three main
            organizational functions:
          </p>
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {areas.map((area) => (
              <div
                key={area.id}
                className="relative z-1 lg:p-7.5 p-5 h-auto bg-white rounded-3xl transition-all duration-200 group"
              >
                <div className="rounded-2xl mb-4 sm:h-62.5 h-50 relative overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.tag}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <span className="pointer-events-none absolute top-0 left-[75%] z-10 block w-1/2 h-full skew-x-[-25deg] bg-linear-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                </div>

                <div className="relative">
                  <div className="mb-1.5">
                    <ul className="flex flex-wrap items-center">
                      <li className="bg-[#e6edf9] text-[#2563eb] rounded-2xl font-medium text-sm py-2 pr-5 pl-8 leading-[1.4] relative inline-flex items-center after:absolute after:size-2.5 after:rounded-full after:bg-[#2563eb] after:left-3.5 after:top-1/2 after:-translate-y-1/2">
                        {area.tag}
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-snug m-0 text-[#0f1f4b]">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-2 text-center text-[#0f1f4b]">
          Each field offers tailored experiences to develop relevant skills and
          industry knowledge
        </p>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% {
            left: -50%;
          }
          100% {
            left: 125%;
          }
        }
        .group-hover\\:animate-shine:hover,
        .group:hover .group-hover\\:animate-shine {
          animation: shine 3s ease-in-out;
        }
      `}</style>
    </section>
  );
}
