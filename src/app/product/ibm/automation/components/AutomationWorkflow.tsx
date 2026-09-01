"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bot, Share2, Boxes, ArrowRight, Check } from "lucide-react";

const tabs = [
  {
    id: "multi-agent",
    label: "Multi-Agent",
    icon: Bot,
    title:
      "Orchestrate a team of AI agents that work together, so you don't have to",
    description:
      "Let AI agents plan, coordinate and take action together. Whether it's one agent handling a task or a team collaborating across tools, our platform intelligently assigns the right agents and resources to get work done, without human micromanagement.",
    features: [
      "Multi-agent task planning and intelligent execution",
      "Automated coordination across tools, APIs, and workflows",
      "Smart agent assignment based on task complexity and priority",
      "Real-time collaboration between specialized AI agents",
      "Reduced human intervention with autonomous decision-making",
    ],
    image: "/images/ibm/agent1.webp",
  },
  {
    id: "orchestration-agent",
    label: "Orchestration Agent",
    icon: Share2,
    title: "Create AI assistants in minutes, no coding required",
    description:
      "Build, test and deploy AI agents with ease. Bring together your company data, the right tools and clear behavioral guidelines to design reusable agents that scale across your business.",
    features: [
      "No-code AI assistant builder with visual workflows",
      "Secure integration with company data and knowledge bases",
      "Predefined tools, actions, and behavioral rules for agents",
      "Test, refine, and reuse AI assistants across teams",
      "Rapid deployment of scalable AI assistants for business use",
    ],
    image: "/images/ibm/agent2.webp",
  },
  {
    id: "catalog-agent-builder",
    label: "Catalog Agent Builder",
    icon: Boxes,
    title: "The one-stop shop for enterprise-ready AI agents",
    description:
      "Our Agent Catalog features hundreds of specialized AI agents ready for immediate deployment. Filter by industry, function, or integration requirements to find the perfect solution.",
    features: [
      "Pre-built AI agents for enterprise business functions",
      "Industry-specific agents for finance, healthcare, retail, and more",
      "Filter agents by role, capability, or system integration",
      "Enterprise-grade security, governance, and compliance built in",
      "One-click deployment and lifecycle management for AI agents",
    ],
    image: "/images/ibm/agent3.webp",
  },
];

export default function AutomationWorkflow() {
  const [activeTab, setActiveTab] = useState("multi-agent");

  const activeData = tabs.find((tab) => tab.id === activeTab) || tabs[0];
  const ActiveIcon = activeData.icon;

  return (
    <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 sm:pt-12.5 pt-10 pb-10 bg-blue-100 overflow-hidden">
      <div className="container mx-auto max-w-350 px-4">
        <div className="md:mb-10 mb-5 text-center">
          <h2 className="2xxl:text-5xl lg:text-[38px] sm:text-3xl text-2xl font-bold capitalize text-[#0f1f4b]">
            Build, run and manage AI agents
          </h2>
        </div>

        <div className="custom-tab mb-10">
          <ul className="flex flex-wrap justify-center bg-white py-3.5 rounded-2xl shadow-sm max-w-fit mx-auto gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <li
                  key={tab.id}
                  className={`px-1.25 ${tab.id !== "catalog-agent-builder" ? "border-r border-black/5" : ""}`}
                >
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 md:text-lg text-xs py-2.5 xl:px-4.5 lg:px-3.5 px-2.5 w-full lg:rounded-2xl rounded-lg capitalize transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "bg-[#4269d7] text-white shadow-md"
                        : "bg-white text-black hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="tab-content-area pt-12.5">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
              <div className="xl:w-1/2 w-full">
                <div className="sm:mb-7.5 mb-5">
                  <h2 className="sm:text-3xl text-xl font-bold text-[#0f1f4b] mb-3">
                    {activeData.title}
                  </h2>
                  <p className="sm:text-base text-sm font-normal text-slate-600">
                    {activeData.description}
                  </p>
                </div>

                <ul className="text-slate-700 font-medium mb-7.5 space-y-1">
                  {activeData.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 p-1.25 xl:text-base text-sm"
                    >
                      <Check
                        className="w-5 h-5 mt-0.5 text-[#1d4ed8] shrink-0"
                        strokeWidth={3}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://spsnet.com/temp-web/sps-enterprise/comingsoon.php"
                  className="group inline-flex items-center bg-[#567de8] hover:bg-[#0f1f4b] text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="xl:w-1/2 w-full">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={activeData.image}
                    alt={activeData.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
