import Link from "next/link";
import { Globe, Layers, TrendingUp, ArrowRight } from "lucide-react";

const BENEFITS = [
  {
    icon: Globe,
    title: "Real-time Information",
    description:
      "Access essential real-time information about your company instantly from any device, anywhere.",
  },
  {
    icon: Layers,
    title: "One Platform",
    description:
      "Highlight areas for improvement and collaborate across departments—all from one centralized platform.",
  },
  {
    icon: TrendingUp,
    title: "Tailored Growth",
    description:
      "Systems specifically engineered for your unique business needs, ensuring streamlined operations.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What are the benefits of BMS?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            BMS offers more than traditional ERP solutions. Our system is
            tailored to your business needs so you can streamline operations and
            collaborate effectively.
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
