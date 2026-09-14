import Link from "next/link";
import { Shield, Code, MessageSquare, ArrowRight } from "lucide-react";

const BENEFITS = [
  {
    icon: Shield,
    title: "Network Visibility Operations Services",
    description:
      "Gain real-time visibility into network traffic with intelligent threat monitoring and rapid response capabilities that help detect, analyze, and mitigate security incidents before they impact operations.",
  },
  {
    icon: Code,
    title: "Network Visibility Design & Implementation Services",
    description:
      "Design and deploy secure network architectures with robust security controls, segmentation, and policy enforcement to protect enterprise, cloud, and hybrid environments.",
  },
  {
    icon: MessageSquare,
    title: "Keysight ixNetwork Training",
    description:
      "Enhance your team's network security skills with expert-led training and ongoing support to effectively manage threats, maintain compliance, and ensure secure network operations.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a1330] sm:text-4xl">
            Our Network Security Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Safeguard your digital infrastructure with advanced network security
            solutions that provide real-time visibility, threat prevention, and
            continuous protection.
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
                <span>Explore Product</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
