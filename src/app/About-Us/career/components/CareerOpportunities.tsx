"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

type Job = {
  id: string;
  title: string;
  summary: string;
  location: string;
  category: string;
  lastDate: string;
  details: {
    jobTitle: string;
    education: string;
    location: string;
    knowledgeSkills: string[];
    jobDescription: string[];
    jobQualification: string[];
  };
};

const jobs: Job[] = [
  {
    id: "cyber-defense-analyst",
    title: "Cyber Defense Analyst",
    summary:
      "The Cyber Defense Analyst will primarily involve security assessments, data analysis, and incident response activities. Team members are expected to collaborate and support each other's areas and assist in systems or through internal tools.",
    location: "Lahore",
    category: "Security",
    lastDate: "20-10-2026",
    details: {
      jobTitle: "Cyber Defense Analyst",
      education: "BS in Computer Science",
      location: "Lahore",
      knowledgeSkills: [
        "Working knowledge of computer network defense and vulnerability assessment tools and their capabilities.",
        "Working knowledge of concepts and practices of processing digital forensic data.",
        "Skill in performing damage assessments.",
        "Knowledge of network security architecture concepts.",
        "Skill in conducting vulnerability scans and recognizing vulnerabilities.",
      ],
      jobDescription: [
        "Working knowledge of computer network defense and vulnerability assessment tools and their capabilities.",
        "Support the implementation and operations of cybersecurity solutions.",
        "Analyze and report security incidents and events to protect corporate IT assets.",
        "Perform vulnerability assessments and remediation.",
        "Analyze network traffic for security threats and anomalies.",
      ],
      jobQualification: [
        "Working knowledge of computer networks and data management.",
        "Working knowledge of server and client operating systems.",
        "Experience with security tools and technologies.",
        "Strong analytical and problem-solving skills.",
      ],
    },
  },
  {
    id: "cybersecurity-risk-compliance",
    title: "Cybersecurity Risk and Compliance Analyst",
    summary:
      "The Cybersecurity Risk and Compliance Analyst reports and assesses the organization's security risks, and helps to develop and implement strategies to mitigate them. This role will be responsible for managing the organization's risk, compliance, and cybersecurity posture.",
    location: "Lahore",
    category: "Security",
    lastDate: "20-10-2026",
    details: {
      jobTitle: "Cybersecurity Risk and Compliance Analyst",
      education: "Bachelor's",
      location: "Lahore",
      knowledgeSkills: [
        "Strong knowledge of cybersecurity, security controls, and risk assessment methodologies.",
        "Familiarity with NIST, ISO 27001, GDPR, HIPAA, and PCI DSS.",
        "Knowledge of risk management principles and methodologies.",
        "Ability to analyze and interpret security policies and standards.",
        "Excellent communication and interpersonal skills.",
        "Strong analytical and problem-solving skills.",
      ],
      jobDescription: [
        "The analyst will conduct risk assessments, analyze vulnerabilities, implement security controls, and enhance the organization's GRC program.",
        "Work with cross-functional teams on risk mitigation.",
        "Develop and maintain security policies.",
        "Conduct compliance audits and assessments.",
        "Evaluate and implement security controls.",
      ],
      jobQualification: [
        "Bachelor's degree in Computer Science, Cybersecurity, or related field.",
        "3+ years of experience in cybersecurity, risk management, or compliance.",
        "Strong analytical, organizational, and communication skills.",
      ],
    },
  },
  {
    id: "cloud-solutions-engineer",
    title: "Cloud Solutions Engineer",
    summary:
      "The Cloud Solutions Engineer designs, migrates, and supports cloud infrastructure for SPS clients. This role encompasses architecture, deployment, security, and optimization, and requires deep collaboration with cross-functional teams.",
    location: "Lahore",
    category: "Cloud",
    lastDate: "20-10-2026",
    details: {
      jobTitle: "Cloud Solutions Engineer",
      education: "Bachelor's in Computer Science or related field",
      location: "Lahore",
      knowledgeSkills: [
        "Experience with AWS, Azure, or Google Cloud.",
        "Knowledge of containers, orchestration, and cloud networking.",
        "Familiarity with CI/CD pipelines and DevOps practices.",
        "Ability to automate and manage cloud infrastructure.",
        "Ability to implement security best practices in cloud environments.",
        "Excellent analytical and problem-solving skills.",
      ],
      jobDescription: [
        "Design and implement cloud solutions on AWS, Azure, or GCP.",
        "Assist in migrating legacy systems to cloud environments.",
        "Implement cloud networking, security, and compliance.",
        "Support cloud adoption, migration, and optimization.",
        "Automate cloud operations, monitoring, and backup.",
        "Resolve cloud infrastructure, application, and network issues.",
      ],
      jobQualification: [
        "Bachelor's degree in Computer Science, IT, or related experience.",
        "3+ years of experience with AWS, Azure, or GCP.",
        "Cloud certifications are a plus.",
        "Strong understanding of cloud architecture and best practices.",
        "Ability to work in a collaborative team environment.",
      ],
    },
  },
  {
    id: "ai-automation-engineer",
    title: "AI & Automation Engineer",
    summary:
      "The AI & Automation Engineer builds intelligent workflows that reduce manual effort, enhance decision-making, and optimize business operations through AI, ML, Data, tools, and scripting, as well as automation solutions for enterprise and startup clients.",
    location: "Lahore",
    category: "AI & Automation",
    lastDate: "20-10-2026",
    details: {
      jobTitle: "AI & Automation Engineer",
      education:
        "Bachelor's or Master's in Computer Science, Data Science, or related field",
      location: "Lahore",
      knowledgeSkills: [
        "Practical experience with machine learning, generative automation, and data pipelines.",
        "Experience with Python, R, or similar languages.",
        "Familiarity with ML frameworks such as TensorFlow, PyTorch, or scikit-learn.",
        "Experience with automation tools and scripting.",
        "Knowledge of data engineering, analysis, and data structures for training.",
        "Understanding of generative AI, large language models, and data science.",
      ],
      jobDescription: [
        "Design and deploy automation solutions that reduce manual effort.",
        "Develop and deploy AI and machine learning models.",
        "Build scalable, efficient, and secure automation workflows.",
        "Integrate AI solutions into existing systems.",
        "Support data pipelines, model retraining, and continuous improvement.",
      ],
      jobQualification: [
        "Degree in Computer Science, Data Science, Engineering, or related experience.",
        "Hands-on experience with AI and machine learning frameworks.",
        "Strong programming skills in Python, R, or similar languages.",
        "Familiarity with automation tools and cloud-based AI services.",
        "Ability to work in a fast-paced environment.",
      ],
    },
  },
  {
    id: "identity-access-management",
    title: "Identity & Access Management Specialist",
    summary:
      "The Identity & Access Management Specialist is responsible for designing and implementing IAM solutions to ensure the confidentiality, integrity, and availability of systems. This role helps organizations implement access controls, reduce identity risk, and support audit and compliance.",
    location: "Lahore",
    category: "Security",
    lastDate: "20-10-2026",
    details: {
      jobTitle: "Identity & Access Management Specialist",
      education:
        "Bachelor's in Information Security, Computer Science, or related field",
      location: "Lahore",
      knowledgeSkills: [
        "Experience with identity platforms (SSO, MFA, and identity governance).",
        "Understanding of IAM protocols such as SAML, OAuth, and OpenID.",
        "Knowledge of privileged access management.",
        "Experience with directory services such as Active Directory.",
        "Understanding of IAM risks, policies, and compliance.",
        "Strong analytical and problem-solving skills.",
      ],
      jobDescription: [
        "Design and implement identity solutions that meet business and compliance needs.",
        "Configure identity providers, policies, and access controls.",
        "Implement single sign-on and multi-factor authentication.",
        "Identify and mitigate identity risks and access issues.",
        "Support access certifications and audit reporting.",
      ],
      jobQualification: [
        "Bachelor's degree in Information Security, Computer Science, or related field.",
        "3+ years of experience in IAM or related experience.",
        "Experience with IAM tools and protocols.",
        "Strong understanding of access control, identity risks, and compliance.",
        "Excellent communication and problem-solving skills.",
      ],
    },
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    summary:
      "The DevOps Engineer builds CI/CD pipelines, automates, and enables delivery processes for SPS products and client platforms. This role improves deployment frequency, reliability, and operations for teams and clients.",
    location: "Lahore",
    category: "Cloud",
    lastDate: "20-10-2026",
    details: {
      jobTitle: "DevOps Engineer",
      education: "Bachelor's in Computer Science or equivalent experience",
      location: "Lahore",
      knowledgeSkills: [
        "Experience with CI/CD tools, version control, and cloud operations.",
        "Hands-on experience with Jenkins, GitHub Actions, or similar CI/CD tools.",
        "Knowledge of containers and orchestration.",
        "Familiarity with infrastructure-as-code tools.",
        "Experience with monitoring and logging systems.",
        "Knowledge of scripting languages and automation.",
      ],
      jobDescription: [
        "Design, build, and maintain CI/CD pipelines for applications, services, and client products.",
        "Automate build, test, deployment, and release processes.",
        "Manage infrastructure and configuration as code.",
        "Implement monitoring, logging, and alerting.",
        "Support incident response and troubleshooting.",
      ],
      jobQualification: [
        "Experience in DevOps, Cloud, or related operations experience.",
        "Proven experience with CI/CD pipelines and automation.",
        "Experience with cloud platforms (AWS, Azure, or GCP).",
        "Experience with infrastructure-as-code and configuration management.",
        "Strong analytical and problem-solving skills.",
        "Ability to collaborate with development and operations teams.",
      ],
    },
  },
];

export default function CareerOpportunities() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = useCallback((id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  }, []);

  const handleApply = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.stopPropagation();
      router.push("/Contact-Us");
    },
    [router],
  );

  return (
    <section className="w-full bg-white py-14 lg:py-20">
      <div className="container mx-auto max-w-350 px-4">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f1f4b] mb-2">
            Career Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            SPS is always on the lookout for talent for our next phase of
            enterprise digital transformation.
          </p>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => {
            const isOpen = expandedId === job.id;
            return (
              <div
                key={job.id}
                className="rounded-lg overflow-hidden"
                aria-expanded={isOpen}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleExpand(job.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleExpand(job.id);
                    }
                  }}
                  className="bg-[#0f1f4b] text-white p-5 sm:p-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                    <div className="flex-1 max-w-3xl">
                      <h3 className="text-base sm:text-lg font-bold mb-2">
                        {job.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                        {job.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8 shrink-0">
                      <div>
                        <p className="text-[10px] tracking-[0.15em] font-semibold text-white/70 uppercase mb-1">
                          Location
                        </p>
                        <p className="text-xs sm:text-sm">{job.location}</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.15em] font-semibold text-white/70 uppercase mb-1">
                          Category
                        </p>
                        <p className="text-xs sm:text-sm">{job.category}</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.15em] font-semibold text-white/70 uppercase mb-1">
                          Last Date
                        </p>
                        <p className="text-xs sm:text-sm">{job.lastDate}</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.15em] font-semibold text-white/70 uppercase mb-1">
                          Apply
                        </p>
                        <a
                          href="/Contact-Us"
                          onClick={handleApply}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-xs sm:text-sm font-medium transition-colors duration-300"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="bg-blue-100 border border-slate-200 border-t-0 p-5 sm:p-8">
                    <div className="mb-6">
                      <p className="text-sm text-[#0f1f4b] font-semibold mb-2">
                        Job Title: {job.details.jobTitle}
                      </p>
                      <p className="text-sm text-slate-500">
                        Education: {job.details.education}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-[#0f1f4b] font-semibold mb-2">
                        Location: {job.details.location}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm sm:text-base font-bold text-[#0f1f4b] mb-3">
                        Knowledge &amp; Skills
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        {job.details.knowledgeSkills.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1e3a8a] shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm sm:text-base font-bold text-[#0f1f4b] mb-3">
                        Job Description
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        {job.details.jobDescription.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1e3a8a] shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#0f1f4b] mb-3">
                        Job Qualification
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        {job.details.jobQualification.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1e3a8a] shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
