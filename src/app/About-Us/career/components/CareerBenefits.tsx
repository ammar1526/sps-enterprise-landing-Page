"use client";

import React from "react";
import Image from "next/image";

const benefits = [
  {
    id: "health-care",
    icon: "/images/about-us/healthcare.webp",
    title: "Health Care - Disability - Life/ADD Insurance",
    description:
      "SPS offers a range of carefully selected insurance plans for you and your family to choose the available medical, dental and/or vision care option that fits your needs. Employee paid Disability & Life/ADD coverage is also available for all eligible employees.",
  },
  {
    id: "financial-future",
    icon: "/images/about-us/financial-future.webp",
    title: "Financial Future",
    description:
      "Secure your financial future by saving for retirement you may choose between either a pre-tax or post-tax contribution plan. SPS offers a comprehensive 401(k) retirement plan with financial advisors available to help you select and manage the right funds for you.",
  },
  {
    id: "paid-time-off",
    icon: "/images/about-us/paid-time-off.webp",
    title: "Paid Time Off & Holidays",
    description:
      "Our combined pool of sick and vacation time (paid time off - PTO) is for you - so that not only when you are sick but also to unwind and spend quality leisure time with your family and friends. In addition to the above, SPS provides annual holidays for your rest and relaxation.",
  },
  {
    id: "parental-leave",
    icon: "/images/about-us/parental-leave.webp",
    title: "Parental Leave and Family Bonding",
    description:
      "SPS offers a global Parental Pay policy as we believe there is nothing more important for parents than bonding with a new child.",
  },
  {
    id: "flexibility",
    icon: "/images/about-us/flexibility.webp",
    title: "Flexibility in Work",
    description:
      "We understand that not all people work best in a traditional office environment. We offer our employees the flexibility to work virtually if that helps them be more productive. Talk to your Manager on what best suits your particular situation!",
  },
];

export default function CareerBenefits() {
  return (
    <section className="w-full bg-[#eef4fb] py-14 lg:py-20">
      <div className="container mx-auto max-w-350 px-4">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1f4b] mb-4">
            Benefits
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            At SPS we provide a highly competitive Total Rewards Package for all
            of our employees around the world. Our country specific Total
            Rewards package aligns to our core values and provides a solid
            foundation for work life integration in a challenging and inclusive
            environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group/card rounded-2xl bg-white p-6 sm:p-7 flex flex-col transition-colors duration-300 hover:bg-[#0f1f4b]"
            >
              <div className="relative w-14 h-14 mb-5">
                <Image
                  src={benefit.icon}
                  alt=""
                  fill
                  aria-hidden="true"
                  className="object-contain transition-all duration-300 group-hover/card:brightness-0 group-hover/card:invert"
                  sizes="56px"
                />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0f1f4b] leading-snug mb-3 transition-colors duration-300 group-hover/card:text-white">
                {benefit.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed transition-colors duration-300 group-hover/card:text-white/85">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
