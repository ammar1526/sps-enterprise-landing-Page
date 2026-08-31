"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";

const servicesLinks = [
  "Cybersecurity",
  "Cloud",
  "AI & Automation",
  "Collaboration",
  "Training",
];

const verticalsLinks = [
  "Public Sector",
  "Industrials",
  "Healthcare",
  "Retail",
  "Energy",
  "Financial",
];

const activitiesLinks = [
  "Internship Program 2025",
  "Webinars",
  "Workshops",
  "Special Interest Groups",
  "Training",
];

const spinnLabsLinks = [
  "Overview",
  "Academia",
  "Industry",
  "Centers of Expertise",
  "Startups",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10 border-b border-white/10 pb-10 mb-12">
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-white mb-3">
              Get in Touch with us
            </h2>
            <p className="text-sm text-slate-400">
              Software Productivity Strategist
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  Call Us
                </h4>
                <a
                  href="tel:+13013372290"
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  +1-301-337-2290
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  Send us a Mail
                </h4>
                <a
                  href="mailto:support@spsnet.com"
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  support@spsnet.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  Opening Time
                </h4>
                <p className="text-sm text-slate-400">
                  Mon - Sat: 7:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Image
                src="/images/logowhitenew-240.webp"
                alt="SPS Logo"
                width={300}
                height={240}
                className="object-contain"
              />
              {/* <span className="text-white font-semibold text-sm tracking-tight whitespace-nowrap">
                Software Productivity Strategists, Inc.
              </span> */}
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Whether you are an entrepreneur looking for an engineering team or
              an enterprise pursuing digital transformation we can help you
              bring your vision to reality.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Verticals</h4>
            <ul className="space-y-3">
              {verticalsLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Activities</h4>
            <ul className="space-y-3">
              {activitiesLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">SpinnLabs</h4>
            <ul className="space-y-3">
              {spinnLabsLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Software Productivity Strategist . All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
