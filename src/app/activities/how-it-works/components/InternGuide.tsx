"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const guide = [
  {
    id: "why-sps",
    image: "/images/internship/whysps.webp",
    title: "Why SPS?",
    items: [
      {
        label: "Professional Development:",
        text: "Training to maximize learning and career readiness.",
      },
      {
        label: "Personal Growth:",
        text: "Fostering open-mindedness, communication, and adaptability.",
      },
      {
        label: "Real Responsibility:",
        text: "Meaningful tasks preparing interns for full-time employment.",
      },
    ],
  },
  {
    id: "what-you-do",
    image: "/images/internship/whatyoudo.webp",
    title: "What You’ll Do",
    items: [
      { text: "Collaborate on exciting technology-driven projects." },
      {
        text: "Learn from senior team members in a dynamic, supportive work environment.",
      },
      {
        text: "Tackle complex business problems and develop innovative solutions.",
      },
      {
        text: "Gain exposure to cutting-edge tools and technologies in the tech industry.",
      },
    ],
  },
  {
    id: "eligibility",
    image: "/images/internship/eligibility.webp",
    title: "Eligibility",
    subtitle: "Who can apply?",
    intro: "We’re looking for passionate and driven students with:",
    items: [
      { text: "Strong communication and problem-solving skills." },
      { text: "An eagerness to learn and grow in a professional environment." },
      { text: "A passion for technology and innovation." },
    ],
    footerTitle: "Ready to Launch Your Career?",
    footerText:
      "If you’re excited to join us for 2026, please apply by submitting your resume and cover letter. We can’t wait to see the impact you’ll make at SPS!",
  },
];

export default function InternGuide() {
  return (
    <section id="why-sps" className="xl:py-17.5 md:py-10 py-7.5 bg-[#0f1f4b]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {guide.map((block) => (
            <div
              key={block.id}
              className="md:flex h-full relative z-1 transition-all duration-200 hover:-translate-y-2 cursor-pointer"
            >
              <div className="rounded-3xl md:min-w-70 md:w-70 min-h-62.5 sm:min-h-80 md:min-h-62.5 w-full overflow-hidden relative">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>

              <div className="relative p-4 sm:p-5 self-center shadow-lg border border-gray-100 rounded-xl md:-ml-15 md:mr-0 sm:mx-5 bg-white md:my-6 sm:-mt-5 -mt-4 w-full">
                <h3 className="text-lg font-semibold mb-1 text-[#0f1f4b]">
                  {block.title}
                </h3>

                {block.subtitle && (
                  <p className="text-md font-semibold mb-1 text-[#0f1f4b]">
                    {block.subtitle}
                  </p>
                )}

                {block.intro && (
                  <p className="text-sm text-[#0f1f4b]/80 mb-1">
                    {block.intro}
                  </p>
                )}

                <ul className="flex flex-col text-[#0f1f4b] font-medium">
                  {block.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="w-full py-1.5 pe-1 ps-10 relative text-sm leading-tight"
                    >
                      <span className="absolute left-0 top-1.5 size-7 leading-7 text-center bg-white rounded-full shadow-sm flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#2563eb]" />
                      </span>
                      <span className="font-normal text-sm block sm:inline">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {block.footerTitle && (
                  <p className="text-md font-semibold mb-1 text-[#0f1f4b]">
                    {block.footerTitle}
                  </p>
                )}

                {block.footerText && (
                  <p className="text-sm text-[#0f1f4b]/80">
                    {block.footerText}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
