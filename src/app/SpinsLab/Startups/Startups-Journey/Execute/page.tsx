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

  const checklistItems = [
    {
      title: "Idea and Market Research",
      items: [
        "Start by coming up with a unique and viable business idea. Ensure it solves a real problem or meets a demand in the market.",
        "Conduct thorough market research to understand your target audience, competition, and industry trends.",
      ],
    },
    {
      title: "Business Plan",
      items: [
        "Create a detailed business plan outlining your mission, vision, objectives, and strategies for success.",
        "Define your target market, marketing and sales strategies, financial projections, and operational plan.",
      ],
    },
    {
      title: "Legal Structure and Registration",
      items: [
        "Choose the legal structure for your business (e.g., sole proprietorship, LLC, corporation) and register your company with the appropriate authorities.",
      ],
    },
    {
      title: "Funding",
      items: [
        "Determine your startup's financial needs and secure the necessary funding. Options include bootstrapping, loans, venture capital, angel investors, or crowdfunding.",
      ],
    },
    {
      title: "Team Building",
      items: [
        "Recruit a skilled and motivated team with the expertise required to bring your idea to life. Surround yourself with people who share your vision and complement your skills.",
      ],
    },
    {
      title: "Product/Service Development",
      items: [
        "Develop your product or service, ensuring it meets the needs of your target market.",
        "Test and iterate to improve your offering based on user feedback.",
      ],
    },
    {
      title: "Marketing and Branding",
      items: [
        "Develop a strong brand identity and marketing strategy.",
        "Utilize various marketing channels, such as social media, content marketing, and advertising, to reach your target audience.",
      ],
    },
    {
      title: "Sales and Distribution",
      items: [
        "Establish a sales process and distribution channels.",
        "Train your sales team and monitor their performance.",
      ],
    },
    {
      title: "Customer Acquisition and Retention",
      items: [
        "Focus on acquiring early customers and retaining them through excellent customer service and product quality.",
        "Implement customer feedback to improve your product or service continually.",
      ],
    },
    {
      title: "Financial Management",
      items: [
        "Set up robust financial systems and track your income, expenses, and cash flow.",
        "Stay within your budget and be prepared to pivot if financial conditions change.",
      ],
    },
    {
      title: "Legal and Regulatory Compliance",
      items: [
        "Ensure that your startup complies with all applicable laws, regulations, and licenses.",
      ],
    },
    {
      title: "Scaling",
      items: [
        "Plan for growth by scaling your operations, increasing your customer base, and expanding into new markets.",
      ],
    },
    {
      title: "Adaptability",
      items: [
        "Be prepared to pivot and make adjustments to your business plan as needed based on changing market conditions or customer feedback.",
      ],
    },
    {
      title: "Networking and Partnerships",
      items: [
        "Build a strong network of mentors, advisors, and industry peers who can offer guidance and support.",
        "Explore potential partnerships that can help your business grow.",
      ],
    },
    {
      title: "Measuring Success",
      items: [
        "Define key performance indicators (KPIs) and regularly assess your progress.",
        "Be willing to make data-driven decisions and adjust your strategies accordingly.",
      ],
    },
    {
      title: "Resilience and Perseverance",
      items: [
        "Expect setbacks and challenges, and be resilient in the face of adversity.",
        "Perseverance is often the key to overcoming obstacles and achieving success.",
      ],
    },
    {
      title: "Exit Strategy",
      items: [
        "Consider your long-term goals, whether it's building a sustainable business, going public, or selling the company.",
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
          className="object-cover opacity-50 "
          priority
        />
        <div className="relative z-10 container mx-auto px-6 mt-10">
          <div className="max-w-5xl">
            <div className="mb-12">
              <span className="inline-block py-1 px-4 bg-[#7494ec]/20 border border-[#7494ec] rounded-full text-sm font-semibold text-[#7494ec] mt-2 mb-3">
                SPINNLAB
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                Execute Plan
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
              Executing a startup plan involves a series of well-defined steps
              and a significant amount of dedication, hard work, and
              adaptability. Here is a comprehensive guide on what it takes to
              execute a startup plan:
            </p>

            <div className="space-y-6">
              {checklistItems.map((item, index) => (
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
                Executing a startup plan is a demanding and dynamic process.
                Success often requires a combination of a solid plan, hard work,
                adaptability, and a bit of luck. It&apos;s essential to remain
                flexible, continuously learn, and stay committed to your vision.
                Remember that most successful startups face obstacles and
                failures along the way but use them as opportunities to learn
                and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
