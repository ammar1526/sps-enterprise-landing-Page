import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  FileText,
  Scale,
  PenTool,
  Play,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function OverviewHero() {
  const steps = [
    {
      icon: Lightbulb,
      label: "Propose idea",
      href: "/SpinsLab/Startups/Startups-Journey/Propose",
    },
    {
      icon: FileText,
      label: "Create Plan",
      href: "/SpinsLab/Startups/Startups-Journey/Create",
    },
    {
      icon: Scale,
      label: "Equity model",
      href: "/SpinsLab/Startups/Startups-Journey/Equity",
    },
    {
      icon: PenTool,
      label: "Sign agreement",
      href: "/SpinsLab/Startups/Startups-Journey/Sign",
    },
    {
      icon: Play,
      label: "Execute plan",
      href: "/SpinsLab/Startups/Startups-Journey/Execute",
    },
    {
      icon: Rocket,
      label: "Launch startup",
      href: "/SpinsLab/Startups/Startups-Journey/Launch",
    },
  ];

  return (
    <section className="relative w-full h-auto min-h-150 flex items-center bg-linear-to-r from-slate-900 to-blue-950 overflow-hidden py-20">
      <Image
        src="/images/spinnlabHerobg.png"
        alt="SPINN Labs Hero"
        fill
        className="object-cover opacity-50"
        priority
      />
      <div className="relative z-10 container mx-auto px-6 mt-16">
        <div className="max-w-5xl">
          <div className="mb-12">
            <span className="inline-block py-1 px-4 bg-[#7494ec]/20 border border-[#7494ec] rounded-full text-sm font-semibold text-[#7494ec] mt-2 mb-3">
              SPINNLAB
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Startups
            </h1>
            <p className="text-sm text-slate-100 leading-relaxed max-w-3xl drop-shadow-xl">
              Experience our streamlined Six-Step Entrepreneurship Journey:
              &quot;Propose&quot; your startup story, vision, and unique selling
              points; &quot;Create&quot; a comprehensive business plan;
              &quot;Formulate&quot; equity allocation model; &quot;Sign&quot;
              entrepreneurship agreement; &quot;Execute&quot; with a focus on
              tracking milestones and adapting strategies; and
              &quot;Spin-Off&quot; when ready to become an independent business
              unit. Let&apos;s collaborate for your success!
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {steps.slice(0, 3).map((step, index) => {
              const Icon = step.icon;
              return (
                <Link
                  key={index}
                  href={step.href}
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:border-[#7494ec]/60 transition-all duration-300 hover:bg-[#7494ec]/20 hover:shadow-lg hover:shadow-[#7494ec]/20 hover:-translate-y-1 cursor-pointer overflow-hidden"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-[#7494ec]/0 via-[#7494ec]/10 to-[#ef5fb3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7494ec]/20 flex items-center justify-center group-hover:bg-[#7494ec]/30 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-4 h-4 text-[#7494ec]" />
                    </div>
                    <span className="text-white text-sm font-medium group-hover:text-[#7494ec] transition-colors duration-300">
                      {step.label}
                    </span>
                    <ArrowRight className="w-3 h-3 text-white/50 group-hover:text-[#7494ec] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            {steps.slice(3, 6).map((step, index) => {
              const Icon = step.icon;
              return (
                <Link
                  key={index}
                  href={step.href}
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:border-[#7494ec]/60 transition-all duration-300 hover:bg-[#7494ec]/20 hover:shadow-lg hover:shadow-[#7494ec]/20 hover:-translate-y-1 cursor-pointer overflow-hidden"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-[#7494ec]/0 via-[#7494ec]/10 to-[#ef5fb3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7494ec]/20 flex items-center justify-center group-hover:bg-[#7494ec]/30 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-4 h-4 text-[#7494ec]" />
                    </div>
                    <span className="text-white text-sm font-medium group-hover:text-[#7494ec] transition-colors duration-300">
                      {step.label}
                    </span>
                    <ArrowRight className="w-3 h-3 text-white/50 group-hover:text-[#7494ec] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
