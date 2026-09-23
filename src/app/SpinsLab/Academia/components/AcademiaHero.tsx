import React from "react";
import Image from "next/image";

export default function OverviewHero() {
  return (
    <section className="relative w-full h-125 flex items-center bg-linear-to-r from-slate-900 to-blue-950 overflow-hidden">
      <Image
        src="/images/spinnlabHerobg.png"
        alt="SPINN Labs Hero"
        fill
        className="object-cover opacity-50 mt-12"
        priority
      />
      <div className="relative z-10 container mx-auto px-6 mt-20">
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-4 bg-[#7494ec]/20 border border-[#7494ec] rounded-full text-sm font-semibold text-[#7494ec] mb-6">
            SPINNLAB
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Academia
          </h1>
          <p className="text-md text-slate-100 leading-relaxed max-w-2xl drop-shadow-xl">
            The Academic Outreach Program at SpinnLabs is focused on introducing
            the faculty and students to the technologies and opportunities that
            exist in industry today.
          </p>
        </div>
      </div>
    </section>
  );
}
