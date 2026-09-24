import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function OverviewHero() {
  return (
    <section className="relative w-full min-h-125 sm:min-h-137.5 lg:h-150 flex items-center bg-linear-to-r from-slate-900 to-blue-950 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <Image
        src="/images/bg-new2.webp"
        alt="SPINN Labs Hero"
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-blue-800/20" />
      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-0 lg:mt-18">
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-3 sm:px-4 bg-[#7494ec]/50 border border-[#7494ec] rounded-full text-xs sm:text-sm font-semibold text-[#7494ec] mb-3 sm:mb-2">
            SPINNLAB
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-100 leading-tight mb-4 sm:mb-5 drop-shadow-xl">
            Welcome to our Global Centers of Expertise
          </h1>
          <p className="text-sm sm:text-base md:text-md text-white leading-relaxed max-w-3xl drop-shadow-xl font-medium">
            At SPS, we believe in the power of collaboration, innovation, and
            collective expertise. We are thrilled to invite you to join our
            distinguished Center of Expertise, a fraternity of subject matter
            experts dedicated to advancing knowledge, fostering collaboration,
            and shaping the future of technology.
          </p>
          <div className="mt-5 sm:mt-6">
            <button className="inline-flex items-center gap-2 bg-[#4d75e6] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-[#7494ec]/40 transition-all group cursor-pointer">
              Join Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
