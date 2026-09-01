"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  {
    title: "AI-Powered Orchestration",
    description:
      "Automate and coordinate complex workflows across teams and systems using intelligent, context-aware automation.",
  },
  {
    title: "Enterprise-Ready Automation",
    description:
      "Secure, scalable, and seamlessly integrated with enterprise applications to boost productivity and operational efficiency.",
  },
];

export default function AutomationIbm() {
  return (
    <section
      className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-white relative z-1 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://spsnet.com/temp-web/sps-enterprise/assets/images/background/bg-content-wrapper.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-350 px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full mb-7.5 lg:pe-6">
            <div className="sm:mb-7.5 mb-5">
              <span className="inline-block rounded-5xl text-[#1d4ed8] text-base leading-normal font-semibold">
                Why Choose IBM Automation
              </span>

              <h2 className="2xxl:text-4xl lg:text-[38px] sm:text-[32px] text-2xl font-bold capitalize leading-[1.3] mb-3 text-[#0f1f4b]">
                Smarter Workflows with AI-Driven Orchestration
              </h2>

              <p className="mb-8 font-semibold text-lg text-[#1d4ed8]">
                Intelligent Automation That Simplifies Work and Accelerates
                Outcomes.
              </p>
            </div>

            <ul className="space-y-5">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="relative flex items-start gap-4 p-5 pr-4 rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,31,75,0.08)]"
                >
                  <span className="shrink-0 w-10 h-10 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </span>
                  <div>
                    <h6 className="text-xl mb-1 font-bold text-[#0f1f4b]">
                      {feature.title}
                    </h6>
                    <p className="mb-0 text-[#334155]">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full mb-3.75">
            <div className="xl:pl-27.5 sm:pl-12.5">
              <div className="relative lg:h-110 sm:h-105 h-80">
                <Image
                  src="https://spsnet.com/temp-web/sps-enterprise/assets/images/spsimg/p3.webp"
                  alt="Automation Background"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-3xl"
                  priority
                />
                <Image
                  src="https://spsnet.com/temp-web/sps-enterprise/assets/images/spsimg/p4.webp"
                  alt="Automation Overlay"
                  width={200}
                  height={250}
                  className="absolute md:-bottom-6 -bottom-1.25 md:-left-15 left-0 border-[5px] border-white shadow-[0px_15px_50px_rgba(0,21,53,0.1)] rounded-3xl object-cover w-32 h-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
