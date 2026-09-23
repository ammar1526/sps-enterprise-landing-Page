"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sendState, setSendState] = useState<"idle" | "sending" | "sent">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (sendState !== "idle") return;

    setSendState("sending");

    setTimeout(() => {
      setSendState("sent");
    }, 2000);
  };

  const labelClass = "block text-sm text-white font-normal";

  const inputClass =
    "w-full bg-transparent border-b-2 border-white text-white text-sm py-2 outline-none focus:border-white/90 transition-colors";

  return (
    <section className="relative w-full py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Corporate Headquarters
          </h2>
          <p className="text-blue-900 font-bold text-base mb-6">
            Software Productivity Strategists, Inc.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-3.5">
                <svg
                  className="w-5 h-5 text-[#0070f3] mt-1 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="leading-relaxed">
                  2400 Research Blvd
                  <br />
                  Suite 115
                  <br />
                  Rockville, MD 20850
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <svg
                  className="w-5 h-5 text-[#0070f3] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+13013372290"
                  className="hover:text-blue-600 font-medium transition-colors"
                >
                  301-337-2290
                </a>
              </div>

              <div className="flex items-center gap-3.5">
                <svg
                  className="w-5 h-5 text-[#0070f3] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:support@spsnet.com"
                  className="hover:text-blue-600 font-medium transition-colors"
                >
                  support@spsnet.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">
              For Internship Inquiries
            </h3>
            <p className="text-xs text-slate-500 mb-3 font-medium">
              Please contact us at:
            </p>
            <div className="space-y-1">
              <a
                href="mailto:internship@spsnet.com"
                className="block text-sm text-blue-600 font-semibold hover:underline"
              >
                internship@spsnet.com
              </a>
              <a
                href="mailto:internqueries@spsnet.com"
                className="block text-sm text-blue-600 font-semibold hover:underline"
              >
                internqueries@spsnet.com
              </a>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 text-[#0070f3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-bold text-slate-900 text-sm">Office Hours</h3>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between text-xs text-gray-600">
                <span className="font-medium">Monday - Friday</span>
                <span className="font-bold">9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span className="font-medium">Saturday - Sunday</span>
                <span className="font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="absolute -left-7 top-12 z-0 hidden lg:block">
            <div
              className="bg-[#1e3a8a] text-white font-bold text-sm tracking-wider py-5 px-3 rounded-l-xl rounded-r-xl shadow-md flex items-center justify-center"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                minHeight: "200px",
              }}
            >
              <span className="text-base">Contact Us Now</span>
            </div>
          </div>

          <div className="bg-[#5b80e6] rounded-3xl p-8 min-h-162.5 min-w-60 shadow-[0_10px_40px_rgba(0,0,0,0.15)] relative z-10 ml-0 lg:ml-6 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-white/90 mb-6">
              You can reach us anytime
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 flex-1 flex flex-col"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className={labelClass}>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-1.5 flex-1 flex flex-col">
                <label className={labelClass}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none flex-1 min-h-40`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={sendState !== "idle"}
                className="inline-flex items-center gap-3 bg-white text-slate-900 font-medium text-sm pl-6 pr-2 py-2 rounded-lg hover:bg-slate-100 transition-all duration-300 cursor-pointer disabled:cursor-default group self-start"
              >
                <span className="transition-transform duration-300 group-hover:scale-105">
                  {sendState === "idle" && "Submit"}
                  {sendState === "sending" && "Sending"}
                  {sendState === "sent" && "Sent"}
                </span>
                <span className="w-9 h-9 bg-[#0f1f4b] text-white rounded-md inline-flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
