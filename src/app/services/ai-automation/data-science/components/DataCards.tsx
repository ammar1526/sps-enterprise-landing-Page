import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BENEFITS = [
  {
    icon: "/images/data-science/dlogo1.png",
    title: "Generative AI",
    description:
      "Embark on a transformative journey into the realm of creativity and innovation with our Generative AI services. At the crossroads of cutting-edge technology and boundless imagination, we redefine the possibilities that AI can offer. Unleash the power of generative models to turn your imaginative concepts into reality and setting new standards for what can be achieved...",
  },
  {
    icon: "/images/data-science/dlogo2.png",
    title: "Internet of Things",
    description:
      "Immerse yourself in a seamlessly connected world through our IoT services. Witness the harmonious integration of devices, sensors, and data, creating intelligent ecosystems that redefine efficiency and user experiences. Our IoT solutions unlock unprecedented opportunities, paving the way for a future where connectivity becomes the cornerstone of innovation...",
  },
  {
    icon: "/images/data-science/dlogo3.png",
    title: "Data Analytics",
    description:
      "Navigate the vast landscape of data with confidence through our advanced Data Analytics services. In the era where data is often referred to as the new oil, our tailored solutions extract meaningful insights, transforming raw information into strategic assets. Empower your decision-making process and gain a competitive edge in a world driven by data-driven strategies...",
  },
  {
    icon: "/images/data-science/dlogo4.png",
    title: "Conversational AI",
    description:
      "Revolutionize communication with our Conversational AI services. Our chatbots redefine the user interaction landscape, offering personalized and responsive conversations. Beyond enhancing customer support and streamlining processes, our solutions, fueled by NLP and machine learning, create efficient communication channels that adapt to your unique needs...",
  },
  {
    icon: "/images/data-science/dlogo5.jpeg",
    title: "Image Recognition",
    description:
      "See the world through a new lens with our Image Recognition services. Our cutting-edge technology enables machines to interpret and understand visual data, opening avenues for automation, security, and enhanced user experiences. From object detection to facial recognition, our solutions redefine how you perceive and interact with visual information in the digital age...",
  },
  {
    icon: "/images/data-science/dlogo6.jpeg",
    title: "Data Management",
    description:
      "Efficiently manage, organize, and secure your data with our comprehensive Data Management services. In the digital landscape, where data is the new oil, our tailored solutions ensure accessibility, reliability, and compliance. Unlock the true potential of your data assets and make informed decisions confidently...",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon, title, description }) => (
            <Link
              key={title}
              href="/product/ibm/automation"
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-blue-50 shadow-md pt-14 pb-6 pl-6 pr-6 transition-all duration-300 hover:bg-blue-950 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 flex h-12 w-12 items-center justify-center rounded-bl-xl bg-white transition-colors duration-300 group-hover:bg-[#3582d0]">
                <div className="relative h-7 w-7">
                  <Image
                    src={icon}
                    alt={title}
                    fill
                    sizes="28px"
                    className="object-contain"
                  />
                </div>
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
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
