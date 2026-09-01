"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";

const featureHighlights = [
  "AI-powered workflow orchestration",
  "Intelligent task automation",
  "Seamless integration with enterprise apps",
  "No-code and low-code automation",
  "AI-driven insights and recommendations",
  "End-to-end process visibility",
  "Secure and scalable automation",
  "Enhanced workforce productivity",
];

export default function AutomationDetail() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-7.5 sm:py-10 md:py-12.5 xl:py-17.5 2xxl:py-25 bg-white overflow-hidden">
      <div className="container mx-auto max-w-350 px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full mb-7.5 flex items-center">
            <div className="flex w-full">
              <div className="w-1/2 pr-2">
                <div className="relative overflow-hidden rounded-2xl h-full">
                  <Image
                    src="/images/ibm/ibm.webp"
                    alt="IBM Automation"
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="w-1/2 pl-2 flex flex-col">
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <Image
                    src="/images/ibm/watsonx.webp"
                    alt="IBM Watsonx Orchestrate"
                    width={400}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>

                <div
                  className="sm:pt-5 sm:p-6.25 p-3.75 rounded-2xl bg-cover bg-center relative overflow-hidden flex items-center justify-center grow"
                  style={{
                    backgroundColor: "#1a1a1a",
                    backgroundImage:
                      "url('https://spsnet.com/temp-web/sps-enterprise/assets/images/spsimg/ab2.webp')",
                  }}
                >
                  <div className="absolute inset-0 bg-[#1d4ed8]/70"></div>
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="relative z-10 flex items-center justify-center gap-3 text-white cursor-pointer group"
                  >
                    <span className="flex items-center justify-center w-14 h-14 bg-white rounded-full text-[#1d4ed8] transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </span>
                    <span className="text-base font-medium">Play Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full self-center xl:ps-12 lg:ps-7.5">
            <div className="sm:mb-7.5 mb-5">
              <span className="inline-block rounded-5xl text-[#1d4ed8] text-base leading-normal font-semibold mb-3">
                About IBM Automation
              </span>

              <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] text-[#0f1f4b] mb-4">
                IBM watsonx Orchestrate – Intelligent Workflow Automation
              </h2>

              <p className="xl:text-lg sm:text-base text-sm leading-[1.6] font-normal text-slate-600">
                IBM watsonx Orchestrate helps organizations automate,
                orchestrate, and accelerate business processes using AI-driven
                decision-making. It empowers teams to streamline operations,
                reduce manual effort, and improve productivity through
                intelligent automation.
              </p>
            </div>

            <ul className="flex flex-wrap text-slate-700 mb-8">
              {featureHighlights.map((feature, index) => (
                <li
                  key={index}
                  className="sm:w-1/2 w-full p-1.5 text-base font-medium flex items-start gap-3"
                >
                  <ArrowRight className="w-5 h-5 mt-1 text-[#1d4ed8] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="https://spsnet.com/temp-web/sps-enterprise/comingsoon.php"
              className="inline-flex items-center justify-center bg-[#4169d7] hover:bg-[#0f1f4b] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/aQOsNjzqB0U?si=9HJkTI-7HmxeDR0o"
              title="IBM Watsonx Orchestrate Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
