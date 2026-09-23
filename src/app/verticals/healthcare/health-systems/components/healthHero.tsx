import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-150 flex items-center bg-slate-900 overflow-hidden">
      <Image
        src="/images/telehealth/TelehealthHero.jpg"
        alt="Government Hero"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="relative mt-20 z-10 container mx-auto px-6">
        <div className="max-w-2xl text-white">
          <span className="inline-block py-1 px-3 bg-[#7494ec6e] border-3 border-blue-500 rounded-full text-sm font-semibold mb-4">
            Healthcare
          </span>
          <h1 className="text-6xl font-bold bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-xl">
            Health Systems
          </h1>
          <p className="text-sm mb-8 text-slate-100 w-3xl drop-shadow-xl">
            HIPAA policy, including the threat of data breaches, may always be
            at the forefront of compliance concerns for the healthcare industry,
            and rightfully so. However, there are an increasing number of
            technological advancements playing a role in disrupting health care
            delivery and access that garner attention too. Often, solutions stem
            from the need to meet compliance. These analytics and IoT solutions
            are no exception.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#7494ec] text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-[#6884d3] transition cursor-pointer">
              Explore Our Solutions →
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition cursor-pointer">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
