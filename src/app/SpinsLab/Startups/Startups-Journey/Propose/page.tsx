"use client";

import { useState } from "react";
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
  User,
  Mail,
  Phone,
  Target,
  Award,
  Shield,
  DollarSign,
  AlertCircle,
  Globe,
  Users,
  Heart,
  TrendingUp,
  Brain,
  Flame,
  Clock,
  RocketIcon,
  CheckCircle,
  Landmark,
  X,
} from "lucide-react";

export default function Proposepage() {
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
      href: "/SpinsLab/Startups/Startups-Journey/EquityModel",
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

  const formFields = [
    { id: "fullName", label: "Your Full Name", icon: User },
    { id: "email", label: "Email Address", icon: Mail },
    { id: "phone", label: "Phone No.", icon: Phone },
    {
      id: "projectName",
      label: "Suggest a Name of this Project?",
      icon: Lightbulb,
    },
    {
      id: "vision",
      label: "Please share your Vision, Mission and Idea?",
      icon: Target,
    },
    {
      id: "passion",
      label: "Why are you passionate about this idea?",
      icon: Flame,
    },
    {
      id: "marketOpportunity",
      label: "What is the market opportunity?",
      icon: TrendingUp,
    },
    {
      id: "targetAudience",
      label: "Who is your target audience?",
      icon: Users,
    },
    {
      id: "valueProp",
      label: "What is your unique value proposition?",
      icon: Award,
    },
    {
      id: "revenueModel",
      label: "What is your revenue model?",
      icon: DollarSign,
    },
    {
      id: "businessPlan",
      label: "Do you have a business plan?",
      icon: FileText,
    },
    {
      id: "goToMarket",
      label: "What is your go-to-market strategy?",
      icon: RocketIcon,
    },
    {
      id: "financialPlan",
      label: "What is your financial plan and funding needs?",
      icon: DollarSign,
    },
    {
      id: "timeline",
      label: "What is your timeline for launch and growth?",
      icon: Clock,
    },
    {
      id: "challenges",
      label: "What challenges do you anticipate?",
      icon: AlertCircle,
    },
    {
      id: "adaptToMarket",
      label: "How do you plan to adapt to market changes?",
      icon: TrendingUp,
    },
    {
      id: "longTermVision",
      label: "What is your long-term vision for the company?",
      icon: Globe,
    },
    {
      id: "intellectualProperty",
      label:
        "How do you plan to handle intellectual property and legal issues?",
      icon: Shield,
    },
    {
      id: "exitStrategy",
      label: "What is your exit strategy?",
      icon: Landmark,
    },
    {
      id: "validateIdea",
      label: "What have you done so far to validate your idea?",
      icon: CheckCircle,
    },
    {
      id: "network",
      label: "Do you have a network of mentors or advisors?",
      icon: Users,
    },
    {
      id: "handleSetbacks",
      label: "How do you plan to handle setbacks and failures?",
      icon: Brain,
    },
    {
      id: "background",
      label: "What is your personal background and experience?",
      icon: User,
    },
    {
      id: "ethicalImplications",
      label:
        "Have you considered the ethical and social implications of your business?",
      icon: Heart,
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
          className="object-cover opacity-50 -mt-5 "
          priority
        />
        <div className="relative z-10 container mx-auto px-6 mt-10">
          <div className="max-w-5xl">
            <div className="mb-12">
              <span className="inline-block py-1 px-4 bg-[#7494ec]/20 border border-[#7494ec] rounded-full text-sm font-semibold text-[#7494ec] mt-2 mb-3">
                SPINNLAB
              </span>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                    Propose Your Idea
                  </h1>
                  <p className="text-sm text-slate-100 leading-relaxed max-w-3xl drop-shadow-xl">
                    Experience our streamlined Six-Step Entrepreneurship
                    Journey: &quot;Propose&quot; your startup story, vision, and
                    unique selling points; &quot;Create&quot; a comprehensive
                    business plan; &quot;Formulate&quot; equity allocation
                    model; &quot;Sign&quot; entrepreneurship agreement;
                    &quot;Execute&quot; with a focus on tracking milestones and
                    adapting strategies; and &quot;Spin-Off&quot; when ready to
                    become an independent business unit. Let&apos;s collaborate
                    for your success!
                  </p>
                </div>
              </div>
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
          <div className="max-w-4xl mx-auto">
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
                STARTUP PROPOSAL FORM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Submit an Idea
              </h2>
              <p className="text-slate-600">
                Fill out this comprehensive form to help us understand your
                vision and build a successful startup together.
              </p>
            </div>

            <form className="space-y-6">
              {formFields.map((field, index) => {
                const Icon = field.icon;
                return (
                  <div key={index} className="group">
                    <label
                      htmlFor={field.id}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2"
                    >
                      <Icon className="w-4 h-4 text-[#7494ec]" />
                      <span>
                        {index + 1}- {field.label}
                      </span>
                    </label>
                    <input
                      type="text"
                      id={field.id}
                      name={field.id}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#7494ec]/50 focus:ring-2 focus:ring-[#7494ec]/20 transition-all duration-300 outline-none bg-white hover:shadow-md hover:shadow-[#7494ec]/5 group-hover:border-[#7494ec]/30"
                    />
                  </div>
                );
              })}

              <div className="pt-6 flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#7494ec] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#7494ec]/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="px-8 py-3.5 border border-slate-300 text-slate-600 rounded-xl font-semibold hover:bg-slate-50 transition-colors duration-300"
                >
                  Clear All
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
