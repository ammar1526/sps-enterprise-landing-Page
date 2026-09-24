import Image from "next/image";

export default function Highlights() {
  return (
    <section className="w-full bg-[#eef4fb] py-14 lg:py-20">
      <div className="container mx-auto max-w-350 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1f4b] leading-tight mb-6">
              Highlights Of The Past
              <br />
              Two Decades
            </h2>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
              SPS started business operations over 25 years ago with a mission
              to help organizations improve software development productivity.
              Since then, we have come a long way—delivering innovative
              solutions, building trusted partnerships, and continuously
              evolving to meet the changing needs of modern enterprises.
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/images/about-us/highlights.webp"
              alt="SPS Highlights Of The Past Two Decades"
              width={720}
              height={420}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
