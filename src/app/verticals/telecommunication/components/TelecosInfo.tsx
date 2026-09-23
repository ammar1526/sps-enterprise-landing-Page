import React from "react";
import {
  Network,
  Activity,
  Cloud,
  ShieldCheck,
  BrainCircuit,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

interface Section {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  subhead: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    icon: Network,
    eyebrow: "Operations",
    title:
      "End-to-end network operations: establish telecom network assurance and zero touch operations.",
    subhead: "Achieve zero-touch network operations",
    paragraphs: [
      "Communications service providers (CSPs) and managed services providers (MSPs) are embracing cloud and virtualization as they deliver new 5G, edge computing and SD-WAN services. These services help drive growth and improve customer experiences.",
      "IBM Cloud Pak for Network Automation is an intelligent cloud platform that enables the automation and orchestration of network operations so CSPs and MSPs can transform their networks, evolve to zero-touch operations, reduce OPEX and deliver services faster.",
    ],
  },
  {
    icon: Activity,
    eyebrow: "Performance",
    title:
      "System-wide visibility for managing service performance: translate raw performance data into actionable insights.",
    subhead: "A modern network management solution",
    paragraphs: [
      "Struggling to address the soaring complexities of modern network management? Network infrastructures built for digital transformation require monitoring solutions that can be just as dynamic, flexible and scalable as the new environments.",
      "Designed for modern networks, IBM® SevOne® Network Performance Management (NPM) helps you spot, address, and prevent network performance issues early with machine learning-powered analytics. With real-time, actionable insights, it helps proactively monitor multivendor networks across enterprise, communication, and managed service providers.",
      "Going beyond detection, SevOne NPM combines industry-leading expertise and advanced technologies to help your IT team act on what matters: improving network performance to provide exceptional user experience.",
    ],
  },
  {
    icon: Cloud,
    eyebrow: "Distributed cloud",
    title:
      "Deploy and run apps with low latency, security and data privacy across the hybrid cloud.",
    subhead: "Build faster. Securely. Anywhere.",
    paragraphs: [
      "Deploy and run apps consistently across on-premises, edge computing and public cloud environments from any cloud vendor.",
      "Consume a common set of cloud services including toolchains, databases and AI in any location. The IBM Cloud Satellite-managed distributed cloud solution delivers cloud services, APIs, access policies, security controls and compliance.",
    ],
  },
  {
    icon: ShieldCheck,
    eyebrow: "Secure delivery",
    title:
      "Protect the networks to gain trust for enterprises' critical workloads.",
    subhead: "Connected security for a hybrid, multicloud world",
    paragraphs: [
      "As you move your business to the cloud, you need to work smarter. Security data is frequently spread across cloud and on-premises environments, exposing gaps and vulnerabilities.",
      "IBM Cloud Pak® for Security can help you gain deeper insights, mitigate risks and accelerate response. With an open security platform that can advance your zero trust strategy, you can use your existing investments while leaving your data where it is — helping your team become more efficient and collaborative.",
    ],
  },
  {
    icon: BrainCircuit,
    eyebrow: "AI governance",
    title:
      "With MLOps and Trustworthy AI, automate data collection and model building, deployment, and governance to drive trust across the AI lifecycle.",
    subhead: "Drive AI visibility for stakeholders",
    paragraphs: [
      "Dynamic and customizable dashboards provide real-time model status and facilitate stakeholder collaboration for decision-making.",
    ],
  },
  {
    icon: MessageCircle,
    eyebrow: "Customer service AI",
    title: "Transform standard support into exceptional care.",
    subhead:
      "Your customers don't just want to chat. They want actions and answers.",
    paragraphs: [
      "No one wants to have to contact support, but when they do, a poor customer service experience can make a bad situation even worse. That's why exceptional customer care is no longer just a priority, it's a must.",
      "Your customers expect you to deliver faster, more personalized, and smarter experiences regardless of whether they call, visit a website, or use your mobile app. IBM can help you build in the advantages of AI to overcome the friction of traditional support and deliver exceptional customer care by automating self-service actions and answers.",
    ],
  },
];

const TelecosInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-100 via-white to-slate-100 py-16 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-blue-900/60 uppercase mb-3">
            Telecommunications
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 tracking-tight">
            Challenges and Opportunities
          </h1>
          <div className="mt-4 h-1 w-20 rounded-full bg-blue-900" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map(
            ({ icon: Icon, eyebrow, title, subhead, paragraphs }) => (
              <article
                key={eyebrow}
                className="group relative flex flex-col rounded-2xl bg-slate-50 border border-slate-200/70
                         p-8 shadow-md shadow-slate-200/60
                         transition-all duration-300 ease-out
                         hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/10
                         hover:border-blue-900/20"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-blue-900
                           scale-x-0 origin-left transition-transform duration-300 ease-out
                           group-hover:scale-x-100"
                />

                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl
                           bg-blue-900/5 text-blue-900
                           transition-colors duration-300 group-hover:bg-blue-900 group-hover:text-white"
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                <span className="mb-2 text-xs font-semibold tracking-[0.15em] text-blue-900/60 uppercase">
                  {eyebrow}
                </span>

                <h2 className="mb-4 text-lg font-bold leading-snug text-blue-900">
                  {title}
                </h2>

                <h3 className="mb-3 text-sm font-semibold text-black">
                  {subhead}
                </h3>

                <div className="space-y-3 text-sm leading-relaxed text-black/80">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-900 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn more
                  <ArrowUpRight size={16} />
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default TelecosInfo;
