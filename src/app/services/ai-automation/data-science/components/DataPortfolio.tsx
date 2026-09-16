"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";

const SLIDES = [
  {
    title: "GateKeyper",
    description:
      "Dennis Beam, who held a patent on the safety of heavy equipment, wanted to build an app to ensure safety of professional operators. He shared his requirements with the SPS which included experts from AI, Cloud, Cyber Security and IoT teams. SPS built a solution leveraging the patent to make dennis's vision a reality. SPS delivered a solution that can be integrated with any telematics system or utilized independently. The GateKeyper ApplicationA, allows companies to verify and ensure operatorâ€™s knowledge about the equipment and respective rules about operating the equipment. Once verified, only then the operators are granted an access to the equipment.",
    button: "Learn More about GateKeyper",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Aggregate and display critical metrics and key performance indicators (KPIs) in a single screen, enabling users to monitor and examine business performance at a glance. Extract and communicate high-level insights such as anomalies, issues and trends for end-users of all skill levels.",
    button: "Learn More about GateKeyper",
  },
  {
    title: "AIMY",
    description:
      "AIMY â€”My AI Friend, is a recipient of IBM Watson Build challenge 2018 and received Special Recognition for Social Justice award. AIMY is an interactive device that can talk and hold conversation with people via voice-user interface. AIMY is specifically targeted to those who suffer from depression and loneliness.",
    button: "Learn More about GateKeyper",
  },
  {
    title: "MyHealthChart",
    description:
      "Dr. Qasim Aziz had a vision to develop an application that could help patients manage and communicate their personal health data to Healthcare Professionals (HCPs) anytime and anywhere. SPS team worked with Dr. Aziz to understand his vision, architect a solution, and built an app to make his vision a reality. Please visit MyHealthChart website for details.",
    button: "Learn More about GateKeyper",
  },
  {
    title: "CREyield",
    description:
      "Bill Quinn wanted a system efficient enough to enable Owners and Investors in their every concern regarding real estate. The main idea was to design a system that could help users gain an insight about the ongoing fluctuations in the real estate trends and could henceforth valuate their property. SPS delivered a solution that enabled the CREyield system users in every aspect of managing real estate. The system allowed its users to estimate taxes, appeal against government calculated tax, prepare and submit income and expense reports, rent rolls for the property, assign properties to agents, view financial and property status reports, and manage tax rules and tax appeals.",
    button: "Learn More about GateKeyper",
  },
  {
    title: "Watch Over",
    description:
      "Many parents use apps to keep tabs on their children starting the day those children get their first smartphones. Working parents can see that their children got on the bus in the morning and check on them after school, without needing to call or text. Parents of new drivers can have peace of mind knowing their children arrived safely where they said they would go.",
    button: "Learn More about GateKeyper",
  },
];

export default function DataSciencePortfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const slide = SLIDES[currentSlide];
  const canGoNext = currentSlide < SLIDES.length - 1;
  const canGoPrev = currentSlide > 0;

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0430]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banners/b1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0430]/70" />
      </div>

      <div className="relative z-10 mx-auto flex h-160 max-w-5xl flex-col px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex-1 overflow-hidden">
          <div
            key={currentSlide}
            className="animate-[slideDown_600ms_ease-in-out]"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-[#ff3b3b] sm:text-base">
              Our Portfolio of Data Science Services
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {slide.title}
            </h2>

            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {slide.description}
            </p>

            <button
              type="button"
              className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-sm border border-white px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0a0430]"
            >
              {slide.button}
            </button>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center gap-4 pt-8">
          {canGoPrev && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 hover:bg-white hover:text-[#0a0430]"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          )}

          {canGoNext && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 hover:bg-white hover:text-[#0a0430]"
            >
              <ArrowDown className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
