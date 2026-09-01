"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  { id: "all", label: "All Solutions" },
  { id: "sps", label: "SPS Products" },
  { id: "ibm", label: "IBM Products" },
  { id: "other", label: "Other Solutions" },
];

const solutions = [
  {
    id: 1,
    title: "SPS Digital Solutions",
    category: "sps",
    description:
      "AI-powered platforms and cloud-native apps tailored for your business.",
    bullets: [
      "AI Application Development",
      "Cloud Migration & Optimization",
      "Managed IT & DevOps Services",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "IBM Technology",
    category: "sps",
    description:
      "Enterprise-grade AI, automation, and security solutions from IBM.",
    bullets: [
      "IBM Watson AI & Analytics",
      "IBM Security & IAM",
      "IBM Cloud & Hybrid Infrastructure",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Microsoft Solutions",
    category: "ibm",
    description: "Secure, scalable cloud solutions enabling modern workplaces.",
    bullets: [
      "Microsoft Azure Cloud",
      "Microsoft 365 & Exchange Online",
      "Microsoft Security & Compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Security Compliance",
    category: "other",
    description:
      "Advanced cybersecurity and compliance solutions to protect your digital assets.",
    bullets: [
      "Vulnerability Assessment & Penetration Testing",
      "SOC & Threat Monitoring",
      "Regulatory Compliance & Risk Management",
    ],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
  },
];

export default function FeaturedSolutions() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleFilter = (category: string) => {
    setActiveCategory(category);
  };

  const getFilteredSolutions = () => {
    if (activeCategory === "all") {
      return solutions;
    }

    if (activeCategory === "sps") {
      return solutions.filter((s) => s.category === "sps");
    }

    if (activeCategory === "ibm") {
      const spsSolutions = solutions.filter((s) => s.category === "sps");
      const ibmSolutions = solutions.filter((s) => s.category === "ibm");
      return [...spsSolutions.slice(0, 1), ...ibmSolutions];
    }

    if (activeCategory === "other") {
      return solutions.filter((s) => s.category === "other");
    }

    return [];
  };

  const filteredSolutions = getFilteredSolutions();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto max-w-350 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1f4b] capitalize leading-tight">
            Our Featured <br /> Technology Solution
          </h2>
          <p className="mt-4 text-base sm:text-lg font-light text-slate-600 max-w-3xl mx-auto">
            Explore the latest AI, Cloud, and Security solutions from leading
            technology partners to drive innovation and digital transformation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilter(category.id)}
              className={`cursor-pointer px-6 py-2.5 rounded-full border text-sm lg:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#0f1f4b] text-white border-[#0f1f4b]"
                  : "bg-transparent text-[#0f1f4b] border-black/10 hover:border-[#0f1f4b]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSolutions.map((solution, index) => (
            <div
              key={`${solution.id}-${index}`}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              <div className="p-6 flex flex-col grow border-t border-black/5">
                <h3 className="text-xl font-bold text-[#0f1f4b] mb-2">
                  <Link
                    href="#"
                    className="hover:text-[#1d4ed8] transition-colors"
                  >
                    {solution.title}
                  </Link>
                </h3>
                <p className="text-sm font-light text-slate-600 mb-4">
                  {solution.description}
                </p>

                <ul className="text-sm text-slate-700 space-y-2 mb-6 grow">
                  {solution.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`${index}-${bulletIndex}`}
                      className="flex items-start gap-2"
                    >
                      <span className="text-[#1d4ed8] mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white border border-[#0f1f4b] text-[#0f1f4b] font-semibold text-sm hover:bg-[#0f1f4b] hover:text-white transition-all duration-300"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
