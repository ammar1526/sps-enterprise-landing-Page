import React from "react";
import { Brain, Cloud, Shield, Wifi, ArrowRight } from "lucide-react";

export default function Technologies() {
  const technologies = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "We develop AI-based solutions for corporates & startups. From strategy to execution, we guide our clients through their next digital transformation leveraging technologies like Data Analytics, Natural Language Processing, Computer Vision, Machine Learning, Deep Learning & IoT. We go beyond analytics to give our customers the content they crave.",
      tags: [
        "Data Analytics",
        "NLP",
        "Computer Vision",
        "Machine Learning",
        "Deep Learning",
        "IoT",
      ],
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: Cloud,
      title: "Cloud",
      description:
        "From building a holistic strategy through implementing and managing robust cloud technologies, SPS specialists are dedicated to making sure you get the most out of the cloud. They bring leadership and experience with integrating the latest cloud services to help you build secure industry solutions.",
      tags: [
        "Strategy",
        "Implementation",
        "Management",
        "Integration",
        "Security",
      ],
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "SPS Cybersecurity team has the following practices: Digital Trust - User Security, Data Security, Mobile Device Management Threat Management - Cybersecurity Program, SIEM systems, Application Security, Network Security Keysight - Professional Services, Help Desk Services, Security Operations.",
      tags: [
        "Digital Trust",
        "Threat Management",
        "Network Security",
        "SIEM",
        "Application Security",
      ],
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: Wifi,
      title: "IoT",
      description:
        "SPS Cybersecurity team has the following practices: Digital Trust - User Security, Data Security, Mobile Device Management Threat Management - Cybersecurity Program, SIEM systems, Application Security, Network Security Keysight - Professional Services, Help Desk Services, Security Operations.",
      tags: [
        "Digital Trust",
        "Threat Management",
        "Network Security",
        "SIEM",
        "Application Security",
      ],
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-4 bg-[#7494ec]/10 border border-[#7494ec]/30 rounded-full text-sm font-semibold text-[#7494ec] mb-4">
              OUR EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Technologies
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Cutting-edge technology solutions designed to transform your
              business and drive innovation across every dimension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#7494ec]/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#7494ec]/10 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${tech.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${tech.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}
                      >
                        <Icon className={`w-6 h-6 text-[#7494ec]`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-1">
                          {tech.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[#7494ec] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {tech.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {tech.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${tech.bgColor} text-slate-700 border border-slate-200/50 group-hover:border-[#7494ec]/30 transition-colors duration-300`}
                        >
                          {tag}
                        </span>
                      ))}
                      {tech.tags.length > 4 && (
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium text-slate-500">
                          +{tech.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {tech.title} Solutions
                      </span>
                      <button className="text-xs font-semibold text-[#7494ec] hover:text-[#6884d3] transition-colors flex items-center gap-1">
                        Learn More
                        <ArrowRight className="w-3 h-3" />
                      </button>
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
