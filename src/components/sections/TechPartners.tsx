"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Partner {
  name: string;
  description: string;
  image: string;
}

const partners: Partner[] = [
  {
    name: "Lenovo",
    description: "Devices • Infrastructure • Computing",
    image: "/images/lenovo.webp",
  },
  {
    name: "SAP",
    description: "Enterprise Resource Planning",
    image: "/images/sap.webp",
  },
  {
    name: "Red Hat",
    description: "Open Source Cloud",
    image: "/images/red-hat.webp",
  },
  {
    name: "Microsoft",
    description: "Cloud • Security • Productivity Solutions",
    image: "/images/microsoft.webp",
  },
  {
    name: "Google",
    description: "Cloud • Data • Infrastructure",
    image: "/images/google.webp",
  },
  {
    name: "IBM Security",
    description: "Identity • Access & Zero Trust Solutions",
    image: "/images/ibm1.webp",
  },
  {
    name: "Juniper",
    description: "Networking • AI • Routing",
    image: "/images/juniper-networks.webp",
  },
  {
    name: "Nutanix",
    description: "Hybrid Multicloud Infrastructure",
    image: "/images/nutanix.webp",
  },
  {
    name: "Sophos",
    description: "Endpoint • Network Security",
    image: "/images/sophos.webp",
  },
  {
    name: "Keysight",
    description: "Design • Emulation • Test",
    image: "/images/keysight.webp",
  },
  {
    name: "Okta",
    description: "Identity • Access Management",
    image: "/images/okta.webp",
  },
  {
    name: "Fortinet",
    description: "Firewall • Network Security",
    image: "/images/fortinet.webp",
  },
  {
    name: "Schneider Electric",
    description: "Energy • Automation • Sustainability",
    image: "/images/Schneider-Electric2.webp",
  },
  {
    name: "Cyber GRX",
    description: "Third-Party Risk Management",
    image: "/images/cyber-grx.webp",
  },
  {
    name: "Time stream",
    description: "Time-Series Database Analytics",
    image: "/images/timestream.webp",
  },
  {
    name: "Know Be 4",
    description: "Security Awareness Training",
    image: "/images/knowBe4.webp",
  },
  {
    name: "Tenable",
    description: "Vulnerability • Exposure Management",
    image: "/images/tenable1.webp",
  },
  {
    name: "Fischer Identity",
    description: "Governance • Identity Lifecycle",
    image: "/images/fischer-identity.webp",
  },
];

export default function TechPartners() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 2;
    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth - 2
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += scrollStep;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="relative py-7.5 sm:py-10 xl:py-17.5 2xxl:py-25 bg-blue-100 overflow-hidden">
      <div className="container mx-auto max-w-350 px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="xl:w-1/4 w-full mb-7.5 xl:mb-0">
            <div className="sm:mb-7.5 mb-5">
              <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold capitalize mb-4 text-[#0f1f4b]">
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
              className="xl:ml-12.5 mt-7.5 xl:mt-0 py-10 overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto scrollbar-hide items-center"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-[256.6px] flex flex-col justify-center bg-white sm:rounded-2xl rounded-lg md:py-10 md:px-7.5 py-8.75 px-6.25 gap-3 items-center text-center h-80 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10"
                  >
                    <div className="flex justify-center sm:w-37.5 w-30 relative overflow-hidden">
                      <Image
                        src={partner.image}
                        alt={`${partner.name} logo`}
                        width={150}
                        height={100}
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
                        className="md:text-sm text-xs text-[#1d4ed8] hover:underline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
