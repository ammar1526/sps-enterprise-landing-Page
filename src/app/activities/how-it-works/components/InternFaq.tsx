"use client";

import React, { useState } from "react";
import {
  FileText,
  Users,
  MessageSquareText,
  Handshake,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const steps = [
  {
    id: "application",
    title: "1. Application",
    description:
      "Submit your application online along with your resume & transcript.",
    icon: FileText,
  },
  {
    id: "recorded-interview",
    title: "2. Recorded Interview",
    description: "You need to record a short interview and upload it.",
    icon: Users,
  },
  {
    id: "screening",
    title: "3. Screening",
    description:
      "Prepare for the internship by completing preliminary tasks or learning modules.",
    icon: MessageSquareText,
  },
  {
    id: "offer",
    title: "4. Offer",
    description:
      "Come on board and kick-start your internship journey with us!",
    icon: Handshake,
  },
];

const faqs = [
  {
    question:
      "How do I apply for the internship, and what documents are needed?",
    answer:
      "You can apply for the internship by submitting your online application. Please include your resume, video introduction, references, and academic transcript.",
  },
  {
    question:
      "What is the duration of the internship, and will a certificate be provided upon completion?",
    answer:
      "The internship induction is on quarterly basis however completion is driven by your commitment and engagement in the program, and Yes, a certificate will be issued upon request.",
  },
  {
    question:
      "Could you please clarify the mode of the internship, the minimum attendance requirements, and commitment?",
    answer:
      "The internship follows a hybrid model (virtual and in-person), and is designed to be manageable alongside your regular workload through flexible yet consistent engagement.",
  },
  {
    question:
      "What kind of trainings, certification, and projects will be available?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
  },
  {
    question:
      "What kind of supervisory support will be available during the internship?",
    answer:
      "Trainee and Shadower are not paid. Apprentices are paid on assignment basis. Exceptional interns are offered monthly stipend.",
  },
  {
    question:
      "Can I post/publish about my work and certifications on my social media accounts?",
    answer:
      "The SPS Internship Program offers industry-relevant certifications and real-world project experience, specific to the role selected by the intern.",
  },
];

export default function InternFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="pt-17.5 pb-2 mb-7">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-7.5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="rounded-2xl border border-[#2563eb]/10 bg-[#e6edf9] transition-colors duration-200 group hover:bg-[#0f1f4b] flex flex-col h-full p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white overflow-hidden rounded-full size-15 min-w-15 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 text-[#0f1f4b] group-hover:text-white">
                        {step.title}
                      </h3>
                      <span className="text-sm font-medium text-[#2563eb] block group-hover:text-white/50">
                        {step.description}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="FAQs" className="pb-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-7.5">
              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold capitalize text-center text-[#0f1f4b]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 bg-blue-100 px-5 py-4 text-left"
                    >
                      <h3 className="text-sm sm:text-base font-semibold text-[#0f1f4b] mb-0">
                        {faq.question}
                      </h3>
                      <span className="shrink-0 text-[#0f1f4b]">
                        {isOpen ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    <div
                      className={`grid bg-blue-50 transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mb-0 px-5 pb-4 pt-1 text-sm text-[#0f1f4b]/80">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
