"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function SpsPageLoader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">(
    "loading",
  );
  const [progress, setProgress] = useState(0);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const duration = isFirstLoad.current ? 1400 : 800;
    isFirstLoad.current = false;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const start = performance.now();
    let raf = 0;
    let revealTimer: ReturnType<typeof setTimeout> | null = null;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        document.body.style.overflow = prevOverflow;

        setPhase("revealing");
        revealTimer = setTimeout(() => {
          setPhase("done");
        }, 700);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (revealTimer) clearTimeout(revealTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [pathname]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-99999 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] bg-blue-100 ${
        phase === "revealing"
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative flex flex-col items-center">
        <div className="relative w-40 h-40 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border border-blue-300/70" />

          <div className="absolute inset-0 animate-[spin_1.4s_linear_infinite]">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
          </div>

          <div
            className="absolute inset-0 animate-[spin_2s_linear_infinite_reverse]"
            style={{ animationDelay: "-0.3s" }}
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e11d48] shadow-[0_0_10px_rgba(225,29,72,0.5)]" />
          </div>

          <div
            className="absolute inset-0 animate-[spin_2.6s_linear_infinite]"
            style={{ animationDelay: "-0.8s" }}
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-900" />
          </div>

          <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden shadow-xl shadow-blue-900/20">
            <Image
              src="/images/screen.png"
              alt="SPS"
              width={128}
              height={128}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-3xl font-bold tracking-tight text-blue-900">
            SPS
          </span>
          <span className="text-[10px] font-semibold tracking-[0.35em] text-blue-900/50 uppercase">
            Enterprise
          </span>
        </div>
        <p className="text-[10px] tracking-[0.35em] text-slate-500 uppercase mb-6">
          Secure · Cloud · AI
        </p>

        <div className="w-55 h-0.75 bg-blue-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-blue-600 via-blue-500 to-[#e11d48] rounded-full transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-[10px] font-medium text-slate-500 tabular-nums">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
