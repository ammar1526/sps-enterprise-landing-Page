const presence = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"
        />
      </svg>
    ),
    region: "North America",
    tag: "Headquarters",
    location: "Rockville, MD, USA",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a14.94 14.94 0 013 9 14.94 14.94 0 01-3 9 14.94 14.94 0 01-3-9 14.94 14.94 0 013-9z"
        />
      </svg>
    ),
    region: "South Asia",
    tag: "Development Center",
    location: "Islamabad, Pakistan",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a14.94 14.94 0 013 9 14.94 14.94 0 01-3 9 14.94 14.94 0 01-3-9 14.94 14.94 0 013-9z"
        />
      </svg>
    ),
    region: "Remote",
    tag: "Virtual Teams",
    location: "Worldwide",
  },
];

export default function Global() {
  return (
    <section className="bg-gray-50/50 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#032f6a] tracking-tight mb-2">
            Our Global Presence
          </h2>
          <p className="text-gray-400 font-medium text-sm">
            Serving clients across multiple regions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {presence.map((item) => (
            <div
              key={item.region}
              className="group relative bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-[0_15px_30px_rgba(14,79,163,0.05)] hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute left-0 top-1/2 bottom-0 w-0.5 bg-[#1e3a8a] shadow-[0_0_8px_#1e3a8a,0_0_16px_#1e3a8a]" />
                <div className="absolute left-0 top-0 h-0.5 w-1/2 bg-[#1e3a8a] shadow-[0_0_8px_#1e3a8a,0_0_16px_#1e3a8a]" />
                <div className="absolute right-0 top-1/2 bottom-0 w-0.5 bg-[#1e3a8a] shadow-[0_0_8px_#1e3a8a,0_0_16px_#1e3a8a]" />
                <div className="absolute right-0 top-0 h-0.5 w-1/2 bg-[#1e3a8a] shadow-[0_0_8px_#1e3a8a,0_0_16px_#1e3a8a]" />
              </div>

              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {item.region}
              </h3>
              <p className="text-xs font-bold text-blue-600 mb-1 tracking-wide uppercase">
                {item.tag}
              </p>
              <p className="text-sm text-gray-400 font-medium">
                {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
