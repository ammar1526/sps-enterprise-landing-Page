import Image from "next/image";

export default function StoryProcess() {
  return (
    <section className="w-full bg-[#eef4fb] py-14 lg:py-20">
      <div className="container mx-auto max-w-350 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="w-full order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6">
              <Image
                src="/images/about-us/process.webp"
                alt="Our Process From Idea To Execution"
                width={720}
                height={420}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1f4b] leading-tight mb-6">
              Our Process
              <br />
              From Idea To Execution
            </h2>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
              SPS started business operations over 25 years ago to help
              organizations improve software development productivity. Since
              then we have come a long way...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
