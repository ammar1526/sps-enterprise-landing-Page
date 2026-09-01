"use client";

import React from "react";
import { Users, ShoppingCart, ChartLine, Headset } from "lucide-react";

const capabilities = [
  {
    title: "Human Resources",
    icon: Users,
    description:
      "Streamline HR processes so teams can focus on onboarding, employee engagement, and delivering a more human experience.",
    image:
      "https://spsnet.com/temp-web/sps-enterprise/assets/images/spsimg/p4.webp",
  },
  {
    title: "Procurement",
    icon: ShoppingCart,
    description:
      "Improve sourcing efficiency, supplier management, and purchasing decisions through intelligent automation.",
    image:
      "https://spsnet.com/temp-web/sps-enterprise/assets/images/spsimg/p3.webp",
  },
  {
    title: "Sales",
    icon: ChartLine,
    description:
      "Boost productivity with automated lead qualification, smarter insights, and enhanced customer engagement.",
    image:
      "https://spsnet.com/temp-web/sps-enterprise/assets/images/spsimg/p2.webp",
  },
  {
    title: "Customer Service",
    icon: Headset,
    description:
      "Deliver conversational self-service and faster resolutions using NLP-powered customer support.",
    image:
      "https://spsnet.com/temp-web/sps-enterprise/assets/images/spsimg/p1.webp",
  },
];

export default function AutomationSolution() {
  return (
    <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-blue-100 overflow-hidden">
      <div className="container mx-auto max-w-350 px-4">
        <div className="mb-7.5 text-center">
          <span className="inline-block rounded-5xl text-[#1d4ed8] text-base leading-normal font-semibold">
            Solutions
          </span>
          <h2 className="2xxl:text-5xl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0 text-[#0f1f4b]">
            AI-Powered Business Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7.5">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl h-72 shadow-xl box-hover flex flex-col overflow-hidden bg-[#0f1f4b]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${capability.image})`,
                    opacity: 0.3,
                  }}
                ></div>

                <div className="relative z-10 flex flex-col justify-start h-full p-6">
                  <div className="bg-white/10 backdrop-blur-md size-16 rounded-2xl flex justify-center items-center ml-auto border border-white/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-xl font-bold text-white relative">
                      {capability.title}
                    </h3>
                    <p className="text-base font-medium mb-0 text-white/85 leading-relaxed">
                      {capability.description}
                    </p>
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
