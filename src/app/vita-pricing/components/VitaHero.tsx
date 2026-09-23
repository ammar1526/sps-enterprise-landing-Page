"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-125 flex items-center bg-linear-to-r from-slate-900 to-blue-950 overflow-hidden">
      <Image
        src="/images/vita-pricing/vitaHerobg.jpg"
        alt="VITA Background"
        fill
        className="object-cover opacity-20"
        priority
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 mt-16">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 rounded-full border border-blue-400/30 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-blue-200 backdrop-blur-sm">
            VITA-PRICING
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            VITA Pricing
          </h1>

          <p className="text-base text-slate-200 leading-relaxed max-w-2xl mb-6 drop-shadow-lg">
            Authorized catalog pricing for IBM Reseller Software &amp; Services
            under the Commonwealth of Virginia&rsquo;s statewide IT procurement
            contract.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-[#7494ec] px-5 py-2 text-sm font-medium text-white shadow-md">
              VITA Contract Number: VA-220218-SPSI
            </span>
            <span className="inline-flex items-center rounded-full bg-[#7494ec] px-5 py-2 text-sm font-medium text-white shadow-md">
              Contract Title: IBM Reseller Software/Services
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
