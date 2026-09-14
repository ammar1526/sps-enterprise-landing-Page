"use client";

import { useState } from "react";
import Image from "next/image";

const AREAS = [
  "Sales & Accounting",
  "HR & Learning",
  "Product & Services",
  "Forecast & Statements",
  "IT & Marketing",
] as const;

export default function BusinessManagement() {
  const [active, setActive] = useState<(typeof AREAS)[number]>(AREAS[0]);

  return (
    <section className="relative grid gap-12 overflow-hidden bg-[#0a1330] px-8 py-20 text-white md:grid-cols-2 md:px-16">
      <Image
        src="/images/banners/867.webp"
        alt=""
        fill
        className="object-cover opacity-20 mix-blend-luminosity"
        priority
      />
      <div className="absolute inset-0 bg-blue-950/60" />

      <div className="relative z-10">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Business Management Areas
        </h2>

        <p className="mt-4 leading-relaxed text-slate-300">
          Our BMS provides comprehensive coverage across all critical
          operational verticals of a modern enterprise.
        </p>

        <div className="mt-8 flex flex-col gap-1">
          {AREAS.map((area) => (
            <button
              key={area}
              type="button"
              onClick={() => setActive(area)}
              aria-pressed={active === area}
              className={`flex items-center gap-3 rounded-md px-4 py-3 text-left text-sm transition ${
                active === area
                  ? "border-l-2 border-blue-400 bg-blue-500/20 text-white"
                  : "border-l-2 border-transparent text-slate-300 hover:bg-white/5"
              }`}
            >
              <Image src="/chart.png" alt="" width={20} height={20} />
              {area}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col rounded-lg bg-blue-950/40 p-6 backdrop-blur-sm">
        <div className="mb-2 text-sm text-slate-200">{active}</div>

        <div className="relative h-75 w-full">
          <Image
            src="/images/bms/chart.png"
            alt="Business chart"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
