"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, Briefcase, Info, Mail, ChevronDown } from "lucide-react";

const comingSoon = "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php";

const menus = [
  {
    id: "how-it-works",
    icon: HelpCircle,
    label: "How it works",
    items: [
      {
        name: "Overview",
        href: "https://spsnet.com/temp-web/sps-enterprise/activities/Internship2025/how-it-works.php",
      },
      { name: "Areas of internship", href: comingSoon },
      { name: "Why SPS", href: comingSoon },
      { name: "What you do", href: comingSoon },
      { name: "Eligibility", href: comingSoon },
      { name: "Application Process", href: comingSoon },
      { name: "FAQs", href: comingSoon },
    ],
  },
  {
    id: "career-fields",
    icon: Briefcase,
    label: "Career Fields",
    items: [
      {
        name: "Operations",
        href: "https://spsnet.com/temp-web/sps-enterprise/activities/Internship2025/career-fields.php",
      },
      { name: "Technical", href: comingSoon },
      { name: "Sales", href: comingSoon },
    ],
  },
  {
    id: "who-we-are",
    icon: Info,
    label: "Who we are",
    items: [
      {
        name: "Our purpose",
        href: "https://spsnet.com/temp-web/sps-enterprise/activities/Internship2025/who-we-are.php",
      },
      { name: "Our values", href: comingSoon },
      { name: "Mission", href: comingSoon },
      { name: "What makes us different", href: comingSoon },
      { name: "Our Future", href: comingSoon },
      { name: "Meet our experts", href: comingSoon },
    ],
  },
];

export default function InternshipSubNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <section className="w-full bg-blue-50 shadow-sm pt-1 overflow-visible">
      <nav className="max-w-7xl mx-auto px-4 overflow-visible mt-2">
        <ul className="flex flex-row flex-wrap items-center justify-start gap-2 lg:gap-6 overflow-visible">
          {menus.map((menu) => {
            const Icon = menu.icon;
            const isOpen = openMenu === menu.id;

            return (
              <li
                key={menu.id}
                className="relative mb-2"
                onMouseEnter={() => setOpenMenu(menu.id)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border font-medium transition duration-300 cursor-pointer ${
                    isOpen
                      ? "bg-[#4c7eea] text-white border-[#4c7eea]"
                      : "border-gray-300 text-gray-700 hover:bg-[#4c7eea] hover:text-white hover:border-[#4c7eea]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wide">
                    {menu.label}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute z-50 top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-2xl rounded-b-xl border border-gray-200 pt-2 transition-all duration-200 ${
                    isOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-1 pointer-events-none"
                  }`}
                >
                  <ul className="flex flex-col m-0 p-0 list-none rounded-b-xl bg-white">
                    {menu.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className="block px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-[#4c7eea] font-semibold text-left text-sm transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}

          <li className="relative mb-2">
            <Link
              href="/Contact-Us"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-[#4c7eea] hover:text-white hover:border-[#4c7eea] transition duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wide">
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
