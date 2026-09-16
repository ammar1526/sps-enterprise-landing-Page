"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, PhoneCall } from "lucide-react";

export default function DetailHero() {
  return (
    <section className="relative w-full bg-[#0f1f4b] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banners/p1.webp')" }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <span className="[writing-mode:vertical-rl] rotate-180 text-white/60 font-semibold tracking-[0.3em] uppercase text-sm">
          Our Solutions
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

      <div className="relative z-10 container mx-auto max-w-350 px-6 py-32 lg:py-44 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          GRC <br />
          <span className="text-blue-200 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            (Governance, Risk, and Compliance)
          </span>
        </h1>

        <p className="max-w-6xl mx-auto text-lg sm:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-white/95 font-normal leading-relaxed mb-8">
          With complex technological environments, innovations like operational
          technology (OT), Internet of Things (IoT) and Quantum can leave your
          enterprise open to third-party security and IT regulatory compliance
          risks. You need to consolidate these touch points into one governance,
          risk and compliance (GRC) environment to centralize and monitor risk
          management while meeting compliance and reporting needs. SPS offers
          comprehensive, product-agnostic GRC services from strategy through
          execution that provide guidance and support to select, integrate and
          automate multiple risk management programs with a single, centralized
          GRC platform.
        </p>

        <nav className="flex justify-center items-center gap-2 text-white font-medium">
          <Link
            href="/"
            className="text-blue-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-white/60" />
          <span className="text-white">Services</span>
        </nav>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:+11234567890"
          className="group flex items-center gap-4 bg-white rounded-full py-2 pl-2 pr-8 shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          <span className="w-12 h-12 flex items-center justify-center bg-[#0f1f4b] text-white rounded-full group-hover:bg-[#1d4ed8] transition-colors duration-300">
            <PhoneCall className="w-6 h-6" />
          </span>
          <span className="text-xl font-bold text-[#0f1f4b] group-hover:text-[#1d4ed8] transition-colors duration-300">
            Request a Quote
          </span>
        </a>
      </div>
    </section>
  );
}
