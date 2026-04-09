"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const certs = [
  { name: "AWS Certified Generative AI Developer - Professional", detail: "AIP-C01 \u00b7 Early Adopter", year: "2025" },
  { name: "AWS Certified AI Practitioner", detail: "AIF-C01", year: "2025" },
  { name: "AWS Certified Solutions Architect", detail: "Associate \u00b7 SAA-C03", year: "2024" },
];

export default function About() {
  return (
    <section id="about" className="py-36">
      <div className="section-container">
        <FadeIn>
          <p className="text-accent text-xs font-mono mb-3">01.</p>
          <h2 className="text-xl sm:text-2xl font-bold mb-12">About Me</h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <FadeIn className="flex-1 order-2 md:order-1">
            <div className="space-y-4 text-text-secondary text-[15px] leading-[1.7]">
              <p>
                I&apos;m a <span className="text-text-primary">Cloud Support Engineer</span> at{" "}
                <span className="text-accent">Amazon Web Services</span> in Sydney,
                specialising in AI/ML workloads on Amazon Bedrock and SageMaker. I diagnose
                complex multi-service issues for enterprise customers and guide them through
                architecture decisions.
              </p>
              <p>
                My path into tech started in a kitchen &mdash; I was a chef who pivoted during
                the pandemic, earned an AWS certification on Udemy, and joined _nology&apos;s
                developer bootcamp. Since then: technology consultant at Accenture, two
                placements in the NSW Government Digital Graduate program, and a promotion to
                Cloud Support Engineer at AWS within eight months.
              </p>
              <p>
                Outside work I build things that solve real problems &mdash; a colour-coded
                music score editor for my wife, serverless cost dashboards, AI asset pipelines.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-accent/70 mb-3">
                Certifications
              </p>
              <div className="space-y-2">
                {certs.map((cert) => (
                  <div key={cert.name} className="flex items-baseline justify-between gap-4">
                    <div>
                      <span className="text-sm text-text-primary">{cert.name}</span>
                      <span className="text-xs text-text-muted ml-2">{cert.detail}</span>
                    </div>
                    <span className="text-xs font-mono text-text-muted flex-shrink-0">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="flex-shrink-0 order-1 md:order-2 mx-auto md:mx-0">
            <div className="relative group">
              <div className="relative w-56 h-64 sm:w-60 sm:h-72 rounded overflow-hidden">
                <Image
                  src="/img/myPhoto.jpg"
                  alt="Jay Yoon"
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 border border-accent/30 rounded translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
