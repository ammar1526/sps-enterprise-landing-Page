import React from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export default function AboutRoundtable() {
  const details = [
    { label: "Frequency:", value: "2nd Tuesday of every month" },
    { label: "Start Date:", value: "June 11, 2026" },
    { label: "Format:", value: "Virtual (Microsoft Teams)" },
  ];

  const attendPoints = [
    "Benchmark their security maturity against peers",
    "Gain actionable templates and artifacts",
    "Learn directly from practitioners—not consultants",
  ];

  return (
    <section className="w-full bg-blue-50 py-10">
      <div className="px-10 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div className="w-full flex flex-col gap-6">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_-15px_rgba(15,31,75,0.25)] border border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(15,31,75,0.35)]">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                About Roundtable
              </h2>
              <p className="text-base text-slate-700 text-justify mb-3 leading-relaxed">
                SPS is hosting a monthly Information Security Officer Roundtable
                for the Commonwealth of Virginia, bringing together
                cybersecurity leaders across state and local government to
                collaborate, share, and strengthen collective security posture.
                This invite-only forum will be led by Dave Shure, Information
                Security Officer for the Virginia Department of Small Business
                and Supplier Diversity (SBSD), who has led SBSD&apos;s journey
                toward compliance with SEC530 and NIST 800-53 Control Framework.
              </p>

              <ul className="flex flex-col text-slate-700 font-medium mb-0">
                {details.map((item, i) => (
                  <li
                    key={i}
                    className="w-full relative pl-8 p-1 text-base font-bold flex items-center gap-2"
                  >
                    <Check className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-700" />
                    <span>
                      {item.label}{" "}
                      <span className="font-medium">{item.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_-15px_rgba(15,31,75,0.25)] border border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(15,31,75,0.35)]">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Why Attend
              </h2>
              <p className="text-base text-slate-700 mb-3">
                It is a peer collaboration forum. Participants will:
              </p>
              <ul className="flex flex-col text-slate-700 font-medium mb-3">
                {attendPoints.map((point, i) => (
                  <li
                    key={i}
                    className="w-full relative pl-8 p-1 text-base font-medium flex items-start gap-2"
                  >
                    <Check className="absolute left-0 top-2 w-4 h-4 text-blue-700" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-slate-700 mb-0">
                Contribute to improving cybersecurity across Virginia
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="relative lg:pl-12.5 xl:ml-15">
              <div className="hidden lg:flex absolute left-0 top-11.25 w-12.5 [writing-mode:vertical-rl] rotate-180 bg-slate-900 text-white text-center px-7.5 py-2.5 text-lg uppercase font-semibold rounded-tr-2xl rounded-br-2xl items-center justify-center z-20">
                Register Now
              </div>

              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden xl:py-16 xl:px-10 py-12 px-7.5 bg-[#2d5fe8]">
                <Image
                  src="/images/roundtable/roundtableherobg.jpg"
                  alt=""
                  fill
                  className="object-cover opacity-10"
                />

                <div className="relative z-10">
                  <div className="sm:mb-7.5 mb-5">
                    <h2 className="sm:text-2xl text-xl text-white font-bold mb-0">
                      Roundtable Registration
                    </h2>
                  </div>

                  <form className="space-y-7.5">
                    {[
                      { id: "name", label: "Your Name", type: "text" },
                      { id: "email", label: "Email Address", type: "email" },
                      { id: "phone", label: "Phone Number", type: "text" },
                      { id: "org", label: "Organization", type: "text" },
                    ].map((field) => (
                      <div key={field.id} className="relative">
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          placeholder=" "
                          className="peer w-full py-3.75 text-lg text-left text-white bg-transparent border-b-2 border-white outline-none placeholder-transparent focus:border-yellow-500 transition-colors"
                        />
                        <label
                          htmlFor={field.id}
                          className="absolute left-0 top-3.75 text-lg text-white/70 origin-left pointer-events-none transition-all duration-300 transform -translate-y-6 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-yellow-500"
                        >
                          {field.label}
                        </label>
                      </div>
                    ))}

                    <div className="w-full">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 bg-white text-slate-900 font-semibold text-sm pl-6 pr-2 py-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
                      >
                        Register
                        <span className="w-9 h-9 bg-slate-900 text-white rounded-lg inline-flex items-center justify-center transition-all duration-500 group-hover:bg-slate-800">
                          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
