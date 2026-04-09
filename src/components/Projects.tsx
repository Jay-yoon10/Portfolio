"use client";

import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Bedrock Lens",
    tagline: "Cost intelligence dashboard for Amazon Bedrock",
    description:
      "Serverless dashboard with model-level cost breakdown, prompt cache efficiency analysis, and latency monitoring. Privacy-first \u2014 only CloudWatch metrics, no prompt content. Single CDK deploy, ~$3.30/month.",
    tech: ["AWS CDK", "TypeScript", "Python", "Lambda", "DynamoDB", "React", "Recharts"],
    github: "https://github.com/Jay-yoon10/bedrock-lens",
    live: null,
  },
  {
    title: "Canva Asset Hub",
    tagline: "AWS + Canva Connect API integration",
    description:
      "AI-integrated pipeline connecting S3, EventBridge, Lambda, and Canva Connect API. Bedrock auto-tags assets stored in DynamoDB. React dashboard with Cognito JWT auth.",
    tech: ["React", "Lambda", "Bedrock", "DynamoDB", "Cognito", "Canva API"],
    github: "https://github.com/Jay-yoon10/canva-asset-hub-dashboard",
    live: "https://jay-yoon10.github.io/canva-asset-hub-dashboard/",
  },
  {
    title: "Batch PPT Maker",
    tagline: "Browser-based image upscaler + PPT generator",
    description:
      "Upload images, upscale client-side with TensorFlow.js via Web Workers, and batch-generate PowerPoint slides. Fully in-browser, no server needed.",
    tech: ["React", "TypeScript", "TensorFlow.js", "Vite", "PptxGenJS"],
    github: "https://github.com/Jay-yoon10/batch-ppt-maker",
    live: null,
  },
  {
    title: "Color Note Score",
    tagline: "Music score editor for therapists",
    description:
      "Built for my wife, a music therapist. Colour-coded notes (C\u2013B) with touch-optimised controls for mobile. Lightweight single-page app, no dependencies.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jay-yoon10/color-note-score",
    live: null,
  },
];

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-36">
      <div className="section-container">
        <FadeIn>
          <p className="text-accent text-xs font-mono mb-3">03.</p>
          <h2 className="text-xl sm:text-2xl font-bold mb-12">Projects</h2>
        </FadeIn>

        <div className="space-y-5">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80}>
              <div className="project-card group bg-surface-raised border border-white/[0.04] rounded-lg p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-accent/70 text-sm mt-0.5">{project.tagline}</p>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text-primary transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <GithubIcon />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors"
                        aria-label={`${project.title} Live`}
                      >
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
