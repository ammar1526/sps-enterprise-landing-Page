import { Briefcase, Heart, Gift } from "lucide-react";

const COMING_SOON_URL =
  "https://spsnet.com/temp-web/sps-enterprise/comingsoon.php";

const links = [
  { label: "Career Opportunities", icon: Briefcase },
  { label: "Our Values", icon: Heart },
  { label: "Benefits", icon: Gift },
];

export default function CareerDropdown() {
  return (
    <nav
      aria-label="Career quick links"
      className="w-full bg-white py-5 sm:py-6 border-b border-slate-100"
    >
      <ul className="container mx-auto max-w-350 px-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {links.map(({ label, icon: Icon }) => (
          <li key={label}>
            <a
              href={COMING_SOON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-slate-300 bg-white text-[#0f1f4b] text-sm sm:text-[15px] font-medium transition-colors duration-300 hover:border-[#0f1f4b] hover:bg-[#0f1f4b] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] focus-visible:ring-offset-2"
            >
              <Icon className="w-4 h-4 shrink-0" strokeWidth={2.25} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
