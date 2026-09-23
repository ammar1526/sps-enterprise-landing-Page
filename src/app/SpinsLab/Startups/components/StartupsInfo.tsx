import React from "react";
import {
  Lightbulb,
  FileText,
  Scale,
  PenTool,
  Play,
  Rocket,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function StartupJourney() {
  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Propose idea",
      description:
        "Share your startup's story with us. Describe your idea, how it solves industry challenges, and what sets it apart from the competition. Introduce your team, their expertise, and the mentors supporting you. Highlight your innovation's core technology and its unique selling points. Tell us about your vision and exit strategy.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Create Plan",
      description:
        "Craft a comprehensive business plan that covers every aspect of your venture, from product development to branding and legal protection. Embrace equity allocation with the Slicing Pie method for fair distribution. Our entrepreneurship agreement sets the foundation for collective success.",
    },
    {
      number: "03",
      icon: Scale,
      title: "Equity model",
      description:
        "The equity model is a financial framework that allocates ownership shares based on each party's contributions to a venture, ensuring a fair distribution of ownership and responsibility.",
    },
    {
      number: "04",
      icon: PenTool,
      title: "Sign agreement",
      description:
        "Please review the terms and conditions carefully before signing the agreement. The parties involved are now ready to sign the agreement, solidifying their commitment to the project.",
    },
    {
      number: "05",
      icon: Play,
      title: "Execute plan",
      description:
        "Stay on track with your startup journey. Monitor milestones, timeframes, and deliverables. Keep product development, team building, and go-to-market strategies on course. Adjust branding, pricing, and financial management as market conditions evolve. Ensure legal protection and robust performance evaluation system.",
    },
    {
      number: "06",
      icon: Rocket,
      title: "Launch startup",
      description:
        "When the time is right, spin off your venture into an independent business unit. Operate autonomously, pursue your own objectives, and seize focused growth opportunities.",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-blue-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 bg-[#7494ec]/10 border border-[#7494ec]/30 rounded-full text-sm font-semibold text-[#7494ec] mb-4">
              ENTREPRENEURSHIP JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Six-Step Entrepreneurship Journey
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              A structured pathway to transform your vision into a successful
              startup, guided by expertise and innovation at every step.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#7494ec]/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#7494ec]/5 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-[#7494ec]/0 via-[#7494ec]/5 to-[#ef5fb3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-[#7494ec]/10 flex items-center justify-center group-hover:bg-[#7494ec]/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-8 h-8 text-[#7494ec]" />
                      </div>
                      <div className="mt-3 text-center">
                        <span className="text-2xl font-bold text-[#7494ec] opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-slate-800">
                          {step.number}. {step.title}
                        </h3>
                        <CheckCircle className="w-5 h-5 text-[#7494ec] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 bg-[#698ff7] text-white px-8 py-3.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#7494ec]/30 transition-all group cursor-pointer">
              Start Your Journey Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
