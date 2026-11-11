import * as React from "react";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/shared/section-container";
import { TechBadge } from "@/components/shared/tech-badge";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function SkillsSection() {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="ทักษะและเครื่องมือที่ใช้"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            tabIndex={0}
            className="navy-frame navy-frame-interactive p-4 sm:p-5 flex flex-col justify-between gap-3 h-full"
          >
            <div className="space-y-0.5 border-b border-sky-500/20 dark:border-sky-400/15 pb-2.5">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {category.label}
              </h3>
              <p className="text-[11px] sm:text-xs text-blue-700 dark:text-sky-300/85 font-medium">
                {category.thaiLabel}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {category.items.map((skill) => {
                const isCore = category.coreItems?.includes(skill) ?? false;
                return (
                  <TechBadge key={skill} name={skill} featured={isCore} />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
