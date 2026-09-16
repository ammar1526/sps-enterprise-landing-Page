import Image from "next/image";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: " The Midwest Bank", logo: "/images/logos/midwest.webp" },
  { name: "Hamdard", logo: "/images/logos/hamdard.webp" },
  { name: "HighMark", logo: "/images/logos/highmark.webp" },
  { name: "KElectric", logo: "/images/logos/kelectric.webp" },
  { name: "NDC Tech", logo: "/images/logos/ndc-tech.webp" },
  { name: "Hamdard", logo: "/images/logos/act-ps.webp" },
];

export default function Customers() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <h2 className="text-center text-2xl font-bold text-[#0a0f1e] sm:text-3xl">
          Customers we are proud to work with
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-500 sm:text-base">
          Our mission is to deliver compelling narratives, remarkable
          experiences, and outstanding results for our clients.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border-4 border-blue-900 bg-white p-2 transition-transform duration-300 hover:scale-110"
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
