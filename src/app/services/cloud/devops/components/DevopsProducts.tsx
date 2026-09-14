import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

function ProductImage({
  imageSrc,
  imageAlt,
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  if (imageSrc) {
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={imageAlt || "Product image"}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return null;
}

function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_15px_35px_-15px_rgba(10,15,30,0.15)] transition-all duration-300 hover:shadow-[0_20px_45px_-15px_rgba(10,15,30,0.25)] hover:border-slate-200">
      <h3 className="text-lg font-semibold text-[#0a0f1e]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        {description}
      </p>
      <div className="mt-6">
        <ProductImage imageSrc={imageSrc} imageAlt={imageAlt} />
      </div>

      <div className="mt-6 flex justify-end">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0a0f1e] transition-all duration-300 hover:text-blue-600 group-hover:gap-3"
        >
          Learn More
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#0a0f1e] sm:text-4xl">
          Our Featured Products
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
          <ProductCard
            title="CSM"
            description="CSM is a centralized platform for compliance management to address software management, and infrastructure information."
            imageSrc="/images/devops/CSM.jpg"
            imageAlt="CSM Platform"
          />
          <ProductCard
            title="HerDomain"
            description="HerDomain is a developer-focused platform built to monitor systems and protect customer information in a growing product ecosystem."
            imageSrc="/images/devops/herdomain.png"
            imageAlt="HerDomain Platform"
          />
        </div>
      </div>
    </section>
  );
}
