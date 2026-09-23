import React from "react";
import Image from "next/image";
import { GraduationCap, Users } from "lucide-react";

export default function OverviewAcademia() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Academia.png"
                alt="Academia and Industry"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-block py-1 px-4 bg-[#7494ec]/10 border border-[#7494ec]/30 rounded-full text-sm font-semibold text-[#7494ec] mb-4">
              ACADEMIA & INDUSTRY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Bridging Academia & Industry
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              SPINNLAB&apos;s promotes high quality skill training of faculty to
              provide students with skills and industry practice, giving them
              extra advantage in the job market.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-6 h-6 text-[#7494ec]" />
                  <span className="text-3xl font-bold text-slate-800">64</span>
                </div>
                <p className="text-sm text-slate-600">Universities</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-[#7494ec]" />
                  <span className="text-3xl font-bold text-slate-800">162</span>
                </div>
                <p className="text-sm text-slate-600">Faculty Advisors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
