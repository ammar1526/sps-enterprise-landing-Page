"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useCountUp(target: number, duration = 2000, start: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration]);

  return value;
}

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(20, 2000, inView);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0a1a3f]"
      style={{
        backgroundImage: "url('/images/about-us/867.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#0a1a3f]/75" aria-hidden="true" />

      <div className="relative container mx-auto max-w-350 px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative w-full max-w-130 mx-auto lg:mx-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src="/images/about-us/501.webp"
                alt="About SPS"
                width={520}
                height={620}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 right-4 sm:right-8 lg:-right-6 bg-[#1e3a8a] text-white rounded-2xl px-7 py-6 shadow-xl shadow-black/40 min-w-45">
              <div className="text-4xl sm:text-5xl font-bold leading-none tabular-nums">
                {count}+
              </div>
              <div className="mt-2 text-sm sm:text-base leading-tight">
                Years of
                <br />
                Service
                <br />
                Excellence
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-10 lg:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                  Who we are
                </h2>

                <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed">
                  At Software Productivity Strategists (SPS) Inc, we identify
                  ourselves as an AI company where all our experiences and
                  expertise of the past three decades have come together into
                  one core. We develop AI based solutions for corporations and
                  startups. From strategy to execution, we guide our clients
                  through their next digital transformation, leveraging
                  technologies like Analytics, Natural Language Processing,
                  Computer Vision, Machine Learning and IoT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
