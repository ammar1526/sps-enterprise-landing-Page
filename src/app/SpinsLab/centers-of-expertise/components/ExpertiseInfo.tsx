import React from "react";

import {
  Users,
  MessageSquare,
  BookOpen,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function OverviewExpertise() {
  const features = [
    {
      icon: Users,
      title: "Dynamic Community of Experts",
      description:
        "Immerse yourself in a vibrant community of professionals who excel in their respective fields. Connect with like-minded experts who share your passion and commitment to pushing the boundaries of knowledge.",
    },
    {
      icon: MessageSquare,
      title: "Collaborative Knowledge Exchange",
      description:
        "Our Center of Expertise provides a platform for open dialogue and knowledge exchange. Engage in thought-provoking discussions, share insights, and collaborate on innovative solutions to industry challenges.",
    },
    {
      icon: BookOpen,
      title: "Access to Exclusive Resources",
      description:
        "Stay ahead of the curve with privileged access to cutting-edge research, industry reports, and curated content. Our members enjoy a wealth of resources designed to keep them informed and at the forefront of their expertise.",
    },
    {
      icon: TrendingUp,
      title: "Influence Industry Trends",
      description:
        "Be a key player in shaping the future of information technology. Contribute your expertise to discussions, workshops, and events that influence industry best practices and set new standards.",
    },
    {
      icon: GraduationCap,
      title: "Professional Development Opportunities",
      description:
        "Elevate your skills and knowledge through specialized workshops, training sessions, and events tailored to the evolving needs of our dynamic industry.",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 bg-[#7494ec]/10 border border-[#7494ec]/30 rounded-full text-sm font-semibold text-[#7494ec] mb-4">
              WHY SPINNLABS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Discover the unique advantages that make our Center of Expertise a
              premier destination for industry leaders and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#7494ec]/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#7494ec]/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7494ec]/10 flex items-center justify-center group-hover:bg-[#7494ec]/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-[#7494ec]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-linear-to-r from-[#7494ec]/5 to-[#ef5fb3]/5 rounded-3xl p-10 md:p-12 border border-[#7494ec]/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-[#7494ec]" />
                  <h3 className="text-2xl font-bold text-slate-800">
                    How to Join
                  </h3>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Becoming a part of our Center of Expertise is a simple step
                  towards a more enriching professional journey. Click below to
                  register and unlock a world of opportunities, connections, and
                  insights.
                </p>
              </div>
              <div className="shrink-0">
                <button className="inline-flex items-center gap-2 bg-linear-to-r from-[#7494ec] to-[#ef5fb3] text-white px-8 py-3.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#7494ec]/30 transition-all group cursor-pointer">
                  Register Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-slate-600">
              <CheckCircle className="w-5 h-5 text-[#7494ec]" />
              <span className="text-sm">
                Join our Global Centers of Expertise today and be a driving
                force in the evolution of information technology.
              </span>
            </div>
            <p className="text-slate-700 font-semibold mt-3 text-lg">
              Together, let&apos;s redefine excellence!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
