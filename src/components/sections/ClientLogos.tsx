import React from "react";
import Image from "next/image";

interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
}

const CLIENTS_DATA: ClientLogo[] = [
  {
    id: "maryland-judiciary",
    name: "Maryland Judiciary",
    logoUrl: "/images/logos/maryland-judiciary.jpg",
  },
  { id: "mychart", name: "MyChart", logoUrl: "/images/logos/mychart.png" },
  { id: "cibc", name: "CIBC", logoUrl: "/images/logos/cibc.png" },
  { id: "myeyeda", name: "MyEyeDr", logoUrl: "/images/logos/myeyedr.png" },
  {
    id: "metacoastal",
    name: "MetaCoastal",
    logoUrl: "/images/logos/metacoastal.webp",
  },
  {
    id: "anne-arundel",
    name: "Anne Arundel Community College",
    logoUrl: "/images/logos/anne-arundel.webp",
  },
  {
    id: "allied-bank",
    name: "Allied Bank",
    logoUrl: "/images/logos/allied-bank.webp",
  },
  {
    id: "askari-bank",
    name: "Askari Bank",
    logoUrl: "/images/logos/askari-bank.webp",
  },
  { id: "creyield", name: "CREyield", logoUrl: "/images/logos/creyield.jpg" },
  { id: "bakg", name: "bakg", logoUrl: "/images/logos/bakg.jpg" },
  { id: "brytemap", name: "Brytemap", logoUrl: "/images/logos/brytemap.webp" },
  {
    id: "comptroller-md",
    name: "Comptroller of Maryland",
    logoUrl: "/images/logos/comptroller-md.webp",
  },
  {
    id: "rockville-md",
    name: "Rockville Maryland",
    logoUrl: "/images/logos/rockville-md.webp",
  },
  { id: "dc-water", name: "DC Water", logoUrl: "/images/logos/dc-water.png" },
  {
    id: "md-human-services",
    name: "Maryland Department of Human Services",
    logoUrl: "/images/logos/md-human-services.webp",
  },
  { id: "doit", name: "DoIT Maryland", logoUrl: "/images/logos/doit.webp" },
  {
    id: "dept-justice",
    name: "Department of Justice",
    logoUrl: "/images/logos/dept-justice.webp",
  },
  {
    id: "md-state",
    name: "Maryland State Seal",
    logoUrl: "/images/logos/md-state.jpg",
  },
  {
    id: "flouracity",
    name: "Flouracity",
    logoUrl: "/images/logos/flouracity.webp",
  },
  {
    id: "first-midwest",
    name: "First Midwest Bank",
    logoUrl: "/images/logos/first-midwes.webp",
  },
  {
    id: "heart-health",
    name: "Heart Health Institute",
    logoUrl: "/images/logos/heart-health.jpg",
  },
  {
    id: "doit",
    name: "DoIT Maryland",
    logoUrl: "/images/logos/doit.webp",
  },
  { id: "hamdard", name: "Hamdard", logoUrl: "/images/logos/hamdard.webp" },
  {
    id: "highmark",
    name: "Highmark Health",
    logoUrl: "/images/logos/highmark.webp",
  },
  {
    id: "m-electric",
    name: "M-Electric",
    logoUrl: "/images/logos/m-electric.webp",
  },
  {
    id: "hawaii-energy",
    name: "Hawaii Energy",
    logoUrl: "/images/logos/hawaii-energy.webp",
  },
  {
    id: "lasership",
    name: "LaserShip",
    logoUrl: "/images/logos/lasership.webp",
  },
  { id: "sbe", name: "SBE", logoUrl: "/images/logos/sbe.webp" },
  {
    id: "montgomery-schools",
    name: "Montgomery County Public Schools",
    logoUrl: "/images/logos/montgomery-schools.webp",
  },
  {
    id: "dgs",
    name: "DGS Department of General Services",
    logoUrl: "/images/logos/dgs.webp",
  },
  {
    id: "md-health",
    name: "Maryland Department of Health",
    logoUrl: "/images/logos/md-health.webp",
  },
  {
    id: "md-juvenile",
    name: "Maryland Department of Juvenile Services",
    logoUrl: "/images/logos/md-juvenile.webp",
  },
  { id: "mdot", name: "MDOT", logoUrl: "/images/logos/mdot.webp" },
  {
    id: "md-transportation",
    name: "Maryland Transportation Authority",
    logoUrl: "/images/logos/md-transportation.webp",
  },
  {
    id: "sha",
    name: "SHA State Highway Administration",
    logoUrl: "/images/logos/sha.webp",
  },
  { id: "srps", name: "SRPS", logoUrl: "/images/logos/srps.png" },
  { id: "ndc-tech", name: "NDC Tech", logoUrl: "/images/logos/ndc-tech.webp" },
  {
    id: "md-attorney",
    name: "Maryland Office of the Attorney General",
    logoUrl: "/images/logos/md-attorney.jpg",
  },
  {
    id: "physician-loan",
    name: "Physician Loan",
    logoUrl: "/images/logos/physician-loan.png",
  },
  {
    id: "spotsylvania",
    name: "Spotsylvania County",
    logoUrl: "/images/logos/spotsylvania.webp",
  },
  {
    id: "indiana-seal",
    name: "State of Indiana Seal",
    logoUrl: "/images/logos/indiana-seal.webp",
  },
  {
    id: "transunion",
    name: "TransUnion",
    logoUrl: "/images/logos/transunion.jpg",
  },
  {
    id: "total-vision",
    name: "Total Vision",
    logoUrl: "/images/logos/total-vision.jpg",
  },
  {
    id: "amplitude",
    name: "Amplitude",
    logoUrl: "/images/logos/amplitude.png",
  },
  { id: "vcu", name: "VCU", logoUrl: "/images/logos/vcu.png" },
  { id: "avnet", name: "Avnet", logoUrl: "/images/logos/avnet.webp" },
  {
    id: "keysight",
    name: "Keysight Technologies",
    logoUrl: "/images/logos/keysight.webp",
  },
  {
    id: "loudoun-county",
    name: "Loudoun County Virginia",
    logoUrl: "/images/logos/loudoun-county.webp",
  },
  { id: "univ", name: "UNIV", logoUrl: "/images/logos/univ.webp" },
  { id: "act-ps", name: "ACT PS", logoUrl: "/images/logos/act-ps.webp" },
  { id: "ibm", name: "IBM", logoUrl: "/images/logos/ibm.webp" },
  { id: "altria", name: "Altria", logoUrl: "/images/logos/altria.webp" },
  { id: "mandel", name: "Mandel", logoUrl: "/images/logos/mandel.webp" },
  { id: "telenor", name: "Telenor", logoUrl: "/images/logos/telenor.webp" },
  { id: "ufone", name: "Ufone", logoUrl: "/images/logos/ufone.webp" },
];

const LOOP_DATA = [...CLIENTS_DATA, ...CLIENTS_DATA, ...CLIENTS_DATA];

export default function CustomersPage() {
  return (
    <div className="bg-blue-100 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-360 w-full text-center">
        <h1 className="text-3xl font-bold text-[#111827] tracking-tight sm:text-4xl">
          Customers we are proud to work with.
        </h1>
        <p className="mt-3 max-w-3xl mx-auto text-base text-[#4b5563] leading-relaxed">
          Our mission is to deliver compelling narratives, remarkable
          experiences, and outstanding results for our clients.
        </p>

        <div className="relative py-16 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-blue-100 via-blue-100/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-blue-100 via-blue-100/80 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-marquee py-10">
            {LOOP_DATA.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="relative shrink-0 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 bg-white rounded-full border-4 border-blue-900 shadow-lg flex items-center justify-center p-6 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-20 overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logoUrl}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 16vw, 9vw"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 60s linear infinite;
          width: max-content;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
