"use client";

import { useRef, useState, useEffect } from "react";
import FadeIn from "./FadeIn";

const skillGroups = [
  {
    category: "AI / ML",
    skills: ["Amazon Bedrock", "Amazon SageMaker", "Prompt Engineering", "Generative AI"],
  },
  {
    category: "AWS Services",
    skills: ["Lambda", "API Gateway", "DynamoDB", "S3", "EventBridge", "CloudWatch", "IAM", "Cognito", "CloudFormation", "CDK"],
  },
  {
    category: "Languages & Frameworks",
    skills: ["Python", "JavaScript", "HTML/CSS", "Tailwind", "Bash"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "Agile / Scrum", "REST APIs", "CI/CD", "Automation Anywhere", "Claude Code"],
  },
];

function SkillGroup({ group, groupIndex }: { group: typeof skillGroups[number]; groupIndex: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <FadeIn delay={groupIndex * 80}>
      <div ref={ref} className="p-5 rounded-lg bg-surface-raised border border-white/[0.04]">
        <h3 className="text-xs font-mono text-accent/70 mb-4 uppercase tracking-[0.15em]">
          {group.category}
        </h3>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, j) => (
            <span
              key={skill}
              className={`text-[13px] px-3 py-1.5 rounded bg-white/[0.04] text-text-secondary ${
                inView ? "skill-tag" : "opacity-0"
              }`}
              style={inView ? { animationDelay: `${j * 50}ms` } : undefined}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-36">
      <div className="section-container">
        <FadeIn>
          <p className="text-accent text-xs font-mono mb-3">04.</p>
          <h2 className="text-xl sm:text-2xl font-bold mb-12">Skills</h2>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} groupIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
