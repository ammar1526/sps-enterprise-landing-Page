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

export default function SignAgreementPage() {
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
                Sign agreement
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

      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="mb-10">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-8 py-3 bg-[#7494ec] text-white rounded-full font-medium hover:bg-[#5a7bd4] hover:shadow-lg hover:shadow-[#7494ec]/30 transition-all duration-300 hover:scale-105"
              >
                Login
              </button>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-[#7494ec]/10 hover:border-[#7494ec]/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[#7494ec]/0 via-[#7494ec]/0 to-[#7494ec]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#7494ec] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

              <p className="relative z-10 text-slate-700 leading-relaxed text-base md:text-lg text-center">
                The Entrepreneurship Agreement establishes an arrangement
                between parties&apos; intent to collaborate on a business
                venture. It outlines key provisions, including the development
                of a Business Plan, contributions from the Parties to make it
                financially viable, and the establishment of a for-profit entity
                upon achieving milestones. Equity distribution is based on
                contributions, and the Parties may permit additional individuals
                or entities to join. Disputes will be resolved through
                negotiation and arbitration. The agreement also covers
                intellectual property rights and various procedural details
                related to decision-making, costs, and dispute resolution.
                Amendments require written consent from all Parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
