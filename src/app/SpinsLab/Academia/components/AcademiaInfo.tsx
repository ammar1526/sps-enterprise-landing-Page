import React from "react";
import {
  Brain,
  Cloud,
  Wifi,
  Shield,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function OverviewAcademia() {
  const sigs = [
    {
      icon: Brain,
      label: "Artificial Intelligence",
      description: "Machine learning, deep learning, and neural networks",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Cloud,
      label: "Cloud",
      description: "Cloud infrastructure, DevOps, and scalable solutions",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Wifi,
      label: "IOT",
      description: "Connected devices, sensors, and smart systems",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Shield,
      label: "Cybersecurity",
      description: "Network security, encryption, and threat detection",
      color: "from-blue-500 to-cyan-400",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#7494ec]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 py-1 px-4 bg-[#7494ec]/10 border border-[#7494ec]/30 rounded-full text-sm font-semibold text-[#7494ec] mb-4">
              <GraduationCap className="w-4 h-4" />
              ACADEMIC OUTREACH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight mb-6">
              The Academic Outreach Program at SpinnLabs
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Focused on introducing the faculty and students to the
              technologies and opportunities that exist in the industry so they
              can understand the challenges and solve them resulting in
              innovation, entrepreneurship, and startups.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-xl font-semibold text-blue-950">
              We have four technology Special Interest Groups (SIGs) to
              facilitate this process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sigs.map((sig, index) => {
              const Icon = sig.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#7494ec]/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${sig.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#7494ec]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#7494ec]/20">
                        <Icon className="w-7 h-7 text-[#7494ec]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                          {sig.label}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {sig.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[#7494ec] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
