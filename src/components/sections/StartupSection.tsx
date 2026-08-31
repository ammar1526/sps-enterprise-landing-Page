"use client";

import React from "react";
import Image from "next/image";

const StartupsSection = () => {
  return (
    <section className="relative w-full py-12 bg-linear-to-r from-blue-900 to-blue-950 overflow-hidden">
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-50 mb-4 tracking-tight">
          Our Startups
        </h2>

        <div className="h-1 w-20 bg-blue-400 mx-auto mb-6 rounded-full"></div>

        <h3 className="text-xl md:text-2xl font-medium text-blue-100 mb-6">
          Digital solutions we have built for ourselves and our customers
        </h3>

        <p className="text-blue-200 leading-relaxed text-sm md:text-base max-w-4xl mx-auto">
          We develop AI-based solutions for corporate & startups. From strategy
          to execution, we guide our clients through their next digital
          transformation leveraging technologies like Data Analytics, Natural
          Language Processing, Computer Vision, Machine Learning, Deep Learning
          & IoT.
        </p>
      </div>
    </section>
  );
};

export default StartupsSection;
