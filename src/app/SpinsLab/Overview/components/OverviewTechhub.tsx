import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Users, Award } from "lucide-react";

export default function OverviewTechhub() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block py-1 px-4 bg-[#7494ec]/20 border border-[#7494ec] rounded-full text-sm font-semibold text-[#7494ec]">
              INNOVATION HUB
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Tech Hub for{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Innovators & Entrepreneurs
              </span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Join a community of innovators, industry experts, academics and
              others who are seeking to make the world a better place.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="inline-flex items-center gap-2 bg-[#7494ec] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6884d3] transition-all hover:shadow-lg hover:shadow-[#7494ec]/30 group cursor-pointer">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-100 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent z-10" />
              <Image
                src="/images/techhubimage.jpg"
                alt="Tech Hub for innovators and entrepreneurs"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#7494ec]/50 transition-all group text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#7494ec]/20 flex items-center justify-center group-hover:bg-[#7494ec]/30 transition-colors">
              <Sparkles className="w-7 h-7 text-[#7494ec]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Innovation</h3>
            <p className="text-slate-400 text-sm">
              Access cutting-edge resources and tools to bring your ideas to
              life.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#7494ec]/50 transition-all group text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#7494ec]/20 flex items-center justify-center group-hover:bg-[#7494ec]/30 transition-colors">
              <Users className="w-7 h-7 text-[#7494ec]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Collaboration</h3>
            <p className="text-slate-400 text-sm">
              Connect with industry experts, academics, and fellow innovators.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#7494ec]/50 transition-all group text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#7494ec]/20 flex items-center justify-center group-hover:bg-[#7494ec]/30 transition-colors">
              <Award className="w-7 h-7 text-[#7494ec]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Growth</h3>
            <p className="text-slate-400 text-sm">
              Accelerate your journey with mentorship, training, and funding
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
