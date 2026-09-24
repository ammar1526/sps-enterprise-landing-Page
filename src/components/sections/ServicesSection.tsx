"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Cloud,
  Bot,
  Users,
  Network,
  Server,
  UserCheck,
  Bug,
  CloudUpload,
  BrainCircuit,
  GraduationCap,
  CalendarDays,
  ArrowUpRight,
  Circle,
  ChartBar,
} from "lucide-react";
type IconComponent = React.ComponentType<{ className?: string }>;

const EXTERNAL_LINK =
  "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php";

const Card = ({
  icon: Icon,
  title,
  children,
  href,
}: {
  icon: IconComponent;
  title: string;
  children: React.ReactNode;
  href: string;
}) => (
  <div className="group relative rounded-[30px] p-7.5 h-95 flex flex-col bg-slate-50 border border-slate-200 overflow-hidden transition-all duration-500 hover:bg-[#193378] hover:border-[#0f1f4b] shrink-0 w-[301.25px]">
    <div className="mb-auto relative z-10">
      <div className="relative inline-block mb-2.5">
        <Icon className="w-14 h-14 text-[#0f1f4b] group-hover:text-white transition-colors duration-500" />
        <Icon className="absolute -top-2 -right-2 w-16 h-16 text-[#0f1f4b] opacity-[0.025] group-hover:opacity-10 transition-opacity duration-500" />
      </div>
      <h3 className="text-[22px] font-bold mb-3 text-slate-900 group-hover:text-white transition-colors duration-500">
        {title}
      </h3>
      <div className="text-[15px] font-light text-slate-600 group-hover:text-white transition-colors duration-500 leading-relaxed">
        {children}
      </div>
    </div>
    <div className="relative pt-5 mt-5 mr-12.5 border-t border-dashed border-slate-300 group-hover:border-white/40 duration-500 flex items-center justify-between">
      <span className="text-[15px] text-[#0f1f4b] group-hover:text-white flex items-center gap-2 leading-[1.2]">
        <Circle className="w-2 h-2 fill-current" />
        Read More
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${title}`}
        className="absolute -right-12.5 -bottom-7.5 flex items-center justify-center w-15 h-15 bg-[#0f1f4b] text-white rounded-full transition-all duration-500 group-hover:bg-[#1e3a8a] group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2"
      >
        <ArrowUpRight className="w-7 h-7" />
      </a>
    </div>
  </div>
);

const tabs = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: ShieldCheck,
    content: (
      <>
        <div className="sm:mb-7.5 mb-5 mt-5">
          <p className="text-sm text-center px-5 text-slate-600">
            SPS Cybersecurity team has the following practices: Digital Trust
            (User Security, Data Security, Mobile Device Management), Threat
            Management (Cybersecurity Program, SIEM systems, Application
            Security, Network Security), Keysight (Professional Services, Help
            Desk Services, Security Operations), and SAP Security.
          </p>
        </div>
        <div className="flex gap-8.75 overflow-x-auto pb-10 pt-5 px-5 carousel-track no-scrollbar">
          <Card icon={Network} title="Network Security" href={EXTERNAL_LINK}>
            <a
              href="https://www.spsnet.com/service-detail/security/network-security/network-visibility-operations-services/"
              className="hover:underline"
            >
              Network Visibility Operations Services
            </a>
            ,{" "}
            <a
              href="https://www.spsnet.com/service-detail/security/network-security/network-visibility-design-implementation-services/"
              className="hover:underline"
            >
              Network Visibility Design & Implementation
            </a>
            , and{" "}
            <a
              href="https://www.spsnet.com/service-detail/security/network-security/keysight-ixnetwork-training/"
              className="hover:underline"
            >
              Keysight IxNetwork Training
            </a>
            .
          </Card>

          <Card icon={Server} title="SMaaS" href={EXTERNAL_LINK}>
            <a href={EXTERNAL_LINK} className="hover:underline">
              Service Management as a Service
            </a>
            , including cloud monitoring and operations solutions.
          </Card>

          <Card icon={ShieldCheck} title="GRC" href={EXTERNAL_LINK}>
            <a href={EXTERNAL_LINK} className="hover:underline">
              Governance, Risk &amp; Compliance
            </a>{" "}
            solutions for enterprise-wide policies and controls.
          </Card>

          <Card icon={UserCheck} title="Identity & Access" href={EXTERNAL_LINK}>
            <a href={EXTERNAL_LINK} className="hover:underline">
              Identity &amp; Access Management
            </a>{" "}
            solutions for secure authentication and authorization.
          </Card>

          <Card icon={Bug} title="Threat Management" href={EXTERNAL_LINK}>
            <a href={EXTERNAL_LINK} className="hover:underline">
              Threat Management
            </a>{" "}
            solutions for proactive detection and mitigation of cyber threats.
          </Card>
        </div>
      </>
    ),
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
    content: (
      <>
        <div className="sm:mb-7.5 mb-5 mt-5">
          <p className="text-sm text-center px-5 text-slate-600">
            SPS Cloud team offers services in DevOps (CI/CD Pipelines,
            Automation, Containerization) and Migration Services (Cloud
            Strategy, Application Migration, Data Migration, Multi-cloud
            Solutions).
          </p>
        </div>
        <div className="flex gap-8.75 overflow-x-auto pb-10 pt-5 px-5 carousel-track no-scrollbar">
          <Card icon={ChartBar} title="DevOps" href={EXTERNAL_LINK}>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/cloud/devops/cloud-application-development/"
                  className="hover:underline"
                >
                  Cloud Application Development
                </a>
              </li>
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/cloud/devops/it-ops-and-support/"
                  className="hover:underline"
                >
                  IT Ops and Support
                </a>
              </li>
            </ul>
          </Card>

          <Card
            icon={CloudUpload}
            title="Migration Services"
            href={EXTERNAL_LINK}
          >
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/cloud/public-cloud/migrate-vmware-workload-to-cloud/"
                  className="hover:underline"
                >
                  Migrate VMware Workload to Cloud
                </a>
              </li>
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/cloud/public-cloud/migrate-ms-exchange-to-office-365/"
                  className="hover:underline"
                >
                  Migrate MS Exchange to Office 365
                </a>
              </li>
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/cloud/public-cloud/migrate-ibm-power-to-cloud/"
                  className="hover:underline"
                >
                  Migrate IBM Power to Cloud
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: "ai",
    label: "AI & Automation",
    icon: Bot,
    content: (
      <>
        <div className="sm:mb-7.5 mb-5 mt-5">
          <p className="text-sm text-center px-5 text-slate-600">
            SPS AI &amp; Automation team offers solutions in Automation (Robotic
            Process Automation, Workflow Automation) and Data Science (Machine
            Learning, Predictive Analytics, AI Model Development).
          </p>
        </div>
        <div className="flex gap-8.75 overflow-x-auto pb-10 pt-5 px-5 carousel-track no-scrollbar">
          <Card icon={Bot} title="Data Science" href={EXTERNAL_LINK}>
            <ul className="space-y-1 line-height-1">
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/ai/data-science/generative-ai/"
                  className="hover:underline"
                >
                  Business Process Modeling Using ARIS
                </a>
              </li>
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/ai/data-science/internet-of-things/"
                  className="hover:underline"
                >
                  Business Process Automation Using webMethods
                </a>
              </li>
            </ul>
          </Card>

          <Card icon={BrainCircuit} title="Data Science" href={EXTERNAL_LINK}>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/ai/data-science/generative-ai/"
                  className="hover:underline"
                >
                  Generative AI
                </a>
              </li>
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/ai/data-science/internet-of-things/"
                  className="hover:underline"
                >
                  Internet of Things
                </a>
              </li>
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/ai/data-science/data-analytics/"
                  className="hover:underline"
                >
                  Data Analytics
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: Users,
    content: (
      <>
        <div className="sm:mb-7.5 mb-5 mt-5">
          <p className="text-sm text-center px-5 text-slate-600">
            SPS Collaboration team focuses on enhancing organizational learning
            and engagement through Learning initiatives and Events.
          </p>
        </div>
        <div className="flex gap-8.75 overflow-x-auto pb-10 pt-5 px-5 carousel-track no-scrollbar">
          <Card icon={GraduationCap} title="Learning" href={EXTERNAL_LINK}>
            <ul className="space-y-1">
              <li>
                <a href={EXTERNAL_LINK} className="hover:underline">
                  Training Programs
                </a>
              </li>
              <li>
                <a href={EXTERNAL_LINK} className="hover:underline">
                  Workshops
                </a>
              </li>
              <li>
                <a href={EXTERNAL_LINK} className="hover:underline">
                  Knowledge Sharing
                </a>
              </li>
            </ul>
          </Card>

          <Card icon={CalendarDays} title="Events" href={EXTERNAL_LINK}>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/events/events/events-services/"
                  className="hover:underline"
                >
                  Events Services
                </a>
              </li>
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/events/events/virtual-platform-training/"
                  className="hover:underline"
                >
                  Virtual Platform Training
                </a>
              </li>
              <li>
                <a
                  href="https://www.spsnet.com/service-detail/events/events/recording-editing/"
                  className="hover:underline"
                >
                  Recording &amp; Editing
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </>
    ),
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("cybersecurity");

  useEffect(() => {
    const interval = setInterval(() => {
      const activeContent = document.querySelector(
        ".tab-content.block .carousel-track",
      ) as HTMLElement | null;
      if (!activeContent) return;

      const scrollAmount = 336;
      activeContent.scrollBy({ left: scrollAmount, behavior: "smooth" });

      if (
        activeContent.scrollLeft + activeContent.clientWidth >=
        activeContent.scrollWidth - 10
      ) {
        activeContent.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="xl:py-10.5 md:py-10 py-7.5 bg-white">
      <div className="container mx-auto max-w-350 px-4">
        <div className="w-full">
          <div className="mb-5 text-start">
            <div className="custom-tab">
              <ul className="flex flex-wrap justify-center gap-1.25 mb-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <li
                      key={tab.id}
                      className="border border-[#416482] rounded-[10px] transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? "#0f1f4b" : "transparent",
                        borderColor: isActive ? "#0f1f4b" : "#416482",
                      }}
                    >
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-2.5 px-5 font-medium rounded-[10px] cursor-pointer relative duration-500 flex items-center gap-2 text-[15px] ${
                          isActive
                            ? "text-white"
                            : "text-slate-600 hover:text-[#0f1f4b]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="tab-contents">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-content transition-opacity duration-500 ${
                      activeTab === tab.id
                        ? "block opacity-100"
                        : "hidden opacity-0"
                    }`}
                  >
                    {tab.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
