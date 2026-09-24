import React from "react";

export default function MissionVisionAbout() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-8 tracking-tight">
              Our Mission &amp; Vision
            </h2>

            <div className="space-y-6 text-slate-500 text-base sm:text-lg leading-relaxed">
              <p>
                Our primary differentiator is our ability to seamlessly
                integrate AI Development, Cloud &amp; Infrastructure Services,
                Cybersecurity, Learning &amp; Training, and Event Management
                into modern enterprise solutions.
              </p>
              <p>
                Internally, SPS leverages its own advanced skillsets to build
                award-winning productivity tools that are actively used to
                enhance, validate, and strengthen the development solutions we
                deliver to our clients.
              </p>
            </div>
          </div>

          <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-8 tracking-tight">
              About SPS
            </h2>

            <div className="space-y-6 text-slate-500 text-base sm:text-lg leading-relaxed">
              <p>
                Software Productivity Strategists, Inc. (SPS) is an
                enterprise-class innovator specializing in industry solutions
                powered by AI and Cloud technologies.
              </p>
              <p>
                With expertise across the complete technology
                lifecycle—including product design, development, deployment,
                security, operations, monitoring, and support—SPS helps
                organizations build, deploy, and secure high-performance
                applications with confidence.
              </p>
              <p>
                Our award-winning team includes IBM-certified inventors and
                champions who have earned recognition through multiple worldwide
                competitions, reflecting our commitment to innovation,
                excellence, and leadership in technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
