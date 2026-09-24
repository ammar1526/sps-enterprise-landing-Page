"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, X, ChevronRight } from "lucide-react";

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
                    sizes="(max-width: 1024px) 100vw, 20vw"
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
                      {
                        name: "MYID Self Verify",
                        href: "https://www.myidselfverify.com/",
                      },
                      { name: "Azalio", href: "https://www.azal.io/" },
                      { name: "Fabrico", href: "https://www.fabrico.com/" },
                      { name: "BMS", href: "/product/sps/bms" },
                      { name: "CSM", href: "/product/sps/bms" },
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
                      { name: "Data & AI", href: "/product/ibm/automation" },
                      { name: "Security", href: "/product/ibm/automation" },
                      {
                        name: "Sustainability",
                        href: "/product/ibm/automation",
                      },
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
                      {
                        name: "Cloud Management",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
                      {
                        name: "Analytics Tools",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
                      {
                        name: "IoT Solutions",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
                      {
                        name: "Blockchain",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
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
                    sizes="(max-width: 1024px) 100vw, 20vw"
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
                      {
                        name: "Network Security",
                        href: "/services/cybersecurity/network-security",
                      },
                      { name: "SMaaS", href: "/services/cybersecurity/smaas" },
                      { name: "GRC", href: "/services/cybersecurity/grc" },
                      {
                        name: "Identity & Access",
                        href: "/services/cybersecurity/grc",
                      },
                      {
                        name: "Threat Management",
                        href: "/services/cybersecurity/grc",
                      },
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
                      { name: "Devops", href: "/services/cloud/devops" },
                      {
                        name: "Migration Services",
                        href: "/services/cloud/migration",
                      },
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
                      {
                        name: "Automation",
                        href: "/services/ai-automation/data-science",
                      },
                      {
                        name: "Data Science",
                        href: "/services/ai-automation/data-science",
                      },
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
                      {
                        name: "Training",
                        href: "/services/ai-automation/data-science",
                      },
                      {
                        name: "Events",
                        href: "/services/ai-automation/data-science",
                      },
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
                      {
                        name: "SPS Oil & Gas",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
                      {
                        name: "IBM",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
                      {
                        name: "Google",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
                      {
                        name: "AWS",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
                      {
                        name: "See More",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
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
                    sizes="(max-width: 1024px) 100vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Accelerate your county&apos;s digital transformation with an
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
                      {
                        name: "County Government",
                        href: "/verticals/public-sector/county-government",
                      },
                      {
                        name: "Healthcare",
                        href: "/verticals/public-sector/healthcare",
                      },
                      {
                        name: "Government",
                        href: "/verticals/public-sector/government",
                      },
                      {
                        name: "Public Safety",
                        href: "/verticals/public-sector/public-safety",
                      },
                      {
                        name: "Education",
                        href: "/verticals/public-sector/government",
                      },
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
                      {
                        name: "Manufacturing",
                        href: "/verticals/industrials/manufacturing",
                      },
                      {
                        name: "Textiles",
                        href: "/verticals/industrials/textile",
                      },
                      {
                        name: "Utilities",
                        href: "/verticals/industrials/manufacturing",
                      },
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
                      {
                        name: "Compliance-requirements",
                        href: "/verticals/healthcare/Compliance-requirements",
                      },
                      {
                        name: "Health Systems",
                        href: "/verticals/healthcare/health-systems",
                      },
                      {
                        name: "Multi-Clinic",
                        href: "/verticals/healthcare/Compliance-requirements",
                      },
                      {
                        name: "telehealth-remote-patient-monitoring",
                        href: "/verticals/healthcare/telehealth-amp-remote-patient-monitoring",
                      },
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
                      {
                        name: "Convenience Store",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
                      {
                        name: "Marketing",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
                      {
                        name: "Omni-channel",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
                      {
                        name: "Personalization",
                        href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                      },
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
                      { name: "Electric", href: "/verticals/Energy/electric" },
                      {
                        name: "Oil & Gas",
                        href: "/verticals/Energy/oil-amp-gas",
                      },
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
                      { name: "Banking", href: "/verticals/financial/banking" },
                      {
                        name: "Insurance",
                        href: "/verticals/financial/banking",
                      },
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
                    {[
                      { name: "Telcos", href: "/verticals/telecommunication" },
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
                { name: "Overview", href: "/SpinsLab/Overview" },
                { name: "Academia", href: "/SpinsLab/Academia" },
                { name: "Industry", href: "/SpinsLab/Industry" },
                {
                  name: "Center of Expertise",
                  href: "/SpinsLab/centers-of-expertise",
                },
                { name: "Startups", href: "/SpinsLab/Startups" },
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
                { name: "Roundtables", href: "/activities/roundtable" },
                {
                  name: "Internship Program 2025",
                  href: "/activities/how-it-works",
                },
                {
                  name: "Webinars",
                  href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                },
                {
                  name: "Workshops",
                  href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                },
                {
                  name: "Special Interest Groups",
                  href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                },
                {
                  name: "Training",
                  href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                },
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
                { name: "Our Story", href: "/About-Us/our-story" },
                { name: "Career", href: "/About-Us/career" },
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
                      <Link href="/vita-pricing">Pricing</Link>{" "}
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/Contact-Us"
            className="px-4 py-1.5 text-[13px] font-bold hover:text-blue-400 transition shrink-0 text-white"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-white/10 shrink-0">
          <Link
            href="/activities/how-it-works"
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
                  {[
                    {
                      name: "MYID Self Verify",
                      href: "https://www.myidselfverify.com/",
                    },
                    { name: "Azalio", href: "https://www.azal.io/" },
                    { name: "Fabrico", href: "https://www.fabrico.com/" },
                    { name: "BMS", href: "/product/sps/bms" },
                    { name: "CSM", href: "/product/sps/bms" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">IBM</p>
                  {[
                    { name: "Automation", href: "/product/ibm/automation" },
                    { name: "Data & AI", href: "/product/ibm/automation" },
                    { name: "Security", href: "/product/ibm/automation" },
                    { name: "Sustainability", href: "/product/ibm/automation" },
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
                  {[
                    {
                      name: "Cloud Management",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "Analytics Tools",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "IoT Solutions",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "Blockchain",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
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
                  {[
                    {
                      name: "Network Security",
                      href: "/services/cybersecurity/network-security",
                    },
                    { name: "SMaaS", href: "/services/cybersecurity/smaas" },
                    { name: "GRC", href: "/services/cybersecurity/grc" },
                    {
                      name: "Identity & Access",
                      href: "/services/cybersecurity/grc",
                    },
                    {
                      name: "Threat Management",
                      href: "/services/cybersecurity/grc",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">Cloud</p>
                  {[
                    { name: "Devops", href: "/services/cloud/devops" },
                    {
                      name: "Migration Services",
                      href: "/services/cloud/migration",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">
                    AI & Automation
                  </p>
                  {[
                    {
                      name: "Automation",
                      href: "/services/ai-automation/data-science",
                    },
                    {
                      name: "Data Science",
                      href: "/services/ai-automation/data-science",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">
                    Collaboration
                  </p>
                  {[
                    {
                      name: "Training",
                      href: "/services/ai-automation/data-science",
                    },
                    {
                      name: "Events",
                      href: "/services/ai-automation/data-science",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">Training</p>
                  {[
                    {
                      name: "SPS Oil & Gas",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "IBM",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "Google",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "AWS",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "See More",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
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
                  <p className="font-bold text-sm text-white">Public Sector</p>
                  {[
                    {
                      name: "County Government",
                      href: "/verticals/public-sector/county-government",
                    },
                    {
                      name: "Healthcare",
                      href: "/verticals/public-sector/healthcare",
                    },
                    {
                      name: "Government",
                      href: "/verticals/public-sector/government",
                    },
                    {
                      name: "Public Safety",
                      href: "/verticals/public-sector/public-safety",
                    },
                    {
                      name: "Education",
                      href: "/verticals/public-sector/government",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">
                    Industrial
                  </p>
                  {[
                    {
                      name: "Manufacturing",
                      href: "/verticals/industrials/manufacturing",
                    },
                    {
                      name: "Textiles",
                      href: "/verticals/industrials/textile",
                    },
                    {
                      name: "Utilities",
                      href: "/verticals/industrials/manufacturing",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">
                    Healthcare
                  </p>
                  {[
                    {
                      name: "Compliance-requirements",
                      href: "/verticals/healthcare/Compliance-requirements",
                    },
                    {
                      name: "Health Systems",
                      href: "/verticals/healthcare/health-systems",
                    },
                    {
                      name: "Multi-Clinic",
                      href: "/verticals/healthcare/Compliance-requirements",
                    },
                    {
                      name: "telehealth-remote-patient-monitoring",
                      href: "/verticals/healthcare/telehealth-amp-remote-patient-monitoring",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">Retail</p>
                  {[
                    {
                      name: "Convenience Store",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "Marketing",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "Omni-channel",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "Personalization",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">Energy</p>
                  {[
                    { name: "Electric", href: "/verticals/Energy/electric" },
                    {
                      name: "Oil & Gas",
                      href: "/verticals/Energy/oil-amp-gas",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">Financial</p>
                  {[
                    { name: "Banking", href: "/verticals/financial/banking" },
                    {
                      name: "Insurance",
                      href: "/verticals/financial/banking",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <p className="font-bold text-sm pt-2 text-white">
                    Telecommunications
                  </p>
                  {[
                    { name: "Telcos", href: "/verticals/telecommunication" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 pl-2 block"
                    >
                      {item.name}
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
                  {[
                    { name: "Overview", href: "/SpinsLab/Overview" },
                    { name: "Academia", href: "/SpinsLab/Academia" },
                    { name: "Industry", href: "/SpinsLab/Industry" },
                    {
                      name: "Center of Expertise",
                      href: "/SpinsLab/centers-of-expertise",
                    },
                    { name: "Startups", href: "/SpinsLab/Startups" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 block"
                    >
                      {item.name}
                    </Link>
                  ))}
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
                    { name: "Roundtables", href: "/activities/roundtable" },
                    {
                      name: "Internship Program 2025",
                      href: "/activities/how-it-works",
                    },
                    {
                      name: "Webinars",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "Workshops",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "Special Interest Groups",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                    {
                      name: "Training",
                      href: "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php",
                    },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 block"
                    >
                      {item.name}
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
                  {[
                    { name: "Our Story", href: "/About-Us/our-story" },
                    { name: "Career", href: "/About-Us/career" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-white/80 block"
                    >
                      {item.name}
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
                  <Link
                    href="/vita-pricing"
                    className="text-sm text-white/80 pl-2 block"
                  >
                    Pricing
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/Contact-Us"
              onClick={() => setMobileOpen(false)}
              className="block py-3 border-b border-white/10 font-bold text-base text-white"
            >
              Contact Us
            </Link>

            <Link
              href="/activities/how-it-works"
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
