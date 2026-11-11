import * as React from "react";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/shared/tech-badge";
import type { ProjectEntry } from "@/data/portfolio-data";
import { ArrowUpRight, Github, Globe } from "lucide-react";

export interface ProjectCardProps {
  project: ProjectEntry;
}

/**
 * ProjectCard แบบคลีนและเป็นธรรมชาติเหมือนนักศึกษาเขียนเอง (ไม่มีหน้าต่างจำลองหลอกตาแบบ AI)
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      tabIndex={0}
      className="navy-frame navy-frame-interactive p-4 sm:p-5 flex flex-col justify-between gap-4 h-full w-full"
    >
      <div className="space-y-2.5">
        {project.imageUrl && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-sky-400/30 bg-[#061329]">
            <img
              src={project.imageUrl}
              alt={project.titleEn}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Title & Category */}
        <div className="border-b border-sky-500/20 dark:border-sky-400/15 pb-2.5 space-y-0.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
              {project.titleEn}
            </h3>
            <span className="text-[11px] font-mono font-semibold text-blue-600/80 dark:text-sky-400/80 shrink-0">
              {project.number}
            </span>
          </div>
          <p className="text-xs font-medium text-blue-700 dark:text-sky-300">
            {project.titleTh}
          </p>
        </div>

        {/* Natural Description */}
        <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed">
          {project.descriptionTh}
        </p>

        {/* Simple Bullet Points */}
        <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
          {project.highlights.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: Compact Tech Stack & Prominent GitHub / Web Action Buttons */}
      <div className="space-y-3 border-t border-sky-500/20 dark:border-sky-400/15 pt-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} size="sm" />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {project.liveUrl && (
            <Button
              asChild
              className="sky-glow-btn flex-1 sm:flex-initial h-9 px-4 text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-sky-400 text-white dark:text-slate-950 hover:from-blue-500 hover:to-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.4)] border-0"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4 w-4" />
                <span>เข้าชมเว็บไซต์ (Web)</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          )}

          {project.repoUrl && (
            <Button
              asChild
              className="sky-glow-btn flex-1 sm:flex-initial h-9 px-4 text-xs sm:text-sm font-bold border border-sky-400/70 bg-gradient-to-r from-blue-900/90 to-sky-900/80 text-white hover:from-blue-800 hover:to-sky-800 dark:border-sky-300/65 dark:from-sky-400/20 dark:to-blue-600/30 dark:text-sky-100 dark:hover:from-sky-400/35 dark:hover:to-blue-500/40 shadow-[0_0_14px_rgba(56,189,248,0.25)]"
            >
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 text-sky-300" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
