import Link from "next/link";
import { ShieldCheck, ShieldAlert, Shield } from "lucide-react";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Sec Policy Mgmt as a Service",
    description:
      "Security Policy Management as a Service (Sec Policy Mgmt) offers cloud-based solutions to streamline the creation, enforcement, and monitoring of security policies across diverse environments.",
  },
  {
    icon: ShieldAlert,
    title: "SMJS",
    description:
      "This is a pre-requisite to Security Management as a Service. Using the NIST cybersecurity framework, we meet with the enterprise stakeholders to assess the state of security management in your organization, establish a baseline and formulate a framework to roll our Security Management as a Service.",
  },
  {
    icon: Shield,
    title: "SMaaS",
    description:
      "Our Security Management as a Service is a customized program that optimally integrates decades of our cybersecurity expertise and strategic processes into your team. It is designed to help you MANAGE security of your organization based on the NIST cybersecurity framework (CSF). We regularly meet your enterprise and information systems.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a1330] sm:text-4xl">
            Our SMaaS Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our proprietary Security Management-as-a-Service architecture
            delivers end-to-end infrastructure protection, advanced threat
            intelligence, and compliance automation. We empower organizations to
            scale their operations securely while maintaining absolute
            visibility and control over critical digital assets..
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <Link
              key={title}
              href="/product/ibm/automation"
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-blue-50 shadow-md pt-14 pb-6 pl-6 pr-6 transition-all duration-300 hover:bg-blue-950 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 flex h-12 w-12 items-center justify-center rounded-bl-xl bg-white text-blue-700 transition-colors duration-300 group-hover:bg-[#3582d0] group-hover:text-white">
                <Icon className="h-7 w-7" strokeWidth={1.75} />
              </div>

              <div>
                <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-300">
                  {description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white">
                <span>Learn More</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
