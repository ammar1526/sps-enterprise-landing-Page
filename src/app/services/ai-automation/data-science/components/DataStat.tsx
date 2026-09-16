"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 12, suffix: "+", label: "Years" },
  { value: 0, suffix: "+", label: "Employees" },
  { value: 87, suffix: "+", label: "Projects" },
  { value: 27, suffix: "+", label: "Clients" },
];

function useCountUp(target: number, duration = 1600, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, 1600, start);

  return (
    <div className="group relative flex flex-1 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_45px_-20px_rgba(29,78,216,0.35)]">
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-linear-to-r from-blue-600 via-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="bg-linear-to-br from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="mt-2 text-sm font-semibold uppercase tracking-widest text-slate-500">
        {label}
      </span>
    </div>
  );
}

export default function WorkInNumbers() {
  const [start, setStart] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white"
    >
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 sm:px-8 lg:flex-row lg:gap-16 lg:px-12 lg:py-24">
        <div className="w-full max-w-sm lg:w-1/4">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our work in{" "}
            <span className="bg-linear-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
              numbers.
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Build your web presence to thrive just like many others have, and
            let experienced technicians and digital creators develop
            functionalities that rivet your target audience.
          </p>
        </div>

        <div className="grid w-full flex-1 grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              start={start}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
