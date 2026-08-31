"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const services = [
  "AI Solutions",
  "Cloud Services",
  "Cybersecurity",
  "Software Development",
];

export default function RequestForm() {
  const [selectedService, setSelectedService] = useState("AI Solutions");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative pt-10 sm:pt-12.5 md:pt-17.5 2xxl:pt-25 pb-0 bg-slate-100 overflow-hidden">
      <div className="container mx-auto max-w-350 px-4">
        <div className="flex flex-col-reverse lg:flex-row items-end">
          <div className="lg:w-1/2 w-full text-center mt-10 lg:mt-0">
            <div className="relative inline-block overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,31,75,0.3)] hover:-translate-y-2">
              <Image
                src="/images/s4.webp"
                alt="IT Services"
                width={600}
                height={600}
                className="max-w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative lg:pl-12.5 xl:ml-15 lg:-mb-10 mb-12.5 pb-10">
              <div className="hidden lg:flex absolute left-0 top-11.25 w-12.5 -rotate-180 [writing-mode:vertical-rl] bg-[#0f1f4b] text-white text-center px-7.5 py-2.5 text-lg uppercase font-semibold rounded-tr-2xl rounded-br-2xl items-center justify-center z-20">
                Appointment Now
              </div>

              <div className="sm:rounded-3xl rounded-2xl xl:py-12.5 xl:px-10 py-8.75 px-7.5 bg-[#6985d3] bg-cover relative shadow-xl">
                <div className="sm:mb-7.5 mb-5">
                  <h2 className="sm:text-2xl text-xl text-white font-normal mb-0 leading-snug">
                    Manage Your{" "}
                    <span className="text-[#0f1f4b] font-bold">
                      IT Services
                    </span>
                    <br />
                    Request Software Solutions
                  </h2>
                </div>

                <form
                  action="#"
                  className="dzForm"
                  method="POST"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex flex-wrap -mx-3">
                    <div className="sm:w-1/2 w-full px-3 mb-7.5">
                      <div className="relative">
                        <input
                          type="text"
                          id="inputYourName"
                          placeholder=" "
                          className="peer py-3.75 w-full bg-transparent text-white text-lg border-b-2 border-white focus:border-white outline-none placeholder-transparent"
                        />
                        <label
                          htmlFor="inputYourName"
                          className="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white pointer-events-none"
                        >
                          Your Name
                        </label>
                      </div>
                    </div>

                    <div className="sm:w-1/2 w-full px-3 mb-7.5">
                      <div className="relative">
                        <input
                          type="email"
                          id="inputYourEmail"
                          placeholder=" "
                          className="peer py-3.75 w-full bg-transparent text-white text-lg border-b-2 border-white focus:border-white outline-none placeholder-transparent"
                        />
                        <label
                          htmlFor="inputYourEmail"
                          className="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white pointer-events-none"
                        >
                          Your Email
                        </label>
                      </div>
                    </div>

                    <div className="sm:w-1/2 w-full px-3 mb-7.5">
                      <div className="relative">
                        <input
                          type="text"
                          id="inputPhoneNumber"
                          placeholder=" "
                          className="peer py-3.75 w-full bg-transparent text-white text-lg border-b-2 border-white focus:border-white outline-none placeholder-transparent"
                        />
                        <label
                          htmlFor="inputPhoneNumber"
                          className="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white pointer-events-none"
                        >
                          Phone Number
                        </label>
                      </div>
                    </div>

                    <div className="sm:w-1/2 w-full px-3 mb-7.5">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsOpen(!isOpen)}
                          className="w-full py-3.75 flex justify-between items-center text-lg text-white border-b-2 border-white focus:border-white outline-none text-left"
                        >
                          <span className="font-semibold">
                            {selectedService}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="absolute z-30 left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl overflow-hidden">
                            {services.map((service) => (
                              <div
                                key={service}
                                onClick={() => {
                                  setSelectedService(service);
                                  setIsOpen(false);
                                }}
                                className={`px-4 py-3 text-sm cursor-pointer transition-colors ${
                                  selectedService === service
                                    ? "bg-blue-50 text-[#6985d3] font-semibold"
                                    : "text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                {service}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-full px-3 mb-7.5">
                      <div className="relative">
                        <textarea
                          id="inputMessage"
                          rows={6}
                          placeholder=" "
                          className="peer py-3.75 w-full bg-transparent text-white text-lg border-b-2 border-white focus:border-white outline-none placeholder-transparent resize-none"
                        ></textarea>
                        <label
                          htmlFor="inputMessage"
                          className="absolute left-0 top-3.75 text-lg text-white duration-300 transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5.5 peer-focus:text-white pointer-events-none"
                        >
                          Message
                        </label>
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <button
                        type="submit"
                        className="btn-lg group bg-white text-[#0f1f4b] font-semibold rounded-2xl px-6 py-3 flex items-center gap-3 transition-all duration-500 hover:bg-[#0f1f4b] hover:text-white"
                      >
                        Appointment
                        <span className="size-11 min-w-11 bg-[#0f1f4b] text-white rounded-xl inline-flex items-center justify-center -my-2.75 -mr-4.5 ml-3 duration-500 group-hover:bg-white group-hover:text-[#0f1f4b] border border-transparent group-hover:border-white">
                          <ArrowRight className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
