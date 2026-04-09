"use client";

import FadeIn from "./FadeIn";

const experiences = [
  {
    title: "Cloud Support Engineer (AI/ML)",
    company: "Amazon Web Services",
    period: "Mar 2025 \u2014 Present",
    summary: "Supporting enterprise AI/ML workloads on Amazon Bedrock and SageMaker. Promoted from Cloud Support Associate within eight months.",
  },
  {
    title: "Digital Graduate",
    company: "NSW Government",
    period: "Feb 2024 \u2014 Mar 2025",
    summary: "RPA development at icare, cloud architecture review at DCS Telco under a Principal Architect.",
  },
  {
    title: "Technology Consultant",
    company: "_nology / Accenture",
    period: "Dec 2021 \u2014 Dec 2022",
    summary: "Built React.js front-end components and integrated APIs in an enterprise client environment.",
  },
  {
    title: "Bachelor of Applied Cloud Technology",
    company: "La Trobe University, Sydney",
    period: "2024",
    summary: "Provost\u2019s Commendation \u2014 WAM above 90%",
    isEducation: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-36">
      <div className="section-container">
        <FadeIn>
          <p className="text-accent text-xs font-mono mb-3">02.</p>
          <h2 className="text-xl sm:text-2xl font-bold mb-12">Experience</h2>
        </FadeIn>

        <div>
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div>

                  {/* Education label */}
                  {exp.isEducation && (
                    <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent/70 mb-2 block">
                      Education
                    </span>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-base font-semibold leading-snug">{exp.title}</h3>
                      <p className="text-accent text-sm">{exp.company}</p>
                    </div>
                    <span className="text-text-muted text-xs font-mono whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
