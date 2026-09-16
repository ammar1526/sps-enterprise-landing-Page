"use client";

import { useState } from "react";
import {
  Shield,
  Cloud,
  Bot,
  Users,
  FlaskConical,
  ChevronRight,
} from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

type TabItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  services: ServiceItem[];
};

const tabs: TabItem[] = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: Shield,
    services: [
      {
        id: "network-visibility",
        title: "Network Visibility Operations Services",
        description:
          "The SPS Network Visibility Operations Service suite offers three levels of service to address specific client environments: 1) Basic Health Check; 2) Configuration Review & Testing; 3) Comprehensive Documentation and Training.",
      },
      {
        id: "smjs",
        title: "Security Management Jump Start – SMJS",
        description:
          "This is a pre-requisite to Security Management as a Service. Using the NIST cybersecurity framework, we meet with the enterprise stakeholders to assess the state of security management in your organization, establish a baseline and formulate a framework to roll out Security Management as a Service. The deliverable of this service is a Security Management Gaps and Remediation Report. This report forms the basis of our Security Management as a Service offering.",
      },
      {
        id: "smaas",
        title: "Security Management as a Service – SMaaS",
        description:
          "Security Management as a Service delivers ongoing governance, risk, and compliance management for your organization. Our team acts as an extension of your security leadership, continuously monitoring your security posture, managing policies and controls, and providing actionable recommendations to maintain compliance and reduce risk across your enterprise.",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    services: [
      {
        id: "vmware-ibm",
        title: "Migrate VMware Workload to Cloud",
        description:
          "SPS offers a seamless service for migrating VMware workloads to IBM Cloud, enhancing scalability, flexibility, and cost-efficiency. Our tailored approach includes comprehensive assessment, planning, and execution to ensure minimal disruption. We provide ongoing support for optimized cloud operations.",
      },
      {
        id: "ibm-power",
        title: "Migrate IBM Power to Cloud",
        description:
          "Move your IBM Power workloads to a modern cloud environment with minimal downtime. Our specialists handle assessment, migration planning, and execution, ensuring your critical Power-based applications run efficiently in the cloud while reducing infrastructure costs and improving resilience.",
      },
      {
        id: "cloud-app-dev",
        title: "Cloud Application Development",
        description:
          "Build cloud-native applications designed for scale, resilience, and speed. Our cloud application development services cover architecture design, development, deployment, and ongoing optimization across leading cloud platforms, helping you deliver modern digital experiences faster.",
      },
      {
        id: "it-ops",
        title: "IT Ops and Support",
        description:
          "Keep your cloud and on-premises environments running smoothly with comprehensive IT operations and support. From monitoring and incident response to patching and performance tuning, our team ensures your infrastructure stays secure, available, and optimized around the clock.",
      },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    icon: Bot,
    services: [
      {
        id: "data-analytics",
        title: "Data Analytics",
        description:
          "Navigate the vast landscape of data with confidence through our advanced Data Analytics services. In the era where data is often referred to as the 'new oil', our tailored solutions extract meaningful insights, transforming raw information into strategic assets. Empower your decision-making process and gain a competitive edge in a world driven by data-driven strategies.",
      },
      {
        id: "conversational-ai",
        title: "Conversational AI",
        description:
          "Deliver intelligent, human-like interactions across chat, voice, and messaging channels. Our conversational AI solutions automate customer support, streamline internal workflows, and enhance citizen engagement, all while learning and improving over time to deliver better outcomes.",
      },
      {
        id: "data-management",
        title: "Data Management",
        description:
          "Establish a strong foundation for analytics and AI with modern data management. We help you organize, govern, and secure your data across systems, ensuring accuracy, accessibility, and compliance so your teams can trust the insights they act on.",
      },
    ],
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: Users,
    services: [
      {
        id: "events-services",
        title: "Events Services",
        description:
          "When you need to hold remote classes, virtual meetings, or meet with your peers in a collaborative environment with minimal planning at a minimal cost.",
      },
    ],
  },
  {
    id: "spinnlabs",
    label: "Spinnlabs",
    icon: FlaskConical,
    services: [
      {
        id: "startup-service",
        title: "Startup Service",
        description:
          "Navigate the vast landscape of data with confidence through our advanced Data Analytics services. In the era where data is often referred to as the 'new oil', our tailored solutions extract meaningful insights, transforming raw information into strategic assets. Empower your decision-making process and gain a competitive edge in a world driven by data-driven strategies.",
      },
    ],
  },
];

export default function CountyService() {
  const [activeTab, setActiveTab] = useState("cybersecurity");
  const [activeService, setActiveService] = useState("network-visibility");

  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0];
  const currentService =
    currentTab.services.find((s) => s.id === activeService) ??
    currentTab.services[0];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const tab = tabs.find((t) => t.id === tabId);
    if (tab) setActiveService(tab.services[0].id);
  };

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Our Services for County Government
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Explore County Government services we provide across our core
            practices
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl shadow-sm overflow-hidden bg-blue-100">
          <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 px-2 sm:px-4 pt-4 pb-0 bg-slate-50/50">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#7494ec] text-white"
                      : "text-slate-600 hover:text-[#7494ec] hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 min-h-80">
            <div className="md:col-span-1 bg-[#0b1f5c] p-4 sm:p-6 flex flex-col gap-2">
              {currentTab.services.map((service) => {
                const isActive = activeService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#132d7a] text-white shadow-md"
                        : "text-slate-300 hover:text-white hover:bg-[#132d7a]/50"
                    }`}
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>

            <div className="md:col-span-2 bg-[#0b1f5c] p-6 sm:p-8 flex flex-col justify-between">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8">
                {currentService.description}
              </p>
              <div>
                <button className="inline-flex items-center gap-2 bg-white text-[#0b1f5c] px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-100 transition-colors cursor-pointer">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
