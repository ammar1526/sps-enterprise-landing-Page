import React from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function RoundtableHero() {
  const futureDates = [
    "July 14: Configuration Management",
    "Aug 11: Audit Readiness and Compliance Artifacts",
    "Sept 8: Security Controls Implementation & Monitoring",
    "Oct 13: Incident Response",
    "Nov 10: Disaster Recovery",
    "Dec 8: Business Continuity",
  ];

  return (
    <section className="relative w-full h-auto flex items-center bg-linear-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden py-16">
      <Image
        src="/images/roundtable/roundtableherobg.jpg"
        alt="VISO Roundtable Series"
        fill
        className="object-cover opacity-30"
        priority
      />

      <div className="relative z-10 container mx-auto px-6 mt-10">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 tracking-wide">
              VISO ROUNDTABLE SERIES
            </h1>
          </div>
          <p className="text-sm md:text-base font-semibold text-white tracking-widest uppercase">
            For Virginia Information Security Officers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="flex flex-col gap-6">
            <div className="group flex flex-1 items-start gap-4 p-5 rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
              <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-white/40 group-hover:border-yellow-400/70 transition-colors duration-300">
                <Image
                  src="/images/roundtable/dave_shure.webp"
                  alt="Dave Shure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base text-white">
                  <span className="font-semibold">Host: </span>
                  <span className="text-yellow-400 font-semibold">
                    Dave Shure
                  </span>
                  <LinkedInIcon className="inline-block w-4 h-4 ml-2 -mt-0.5 text-white/80" />
                </p>
                <p className="text-xs md:text-sm text-white/90 italic mt-1">
                  Information Security Officer
                </p>
                <p className="text-xs md:text-sm text-white/90 mt-2">
                  Virginia Department of Small Business and Supplier Diversity
                </p>
              </div>
            </div>

            <div className="group flex flex-1 items-start gap-4 p-5 rounded-2xl border border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
              <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-white/40 group-hover:border-yellow-400/70 transition-colors duration-300">
                <Image
                  src="/images/roundtable/nouman_abbasi.webp"
                  alt="Nouman Abbasi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base text-white">
                  <span className="font-semibold">Co-Host: </span>
                  <span className="text-yellow-400 font-semibold">
                    Nouman Abbasi
                  </span>
                  <LinkedInIcon className="inline-block w-4 h-4 ml-2 -mt-0.5 text-white/80" />
                </p>
                <p className="text-xs md:text-sm text-white/90 italic mt-1">
                  Sr VP, Professional Services
                </p>
                <p className="text-xs md:text-sm text-white/90 mt-2">
                  Software Productivity Strategists, Inc.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative flex flex-col rounded-2xl border border-white/40 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/70 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
            <div className="flex items-center gap-2 px-6 pt-6 pb-4">
              <ArrowRight className="w-5 h-5 text-yellow-400" />
              <span className="text-sm md:text-base text-white italic font-medium">
                Upcoming Session
              </span>
            </div>

            <div className="px-6 pb-4">
              <p className="text-xs md:text-sm font-bold text-yellow-400 tracking-widest uppercase mb-2">
                Topic
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                Change Management
              </h2>
            </div>

            <div className="mt-auto px-6 pb-6 space-y-4">
              <div>
                <p className="text-xs md:text-sm font-bold text-yellow-400 tracking-widest uppercase mb-1">
                  Date
                </p>
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm md:text-base">
                    Thursday, June 11th, 2026
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs md:text-sm font-bold text-yellow-400 tracking-widest uppercase mb-1">
                  Time
                </p>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm md:text-base">
                    11:00 AM - 12:00 PM Eastern
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group flex flex-col rounded-2xl border border-white/40 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/70 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
            <div className="px-6 py-6 border-b border-white/20">
              <h2 className="text-xl md:text-2xl font-bold text-yellow-400 leading-snug">
                Future Dates &amp; Tentative Topics
              </h2>
            </div>

            <div className="px-6 py-6 space-y-3">
              {futureDates.map((item, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base text-white/95 leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
