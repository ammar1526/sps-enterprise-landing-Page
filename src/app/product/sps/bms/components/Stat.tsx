const STATS = [
  { value: "500+", label: "Clients" },
  { value: "2k+", label: "Deployments" },
  { value: "15", label: "Global Locations" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 to-blue-50 px-8 py-20 text-center md:px-16">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-48 w-48 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative z-10">
        <span className="inline-block rounded-full border border-blue-200 bg-white px-4 py-1 text-xs tracking-wider text-blue-700 shadow-sm">
          EXCELLENCE SINCE 2006
        </span>

        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-800 md:text-xl">
          20 years of building digital products and we are{" "}
          <span className="italic text-blue-600">just getting started!</span>
        </p>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-8">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl bg-white/70 p-4 shadow-sm backdrop-blur-sm"
            >
              <div className="text-3xl font-semibold text-slate-900 md:text-4xl">
                {value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
