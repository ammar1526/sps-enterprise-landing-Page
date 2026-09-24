import React from "react";
import { Check } from "lucide-react";

export default function AgendaSection() {
  const agendaItems = [
    "Real-world implementation challenges",
    "Lessons learned from achieving compliance",
    "Practical strategies for audit readiness",
    "Framework alignment approaches (SEC530, NIST)",
    "Peer-driven discussion on emerging threats and solutions",
  ];

  const whoShouldJoin = [
    {
      bold: "Chief Information Security Officers (CISOs) and Information Security Officers (ISOs)",
      rest: " across Virginia state agencies",
    },
    {
      bold: "County and Municipal IT & Security Leaders",
      rest: " responsible for cybersecurity and compliance",
    },
    {
      bold: "Risk, Compliance, and Governance Professionals",
      rest: " aligned with SEC530 and NIST Cybersecurity Framework (CSF)",
    },
    {
      bold: "IT Directors and Technology Leaders",
      rest: " overseeing security operations and infrastructure",
    },
    {
      bold: "Security Architects and Program Managers",
      rest: " involved in implementing cybersecurity frameworks",
    },
  ];

  const cardClass =
    "bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_-15px_rgba(15,31,75,0.25)] border border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(15,31,75,0.35)] flex flex-col";

  return (
    <section className="w-full bg-white px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="flex flex-col gap-6 h-full">
          <div className={cardClass}>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Agenda</h2>
            <ul className="flex flex-col text-slate-700 font-medium mb-0 text-justify">
              {agendaItems.map((item, i) => (
                <li
                  key={i}
                  className="w-full relative pl-8 p-1 text-base font-medium flex items-start gap-2"
                >
                  <Check className="absolute left-0 top-2 w-4 h-4 text-blue-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={cardClass}>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Ideal Participants
            </h2>
            <p className="text-base text-slate-700 text-justify mb-0">
              This roundtable is designed for{" "}
              <span className="font-bold">
                decision-makers and practitioners
              </span>{" "}
              who are directly responsible for improving cybersecurity posture,
              managing compliance, and leading security initiatives within the
              Virginia state and local government.
            </p>
          </div>
        </div>

        <div className={`${cardClass} h-full`}>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Who Should Join
          </h2>
          <ul className="flex flex-col text-slate-700 font-medium mb-0 text-justify">
            {whoShouldJoin.map((item, i) => (
              <li
                key={i}
                className="w-full relative pl-8 p-1 text-base font-medium flex items-start gap-2"
              >
                <Check className="absolute left-0 top-2 w-4 h-4 text-blue-700" />
                <span>
                  <span className="font-bold">{item.bold}</span>
                  {item.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
