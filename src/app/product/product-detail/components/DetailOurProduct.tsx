"use client";

import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

const tabs = [
  {
    id: "sps",
    label: "SPS Products",
    title: "SPS Products",
    description:
      "SPS products streamline your business operations and maximize efficiency.",
    features: ["MYID Self Verify", "Azalio", "Fabrico", "CSM"],
    team: { name: "SPS Team", role: "Enterprise Solutions" },
  },
  {
    id: "ibm",
    label: "IBM Products",
    title: "IBM Products",
    description:
      "IBM solutions provide robust enterprise software and AI-powered tools for businesses.",
    features: ["Automation", "Data & AI", "Security", "Sustainability"],
    team: { name: "IBM Team", role: "Business Solutions" },
  },
  {
    id: "other",
    label: "Other Solutions",
    title: "Other Solutions",
    description:
      "Other solutions cover security, compliance, and business process enhancements.",
    features: [
      "Identity Verification Solutions",
      "Digital Identity Management",
      "Manufacturing & Operations Solutions",
      "Business Management Systems",
      "Compliance & Security Management",
    ],
    team: { name: "Solutions Team", role: "Business Enhancements" },
  },
];

export default function ProductsTabs() {
  const [activeTab, setActiveTab] = useState("sps");

  const handleTabChange = useCallback((id: string) => {
    setActiveTab(id);
  }, []);

  const activeData = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab) || tabs[0];
  }, [activeTab]);

  return (
    <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-[#f4f8fe] overflow-hidden">
      <div className="container mx-auto max-w-350 px-4">
        {/* Added large gap between Left and Right Columns */}
        <div className="flex flex-col lg:flex-row custom-tab gap-12 lg:gap-20">
          <div className="xl:w-5/12 lg:w-1/3 w-full lg:mb-0 mb-6">
            <div className="sm:mb-7.5 mb-5">
              <div className="text-[#1d4ed8] font-semibold uppercase tracking-wide text-sm mb-2">
                Our Products
              </div>
              <h2 className="2xxl:text-4xl lg:text-[38px] sm:text-[32px] text-2xl font-bold text-[#0f1f4b] leading-tight capitalize">
                Powering Businesses with AI, Cloud &amp; Security Solutions
              </h2>
            </div>

            <nav>
              <div className="lg:pe-12 pe-0 lg:mb-6 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`w-full text-left mb-3 font-medium rounded-full xl:py-3.5 xl:px-6 py-3 px-5 flex justify-between items-center transition-all duration-500 ${
                      activeTab === tab.id
                        ? "bg-[#0f1f4b] text-white shadow-lg"
                        : "bg-white text-[#0f1f4b] border border-slate-200 hover:shadow-md"
                    }`}
                  >
                    <span className="text-base xl:text-lg">{tab.label}</span>
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 ${activeTab === tab.id ? "text-white" : "text-[#4772e8]"}`}
                    />
                  </button>
                ))}
              </div>
            </nav>

            <Link
              href="/product/product-detail/product-details"
              className="inline-flex items-center gap-2 text-[#1d4ed8] font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="xl:w-7/12 lg:w-4/6 w-full">
            <div className="bg-white rounded-4xl shadow-xl border border-slate-100/50 overflow-hidden h-full">
              <div className="flex flex-col md:flex-row 2xl:gap-7.5 md:gap-5 gap-2.5 2xl:p-7.5 p-5 h-full">
                <div className="relative w-full md:w-72 lg:w-80 shrink-0 h-64 md:h-auto rounded-2xl overflow-hidden bg-blue-50">
                  <Image
                    src="/images/banners/p2.webp"
                    alt={activeData.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <a
                    href="#"
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-white/95 backdrop-blur-md text-[#0f1f4b] py-3 px-4 rounded-lg font-medium text-sm hover:bg-[#3a5fc5] hover:text-white transition-all duration-300"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Book An Appointment
                  </a>
                </div>

                <div className="relative flex flex-col w-full justify-between">
                  <div>
                    <h3 className="xl:text-2xl text-xl font-bold text-[#0f1f4b] mb-2">
                      {activeData.title}
                    </h3>
                    <p className="text-slate-600 text-base mb-6 leading-relaxed">
                      {activeData.description}
                    </p>

                    <ul className="space-y-1 mb-6">
                      {activeData.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="group w-full relative lg:p-1.25 p-1 text-[#334155] xl:text-base text-sm font-medium flex items-center gap-2 hover:text-[#1d4ed8] hover:translate-x-1 transition-all duration-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex justify-between items-center pt-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                        <Image
                          src="/images/banners/p2.webp"
                          alt={activeData.team.name}
                          fill
                          loading="lazy"
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <p className="text-[#0f1f4b] font-semibold text-sm leading-tight">
                          {activeData.team.name}
                        </p>
                        <p className="text-[#1d4ed8] text-xs font-medium mt-0.5">
                          {activeData.team.role}
                        </p>
                      </div>
                    </div>

                    <a
                      href="#"
                      aria-label={`View ${activeData.title}`}
                      className="w-12 h-12 flex items-center justify-center bg-[#1d4ed8] text-white rounded-full hover:bg-[#0f1f4b] hover:scale-110 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
