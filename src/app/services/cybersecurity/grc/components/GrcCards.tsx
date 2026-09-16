import Link from "next/link";
import { BadgeCheck, ShieldCheck } from "lucide-react";

const BENEFITS = [
  {
    icon: BadgeCheck,
    title: "ISO 27001",
    subtitle: "Gap Assessment & Compliance Consultancy",
    description:
      "Implementation and conducting an ISO 27001(internal) audit enables you to assess your company's security equipment, systems, protocols, policies and procedures to ensure that they are in compliance with industry standards.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2",
    subtitle: "Gap Assessment & Compliance Consultancy",
    description:
      "SOC 2 is a voluntary compliance standard for service organizations, developed by the American Institute of CPAs (AICPA), which specifies how organizations should manage customer data. The standard is based on the following Trust Services Criteria: security, availability, processing integrity, confidentiality, privacy.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a1330] sm:text-4xl">
            Our GRC Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our comprehensive GRC services unify your governance, risk, and
            compliance frameworks into a single, automated ecosystem. We help
            you seamlessly navigate complex regulatory landscapes while
            minimizing third-party risks across your entire enterprise
            infrastructure.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
          {BENEFITS.map(({ icon: Icon, title, subtitle, description }) => (
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
                <p className="mt-1 text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                  {subtitle}
                </p>
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
