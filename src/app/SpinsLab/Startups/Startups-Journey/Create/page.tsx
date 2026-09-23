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
  DollarSign,
  Shield,
  Users,
  Palette,
  ShoppingBag,
  UserPlus,
  Handshake,
  FileSignature,
  Cpu,
  RefreshCw,
  BarChart,
  Heart,
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
      title: "Idea Generation and Validation",
      icon: Lightbulb,
      items: [
        "Identify a Problem: Start by identifying a real problem or need in the market that your startup can address.",
        "Market Research: Conduct thorough market research to understand the target audience, competition, and industry trends.",
        "Idea Validation: Test your startup idea with potential customers, gather feedback, and validate its viability.",
      ],
    },
    {
      title: "Business Planning",
      icon: FileText,
      items: [
        "Business Plan: Create a comprehensive business plan that outlines your vision, mission, objectives, and strategies.",
        "Target Market: Define your target market and buyer personas.",
        "Revenue Model: Determine how your startup will generate revenue (e.g., subscription, e-commerce, advertising).",
        "Financial Projections: Develop financial forecasts, including income statements, balance sheets, and cash flow statements.",
      ],
    },
    {
      title: "Legal and Regulatory Considerations",
      icon: Shield,
      items: [
        "Business Structure: Choose the legal structure for your startup (e.g., LLC, corporation, sole proprietorship).",
        "Name and Trademarks: Select a unique business name and check for trademark availability.",
        "Permits and Licenses: Identify and acquire any necessary permits and licenses for your industry and location.",
      ],
    },
    {
      title: "Funding and Financing",
      icon: DollarSign,
      items: [
        "Funding Strategy: Determine how you'll finance your startup (e.g., self-funding, loans, investors, crowdfunding).",
        "Pitch Deck: Prepare a compelling pitch deck for potential investors.",
      ],
    },
    {
      title: "Team Building",
      icon: Users,
      items: [
        "Co-Founders and Team: Identify and recruit co-founders and key team members with the required skills and expertise.",
        "Advisors and Mentors: Build a network of advisors and mentors who can provide guidance.",
      ],
    },
    {
      title: "Product or Service Development",
      icon: Cpu,
      items: [
        "Product/Services Definition: Clearly define your product or service and its unique selling points.",
        "Prototyping: Develop a prototype or minimum viable product (MVP) for testing.",
        "Development Roadmap: Create a product development roadmap with milestones and timelines.",
      ],
    },
    {
      title: "Branding and Marketing",
      icon: Palette,
      items: [
        "Brand Identity: Develop a strong brand identity, including a logo, color scheme, and brand guidelines.",
        "Marketing Strategy: Create a marketing strategy that encompasses online and offline channels.",
        "Website and Online Presence: Establish an online presence with a professional website and social media profiles.",
      ],
    },
    {
      title: "Sales and Distribution",
      icon: ShoppingBag,
      items: [
        "Sales Strategy: Outline your sales strategy and set sales goals.",
        "Distribution Channels: Determine how you'll deliver your product or service to customers.",
      ],
    },
    {
      title: "Customer Acquisition",
      icon: UserPlus,
      items: [
        "Customer Acquisition Plan: Develop a plan for acquiring your first customers.",
        "Customer Relationship Management (CRM): Choose a CRM system to manage customer relationships.",
      ],
    },
    {
      title: "Financial Management",
      icon: BarChart,
      items: [
        "Financial Tools: Set up financial tracking and accounting systems.",
        "Budgeting: Create a budget for startup expenses and operations.",
      ],
    },
    {
      title: "Networking and Support",
      icon: Handshake,
      items: [
        "Networking: Build relationships with other entrepreneurs, industry peers, and potential partners.",
        "Support Ecosystem: Explore startup incubators, accelerators, and co-working spaces in your area.",
      ],
    },
    {
      title: "Legal Documentation",
      icon: FileSignature,
      items: [
        "Contracts and Agreements: Draft any necessary contracts, such as partnership agreements or employment contracts.",
        "Intellectual Property: Protect your intellectual property through patents, trademarks, or copyrights as needed.",
      ],
    },
    {
      title: "Technology and Tools",
      icon: Cpu,
      items: [
        "Tech Stack: Choose the technology stack for your product and consider the tools needed for operations and marketing.",
      ],
    },
    {
      title: "Testing and Feedback",
      icon: RefreshCw,
      items: [
        "Beta Testing: Conduct beta testing with early users and gather feedback.",
        "Iterative: Continuously improve your product or service based on user feedback.",
      ],
    },
    {
      title: "Launch and Growth Plan",
      icon: Rocket,
      items: [
        "Launch Strategy: Develop a comprehensive launch plan to create buzz around your startup.",
        "Growth Strategies: Outline strategies for scaling and expanding your business.",
      ],
    },
    {
      title: "Adaptability and Resilience",
      icon: Heart,
      items: [
        "Flexibility: Be prepared to pivot your business strategy if needed based on market feedback.",
        "Resilience: Develop a mindset of resilience to face challenges and setbacks.",
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
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 container mx-auto px-6 mt-10">
          <div className="max-w-5xl">
            <div className="mb-12">
              <span className="inline-block py-1 px-4 bg-[#7494ec]/20 border border-[#7494ec] rounded-full text-sm font-semibold text-[#7494ec] mt-2 mb-3">
                SPINNLAB
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                Create Plan
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

      <section className="py-20 bg-linear-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-6">
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-6 py-2.5 bg-[#7494ec] text-white rounded-full font-medium hover:bg-[#5a7bd4] hover:shadow-lg hover:shadow-[#7494ec]/30 transition-all duration-300 hover:scale-105"
                >
                  Login
                </button>
              </div>
              <span className="inline-block py-1 px-4 bg-[#7494ec]/10 border border-[#7494ec]/30 rounded-full text-sm font-semibold text-[#7494ec] mb-4">
                STARTUP CHECKLIST
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Conceiving a Startup
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Conceiving a startup is an exciting but challenging process. To
                help you get started, here&apos;s a checklist of essential tasks
                to execute when conceiving a startup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checklistItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#7494ec]/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#7494ec]/5"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#7494ec]/10 flex items-center justify-center group-hover:bg-[#7494ec]/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5 text-[#7494ec]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">
                        {item.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {item.items.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7494ec] mt-1.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-8 bg-linear-to-r from-[#7494ec]/5 to-[#ef5fb3]/5 rounded-2xl border border-[#7494ec]/20 text-center">
              <p className="text-slate-700 text-lg font-medium">
                Starting a startup is a complex journey that requires careful
                planning, dedication, and adaptability. This checklist can serve
                as a guide to ensure you cover the crucial tasks at each stage
                of the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
