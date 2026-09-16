"use client";

import { useState } from "react";
import { Shield, ChevronRight } from "lucide-react";

const cybersecurityServices = [
  {
    id: "vapt",
    title: "Vulnerability Assessment and Penetration Testing",
    description:
      "In this service, SPS cybersecurity assessment consultants conduct and document a formal Security Assessment, Vulnerability Assessment, Penetration Testing and Configuration Reviews for Information Security Assets (IT and OT) with a view of identifying, estimating and prioritizing risks to which your organization's operations are exposed due to information security vulnerabilities.",
  },
  {
    id: "socaas",
    title: "SOC as a Service",
    description:
      "Security Operations Center as a Service (SOCaaS) provides continuous threat monitoring, detection, and expert response without the need to build your own SOC. Our scalable solution gives you access to cybersecurity professionals, real-time insights, and actionable guidance to protect your business from evolving threats.",
  },
];

export default function CountyService() {
  const [activeService, setActiveService] = useState("vapt");

  const currentService = cybersecurityServices.find(
    (s) => s.id === activeService,
  );

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Our Services for County Government
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Explore County Government services we provide across our core
            practices
          </p>
        </div>

        <div className="border border-slate-300 bg-blue-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center gap-1 border-b border-slate-200 px-4 pt-4 pb-0 bg-slate-50/50">
            <div className="flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-t-lg bg-[#7494ec] text-white">
              <Shield className="w-4 h-4" />
              Cybersecurity
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 min-h-80">
            <div className="md:col-span-1 bg-[#0b1f5c] p-6 flex flex-col gap-2">
              {cybersecurityServices.map((service) => {
                const isActive = activeService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-[#132d7a] text-white shadow-md"
                        : "text-slate-300 hover:text-white hover:bg-[#132d7a]/50"
                    }`}
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>

            <div className="md:col-span-2 bg-[#0b1f5c] p-8 flex flex-col justify-between">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8">
                {currentService?.description}
              </p>
              <div>
                <button className="inline-flex items-center gap-2 bg-white text-[#0b1f5c] px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-100 transition-colors">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
