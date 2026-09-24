import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function InternshipHero() {
  return (
    <section className="relative w-full min-h-125 md:min-h-150 flex items-center justify-center bg-slate-900 overflow-hidden">
      <Image
        src="/images/internship/banner.webp"
        alt="SPS Internship Program"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-blue-900/75" />

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight max-w-7xl mx-auto mb-6 drop-shadow-md">
          Start Your Professional Journey By Joining The SPS Internship Program
        </h1>

        <p className="text-sm md:text-base lg:text-lg text-white/95 leading-relaxed max-w-4xl mx-auto mb-10 drop-shadow-blue-800 drop-shadow-md">
          Join our hybrid internship program, open to graduate and undergraduate
          students. Choose your career track, learn industry tools, work with
          expert mentors, and earn professional certifications — all without
          leaving your campus.
        </p>

        <div className="flex justify-center">
          <button className="group inline-flex items-center gap-3 bg-[#22499d] hover:bg-blue-950 text-white font-semibold text-sm md:text-base pl-7 pr-2 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer border-blue-900 border">
            Apply Now
            <span className="w-9 h-9 bg-white text-[#2563eb] rounded-xl inline-flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
