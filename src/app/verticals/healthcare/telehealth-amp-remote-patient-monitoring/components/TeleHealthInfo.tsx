import { Sora, Inter, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";

const sora = Sora({ subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500"] });

function IconAlert({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9v4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M12 16.5h.01"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTarget({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle
        cx="12"
        cy="12"
        r="8.25"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle
        cx="12"
        cy="12"
        r="4.25"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function IconLayers({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5 21 8l-9 4.5L3 8l9-4.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="m3 12.5 9 4.5 9-4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m3 17 9 4.5 9-4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="m4.5 10.5 3.4 3.4L15.5 6"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const challenges = [
  "One-third of adults live with more than one chronic condition",
  "Improving patient triage to determine and evaluate risk, reduce non-emergent office visits and remotely monitor patients",
  "Addressing the surge in demand for self-care devices/solutions",
  "Shifting patients to lower-cost settings",
];

const outcomes = [
  "Decrease the risk of infection exposure for doctors, staff, and patients",
  "Increase access for patients living in rural areas",
  "Remotely monitor the vitals of post-surgery patients in real-time",
  "Improve patient experience and care satisfaction",
  "Reduce readmissions and overall healthcare cost",
];

export default function TelehealthOverview() {
  return (
    <main
      className={`${inter.className} relative min-h-screen w-full overflow-hidden bg-white`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-140 w-140 rounded-full bg-linear-to-br from-[#DCEBFF] via-[#EEF5FF] to-transparent opacity-70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-115 w-115 rounded-full bg-linear-to-tr from-[#EAF3FF] to-transparent opacity-60 blur-3xl"
      />

      <style>{`
        @keyframes drawPulse {
          0%   { stroke-dashoffset: 120; }
          60%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        .pulse-line {
          stroke-dasharray: 120;
          animation: drawPulse 2.6s ease-in-out infinite;
        }
      `}</style>

      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#DCE8FB] bg-[#F3F8FF] px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#155EEF]" />
          <span
            className={`${mono.className} text-[11px] font-medium uppercase tracking-[0.18em] text-[#155EEF]`}
          >
            Telehealth &amp; Remote Patient Monitoring
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:grid-rows-2 lg:gap-6">
          <article className="group rounded-3xl border border-[#E7EEF9] bg-white p-8 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-20px_rgba(21,94,239,0.16)] lg:col-span-4 lg:col-start-1 lg:row-start-1">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#155EEF]">
              <IconAlert className="h-5 w-5" />
            </div>
            <span
              className={`${mono.className} text-[10px] font-medium uppercase tracking-[0.16em] text-[#7C8CA6]`}
            >
              Challenge
            </span>
            <h3
              className={`${sora.className} mt-2 text-xl font-bold tracking-tight text-[#0B1B33]`}
            >
              Today&rsquo;s Challenges
            </h3>
            <ul className="mt-5 space-y-3.5">
              {challenges.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#155EEF]/60" />
                  <span className="text-[15px] leading-relaxed text-[#51637E]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="group rounded-3xl border border-[#E7EEF9] bg-white p-8 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-20px_rgba(21,94,239,0.16)] lg:col-span-4 lg:col-start-5 lg:row-start-1">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#155EEF]">
              <IconTarget className="h-5 w-5" />
            </div>
            <span
              className={`${mono.className} text-[10px] font-medium uppercase tracking-[0.16em] text-[#7C8CA6]`}
            >
              Outcome
            </span>
            <h3
              className={`${sora.className} mt-2 text-xl font-bold tracking-tight text-[#0B1B33]`}
            >
              Desired Outcomes
            </h3>
            <ul className="mt-5 space-y-3.5">
              {outcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E6F7EE] text-[#14B871]">
                    <IconCheck className="h-2.5 w-2.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-[#51637E]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_60px_-24px_rgba(11,27,51,0.35)] ring-1 ring-black/5 lg:col-span-4 lg:col-start-9 lg:row-span-1 lg:row-start-1">
            <div className="relative h-full min-h-95 w-full">
              <Image
                src="/images/telehealth/teleinfo.avif"
                alt="Government Hero"
                fill
                className="object-cover"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-[#0B1B33]/35 via-transparent to-transparent"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/85 p-4 shadow-[0_12px_30px_rgba(11,27,51,0.18)] backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span
                    className={`${mono.className} text-[10px] font-medium uppercase tracking-[0.14em] text-[#51637E]`}
                  >
                    Real-time vitals
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#14B871]" />
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-[#14B871]">
                      Live
                    </span>
                  </span>
                </div>
                <svg
                  viewBox="0 0 200 40"
                  className="mt-2 h-8 w-full text-[#155EEF]"
                >
                  <path
                    d="M0 20 H60 L70 6 L82 34 L92 20 H120 L128 12 L138 28 L146 20 H200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="pulse-line"
                  />
                </svg>
              </div>
            </div>
          </div>

          <article className="rounded-3xl -mb-30 h-100 border border-[#E7EEF9] bg-[#F8FBFF] p-8 drop-shadow-xl lg:col-span-12 lg:col-start-1 lg:row-start-2">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#155EEF]">
              <IconLayers className="h-5 w-5" />
            </div>
            <span
              className={`${mono.className} text-[10px] font-medium uppercase tracking-[0.16em] text-[#7C8CA6]`}
            >
              Overview
            </span>
            <h3
              className={`${sora.className} mt-2 text-xl font-bold tracking-tight text-[#0B1B33]`}
            >
              Use Case Summary
            </h3>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#51637E]">
              Telehealth represents the interactive, electronic exchange of
              information for the purpose of diagnosis, intervention, or ongoing
              care management between a patient and/or health care providers
              situated remotely.
            </p>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#51637E]">
              Average telehealth and RPM as a way to deliver acute, chronic,
              primary, and specialty care.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
