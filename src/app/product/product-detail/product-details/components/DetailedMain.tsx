"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";

const sidebarLinks = [
  { label: "All Products", isHeading: true },
  { label: "SPS", isHeading: false },
  { label: "IBM", isHeading: false },
  { label: "MYID Self Verify", isHeading: false },
  { label: "Azalio", isHeading: false },
  { label: "Fabrico", isHeading: false },
  { label: "BMS", isHeading: false },
  { label: "CSM", isHeading: false },
  { label: "Automation", isHeading: false },
  { label: "Data & AI", isHeading: false },
  { label: "Security", isHeading: false },
  { label: "Sustainability", isHeading: false },
];

const productDetails = [
  {
    title: "SPS",
    description:
      "SPS provides advanced solutions for secure network management and digital transformation.",
  },
  {
    title: "IBM",
    description:
      "IBM products help organizations leverage enterprise-grade AI, automation, and security solutions.",
  },
  {
    title: "MYID Self Verify",
    description:
      "MYID Self Verify enables secure identity verification and access management for businesses.",
  },
  {
    title: "Azalio",
    description:
      "Azalio offers cloud-native solutions for data integration, workflow automation, and analytics.",
  },
  {
    title: "Fabrico",
    description:
      "Fabrico provides smart manufacturing and automation tools to optimize industrial operations.",
  },
  {
    title: "BMS",
    description:
      "BMS is a comprehensive business management system designed to streamline processes and boost efficiency.",
  },
  {
    title: "CSM",
    description:
      "CSM helps manage customer relationships and service operations effectively for enterprise success.",
  },
  {
    title: "Automation",
    description:
      "Our Automation tools reduce manual workload and optimize business processes with intelligent workflows.",
  },
  {
    title: "Data & AI",
    description:
      "Data & AI solutions enable organizations to extract insights, make smarter decisions, and innovate faster.",
  },
  {
    title: "Security",
    description:
      "Our security products protect critical assets, ensure compliance, and defend against cyber threats.",
  },
  {
    title: "Sustainability",
    description:
      "Sustainability solutions help organizations reduce environmental impact and drive sustainable growth.",
  },
];

const categories = [
  "SPS",
  "MYID Self Verify",
  "IBM",
  "Azalio",
  "Fabrico",
  "BMS",
  "CSM",
  "Automation",
  "Data & AI",
  "Security",
  "Sustainability",
];

const faqs = [
  {
    question: "What products do you offer?",
    answer:
      "We offer SPS, IBM, MYID Self Verify, Azalio, Fabrico, BMS, CSM, Automation, Data & AI, Security, and Sustainability solutions.",
  },
  {
    question: "Can these products be customized?",
    answer:
      "Yes, our products are highly customizable to fit the unique workflows and requirements of your organization.",
  },
  {
    question: "How can I request a product demo?",
    answer:
      "You can request a product demo by clicking the 'Request a Quote' button or contacting our sales team directly.",
  },
  {
    question: "Are these products suitable for all industries?",
    answer:
      "Absolutely. Our products are designed to be adaptable across various industries including healthcare, finance, retail, and more.",
  },
];

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState("SPS");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto max-w-350 px-4">
        {/* Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 p-8 lg:p-12 rounded-3xl bg-[#eef2ff] shadow-sm">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0f1f4b] mb-6">
              Product Portfolio
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              We offer a wide range of products tailored to digital
              transformation, automation, and security.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our products empower organizations to streamline operations,
              leverage data & AI, enhance security, and achieve sustainability
              goals.
            </p>
          </div>

          <div className="relative h-100 lg:h-112.5 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/banners/867.webp"
              alt="Product Portfolio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-2/3 w-full order-2 lg:order-1">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#0f1f4b] mb-4">
                Product Categories
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {categories.map((category, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-5 h-5 bg-[#1d4ed8] rounded-full shrink-0">
                      <Check
                        className="w-3.5 h-3.5 text-white"
                        strokeWidth={3}
                      />
                    </span>
                    <span className="text-[#0f1f4b] font-medium">
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              {productDetails.map((product) => (
                <div key={product.title}>
                  <h3 className="text-xl font-bold text-[#0f1f4b] mb-2">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 w-full order-1 lg:order-2">
            <div className="sticky top-24">
              <div className="bg-[#0f1f4b] rounded-xl shadow-xl p-4">
                <ul className="flex flex-col gap-1">
                  {sidebarLinks.map((link, idx) => (
                    <li key={idx}>
                      {link.isHeading ? (
                        <div className="w-full text-left px-4 py-3 text-sm font-bold text-white">
                          {link.label}
                        </div>
                      ) : (
                        <button
                          onClick={() => setActiveCategory(link.label)}
                          className={`w-full text-left px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                            activeCategory === link.label
                              ? "bg-[#1d4ed8] text-white font-semibold"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-[#0f1f4b] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-[#0f1f4b]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1d4ed8] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>

                {openFaq === index && (
                  <div className="p-5 pt-0 bg-white">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
