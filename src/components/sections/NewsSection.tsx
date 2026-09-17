"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="xl:py-17.5 md:py-10 py-7.5 bg-slate-100">
      <div className="container mx-auto max-w-350 px-4">
        <div className="mb-7.5 flex flex-col md:flex-row items-end">
          <div className="lg:w-7/12 md:w-2/3">
            <h2 className="xl:text-5xl sm:text-4xl text-3xl font-bold capitalize mb-0 text-[#0f1f4b]">
              Stay Updated with <br /> Our Latest News & Insights
            </h2>
          </div>
          <div className="lg:w-5/12 md:w-1/3 md:text-end hidden md:block">
            <a
              href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php"
              className="group inline-flex items-center justify-between bg-[#0f1f4b] text-white font-semibold rounded-xl px-6 py-3 text-lg transition-all duration-500 hover:bg-blue-100 hover:text-blue-950"
            >
              View All
              <span className="size-11 min-w-11 bg-white rounded-xl text-[#0f1f4b] inline-flex items-center justify-center -my-2.75 md:-mr-5 ml-3 -mr-4 transition-all duration-500 group-hover:bg-white group-hover:text-[#1d4ed8]">
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-4 w-full">
            <div
              className="relative overflow-hidden sm:rounded-3xl rounded-2xl xl:h-137.5 h-105 bg-slate-200 bg-cover group"
              style={{
                backgroundImage: "url('/images/news1.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
              <div className="relative p-5 xl:p-7.5 h-full flex flex-col justify-between z-10">
                <div className="py-1.25 px-3.75 absolute top-7.5 left-7.5 z-10 text-[#0f1f4b] bg-white font-medium text-xs uppercase rounded-full">
                  News Update
                </div>
                <h3 className="xl:text-3xl text-xl mb-0 w-50 text-white font-bold leading-snug shadow-2xl">
                  <a href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php">
                    <br />
                    Hash Malik at a cloud partner panel discussion — “Succeeding
                    with IBM”
                  </a>
                </h3>
                <div className="flex items-end gap-7.5 flex-1 justify-between">
                  <a
                    href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php"
                    className="group/btn inline-flex items-center justify-between bg-[#0f1f4b] text-white font-semibold rounded-xl px-6 py-3 text-lg transition-all duration-500 hover:bg-blue-100 hover:text-blue-950"
                  >
                    Read More
                    <span className="size-11 min-w-11 bg-white rounded-xl text-[#0f1f4b] inline-flex items-center justify-center ml-3 transition-all duration-500 group-hover/btn:bg-white group-hover/btn:text-[#1d4ed8]">
                      <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-1" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <div
              className="relative overflow-hidden sm:rounded-3xl rounded-2xl xl:h-137.5 h-105 bg-slate-200 bg-cover group"
              style={{
                backgroundImage: "url('/images/news2.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
              <div className="relative p-5 xl:p-7.5 h-full flex flex-col justify-between z-10">
                <div className="py-1.25 px-3.75 absolute top-7.5 left-7.5 z-10 text-[#0f1f4b] bg-white font-medium text-xs uppercase rounded-full">
                  IoT Summit
                </div>
                <div className="flex gap-7.5 flex-1 justify-between items-end">
                  <h3 className="xl:text-2xl text-xl mb-0 text-white font-bold leading-snug">
                    <a href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php">
                      SPS makes a push into IoT through Mars rover demo
                    </a>
                  </h3>
                  <a
                    href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php"
                    aria-label="Read more about SPS IoT Mars rover demo"
                    className="rounded-full group/arrow flex items-center justify-center w-12 h-12 bg-white text-[#0f1f4b] transition-all duration-500 hover:bg-[#1d4ed8] hover:text-white"
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-1 md:grid-cols-2 gap-5">
              <div className="xl:w-full md:w-1/2 w-full">
                <div
                  className="relative overflow-hidden sm:rounded-3xl rounded-2xl h-66.25 bg-slate-200 bg-cover group"
                  style={{
                    backgroundImage: "url('/images/news3.jpg')",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="relative p-5 xl:p-7.5 h-full flex flex-col justify-between z-10">
                    <div className="py-1.25 px-3.75 absolute top-7.5 left-7.5 z-10 text-[#0f1f4b] bg-white font-medium text-xs uppercase rounded-full">
                      Expert Opinion
                    </div>
                    <div className="flex gap-7.5 flex-1 justify-between items-end">
                      <h3 className="text-xl mb-0 text-white font-bold leading-snug">
                        <a href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php">
                          How To Secure & Monitor Your AI Models
                        </a>
                      </h3>
                      <a
                        href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php"
                        aria-label="Read more about securing and monitoring AI models"
                        className="rounded-full group/arrow flex items-center justify-center w-12 h-12 bg-white text-[#0f1f4b] transition-all duration-500 hover:bg-blue-800 hover:text-white"
                      >
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-full md:w-1/2 w-full">
                <div className="relative overflow-hidden sm:rounded-3xl rounded-2xl h-66.25 bg-[#0f1f4b] group">
                  <div className="relative p-5 xl:p-7.5 h-full flex flex-col justify-between z-10 text-white">
                    <h3 className="text-xl mb-0 text-white font-bold leading-snug">
                      <a href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php">
                        More updates coming soon...
                      </a>
                    </h3>
                    <div className="flex items-end gap-7.5 flex-1 justify-between ms-auto">
                      <a
                        href="http://localhost/my_sites/bms/temp-web/sps-enterprise/comingsoon.php"
                        aria-label="View more news updates"
                        className="rounded-full group/arrow flex items-center justify-center w-12 h-12 bg-white text-[#0f1f4b] transition-all duration-500 hover:bg-blue-800 hover:text-white"
                      >
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
