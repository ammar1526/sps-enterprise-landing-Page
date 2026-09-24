import Image from "next/image";
import { Check } from "lucide-react";

const events = [
  "IoT MOOC was launched in partnership with Avnet Monthly",
  "Jumpstart sessions on chatbots",
  "IoT workshops for young & old alike",
  "Monthly blockchain events",
];

export default function StorySharing() {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full">
        <Image
          src="/images/about-us/knowledge.webp"
          alt="Sharing knowledge and inspiration at SPS"
          width={1920}
          height={720}
          className="w-full h-auto object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="container mx-auto max-w-350 px-4 mt-36">
        <div className="relative -mt-16 sm:-mt-24 lg:-mt-32 mb-14 lg:mb-20">
          <div className="mx-auto max-w-4xl bg-white rounded-3xl shadow-[0_20px_60px_-20px_rgba(15,31,75,0.25)] p-7 sm:p-10 lg:p-12">
            <p className="text-sm sm:text-base text-[#0f1f4b] font-medium leading-relaxed mb-7">
              Sharing knowledge and inspiration is equally important in our
              professional spheres. It can foster vision and strengthen our
              professional ties. We regularly conduct trainings, workshops &amp;
              general brainstorm sessions with other professionals. Some of the
              recent notable events are:
            </p>

            <ul className="space-y-4">
              {events.map((event) => (
                <li key={event} className="flex items-start gap-4">
                  <span className="shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-[#1e3a8a]">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    {event}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
