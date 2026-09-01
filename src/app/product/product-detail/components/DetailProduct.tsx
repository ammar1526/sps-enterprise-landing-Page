"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const productsData = [
  {
    title: "Azalio",
    description:
      "Keep your frontline employees happy, Reward Employees. Track employee engagement. Manage workforce operations.",
    image: "/images/logos/azalio.webp",
  },
  {
    title: "MYID Self Verify",
    description:
      "MYID helps organizations allow their employees to manage their corporate identity through secure and easy-to-use mobile application.",
    image: "/images/logos/myid.webp",
  },
  {
    title: "CSM",
    description:
      "Protect your business with SOC services, zero-trust security, endpoint defense, and SIEM/SOAR solutions.",
    image: "/images/logos/csm.webp",
  },
  {
    title: "BMS",
    description:
      "Get real-time insights into every aspect of your company’s performance, optimize processes and streamline business with our Business Management System.",
    image: "/images/logos/bms.webp",
  },
];

export default function ProductsSection() {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const target = 20;
          const duration = 2000;
          const startTime = performance.now();

          const animateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easedProgress * target));

            if (progress < 1) {
              requestAnimationFrame(animateCounter);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animateCounter);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-10 pb-5 sm:pt-12.5 md:pt-17.5 md:pb-10 2xxl:pt-25 2xxl:pb-17.5 overflow-hidden bg-[#0f1f4b]"
      style={{
        backgroundImage:
          "url(http://localhost/my_sites/bms/temp-web/sps-enterprise/assets/images/background/bg1.webp)",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundBlendMode: "luminosity",
      }}
    >
      <div className="absolute inset-0 bg-[#0f1f4b] opacity-90 z-0"></div>

      <div className="container mx-auto max-w-350 px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="relative xl:mr-12.5">
              <div className="relative overflow-hidden sm:rounded-3xl rounded-2xl">
                <Image
                  src="/images/595.webp"
                  alt="SPS Innovation"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute right-0 bottom-0 sm:w-48 w-32 2xxl:w-52">
                <div className="sm:p-7 sm:pt-6 p-4 rounded-2xl bg-[#0f1f4b] border border-white/10 shadow-2xl text-center">
                  <span className="sm:text-6xl text-4xl font-black text-white block leading-none mb-2 drop-shadow-lg">
                    {count}+
                  </span>
                  <span className="sm:text-xl text-sm font-bold mb-0 text-white/90 block leading-tight tracking-wide">
                    Years <br /> Driving Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mb-7.5">
            <div className="section-head style-1 mb-8">
              <h2 className="xl:text-5xl sm:text-4xl text-3xl font-black text-white capitalize mb-0 tracking-tight drop-shadow-md">
                Organization Trusted SPS Products
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-10 gap-x-5">
              {productsData.map((product, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl p-5 bg-white/5 backdrop-blur-[30px] text-center text-white after:w-px after:h-full after:opacity-20 after:-right-6.5 after:absolute after:-bottom-5 after:bg-linear-to-b after:from-white after:to-transparent before:w-full before:h-px before:opacity-20 before:-bottom-5 before:-right-6.5 before:absolute before:bg-linear-to-r before:from-white before:to-transparent max-sm:after:hidden max-sm:before:hidden"
                >
                  <div className="mx-auto size-25 rounded-full flex items-center justify-center mb-2.5 bg-white/10">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="icon-content">
                    <h4 className="sm:text-lg text-base font-bold text-white">
                      {product.title}
                    </h4>
                    <p className="text-white/70 text-sm font-extralight mb-0 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
