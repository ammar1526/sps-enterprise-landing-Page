"use client";

import { useState } from "react";
import Image from "next/image";

export default function Roadmap() {
  const [playing, setPlaying] = useState(false);
  const videoId = "J4sAW3WV484";

  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-[#0a1330] sm:text-4xl lg:text-5xl">
          Our AI software development roadmap
        </h2>
        <div className="relative w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/data-science/roadmap.png"
            alt="AI software development roadmap"
            width={1600}
            height={500}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Future Proof Your Talent
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0a1330] sm:text-4xl lg:text-5xl">
            Organizations of the future are talent-centric and AI-powered.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
            Discover how AI is reshaping the modern workplace and why building a
            talent-centric, AI-powered organization is the key to staying ahead.
          </p>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Future Proof Your Talent with the Power of AI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play video"
              className="group relative h-full w-full cursor-pointer"
            >
              <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Future Proof Your Talent with the Power of AI"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-9 w-9 translate-x-0.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
