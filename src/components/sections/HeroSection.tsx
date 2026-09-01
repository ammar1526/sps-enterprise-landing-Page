"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtext?: string;
  bulletPoints?: string[];
  primaryBtnText: string;
  secondaryBtnText: string;
  secondaryOpensModal?: boolean;
  bgVideo: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Artificial Intelligence",
    subtext:
      "Transforming businesses with AI-driven automation. Implement AI strategies to reduce operational costs and enhance customer experience. Our AI solutions adapt to your business needs.",
    primaryBtnText: "Explore AI",
    secondaryBtnText: "Contact Us",
    secondaryOpensModal: false,
    bgVideo: "/images/AI-bg-video.mp4",
  },
  {
    id: 2,
    title: "What If",
    bulletPoints: [
      "You could enhance your Identity Management.",
      "You could modernize your legacy enterprise information systems.",
      "You could have Security Operations Center 24x7.",
      "You could have your Cyber Security environment managed for you.",
      "You could have Compliance Artifacts for your Auditors at click of a button.",
    ],
    primaryBtnText: "Request Consultation",
    secondaryBtnText: "How can we help you today",
    secondaryOpensModal: true,
    bgVideo: "/images/whatif-bg-video.mp4",
  },
  {
    id: 3,
    title: "Cybersecurity Services",
    subtext:
      "Protect your business with advanced cyber defense. Safeguard digital assets against threats. Continuous monitoring & rapid response.",
    primaryBtnText: "Explore Security",
    secondaryBtnText: "Contact Us",
    secondaryOpensModal: false,
    bgVideo: "/images/Cybersecurity-bg-video.mp4",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    subtext:
      "Scale your business with secure cloud technology. Migrate to the cloud seamlessly. High performance & 24/7 availability.",
    primaryBtnText: "Explore Cloud",
    secondaryBtnText: "Contact Us",
    secondaryOpensModal: false,
    bgVideo: "/images/Cloud-bg-video.mp4",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [nextSlide, current]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleSecondaryClick = (slide: Slide) => {
    if (slide.secondaryOpensModal) {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="relative h-screen min-h-200 w-full max-w-[100vw] overflow-hidden bg-slate-950">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== current}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={slide.bgVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30" />
          <div className="absolute inset-0 bg-slate-950/20" />

          <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-20">
            <div className="max-w-4xl ml-6 sm:ml-10 lg:ml-32 xl:ml-40">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
                {slide.title}
              </h1>

              {slide.subtext && (
                <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-3xl mb-8">
                  {slide.subtext}
                </p>
              )}

              {slide.bulletPoints && (
                <ul className="mt-5 space-y-3 mb-8">
                  {slide.bulletPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-lg sm:text-xl lg:text-2xl text-slate-200"
                    >
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <button className="bg-[#4d75e6] hover:bg-[#1e40af] border-blue-950 text-white font-semibold px-8 py-3.5 rounded-lg transition shadow-2xl text-lg">
                  {slide.primaryBtnText}
                </button>
                <button
                  onClick={() => handleSecondaryClick(slide)}
                  className="bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold px-8 py-3.5 rounded-lg transition text-lg"
                >
                  {slide.secondaryBtnText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white backdrop-blur-sm transition"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white backdrop-blur-sm transition"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-[#1d4ed8]"
                : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 text-slate-900 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-xl font-bold text-slate-900">
                Request a Quote
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="text-slate-400 hover:text-slate-700 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form
              className="mt-5 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setIsModalOpen(false);
              }}
            >
              <div>
                <label className="block text-xs font-bold tracking-wide text-slate-700 mb-1.5">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wide text-slate-700 mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wide text-slate-700 mb-1.5">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wide text-slate-700 mb-1.5">
                  REQUIREMENTS
                </label>
                <textarea
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-slate-300 text-[#1d4ed8] focus:ring-[#1d4ed8]"
                  />
                  <span className="text-sm text-slate-700">
                    I&apos;m not a robot
                  </span>
                </label>
                <div className="text-right leading-tight">
                  <p className="text-[10px] font-semibold text-slate-400">
                    RECAPTCHA
                  </p>
                  <p className="text-[10px] text-slate-400">Privacy Terms</p>
                </div>
              </div>

              <div className="-mx-6 -mb-6 mt-6 flex items-center justify-end gap-4 rounded-b-2xl border-t border-slate-200 bg-slate-50 px-6 py-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs font-bold tracking-wide text-slate-500 hover:text-slate-800 transition"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-6 py-2 rounded-lg text-sm transition"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
