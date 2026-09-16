"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Car,
  ShieldCheck,
  Video,
  X,
} from "lucide-react";

type SolutionTabId =
  | "access-control"
  | "body-worn-camera"
  | "intelligent-parking";

type SolutionTab = {
  id: SolutionTabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  diagramAlt: string;
  overview: string;
  benefits: string[];
};

const solutionTabs: SolutionTab[] = [
  {
    id: "access-control",
    label: "Access Control",
    icon: ShieldCheck,
    title: "Access Control",
    diagramAlt:
      "Access control solution diagram showing readers, intercoms, cameras and door controllers",
    overview:
      "Keys are a symbol of safety and security, but they can easily end up in the wrong hands or be copied. This solution creates a safe, secure environment that lets authorized people in and keeps uninvited people out. Two-way audio at the entry point lets your team verify visitors before granting access, and every authorized entry method routes through a single, centralized platform for managing and monitoring your site.",
    benefits: [
      "Efficient, scalable way to manage access across every entry point",
      "Nonproprietary — connects easily to your existing IP network",
      "Simple installation with PoE-powered devices",
      "Remotely monitor and manage access to your site from anywhere",
    ],
  },
  {
    id: "body-worn-camera",
    label: "Body Worn Camera Solution",
    icon: Video,
    title: "Body Worn Camera Solution",
    diagramAlt:
      "Body worn camera solution diagram showing camera, docking station and evidence management system",
    overview:
      "Built on an open system architecture, this body worn camera solution is designed for law enforcement and private security teams who need flexibility. It integrates with third-party video management and evidence systems as easily as it works with its own, and pairs with a mobile app for on-the-go review and tagging in the field.",
    benefits: [
      "12–17 hours of battery life with fast, easy remote charging",
      "Built-in GPS/GNSS receiver for location tracking",
      "1080p video at 30fps with dynamic range for low-light footage",
      "Video is encrypted at rest and in transit",
      "Cost-effective components that scale easily as your team grows",
    ],
  },
  {
    id: "intelligent-parking",
    label: "Intelligent Parking",
    icon: Car,
    title: "Intelligent Parking",
    diagramAlt:
      "Intelligent parking solution diagram showing sensors, cameras and a central monitoring dashboard",
    overview:
      "Replace guesswork with real-time visibility. Sensor-driven occupancy detection and license plate recognition give your facility a live picture of every space, so staff and visitors spend less time circling and more time where they need to be. Everything reports back to a single dashboard your team already knows how to use.",
    benefits: [
      "Real-time space availability across every lot and level",
      "Automated license plate recognition for permitted access",
      "Reduced congestion and improved traffic flow on site",
      "Detailed usage analytics to help plan for future capacity",
    ],
  },
];

export default function GovernmentHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTabId, setActiveTabId] =
    useState<SolutionTabId>("access-control");

  const openModal = (tabId: SolutionTabId) => {
    setActiveTabId(tabId);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  const activeTab =
    solutionTabs.find((tab) => tab.id === activeTabId) ?? solutionTabs[0];

  return (
    <>
      <section className="relative w-full min-h-150 flex items-center bg-slate-900 overflow-hidden">
        <Image
          src="/images/government/governmenthero.png"
          alt="Government Hero"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20">
          <span className="[writing-mode:vertical-rl] rotate-180 text-white/70 font-semibold tracking-[0.3em] uppercase text-sm">
            Verticals
          </span>
        </div>

        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="w-12 h-12 flex items-center justify-center border-2 border-white bg-white/10 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="w-12 h-12 flex items-center justify-center border-2 border-white bg-white/10 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-[#1877F2]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="X"
            className="w-12 h-12 flex items-center justify-center border-2 border-white bg-white/10 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-black"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="w-12 h-12 flex items-center justify-center border-2 border-white bg-white/10 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-[#FF0000]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-white text-center lg:text-left">
              <span className="inline-block py-1 px-3 bg-[#7494ec6e] border-3 border-blue-500 rounded-full text-sm font-semibold mb-4">
                PUBLIC SECTOR
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-gray-800 drop-shadow-xl">
                Government
              </h1>
              <p className="text-sm sm:text-base mb-8 text-slate-100 max-w-3xl mx-auto lg:mx-0 drop-shadow-xl">
                Governments continue to build on their momentum to deliver
                exceptional citizen services — and strengthen their readiness in
                advance of the next big disruptions. In support, SPS remains
                committed to the service of governments and citizens around the
                globe — across segments including social services, government
                health, tax management, critical infrastructure, education, and
                national security.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-md">
                <h2 className="text-base sm:text-lg font-bold text-white text-center">
                  Our Solutions{" "}
                  <span className="font-semibold text-blue-400">
                    (Click to learn more)
                  </span>
                </h2>

                <div className="mt-4 flex flex-col gap-3">
                  <button
                    onClick={() => openModal("access-control")}
                    className="group flex items-center justify-between rounded-2xl border-l-[6px] border-[#7494ec] bg-white py-3.5 pl-5 sm:pl-6 pr-3 text-left shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
                  >
                    <span className="font-semibold text-slate-800 text-sm sm:text-base">
                      Access Control
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors group-hover:bg-[#7494ec] group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>

                  <button
                    onClick={() => openModal("body-worn-camera")}
                    className="group flex items-center justify-between rounded-2xl border-l-[6px] border-[#7494ec] bg-white py-3.5 pl-5 sm:pl-6 pr-3 text-left shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
                  >
                    <span className="font-semibold text-slate-800 text-sm sm:text-base">
                      Body Worn Camera Solution
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors group-hover:bg-[#7494ec] group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>

                  <button
                    onClick={() => openModal("access-control")}
                    className="group flex items-center justify-between rounded-2xl bg-[#7494ec] py-3.5 pl-5 sm:pl-6 pr-3 text-left shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-[#6884d3] cursor-pointer"
                  >
                    <span className="font-semibold text-white text-sm sm:text-base">
                      View More
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors group-hover:bg-white group-hover:text-[#7494ec]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="solutions-modal-title"
        >
          <div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 md:flex-row max-h-[95vh] md:max-h-[90vh] md:h-150">
            <aside className="shrink-0 border-b border-slate-100 bg-slate-50/80 md:w-64 lg:w-72 md:border-b-0 md:border-r">
              <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-3 sm:pb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7494ec]">
                  Government
                </p>
                <h2
                  id="solutions-modal-title"
                  className="mt-1 text-lg sm:text-xl font-bold text-slate-900"
                >
                  Our Solutions
                </h2>
              </div>

              <nav className="flex gap-2 overflow-x-auto px-3 sm:px-4 pb-3 sm:pb-4 md:flex-col md:overflow-visible md:px-3 md:pb-6">
                {solutionTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-medium transition-colors md:w-full cursor-pointer ${
                        isActive
                          ? "bg-[#7494ec] text-white shadow-md shadow-[#7494ec]/25"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                      aria-current={isActive}
                    >
                      <Icon
                        className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-[#7494ec]"}`}
                      />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </aside>

            <div className="relative flex-1 overflow-y-auto">
              <button
                onClick={closeModal}
                aria-label="Close solutions dialog"
                className="absolute right-3 top-3 sm:right-4 sm:top-4 z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-md ring-1 ring-slate-100 transition-colors hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 pr-10">
                  {activeTab.title}
                </h3>

                <div className="mt-4 sm:mt-5 flex items-center justify-center rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:p-6">
                  <Image
                    src="/images/government/Modalimage1.jpg"
                    alt={activeTab.diagramAlt}
                    width={640}
                    height={320}
                    className="h-auto w-full max-w-xl object-contain"
                  />
                </div>

                <div className="mt-5 sm:mt-6 grid gap-6 sm:gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-400">
                      Solution Overview
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {activeTab.overview}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-400">
                      Solution Benefits
                    </h4>
                    <ul className="mt-2 space-y-2 sm:space-y-2.5">
                      {activeTab.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-slate-600"
                        >
                          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7494ec]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
