import Image from "next/image";

export default function ManufacturingProducts() {
  return (
    <section className="w-full bg-blue-100 py-16 px-4 border-b-2 border-y-blue-950">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-6 mb-3">
          <span className="hidden sm:block flex-1 h-px bg-slate-300" />
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 text-center whitespace-nowrap">
            Our Product for Manufacturing
          </h2>
          <span className="hidden sm:block flex-1 h-px bg-slate-300" />
        </div>

        <p className="text-center text-xs sm:text-sm font-semibold text-slate-700 mb-10">
          Explore Manufacturing products we provide across our core practices
        </p>

        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 flex items-center gap-6">
          <div className="relative w-28 sm:w-40 h-16 sm:h-20 shrink-0">
            <Image
              src="/images/manufacturing/ibm-securi.webp"
              alt="IBM Security"
              fill
              sizes="(max-width: 640px) 112px, 160px"
              className="object-contain object-left"
            />
          </div>
          <div className="border-l border-slate-200 pl-6">
            <p className="text-sm sm:text-base font-medium text-slate-500">
              IBM Security Verify
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
