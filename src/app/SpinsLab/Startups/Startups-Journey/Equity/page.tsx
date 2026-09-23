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
  RefreshCw,
  Zap,
  BookOpen,
  ClipboardList,
  Lock,
  Wallet,
  Settings2,
  BarChart3,
  UserX,
  Table2,
  Calculator,
  X,
} from "lucide-react";

function MediaFrame({
  className = "",
  aspect = "aspect-video",
  imageSrc = "/",
}: {
  className?: string;
  aspect?: string;
  imageSrc?: string;
}) {
  return (
    <div
      className={`relative w-full ${aspect} rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm ${className}`}
    >
      <Image src={imageSrc} alt="" fill className="object-cover" />
    </div>
  );
}

function VideoCard({ title, videoUrl }: { title: string; videoUrl: string }) {
  return (
    <div className="group relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-[#7494ec]/10 hover:-translate-y-1 transition-all duration-500 bg-linear-to-br from-slate-900 to-blue-950">
      <iframe
        src={videoUrl}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#7494ec]/40 shadow-sm hover:shadow-xl hover:shadow-[#7494ec]/10 hover:-translate-y-1 transition-all duration-500">
      <div className="w-12 h-12 rounded-xl bg-[#7494ec]/10 flex items-center justify-center group-hover:bg-[#7494ec]/20 group-hover:scale-110 transition-all duration-300 mb-5">
        <Icon className="w-6 h-6 text-[#7494ec]" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureRow({
  icon: Icon,
  title,
  description,
  reverse = false,
  imageSrc = "/",
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  reverse?: boolean;
  imageSrc?: string;
}) {
  return (
    <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl p-6 md:p-8 border border-transparent hover:border-[#7494ec]/30 hover:bg-white hover:shadow-xl hover:shadow-[#7494ec]/5 transition-all duration-500">
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <MediaFrame
          className="group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-500"
          imageSrc={imageSrc}
        />
      </div>

      <div className={reverse ? "lg:order-1" : "lg:order-2"}>
        <div className="w-11 h-11 rounded-xl bg-[#7494ec]/10 flex items-center justify-center group-hover:bg-[#7494ec]/20 group-hover:scale-110 transition-all duration-300 mb-4">
          <Icon className="w-5 h-5 text-[#7494ec]" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function EquityPage() {
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

  const highlightCards = [
    {
      icon: RefreshCw,
      title: "Always 100% Fair",
      description:
        "Ownership is anchored to real, ongoing contributions instead of a one-time guess, so it keeps adapting automatically as your venture evolves. A built-in calculator helps you value every founder, employee, and partner contribution as it happens.",
    },
    {
      icon: Zap,
      title: "Effortless to Manage",
      description:
        "The split updates itself as your team puts in time, money, ideas, relationships, supplies, equipment, or anything else the company depends on — no spreadsheets or manual re-negotiation required.",
    },
  ];

  const featureRows = [
    {
      icon: ClipboardList,
      title: "Track what people actually contribute",
      description:
        "Log time, expenses, supplies, equipment, idea royalties, sales commissions, and any other contribution a team member makes. Recurring items — like monthly rent or a weekly payroll run — can be set to repeat automatically.",
      imageSrc: "/images/equityimage1.png",
    },
    {
      icon: Lock,
      title: "Manage access and oversight",
      description:
        "Everyone submits their own contributions from their own account, while admins control what each person can see or do. Give teammates visibility into only their own activity, or open it up to full company-wide reporting — and require approval before anything is added.",
      reverse: true,
      imageSrc: "/images/equityimage2.png",
    },
    {
      icon: Wallet,
      title: "Track cash investments separately",
      description:
        "Invested cash is held in a dedicated pool until it's actually spent. Ownership is only recalculated once those funds are drawn down to cover expenses, so contributions aren't double-counted or allocated too early.",
      imageSrc: "/images/equityimage3.png",
    },
    {
      icon: Settings2,
      title: "Customize the rules to fit your policy",
      description:
        "Default settings reflect widely used best practices, but every variable can be tuned to your company's own norms — commission and royalty rates, custom project categories, and how mileage or expenses are calculated.",
      reverse: true,
      imageSrc: "/images/equityimage4.png",
    },
    {
      icon: BarChart3,
      title: "Make due diligence simple",
      description:
        "Built-in logs, reports, and charts turn every contribution into a clear picture for managers and prospective investors — how time is spent, how cash is deployed, and how other resources are being used.",
      imageSrc: "/images/equityimage5.png",
    },
    {
      icon: UserX,
      title: "Handle departures fairly",
      description:
        "When someone leaves, ownership is recalculated automatically and a fair buyout value is determined based on the circumstances of their departure — protecting the interests of the company and the individual alike.",
      reverse: true,
      imageSrc: "/images/equityimage6.png",
    },
    {
      icon: Table2,
      title: "A cap table you can always trust",
      description:
        "Unlike static models built on fixed guesses, this cap table reflects the true, current split at every moment — updating automatically as contributions change instead of locking in a one-off estimate.",
      imageSrc: "/images/equityimage7.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative w-full h-auto min-h-150 flex items-center bg-linear-to-r from-slate-900 to-blue-950 overflow-hidden pt-32 pb-20">
        <Image
          src="/images/spinnlabHerobg.png"
          alt="SPINN Labs Hero"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl">
            <div className="mb-12">
              <span className="inline-block py-1 px-4 bg-[#7494ec]/20 border border-[#7494ec] rounded-full text-sm font-semibold text-[#7494ec] mt-2 mb-3">
                SPINNLAB
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                Equity model
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
          <div className="max-w-6xl mx-auto space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="px-6 py-2.5 bg-[#7494ec] text-white rounded-full font-medium hover:bg-[#5a7bd4] hover:shadow-lg hover:shadow-[#7494ec]/30 transition-all duration-300 hover:scale-105"
                  >
                    Login
                  </button>
                </div>
                <span className="inline-block py-1 px-4 bg-[#7494ec]/10 border border-[#7494ec]/30 rounded-full text-sm font-semibold text-[#7494ec] mb-4">
                  EQUITY DISTRIBUTION
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-5">
                  A Fair, Formula-Driven Model For Founder Equity
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Rather than negotiating a one-time guess at ownership, this
                    model ties every founder&apos;s and early team member&apos;s
                    share directly to what they actually put in — so equity
                    stays fair even as the venture, and its needs, keep
                    changing.
                  </p>
                  <p>
                    Contributions at risk can take many forms: time, money,
                    ideas, relationships, supplies, equipment, facilities, or
                    any other resource the company relies on. As those
                    contributions evolve, the split adjusts right along with
                    them.
                  </p>
                  <p>
                    Every contribution, whether it&apos;s cash or non-cash —
                    like unpaid hours or out-of-pocket expenses — is converted
                    into a common unit of measurement, so nothing is undervalued
                    just because it wasn&apos;t paid in dollars.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <VideoCard
                  title="Perfectly Fair Cofounder Equity Splits for Startups"
                  videoUrl="https://www.youtube.com/embed/sqUHmlFPpkY"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <VideoCard
                title="See The Equity Split Tool In Action"
                videoUrl="https://www.youtube.com/embed/3bjT71MAF2s"
              />

              <div>
                <div className="w-11 h-11 rounded-xl bg-[#7494ec]/10 flex items-center justify-center mb-4">
                  <Calculator className="w-5 h-5 text-[#7494ec]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  Individual Equity Share = Individual Slices ÷ Total Slices
                </h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    That single formula gives an accurate split at any point in
                    time, adjusting as your venture progresses — right up until
                    the company reaches breakeven or raises enough capital to
                    compensate everyone for what they&apos;ve put in. From that
                    point on, the split locks in and determines how future
                    dividends or proceeds are shared.
                  </p>
                  <p>
                    The same formula also makes it straightforward to calculate
                    a fair buyout value if someone leaves the team before that
                    milestone is reached.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlightCards.map((card, index) => (
                <InfoCard key={index} {...card} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#7494ec]/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-[#7494ec]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  Built On A Proven Formula
                </h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Traditional equity splits are often based on guesses about
                    the future, negotiating leverage, or rules of thumb. This
                    model takes a different approach: it&apos;s grounded in what
                    participants actually contribute over time, not what anyone
                    predicts they might contribute.
                  </p>
                  <p>
                    That real-world foundation is what keeps the split
                    trustworthy for founders, employees, and investors alike.
                  </p>
                </div>
              </div>

              <MediaFrame imageSrc="/images/equityimage1.png" />
            </div>

            <div className="space-y-4">
              {featureRows.map((row, index) => (
                <FeatureRow key={index} {...row} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
