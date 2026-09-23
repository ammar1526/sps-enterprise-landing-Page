"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Lightbulb,
  FileText,
  Scale,
  PenTool,
  Play,
  Rocket,
  ArrowRight,
  X,
} from "lucide-react";

export default function PlanPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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

  const spinOffItems = [
    {
      title: "Timing is Crucial",
      items: [
        "The decision to spin off a venture into an independent business unit should be carefully timed. It's not something to rush into. The right time typically comes when the venture has reached a level of maturity, stability, and self-sufficiency.",
      ],
    },
    {
      title: "Operational Independence",
      items: [
        "When spinning off, the venture should be given operational autonomy. This means it should have its own management team, budget, and decision-making processes. It operates independently from the parent company or organization.",
      ],
    },
    {
      title: "Distinct Objectives",
      items: [
        "The spin-off unit should have its own set of objectives and goals that are aligned with its specific mission. These objectives should be distinct from those of the parent company.",
      ],
    },
    {
      title: "Focused Growth Opportunities",
      items: [
        "An independent business unit can be more agile in pursuing growth opportunities. It can identify and focus on opportunities that are directly related to its core business, rather than being tied to the broader objectives of the parent organization.",
      ],
    },
    {
      title: "Resource Allocation",
      items: [
        "Resource allocation becomes more streamlined and efficient when the venture operates independently. It can allocate resources based on its specific needs and priorities, rather than being constrained by the resource allocation strategies of the parent company.",
      ],
    },
    {
      title: "Risk Management",
      items: [
        "Spinning off a venture can also help in managing risks. When a venture operates independently, the risks associated with its activities are contained within that unit, reducing the potential impact on the parent company's overall operations.",
      ],
    },
    {
      title: "Financial Structure",
      items: [
        "Consider the financial structure of the spin-off unit. This may involve securing its own funding or financing, and it should have a clear financial strategy to support its growth objectives.",
      ],
    },
    {
      title: "Legal and Organizational Structure",
      items: [
        "Ensure that the spin-off unit complies with all legal and regulatory requirements, including setting up a separate legal entity if necessary. Organizational structures, such as a board of directors or advisory board, should be established as well.",
      ],
    },
    {
      title: "Communication and Culture",
      items: [
        "Effective communication is crucial during the transition. Employees, customers, and stakeholders should be informed about the spin-off and any changes in how the business unit operates.",
        "Culturally, the unit should establish its own identity while maintaining a connection with the parent organization, especially if there are shared values or principles.",
      ],
    },
    {
      title: "Monitoring and Evaluation",
      items: [
        "The success of the spin-off unit should be closely monitored and evaluated. Regular assessments of its financial performance, achievement of objectives, and alignment with its mission are essential.",
      ],
    },
    {
      title: "Exit Strategy",
      items: [
        "The parent organization should have a clear exit strategy in mind. This could involve selling the spin-off unit, taking it public, or simply allowing it to operate independently as a subsidiary.",
        "The chosen strategy should align with the parent organization's long-term goals.",
      ],
    },
    {
      title: "Continued Collaboration",
      items: [
        "While operating independently, there may still be opportunities for collaboration between the parent organization and the spin-off unit, particularly in areas of mutual benefit or shared resources.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative w-full h-auto min-h-150 flex items-center bg-linear-to-r from-slate-900 to-blue-950 overflow-hidden py-20">
        <Image
          src="/images/spinnlabHerobg.png"
          alt="SPINN Labs Hero"
          fill
          className="object-cover opacity-50  "
          priority
        />
        <div className="relative z-10 container mx-auto px-6 mt-10">
          <div className="max-w-5xl">
            <div className="mb-12">
              <span className="inline-block py-1 px-4 bg-[#7494ec]/20 border border-[#7494ec] rounded-full text-sm font-semibold text-[#7494ec] mt-2 mb-3">
                SPINNLAB
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                Launch Startup
              </h1>
              <p className="text-sm text-slate-100 leading-relaxed max-w-3xl drop-shadow-xl">
                Experience our streamlined Six-Step Entrepreneurship Journey:
                &quot;Propose&quot; your startup story, vision, and unique
                selling points; &quot;Create&quot; a comprehensive business
                plan; &quot;Formulate&quot; equity allocation model;
                &quot;Sign&quot; entrepreneurship agreement; &quot;Execute&quot;
                with a focus on tracking milestones and adapting strategies; and
                &quot;Spin-Off&quot; when ready to become an independent
                business unit. Let&apos;s collaborate for your success!
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

      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-800">Login</h3>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="p-1 rounded-full hover:bg-slate-100 transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#7494ec] focus:ring-2 focus:ring-[#7494ec]/20 outline-none transition-all duration-200 text-slate-700 placeholder:text-slate-400"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Login Password"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#7494ec] focus:ring-2 focus:ring-[#7494ec]/20 outline-none transition-all duration-200 text-slate-700 placeholder:text-slate-400"
                />
              </div>
              <p className="text-sm text-red-500">
                Forgot Password? Click here to reset
              </p>
            </div>

            <div className="flex justify-end px-6 py-4 border-t border-slate-100">
              <button className="px-8 py-2.5 bg-[#1a73e8] text-white rounded-lg font-medium hover:bg-[#1557b0] transition-colors duration-200 shadow-sm hover:shadow-md">
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-6 py-2.5 bg-[#7494ec] text-white rounded-full font-medium hover:bg-[#5a7bd4] hover:shadow-lg hover:shadow-[#7494ec]/30 transition-all duration-300 hover:scale-105"
              >
                Login
              </button>
            </div>

            <p className="text-slate-700 leading-relaxed mb-10">
              The concept of spinning off a venture into an independent business
              unit is often associated with larger organizations that have
              incubated or developed new projects or divisions. However, this
              approach can also be applied to startups or smaller businesses
              when the circumstances are appropriate. Here&apos;s an overview:
            </p>

            <div className="space-y-6">
              {spinOffItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg hover:shadow-xl hover:border-[#7494ec]/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    {item.title}:
                  </h3>
                  <ul className="space-y-1.5">
                    {item.items.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7494ec] mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <p className="text-slate-700 text-sm leading-relaxed">
                The decision to spin off a venture into an independent business
                unit is a strategic one, and it should be based on a thorough
                analysis of the venture&apos;s readiness for independence and
                its potential for long-term growth. When executed correctly, it
                can lead to increased focus, growth, and adaptability for both
                the parent organization and the spin-off unit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
