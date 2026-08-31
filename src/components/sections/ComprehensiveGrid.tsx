"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

interface Vertical {
  title: string;
  description: string;
  bullets: string[];
  bgImage: string;
}

const verticals: Vertical[] = [
  {
    title: "Public Sector",
    description:
      "Now more than ever, governments need to adapt to changing environments. The coronavirus pandemic has demonstrated the urgency for advancing digital transformation and IT modernization across all levels of government. To support citizens with greater confidence and speed, government agencies must build smart cities and communities using new technologies that help boost agility, scale for operational resilience and provide actionable insights.",
    bullets: [
      "Government",
      "Public Safety",
      "Education",
      "Healthcare – Mid Atl",
      "County Government",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Industrials",
    description:
      "Many industrial enterprises are prime for analytics and IoT because they struggle with antiquated infrastructure that negatively affects business processes, security posture, and growth. Manufacturers are accelerating digital transformation using an integrated approach, applying AI, hybrid cloud and automation to achieve new levels of agility, efficiency, quality and sustainability",
    bullets: ["Manufacturing", "Textile", "Utilities"],
    bgImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Healthcare",
    description:
      "We support the healthcare industry and those who deliver health and human services, via telehealth or in person, to drive improvements in cost and quality, innovation and outcomes. We offer a unique combination of advanced technology solutions to help you drive impactful change, services to digitally transform organizations, and the ability to implement at scale, with the support of a trusted partner",
    bullets: [
      "Telehealth & Remote Monitoring",
      "Multi-Clinic Consolidation",
      "Compliance Requirements",
      "Patient Experience",
      "Health Systems Interoperability",
      "Retail",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Retail",
    description:
      "The challenges facing retailers can be overwhelming, including navigating the disruption caused by the current COVID-19 pandemic. The future of retail requires overcoming the complexity in your business and to persevere, consider the opportunity to rethink your business model and the role of the store. Retail technology trends are towards powerful, contactless digital customer engagements and e-commerce to safer workplaces and more agile operations and supply chains. Now is the time to unlock the potential for a more resilient and sustainable business model and ecosystem. Technologies such as hybrid cloud, automation, IoT and artificial intelligence can help accelerate your transformation and position you to emerge smarter, more agile and ready to meet changing consumer needs.",
    bullets: [
      "Supply Chain",
      "Marketing / Merchandising",
      "Personalization & Localization",
      "Omni-channel Operations",
      "Convenience Stores",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Energy",
    description:
      "In today’s changing energy landscape, business leaders recognize that sustainability is fundamental to remain competitive. As the energy industry shifts to a more ecosystem-centric model to combat climate change, investing in sustainable energy sources helps engage business and people to participate in the change. Utilize the latest technologies to ensure your utility is ready for the new energy ecosystem.",
    bullets: ["Electric", "Oil & Gas"],
    bgImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Financial",
    description:
      "Financial services firms require real-time modernization to change how they work. From banking to capital markets, payments to insurance, scalable technology drives innovation, service and security.",
    bullets: ["Insurance", "Banking"],
    bgImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Telecommunications",
    description:
      "Telecommunications is experiencing a seismic shift and communications service providers are evolving to adapt. As connectivity services become more commoditized—limiting room for differentiation—the opportunity for reinvention is massive thanks to technological innovation. Operators today aim to capitalize with bold, value-adding enterprise services. SPS helps telcos unlock new revenue potential through business and delivery transformation by optimizing network operations, enabling differentiated enterprise experiences at the edge and beyond, and fortifying cybersecurity. At SPS, we are committed to helping our customers solve some of networking’s biggest challenges.",
    bullets: ["Telcos"],
    bgImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function ComprehensiveGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);

  const handleReadMore = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-blue-100 bg-cover">
      <div className="container mx-auto max-w-350 px-4">
        <div className="mb-7.5 text-center">
          <span className="text-[#1d4ed8] font-semibold leading-5 uppercase text-lg inline-flex gap-1.25 items-center">
            SPS Verticals
          </span>
          <h2 className="2xl:text-2xl lg:text-[38px] sm:text-[32px] text-2xl font-bold capitalize mb-0 text-[#0f1f4b]">
            Comprehensive Industry Solutions <br /> & Digital Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7.5">
          {verticals.map((vertical, index) => {
            const isActive = activeIndex === index || expandedIndex === index;
            return (
              <div
                key={index}
                className={`relative rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group ${
                  index < 4 ? "min-h-75" : "min-h-75"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 blur-0 scale-100"
                      : "opacity-0 blur-[5px] scale-105"
                  }`}
                  style={{ backgroundImage: `url(${vertical.bgImage})` }}
                />

                <div
                  className={`absolute inset-0 bg-blue-900/40 transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div
                  className={`absolute inset-0 bg-white transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full p-7.5">
                  <div className="overflow-hidden">
                    <h3
                      className={`w-full text-xl font-bold mb-2.5 transition-colors duration-700 ${
                        isActive ? "text-white" : "text-[#0f1f4b]"
                      }`}
                    >
                      {vertical.title}
                    </h3>

                    <p
                      className={`text-sm mb-3 transition-all duration-700 ${
                        isActive ? "text-white" : "text-slate-600"
                      } ${expandedIndex === index ? "" : "line-clamp-3"}`}
                    >
                      {vertical.description}
                    </p>

                    <span
                      onClick={() => handleReadMore(index)}
                      className={`inline-block text-sm font-medium mb-3 cursor-pointer transition-colors duration-700 hover:underline ${
                        isActive ? "text-white" : "text-[#1d4ed8]"
                      }`}
                    >
                      {expandedIndex === index ? "Read Less" : "Read More"}
                    </span>

                    <ul className="space-y-1.5 grow">
                      {vertical.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className={`w-full py-1 pl-6 relative text-sm flex items-center gap-2 transition-colors duration-700 ${
                            isActive ? "text-white" : "text-slate-700"
                          }`}
                        >
                          <span
                            className={`absolute left-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-700 ${
                              isActive
                                ? "bg-white text-[#1d4ed8]"
                                : "bg-white shadow-sm text-[#1d4ed8]"
                            }`}
                          >
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
