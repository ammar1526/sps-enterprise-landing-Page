import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-150 flex items-center bg-slate-900 overflow-hidden">
      <Image
        src="/images/telehealth/TelehealthHero.jpg"
        alt="Telehealth & Remote Patient Monitoring"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="relative mt-20 z-10 container mx-auto px-6">
        <div className="max-w-2xl text-white">
          <span className="inline-block py-1 px-3 bg-[#7494ec6e] border-3 border-blue-500 rounded-full text-sm font-semibold mb-4">
            Healthcare
          </span>
          <h1 className="text-5xl w-4xl font-bold bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-xl">
            Telehealth & Remote Patient Monitoring
          </h1>
          <p className="text-sm mb-8 text-slate-100 w-3xl drop-shadow-xl">
            Remote health and wellness monitoring is transforming healthcare
            through the power of mobile cloud computing and the Internet of
            Things. Recent policy changes during the COVID-19 pandemic have
            reduced barriers to telehealth and remote patient monitoring (RPM),
            and have promoted the use of telehealth as a way to deliver acute,
            chronic, primary and specialty care. By leveraging the medical data
            collected from medical devices, sensors, implant devices, and
            wearables, a patient’s well-being can be monitored in real-time
            between home, hospital, and beyond.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#7494ec] text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-[#6884d3] transition cursor-pointer">
              Explore Our Solutions →
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition cursor-pointer">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
