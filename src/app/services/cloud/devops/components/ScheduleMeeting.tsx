import Image from "next/image";

export default function ScheduleMeeting() {
  return (
    <section className="relative overflow-hidden bg-[#0a1330]">
      <Image
        src="/images/banners/867.webp"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-20">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Schedule a meeting with our DevOps Executive
          </h2>
          <p className="mt-4 max-w-7xl text-sm leading-relaxed text-slate-300 md:text-base">
            Adnan is leading the Cloud Business Unit at SPS. He is responsible
            for business growth and taking advantage of the unprecedented
            opportunities available in cloud space. He also laid the foundation
            of four practices within the cloud group; Pubic Cloud, Hybrid Cloud,
            DevOps, and Cloud Classic. He is also providing leadership to
            Internal Business Process Automation and IT Operations for SPS.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-full border-2 border-blue-400 bg-transparent px-7 py-3 text-sm font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/30"
          >
            Schedule an Appointment
          </a>
        </div>

        <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 lg:ml-auto lg:mr-0">
          <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-blue-400/60 shadow-2xl shadow-blue-400/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/50">
            <Image
              src="/images/devops/Siradnan.png"
              alt="DevOps Executive"
              fill
              className="object-cover object-top transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
