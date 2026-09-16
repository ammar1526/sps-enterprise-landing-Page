"use client";

import Image from "next/image";
import { Manrope, Inter } from "next/font/google";
import { useState } from "react";

const display = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

type CardData = {
  heading: string;
  paragraph: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  cta?: { lead: string; label: string };
};

const cards: CardData[] = [
  {
    heading: "Transform How Your County Serves Its People",
    paragraph:
      "Unlock the full potential of your county government with a guided, executive-led approach to digital transformation. From cybersecurity awareness to cloud migration and AI readiness, we help you modernize the systems that power your public services.",
    image: "/images/county-government/Countyinfo.jpg",
    imageAlt:
      "The County Executive and department heads reviewing a digital transformation plan together at night",
  },
  {
    heading:
      "Helping County Governments Accelerate Digital Transformation with AI, Cloud, and Cybersecurity",
    paragraph:
      "We begin with a county-wide Cyber Range event, led by the County Executive and joined by department heads from Finance, HR, Public Safety, Fire, Utilities, and more. This immersive simulation builds executive awareness around the impact of cyber incidents and sets the stage for a broader transformation effort. Next, we conduct Tabletop Exercises with each department to evaluate risks across information systems, infrastructure, and service delivery. These sessions go beyond cybersecurity they uncover opportunities to modernize hardware and software, refactor legacy applications, migrate to the cloud, and unlock the potential of data for AI and advanced analytics. The outcome is a comprehensive, top-down digital transformation blueprint a multi-year roadmap that aligns technology modernization with your county's mission to serve, protect, and innovate. Ready to lead the change? Let's build your county's digital future together..",
    image: "/images/county-government/Countyinfo2.png",
    imageAlt:
      "A security analyst monitoring county systems across multiple screens in a network operations center",
    reverse: true,
    cta: {
      lead: "Ready to lead the change?",
      label: "Let's build your county's digital future together",
    },
  },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
        stroke="white"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="white"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReadMoreButton({
  isExpanded,
  onClick,
}: {
  isExpanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="mt-3 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 inline-flex items-center gap-1 group"
    >
      {isExpanded ? "Read Less" : "Read More"}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className={`h-4 w-4 transition-transform duration-300 ${
          isExpanded ? "rotate-180" : ""
        }`}
      >
        <path
          d="M5 8l5 5 5-5"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function CountyTransformationCards() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleReadMore = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <section
      className={`${display.variable} ${body.variable} relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-blue-50 px-4 py-20 sm:px-6 lg:px-8`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,var(--color-blue-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-blue-100)_1px,transparent_1px)] [bg-size:56px_56px] mask-[radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-950" />
          <span
            style={{ fontFamily: "var(--font-body)" }}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-950"
          >
            County Government · Digital Transformation
          </span>
        </div>

        <div className="mt-12 flex w-full flex-col">
          {cards.map((card, index) => {
            const isExpanded = expandedCards.has(index);
            const displayText = isExpanded
              ? card.paragraph
              : truncateText(card.paragraph, 200);
            const needsTruncation = card.paragraph.length > 200;

            return (
              <div key={card.heading} className="flex flex-col">
                <article className="group relative w-full">
                  <div
                    className={`flex flex-col overflow-hidden rounded-4xl border border-blue-100 bg-white shadow-[0_20px_60px_-18px_rgba(23,37,84,0.18)] transition-shadow duration-500 hover:shadow-[0_30px_80px_-18px_rgba(23,37,84,0.28)] lg:flex-row ${
                      card.reverse ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="relative w-full shrink-0 overflow-hidden lg:w-[46%]">
                      <div className="relative aspect-16/10 w-full lg:aspect-auto lg:h-full lg:min-h-80">
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 46vw"
                          className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.045]"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-blue-950/25 via-transparent to-transparent" />
                      </div>

                      <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 shadow-lg ring-4 ring-white/80">
                        <ShieldIcon />
                      </div>
                    </div>

                    <div className="flex w-full flex-col justify-center px-8 py-10 sm:px-12 sm:py-12 lg:w-[54%]">
                      <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-[1.75rem]"
                      >
                        {card.heading}
                      </h2>
                      <div className="mt-4 h-1 w-12 rounded-full bg-blue-100" />
                      <div className="mt-5">
                        <p
                          style={{ fontFamily: "var(--font-body)" }}
                          className="text-[15px] leading-relaxed text-slate-600 sm:text-base"
                        >
                          {displayText}
                        </p>
                        {needsTruncation && (
                          <ReadMoreButton
                            isExpanded={isExpanded}
                            onClick={() => toggleReadMore(index)}
                          />
                        )}
                      </div>

                      {card.cta && (
                        <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                          <span
                            style={{ fontFamily: "var(--font-body)" }}
                            className="text-sm font-medium text-blue-950/70"
                          >
                            {card.cta.lead}
                          </span>
                          <button
                            type="button"
                            className="group/btn inline-flex items-center gap-2 rounded-full bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white outline-none transition-colors duration-300 hover:bg-blue-900 focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2"
                          >
                            {card.cta.label}
                            <ArrowIcon />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>

                {index === 0 && (
                  <div className="relative mx-auto flex h-14 w-px flex-col items-center justify-center bg-blue-100">
                    <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm">
                      <span className="h-2 w-2 rotate-45 rounded-xs bg-blue-950" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
