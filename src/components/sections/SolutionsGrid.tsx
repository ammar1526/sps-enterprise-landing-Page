"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Circle } from "lucide-react";

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    title: "GateKeyper",
    description:
      "Dennis Beam, who held a patent on the safety of heavy equipment, wanted to build an app to ensure safety of professional operators.",
    image: "/images/logos/gatekeeper.webp",
    link: "http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php",
  },
  {
    title: "CREyield",
    description:
      "CREyield streamlines real estate investment analytics and reporting for better decision-making.",
    image: "/images/logos/creyield.webp",
    link: "http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php",
  },
  {
    title: "CSM",
    description:
      "CSM enables efficient customer service management with AI-driven insights and automation.",
    image: "/images/logos/csm.webp",
    link: "http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php",
  },
  {
    title: "MyHealthChart",
    description:
      "MyHealthChart provides patients with an integrated view of their health records and insights.",
    image: "/images/logos/myhealthcard.webp",
    link: "http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Analytics Dashboard provides actionable insights and visualizations for business decision-making.",
    image: "/images/logos/dashboard.webp",
    link: "http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php",
  },
  {
    title: "AIMY",
    description:
      "AIMY is an AI-driven personal assistant that helps businesses automate routine tasks efficiently.",
    image: "/images/logos/aimy.webp",
    link: "http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php",
  },
  {
    title: "HerDomain",
    description:
      "HerDomain is a platform empowering women entrepreneurs with digital tools and resources.",
    image: "/images/logos/herdomain.webp",
    link: "http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php",
  },
  {
    title: "Watch Over",
    description:
      "Watch Over monitors critical systems and processes, providing real-time alerts and insights.",
    image: "/images/logos/watchover.webp",
    link: "http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="xl:py-17.5 md:py-10 py-7.5 bg-slate-100">
      <div className="container mx-auto max-w-350 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7.5">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative rounded-[30px] p-7.5 h-95 flex flex-col bg-slate-50 border border-slate-200 overflow-hidden transition-all duration-500 hover:bg-[#0f1f4b] hover:border-[#0f1f4b]`}
            >
              <div className="mb-auto relative z-10">
                <div className="relative w-15 h-15 mb-7.5">
                  <Image
                    src={product.image}
                    alt={`${product.title} Icon`}
                    width={60}
                    height={60}
                    className="object-contain text-slate-900 group-hover:text-white"
                  />
                </div>
                <div className="absolute right-0 top-2.5 w-35 opacity-[0.025] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.05]">
                  <Image
                    src={product.image}
                    alt=""
                    width={140}
                    height={140}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[22px] font-bold mb-3 text-slate-900 group-hover:text-white transition-colors duration-500">
                    {product.title}
                  </h4>
                  <p className="text-[15px] font-light text-slate-600 group-hover:text-white transition-colors duration-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <div
                className={`relative pt-5 mt-5 mr-12.5 flex items-center justify-between before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-size[10px_1px] before:bg-repeat-x before:content-[''] before:bg-slate-300 group-hover:before:bg-white/40 before:duration-500`}
              >
                <span
                  className={`text-[15px] flex items-center gap-2 leading-[1.2] text-[#0f1f4b] group-hover:text-white transition-colors duration-500`}
                >
                  <Circle className="w-2 h-2 fill-current text-[#0f1f4b] group-hover:text-white transition-colors duration-500" />
                  Read More
                </span>
                <Link
                  href={product.link}
                  aria-label={`Read more about ${product.title}`}
                  className={`absolute -right-12.5 -bottom-7.5 flex items-center justify-center w-15 h-15 bg-[#1e3a8a] text-white rounded-full transition-all duration-500 group-hover:bg-white group-hover:text-[#1e3a8a] group-hover:translate-x-2 group-hover:-translate-y-2`}
                >
                  <ArrowUpRight className="w-7 h-7" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
