"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Grid,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleMobile = (menu: string) => {
    setMobileActive(mobileActive === menu ? null : menu);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full max-w-[100vw] overflow-x-clip text-white bg-transparent">
      <div className="w-full mx-auto flex items-center justify-between px-4 lg:px-8 h-16 border-b border-white/10 relative">
        <Link
          href="/"
          className="flex items-center gap-2.5 pr-6 border-r border-white/10 h-full shrink-0"
        >
          <Image
            src="/images/logowhitenew-240.webp"
            alt="SPS Logo"
            width={190}
            height={80}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center h-full flex-1 justify-center overflow-hidden">
          <Link
            href="/"
            className="px-4 py-1.5 text-[13px] font-bold tracking-wide hover:text-blue-400 transition shrink-0"
          >
            Home
          </Link>

          <div
            className="relative h-full flex items-center border-l border-white/10 px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("product")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group">
              Product{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-212 max-w-[90vw] bg-white text-slate-900 rounded-b-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 cursor-default transition-all duration-300 ease-in-out ${
                activeMenu === "product"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              <div className="col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="h-40 rounded-lg mb-3 relative overflow-hidden">
                  <Image
                    src="/images/pnav.webp"
                    alt="Cloud Security"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  SPS empowers enterprises with Cybersecurity, Cloud, AI &
                  Automation solutions.
                </p>
                <button className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition">
                  <Grid className="w-4 h-4" /> View All Products
                </button>
              </div>
              <div className="col-span-7 grid grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-bold border-b border-slate-200 pb-2 mb-3">
                    SPS
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    {[
                      "MYID Self Verify",
                      "Azalio",
                      "Fabrico",
                      "BMS",
                      "CSM",
                    ].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold border-b border-slate-200 pb-2 mb-3">
                    IBM
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    {[
                      "Automation",
                      "Data & AI",
                      "Security",
                      "Sustainability",
                    ].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold border-b border-slate-200 pb-2 mb-3">
                    Others
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    {[
                      "Cloud Management",
                      "Analytics Tools",
                      "IoT Solutions",
                      "Blockchain",
                    ].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative h-full flex items-center border-l border-white/10 px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group">
              Services{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-200 max-w-[90vw] bg-white text-slate-900 rounded-b-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 transition-all duration-300 ease-in-out ${
                activeMenu === "services"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              <div className="col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="h-40 rounded-lg mb-3 relative overflow-hidden">
                  <Image
                    src="/images/snav.webp"
                    alt="Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-slate-600 mb-2">
                  Accelerate digital transformation with AI & Cloud.
                </p>
                <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group">
                  Discover More{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              <div className="col-span-7 grid grid-cols-2 gap-6 text-sm">
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Cybersecurity</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      "Network Security",
                      "SMaaS",
                      "GRC",
                      "Identity & Access",
                      "Threat Management",
                    ].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Cloud</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {["Devops", "Migration Services"].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">AI & Automation</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {["Automation", "Data Science"].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Collaboration</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {["Training", "Events"].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2">
                  <h4 className="font-bold mb-3">Training</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {["SPS Oil & Gas", "IBM", "Google", "AWS", "See More"].map(
                      (item) => (
                        <li
                          key={item}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative h-full flex items-center border-l border-white/10 px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("verticals")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group">
              Verticals{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-250 max-w-[90vw] bg-white text-slate-900 rounded-b-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 transition-all duration-300 ease-in-out ${
                activeMenu === "verticals"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              <div className="col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="h-40 rounded-lg mb-3 relative overflow-hidden">
                  <Image
                    src="/images/snav.webp"
                    alt="Verticals"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Accelerate your county's digital transformation with an
                  executive-led strategy.
                </p>
                <span className="text-xs font-bold text-blue-600">
                  Discover More →
                </span>
              </div>
              <div className="col-span-8 grid grid-cols-3 gap-6 text-sm">
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Public Sector</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      "County Government",
                      "Healthcare",
                      "Government",
                      "Public Safety",
                      "Education",
                    ].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Industrial</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {["Manufacturing", "Textiles", "Utilities"].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Healthcare</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      "Compliance-requirements",
                      "Health Systems",
                      "Interoperability",
                      "Multi-Clinic",
                    ].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Retail</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      "Convenience Store",
                      "Marketing",
                      "Omni-channel",
                      "Personalization",
                    ].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Energy</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {["Electric", "Oil & Gas"].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Financial</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {["Banking", "Insurance"].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-3">
                  <h4 className="font-bold mb-3">Telecommunications</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {["Telcos"].map((item) => (
                      <li
                        key={item}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative h-full flex items-center border-l border-white/10 px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("spinnlabs")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group">
              Spinnlabs{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-56 max-w-[90vw] bg-white text-slate-900 rounded-b-xl shadow-xl p-4 text-sm space-y-1.5 transition-all duration-300 ease-in-out ${
                activeMenu === "spinnlabs"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              {[
                "Overview",
                "Academia",
                "Industry",
                "Center of Expertise",
                "Startups",
              ].map((item) => (
                <div
                  key={item}
                  className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative h-full flex items-center border-l border-white/10 px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("activities")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group">
              Activities{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-56 max-w-[90vw] bg-white text-slate-900 rounded-b-xl shadow-xl p-4 text-sm space-y-1.5 transition-all duration-300 ease-in-out ${
                activeMenu === "activities"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              {[
                "Roundtables",
                "Internship Program 2025",
                "Webinars",
                "Workshops",
                "Special Interest Groups",
                "Training",
              ].map((item) => (
                <div
                  key={item}
                  className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative h-full flex items-center border-l border-white/10 px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group">
              Aboutus{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-48 max-w-[90vw] bg-white text-slate-900 rounded-b-xl shadow-xl p-3 text-sm space-y-1.5 transition-all duration-300 ease-in-out ${
                activeMenu === "about"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              {["Our Story", "Career"].map((item) => (
                <div
                  key={item}
                  className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative h-full flex items-center border-l border-white/10 px-4 cursor-pointer group shrink-0"
            onMouseEnter={() => handleMouseEnter("contracts")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group-hover:text-blue-400">
              Contracts{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-56 max-w-[90vw] bg-white text-slate-900 rounded-b-xl shadow-xl p-2 text-sm transition-all duration-300 ease-in-out ${
                activeMenu === "contracts"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              <div className="relative group/vita w-full">
                <div className="p-2 hover:bg-slate-100 rounded cursor-pointer flex justify-between items-center hover:text-blue-600">
                  VITA <ChevronRight className="w-4 h-4" />
                </div>

                <div
                  className={`absolute top-0 left-full ml-2 w-48 max-w-[90vw] bg-white text-slate-900 rounded-b-xl shadow-xl p-2 text-sm space-y-1 transition-all duration-300 ease-in-out ${
                    activeMenu === "contracts"
                      ? "opacity-0 translate-x-2 invisible pointer-events-none group-hover/vita:opacity-100 group-hover/vita:translate-x-0 group-hover/vita:visible group-hover/vita:pointer-events-auto"
                      : "opacity-0 translate-x-2 invisible pointer-events-none"
                  }`}
                >
                  <div className="relative group/pricing w-full">
                    <div className="p-2 hover:bg-slate-100 rounded cursor-pointer flex justify-between items-center hover:text-blue-600">
                      Pricing <ChevronRight className="w-4 h-4" />
                    </div>

                    <div
                      className={`absolute top-0 left-full ml-2 w-48 max-w-[90vw] bg-white text-slate-900 rounded-b-xl shadow-xl p-2 text-sm space-y-1 transition-all duration-300 ease-in-out ${
                        activeMenu === "contracts"
                          ? "opacity-0 translate-x-2 invisible pointer-events-none group-hover/pricing:opacity-100 group-hover/pricing:translate-x-0 group-hover/pricing:visible group-hover/pricing:pointer-events-auto"
                          : "opacity-0 translate-x-2 invisible pointer-events-none"
                      }`}
                    >
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600">
                        Basic
                      </div>
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600">
                        Enterprise
                      </div>
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600">
                        Custom
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="#contact"
            className="px-4 py-1.5 text-[13px] font-bold border-l border-white/10 hover:text-blue-400 transition shrink-0"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-white/10 shrink-0">
          <Link
            href="#internship"
            className="border border-white/40 rounded-full px-5 py-1.5 text-xs font-bold hover:bg-white hover:text-slate-950 transition-all duration-200 whitespace-nowrap"
          >
            Internship
          </Link>
        </div>

        <button
          className="lg:hidden border border-white/40 rounded-lg p-1.5 hover:bg-white/10 transition-all duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-slate-950/95 backdrop-blur-xl overflow-y-auto transition-all duration-300">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-3 border-b border-white/10 font-bold text-base"
            >
              Home
            </Link>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mproduct")}
                className="w-full py-3 flex justify-between items-center font-bold text-base"
              >
                Product{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileActive === "mproduct" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileActive === "mproduct" && (
                <div className="pl-4 pb-4 space-y-2">
                  <div className="mb-4">
                    <Image
                      src="/images/pnav.webp"
                      alt="Product"
                      width={120}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <p className="text-xs text-white/70 mt-2">
                      SPS empowers enterprises with Cybersecurity, Cloud, AI &
                      Automation.
                    </p>
                  </div>
                  <p className="font-bold text-sm">SPS</p>
                  {["MYID", "Azalio", "Fabrico", "BMS", "CSM"].map((item) => (
                    <p key={item} className="text-sm text-white/80 pl-2">
                      {item}
                    </p>
                  ))}
                  <p className="font-bold text-sm pt-2">IBM</p>
                  {[
                    "Automation",
                    "Data & AI",
                    "Security",
                    "Sustainability",
                  ].map((item) => (
                    <p key={item} className="text-sm text-white/80 pl-2">
                      {item}
                    </p>
                  ))}
                  <p className="font-bold text-sm pt-2">Others</p>
                  {["Cloud Mgmt", "Analytics", "IoT", "Blockchain"].map(
                    (item) => (
                      <p key={item} className="text-sm text-white/80 pl-2">
                        {item}
                      </p>
                    ),
                  )}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mservices")}
                className="w-full py-3 flex justify-between items-center font-bold text-base"
              >
                Services{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileActive === "mservices" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileActive === "mservices" && (
                <div className="pl-4 pb-4 space-y-2">
                  <div className="mb-4">
                    <Image
                      src="/images/snav.webp"
                      alt="Services"
                      width={120}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <p className="font-bold text-sm">Cybersecurity</p>
                  {["Network", "SMaaS", "GRC", "Identity", "Threat"].map(
                    (item) => (
                      <p key={item} className="text-sm text-white/80 pl-2">
                        {item}
                      </p>
                    ),
                  )}
                  <p className="font-bold text-sm pt-2">Cloud</p>
                  {["Devops", "Migration"].map((item) => (
                    <p key={item} className="text-sm text-white/80 pl-2">
                      {item}
                    </p>
                  ))}
                  <p className="font-bold text-sm pt-2">AI</p>
                  {["Automation", "Data Science"].map((item) => (
                    <p key={item} className="text-sm text-white/80 pl-2">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mverticals")}
                className="w-full py-3 flex justify-between items-center font-bold text-base"
              >
                Verticals{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileActive === "mverticals" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileActive === "mverticals" && (
                <div className="pl-4 pb-4 space-y-2">
                  <p className="font-bold text-sm">Public</p>
                  {["County", "Healthcare", "Gov", "Safety"].map((item) => (
                    <p key={item} className="text-sm text-white/80 pl-2">
                      {item}
                    </p>
                  ))}
                  <p className="font-bold text-sm pt-2">Industrial</p>
                  {["Mfg", "Textiles", "Utilities"].map((item) => (
                    <p key={item} className="text-sm text-white/80 pl-2">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mspinnlabs")}
                className="w-full py-3 flex justify-between items-center font-bold text-base"
              >
                Spinnlabs{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileActive === "mspinnlabs" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileActive === "mspinnlabs" && (
                <div className="pl-4 pb-4 space-y-2">
                  {["Overview", "Academia", "Industry", "CoE", "Startups"].map(
                    (item) => (
                      <p key={item} className="text-sm text-white/80">
                        {item}
                      </p>
                    ),
                  )}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mactivities")}
                className="w-full py-3 flex justify-between items-center font-bold text-base"
              >
                Activities{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileActive === "mactivities" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileActive === "mactivities" && (
                <div className="pl-4 pb-4 space-y-2">
                  {[
                    "Roundtables",
                    "Internship 2025",
                    "Webinars",
                    "Workshops",
                    "SIG",
                    "Training",
                  ].map((item) => (
                    <p key={item} className="text-sm text-white/80">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mabout")}
                className="w-full py-3 flex justify-between items-center font-bold text-base"
              >
                Aboutus{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileActive === "mabout" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileActive === "mabout" && (
                <div className="pl-4 pb-4 space-y-2">
                  {["Our Story", "Career"].map((item) => (
                    <p key={item} className="text-sm text-white/80">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mcontracts")}
                className="w-full py-3 flex justify-between items-center font-bold text-base"
              >
                Contracts{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileActive === "mcontracts" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileActive === "mcontracts" && (
                <div className="pl-4 pb-4 space-y-2">
                  <p className="text-sm text-white/80">VITA</p>
                  <p className="text-sm text-white/80 pl-2">Pricing</p>
                </div>
              )}
            </div>

            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block py-3 border-b border-white/10 font-bold text-base"
            >
              Contact Us
            </Link>

            <Link
              href="#internship"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block text-center border border-white/40 rounded-full px-6 py-3 font-bold hover:bg-white hover:text-slate-950 transition-all"
            >
              Internship
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
