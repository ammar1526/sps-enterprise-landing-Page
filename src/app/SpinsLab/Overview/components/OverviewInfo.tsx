import React from "react";
import Image from "next/image";
import { Lightbulb, Users, Target, Heart } from "lucide-react";

export default function OverviewInfo() {
  const features = [
    {
      icon: Lightbulb,
      title: "Imaginative Risk-Takers",
      description:
        "Willing to challenge status quo assumptions and transform hardworking individuals into successful professionals.",
    },
    {
      icon: Users,
      title: "Continuous Improvement",
      description:
        "Consider multiple sources of evidence and diverse perspectives to review performance, note progress, and engage in continuous improvement.",
    },
    {
      icon: Target,
      title: "Unique Potential",
      description:
        "Appreciate every CS graduate has a unique potential to become a valuable resource based on global industry skill requirements.",
    },
    {
      icon: Heart,
      title: "Trust & Respect",
      description:
        "Recognize that adults achieve their full potential in the context of relationships that are based on trust and respect.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-4 bg-[#7494ec]/10 border border-[#7494ec]/30 rounded-full text-sm font-semibold text-[#7494ec] mb-4">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Empowering Innovation Through Core Values
          </h2>
          <p className="text-slate-600 text-lg">
            We believe in fostering an environment where creativity, growth, and
            mutual respect drive exceptional outcomes.
          </p>
        </div>

        <div className="space-y-12">
          <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-linear-to-br from-slate-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[#7494ec]/30">
            <div className="relative h-87.5 rounded-2xl overflow-hidden order-1 lg:order-1">
              <div className="absolute inset-0 bg-[#7494ec]/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image
                src="/images/overview1.jpg"
                alt="Innovation and collaboration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-2 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold text-slate-800">
                Building a Culture of Innovation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We are imaginative risk-takers, willing to challenge status quo
                assumptions and transform hardworking individuals into
                successful professionals. We consider multiple sources of
                evidence and diverse perspectives to review performance, note
                progress, and engage in continuous improvement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 2).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:border-[#7494ec]/30 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#7494ec]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#7494ec]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 text-xs mt-1">
                          {feature.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-linear-to-tr from-slate-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[#7494ec]/30">
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-3xl font-bold text-slate-800">
                Nurturing Individual Potential
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We share leadership and responsibility in our work by committing
                time and effort to ensure more effective outcomes. We appreciate
                every CS graduate has a unique potential to become a valuable
                resource. We base our work on knowledge insights about global
                industry skill requirements and respect the dignity, worth, and
                uniqueness of each individual.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.slice(2, 4).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:border-[#7494ec]/30 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#7494ec]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#7494ec]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 text-xs mt-1">
                          {feature.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative h-87.5 rounded-2xl overflow-hidden order-1 lg:order-2">
              <div className="absolute inset-0 bg-[#7494ec]/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image
                src="/images/overview2.jpg"
                alt="Growth and development"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
