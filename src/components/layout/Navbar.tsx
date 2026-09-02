"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] text-white transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-between px-4 lg:px-8 h-16 border-b border-white/10">
        <Link
          href="/"
          className="flex items-center gap-2.5 pr-6 h-full shrink-0"
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

        <nav className="hidden lg:flex items-center h-full flex-1 justify-center overflow-visible">
          <Link
            href="/"
            className="px-4 py-1.5 text-[13px] font-bold tracking-wide hover:text-blue-400 transition shrink-0 text-white"
          >
            Home
          </Link>

          <div
            className="relative h-full flex items-center px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("product")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group text-white">
              Product{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-212.5 max-w-[90vw] bg-white/95 backdrop-blur-xl text-slate-900 rounded-b-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 cursor-default transition-all duration-300 ease-in-out ${
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
                <Link
                  href="/product/product-detail"
                  className="text-blue-600 hover:text-blue-800 font-bold text-sm transition"
                >
                  View All Products
                </Link>
              </div>
              <div className="col-span-7 grid grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-bold border-b border-slate-200 pb-2 mb-3">
                    SPS
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    {[
                      { name: "MYID Self Verify", href: "/" },
                      { name: "Azalio", href: "/" },
                      { name: "Fabrico", href: "/" },
                      { name: "BMS", href: "/" },
                      { name: "CSM", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
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
                      { name: "Automation", href: "/product/ibm/automation" },
                      { name: "Data & AI", href: "/" },
                      { name: "Security", href: "/" },
                      { name: "Sustainability", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
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
                      { name: "Cloud Management", href: "/" },
                      { name: "Analytics Tools", href: "/" },
                      { name: "IoT Solutions", href: "/" },
                      { name: "Blockchain", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Services Menu */}
          <div
            className="relative h-full flex items-center px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group text-white">
              Services{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-200 max-w-[90vw] bg-white/95 backdrop-blur-xl text-slate-900 rounded-b-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 transition-all duration-300 ease-in-out ${
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
                <Link
                  href="/"
                  className="text-xs font-bold text-blue-600 flex items-center gap-1 group"
                >
                  Discover More{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="col-span-7 grid grid-cols-2 gap-6 text-sm">
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Cybersecurity</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "Network Security", href: "/" },
                      { name: "SMaaS", href: "/" },
                      { name: "GRC", href: "/" },
                      { name: "Identity & Access", href: "/" },
                      { name: "Threat Management", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Cloud</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "Devops", href: "/" },
                      { name: "Migration Services", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">AI & Automation</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "Automation", href: "/" },
                      { name: "Data Science", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Collaboration</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "Training", href: "/" },
                      { name: "Events", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2">
                  <h4 className="font-bold mb-3">Training</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "SPS Oil & Gas", href: "/" },
                      { name: "IBM", href: "/" },
                      { name: "Google", href: "/" },
                      { name: "AWS", href: "/" },
                      { name: "See More", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Verticals Menu */}
          <div
            className="relative h-full flex items-center px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("verticals")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group text-white">
              Verticals{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-250 max-w-[90vw] bg-white/95 backdrop-blur-xl text-slate-900 rounded-b-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 transition-all duration-300 ease-in-out ${
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
                <Link href="/" className="text-xs font-bold text-blue-600">
                  Discover More →
                </Link>
              </div>
              <div className="col-span-8 grid grid-cols-3 gap-6 text-sm">
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Public Sector</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "County Government", href: "/" },
                      { name: "Healthcare", href: "/" },
                      { name: "Government", href: "/" },
                      { name: "Public Safety", href: "/" },
                      { name: "Education", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Industrial</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "Manufacturing", href: "/" },
                      { name: "Textiles", href: "/" },
                      { name: "Utilities", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Healthcare</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "Compliance-requirements", href: "/" },
                      { name: "Health Systems", href: "/" },
                      { name: "Interoperability", href: "/" },
                      { name: "Multi-Clinic", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Retail</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "Convenience Store", href: "/" },
                      { name: "Marketing", href: "/" },
                      { name: "Omni-channel", href: "/" },
                      { name: "Personalization", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Energy</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "Electric", href: "/" },
                      { name: "Oil & Gas", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-bold mb-3">Financial</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[
                      { name: "Banking", href: "/" },
                      { name: "Insurance", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-3">
                  <h4 className="font-bold mb-3">Telecommunications</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {[{ name: "Telcos", href: "/" }].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-blue-600 cursor-pointer"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Spinnlabs Menu */}
          <div
            className="relative h-full flex items-center px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("spinnlabs")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group text-white">
              Spinnlabs{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-56 max-w-[90vw] bg-white/95 backdrop-blur-xl text-slate-900 rounded-b-xl shadow-xl p-4 text-sm space-y-1.5 transition-all duration-300 ease-in-out ${
                activeMenu === "spinnlabs"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              {[
                { name: "Overview", href: "/" },
                { name: "Academia", href: "/" },
                { name: "Industry", href: "/" },
                { name: "Center of Expertise", href: "/" },
                { name: "Startups", href: "/" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600"
                >
                  <Link href={item.href}>{item.name}</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Activities Menu */}
          <div
            className="relative h-full flex items-center px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("activities")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group text-white">
              Activities{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-56 max-w-[90vw] bg-white/95 backdrop-blur-xl text-slate-900 rounded-b-xl shadow-xl p-4 text-sm space-y-1.5 transition-all duration-300 ease-in-out ${
                activeMenu === "activities"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              {[
                { name: "Roundtables", href: "/" },
                { name: "Internship Program 2025", href: "/" },
                { name: "Webinars", href: "/" },
                { name: "Workshops", href: "/" },
                { name: "Special Interest Groups", href: "/" },
                { name: "Training", href: "/" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600"
                >
                  <Link href={item.href}>{item.name}</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Aboutus Menu */}
          <div
            className="relative h-full flex items-center px-4 cursor-pointer shrink-0"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group text-white">
              Aboutus{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-48 max-w-[90vw] bg-white/95 backdrop-blur-xl text-slate-900 rounded-b-xl shadow-xl p-3 text-sm space-y-1.5 transition-all duration-300 ease-in-out ${
                activeMenu === "about"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              {[
                { name: "Our Story", href: "/" },
                { name: "Career", href: "/" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600"
                >
                  <Link href={item.href}>{item.name}</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contracts Submenu */}
          <div
            className="relative h-full flex items-center px-4 cursor-pointer group shrink-0"
            onMouseEnter={() => handleMouseEnter("contracts")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-[13px] font-bold flex items-center gap-1.5 whitespace-nowrap group-hover:text-blue-400 text-white">
              Contracts{" "}
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
            </span>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-56 max-w-[90vw] bg-white/95 backdrop-blur-xl text-slate-900 rounded-b-xl shadow-xl p-2 text-sm transition-all duration-300 ease-in-out ${
                activeMenu === "contracts"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 translate-y-4 invisible pointer-events-none"
              }`}
            >
              <div className="relative group/vita w-full">
                <div className="p-2 hover:bg-slate-100 rounded cursor-pointer flex justify-between items-center hover:text-blue-600">
                  <Link href="/">VITA</Link>{" "}
                  <ChevronRight className="w-4 h-4" />
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
                      <Link href="/">Pricing</Link>{" "}
                      <ChevronRight className="w-4 h-4" />
                    </div>

                    <div
                      className={`absolute top-0 left-full ml-2 w-48 max-w-[90vw] bg-white text-slate-900 rounded-b-xl shadow-xl p-2 text-sm space-y-1 transition-all duration-300 ease-in-out ${
                        activeMenu === "contracts"
                          ? "opacity-0 translate-x-2 invisible pointer-events-none group-hover/pricing:opacity-100 group-hover/pricing:translate-x-0 group-hover/pricing:visible group-hover/pricing:pointer-events-auto"
                          : "opacity-0 translate-x-2 invisible pointer-events-none"
                      }`}
                    >
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600">
                        <Link href="/">Basic</Link>
                      </div>
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600">
                        <Link href="/">Enterprise</Link>
                      </div>
                      <div className="p-2 hover:bg-slate-100 rounded cursor-pointer hover:text-blue-600">
                        <Link href="/">Custom</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="#contact"
            className="px-4 py-1.5 text-[13px] font-bold hover:text-blue-400 transition shrink-0 text-white"
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
        <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-xl overflow-y-auto transition-all duration-300">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-3 border-b border-white/10 font-bold text-base text-white"
            >
              Home
            </Link>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mproduct")}
                className="w-full py-3 flex justify-between items-center font-bold text-base text-white"
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
                    <Link
                      href="/product/product-detail"
                      className="text-blue-400 hover:text-blue-300 font-bold text-sm transition mt-2 inline-block"
                    >
                      View All Products
                    </Link>
                  </div>
                  <p className="font-bold text-sm text-white">SPS</p>
                  {["MYID", "Azalio", "Fabrico", "BMS", "CSM"].map((item) => (
                    <Link
                      key={item}
                      href="/"
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">IBM</p>
                  {[
                    { name: "Automation", href: "/product/ibm/automation" },
                    { name: "Data & AI", href: "/" },
                    { name: "Security", href: "/" },
                    { name: "Sustainability", href: "/" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">Others</p>
                  {["Cloud Mgmt", "Analytics", "IoT", "Blockchain"].map(
                    (item) => (
                      <Link
                        key={item}
                        href="/"
                        className="text-sm text-white/80 pl-2 block"
                      >
                        {item}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mservices")}
                className="w-full py-3 flex justify-between items-center font-bold text-base text-white"
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
                  <p className="font-bold text-sm text-white">Cybersecurity</p>
                  {["Network", "SMaaS", "GRC", "Identity", "Threat"].map(
                    (item) => (
                      <Link
                        key={item}
                        href="/"
                        className="text-sm text-white/80 pl-2 block"
                      >
                        {item}
                      </Link>
                    ),
                  )}
                  <p className="font-bold text-sm pt-2 text-white">Cloud</p>
                  {["Devops", "Migration"].map((item) => (
                    <Link
                      key={item}
                      href="/"
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">AI</p>
                  {["Automation", "Data Science"].map((item) => (
                    <Link
                      key={item}
                      href="/"
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mverticals")}
                className="w-full py-3 flex justify-between items-center font-bold text-base text-white"
              >
                Verticals{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileActive === "mverticals" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileActive === "mverticals" && (
                <div className="pl-4 pb-4 space-y-2">
                  <p className="font-bold text-sm text-white">Public</p>
                  {["County", "Healthcare", "Gov", "Safety"].map((item) => (
                    <Link
                      key={item}
                      href="/"
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">
                    Industrial
                  </p>
                  {["Mfg", "Textiles", "Utilities"].map((item) => (
                    <Link
                      key={item}
                      href="/"
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mspinnlabs")}
                className="w-full py-3 flex justify-between items-center font-bold text-base text-white"
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
                      <Link
                        key={item}
                        href="/"
                        className="text-sm text-white/80 block"
                      >
                        {item}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mactivities")}
                className="w-full py-3 flex justify-between items-center font-bold text-base text-white"
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
                    <Link
                      key={item}
                      href="/"
                      className="text-sm text-white/80 block"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mabout")}
                className="w-full py-3 flex justify-between items-center font-bold text-base text-white"
              >
                Aboutus{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileActive === "mabout" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileActive === "mabout" && (
                <div className="pl-4 pb-4 space-y-2">
                  {["Our Story", "Career"].map((item) => (
                    <Link
                      key={item}
                      href="/"
                      className="text-sm text-white/80 block"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-white/10">
              <button
                onClick={() => toggleMobile("mcontracts")}
                className="w-full py-3 flex justify-between items-center font-bold text-base text-white"
              >
                Contracts{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileActive === "mcontracts" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileActive === "mcontracts" && (
                <div className="pl-4 pb-4 space-y-2">
                  <Link href="/" className="text-sm text-white/80 block">
                    VITA
                  </Link>
                  <Link href="/" className="text-sm text-white/80 pl-2 block">
                    Pricing
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block py-3 border-b border-white/10 font-bold text-base text-white"
            >
              Contact Us
            </Link>

            <Link
              href="#internship"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block text-center border border-white/40 rounded-full px-6 py-3 font-bold hover:bg-white hover:text-slate-950 transition-all text-white"
            >
              Internship
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
