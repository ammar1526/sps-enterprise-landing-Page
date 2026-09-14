import Image from "next/image";
import { Check } from "lucide-react";

export default function MainSection() {
  return (
    <section className="mx-4 my-8 sm:mx-8 sm:my-10 md:mx-12 md:my-12 lg:mx-20 lg:my-16 xl:mx-30 xl:my-20">
      <div className="rounded-2xl bg-white shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="group relative h-64 sm:h-72 md:h-100 lg:h-112.5 overflow-hidden">
            <Image
              src="/images/bms/bms-screen.png"
              alt="BMS dashboard in use"
              fill
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-16 lg:px-12 lg:py-20">
            <h2 className="text-xl font-semibold text-blue-950 sm:text-2xl md:text-3xl">
              How can BMS help your business?
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600 text-sm sm:text-base md:text-base">
              With a fully-integrated system, employees across departments can
              use the same reliable information to meet their day-to-day needs.
              The system should bring the front office and back office together.
            </p>

            <p className="mt-3 leading-relaxed text-slate-600 text-sm sm:text-base md:text-base">
              It&apos;s a full enterprise management solution. Once you&apos;ve
              implemented the BMS, you&apos;ll be able to identify areas that
              need improvement and make cost-effective decisions. This will
              enable you to unleash your full potential and take your company to
              the next level.
            </p>

            <div className="mt-6 flex items-center gap-2 font-medium text-slate-800 text-sm sm:text-base">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-400">
                <Check size={12} />
              </span>
              Unified Data Infrastructure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
