"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface Partner {
  name: string;
  description: string;
  image: string;
}

const partners: Partner[] = [
  {
    name: "ATLASSIAN",
    description: "Collaboration • Project Tracking & Agile Workflows",
    image: "/images/data-science/atlassian.webp",
  },
  {
    name: "IBM",
    description: "Enterprise AI • Hybrid Cloud & Security Solutions",
    image: "/images/data-science/ibm.webp",
  },
  {
    name: "SAP",
    description: "Enterprise Resource Planning • Business Process & Analytics",
    image: "/images/data-science/sap.webp",
  },
  {
    name: "Data Iku",
    description: "AI • Machine Learning & Collaborative Data Science",
    image: "/images/data-science/dataiku.webp",
  },
  {
    name: "Google",
    description: "Cloud Computing • Big Data & Artificial Intelligence",
    image: "/images/data-science/google.webp",
  },
  {
    name: "AWS",
    description: "Cloud Infrastructure • Scalable Services & DevOps",
    image: "/images/data-science/aws.webp",
  },
  {
    name: "Microsoft",
    description: "Cloud Platforms • Enterprise Software & Productivity",
    image: "/images/data-science/microsoft.webp",
  },
  {
    name: "APC",
    description: "Power Protection • Data Center Infrastructure & Cooling",
    image: "/images/data-science/apc.webp",
  },
];

const marqueePartners = [...partners, ...partners];

export default function TechPartners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const listRef = useRef<HTMLUListElement | null>(null);
  const currentStepRef = useRef(0);

  const CARD_WIDTH = 280;
  const GAP = 24;
  const STEP_SIZE = CARD_WIDTH + GAP;
  const HOLD_DURATION = 3000;

  const moveToStep = useCallback(
    (step: number) => {
      if (listRef.current) {
        setIsTransitioning(true);
        const xPos = -step * STEP_SIZE;
        listRef.current.style.transition =
          "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
        listRef.current.style.transform = `translateX(${xPos}px)`;

        setActiveIndex(step % partners.length);

        window.setTimeout(() => {
          setIsTransitioning(false);
          if (step >= partners.length) {
            currentStepRef.current = 0;
            if (listRef.current) {
              listRef.current.style.transition = "none";
              listRef.current.style.transform = "translateX(0px)";
            }
          }
        }, 600);
      }
    },
    [STEP_SIZE],
  );

  useEffect(() => {
    if (isPaused || isTransitioning) return;
    const interval = setInterval(() => {
      currentStepRef.current += 1;
      moveToStep(currentStepRef.current);
    }, HOLD_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, isTransitioning, moveToStep]);

  return (
    <section
      className="relative py-7.5 sm:py-10 xl:py-17.5 2xxl:py-25 bg-blue-100 overflow-hidden"
      aria-labelledby="tech-partners-heading"
    >
      <div className="container mx-auto max-w-[1600px] px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="xl:w-1/4 w-full mb-7.5 xl:mb-0 shrink-0 pr-8">
            <div className="sm:mb-7.5 mb-5">
              <h2
                id="tech-partners-heading"
                className="xl:text-4xl sm:text-3xl text-2xl font-bold capitalize mb-4 text-[#0f1f4b]"
              >
                Our Technology Partners
              </h2>
              <p className="sm:text-lg text-base leading-[1.6] font-light text-slate-600 mb-0">
                We work with world-class technology vendors to deliver secure,
                scalable, and innovative solutions across Cloud, AI,
                Cybersecurity, and Enterprise IT.
              </p>
            </div>
          </div>

          <div className="lg:w-3/4 w-full">
            <div
              className="xl:ml-8 mt-7.5 xl:mt-0 py-10 overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full">
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-blue-100 via-blue-100/70 to-transparent z-30 pointer-events-none blur-[2px]" />

                <ul
                  ref={listRef}
                  className="flex gap-6 w-max items-center list-none m-0 p-0"
                  aria-label="Technology partners"
                >
                  {marqueePartners.map((partner, index) => (
                    <li
                      key={`${partner.name}-${index}`}
                      aria-hidden={index >= partners.length ? true : undefined}
                      className={`shrink-0 w-70 flex flex-col justify-center bg-white sm:rounded-2xl rounded-lg md:py-10 md:px-7.5 py-8.75 px-6.25 gap-3 items-center text-center h-80 transition-all duration-700 ease-in-out will-change-transform ${
                        activeIndex === index % partners.length
                          ? "scale-110 shadow-2xl z-20"
                          : "scale-100 shadow-none z-10"
                      }`}
                    >
                      <div className="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                        <Image
                          src={partner.image}
                          alt={`${partner.name} logo`}
                          title={partner.name}
                          width={150}
                          height={100}
                          loading={index < 6 ? "eager" : "lazy"}
                          sizes="150px"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <div className="dz-content">
                        <h3 className="md:text-2xl text-xl mb-1.25 font-bold text-[#0f1f4b]">
                          {partner.name}
                        </h3>
                        <p className="md:text-base text-sm mb-2 font-medium text-slate-600">
                          {partner.description}
                        </p>
                        <a
                          href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php"
                          className="md:text-sm text-xs text-[#1d4ed8] hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8] rounded"
                          tabIndex={index >= partners.length ? -1 : undefined}
                          aria-label={`Learn more about ${partner.name}`}
                        >
                          Learn More
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
