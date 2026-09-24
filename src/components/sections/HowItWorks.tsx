"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Clock, List, Stethoscope, HandCoins, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Clock,
    title: "Schedule Consultation",
  },
  {
    icon: List,
    title: "Plan & Strategize",
  },
  {
    icon: Stethoscope,
    title: "Execute Solutions",
  },
  {
    icon: HandCoins,
    title: "Deliver Results & Payment",
  },
];

export default function HowItWorks() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCount1(Math.floor(easedProgress * 180));
            setCount2(Math.floor(easedProgress * 45));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount1(180);
              setCount2(45);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-10 pb-5 sm:pt-12.5 md:pt-17.5 md:pb-10 2xxl:pt-25 2xxl:pb-17.5 mt-10 bg-white"
    >
      <div className="container mx-auto max-w-350 px-4">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-0">
          <div className="xl:w-1/3 w-full mb-7.5 xl:pr-4">
            <div className="sm:mb-7.5 mb-5">
              <h2 className="xl:text-5xl sm:text-4xl text-3xl font-bold capitalize mb-4 text-[#0f1f4b]">
                How It Works
              </h2>
              <p className="sm:text-lg text-base leading-[1.6] font-light text-slate-600">
                SPS helps organizations accelerate their Digital Transformation
                journey by adopting Cloud, AI, Cybersecurity, and other emerging
                technologies through a structured, scalable approach.
              </p>
            </div>
            <div className="flex flex-wrap xl:flex-col gap-0">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="xl:w-full md:w-1/2 w-full">
                    <div className="relative flex items-center gap-3.75 mb-5">
                      <div className="size-15 flex items-center text-[#1d4ed8] text-2xl justify-center bg-white rounded-full duration-500">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="overflow-hidden">
                        <h3 className="text-xl mb-0 font-semibold text-[#0f1f4b]">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="xl:w-2/3 w-full">
            <div className="relative pb-10">
              <div className="sm:rounded-[30px] rounded-lg lg:h-127.5 md:h-105 sm:h-80 h-62.5 relative overflow-hidden">
                <Image
                  src="/images/867.webp"
                  alt="SPS Tech Solutions"
                  width={1200}
                  height={715}
                  className="size-full object-cover"
                  priority
                />

                <div className="absolute bottom-0 left-0 bg-white pt-3.75 pr-3.75 rounded-tr-[30px] z-10">
                  <a
                    href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php"
                    className="group inline-flex items-center justify-between bg-[#0f1f4b] text-white font-semibold rounded-xl px-6 py-3 text-lg transition-all duration-500 hover:bg-white hover:text-[#0f1f4b] hover:shadow-lg"
                  >
                    Book Appointment
                    <span className="size-11 min-w-11 bg-white text-[#0f1f4b] rounded-xl inline-flex items-center justify-center -my-2.75 -mr-4.5 ml-3 transition-all duration-500 group-hover:bg-[#0f1f4b] group-hover:text-white">
                      <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="md:absolute static bottom-0 right-6.25 md:max-w-87.5 md:w-full w-full max-md:mt-5">
                <div className="sm:p-6.25 p-4 rounded-2xl bg-[#0f1f4b]">
                  <div className="flex">
                    <div className="w-1/2 flex relative after:h-full after:w-px after:opacity-50 after:bg-white/50">
                      <div className="m-auto text-center">
                        <span className="lg:text-5xl text-3xl font-bold text-white block">
                          {count1}+
                        </span>
                        <span className="sm:text-lg text-base font-light text-white block mt-1">
                          Expert Specialists
                        </span>
                      </div>
                    </div>
                    <div className="w-1/2 flex">
                      <div className="m-auto text-center">
                        <span className="lg:text-5xl text-3xl font-bold text-white block">
                          {count2}K
                        </span>
                        <span className="sm:text-lg text-base font-light text-white block mt-1">
                          Happy Clients
                        </span>
                      </div>
                    </div>
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
