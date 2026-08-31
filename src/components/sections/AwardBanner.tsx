"use client";

import React from "react";
import Image from "next/image";

export default function AwardBanner() {
  return (
    <section className="relative w-full py-8 md:py-12 bg-linear-to-r from-blue-900 to-blue-950 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/startup-bg.webp"
          alt="Background Image"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white/5 to-transparent skew-x-12 transform pointer-events-none filter blur-sm" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug tracking-tight mb-4">
          We have an award-winning team that includes IBM-certified inventors
          and champions who have won multiple worldwide competitions.
        </h2>

        <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed font-normal max-w-4xl">
          As an enterprise-class innovator and solution creator with expertise
          across all phases of product design, development, deployment,
          security, operations, monitoring, and support, we have been helping
          our clients build, deploy and secure applications. Our development,
          quality, cybersecurity, training, operations, monitoring, and support
          teams work in tandem to create high-performance, secure, reliable,
          scalable, and manageable systems.
        </p>
      </div>
    </section>
  );
}
