import { Shield, Compass, Heart, UserPlus, Home, Globe } from "lucide-react";

const values = [
  {
    id: "honesty",
    title: "Honesty",
    icon: Shield,
    description:
      "To be truthful in all our endeavors; to be honest and forthright with one another and with our customers.",
  },
  {
    id: "integrity",
    title: "Integrity",
    icon: Compass,
    description:
      "To say what we mean. To deliver what we promise, and to stand for what is right.",
  },
  {
    id: "respect",
    title: "Respect",
    icon: Heart,
    description:
      "To treat one another with dignity and fairness, appreciating the diversity of our workforce and the uniqueness of each employee.",
  },
  {
    id: "trust",
    title: "Trust",
    icon: UserPlus,
    description:
      "To build confidence through teamwork and open, candid communication.",
  },
  {
    id: "responsibility",
    title: "Responsibility",
    icon: Home,
    description:
      "To take responsibility for our actions and to speak up without fear of retribution- to report concerns in the workplace including violations of law, regulations, and company policies, and to seek clarification and guidance whenever there is doubt.",
  },
  {
    id: "citizenship",
    title: "Citizenship",
    icon: Globe,
    description:
      "To obey all of the laws in the countries with which we do business and to do our part to make the communities in which we live and work better.",
  },
];

export default function CareerValues() {
  return (
    <section className="w-full bg-[#0f1f4b] py-14 lg:py-20">
      <div className="container mx-auto max-w-350 px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="rounded-2xl border border-white/10 bg-white/3 p-7 sm:p-8 flex flex-col items-center text-center transition-colors duration-300 hover:bg-white/6"
              >
                <div className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>

                <p className="text-sm text-slate-300/85 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
