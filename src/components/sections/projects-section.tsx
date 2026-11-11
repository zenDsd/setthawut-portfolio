import * as React from "react";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/shared/section-container";
import { ProjectCard } from "@/components/shared/project-card";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="โปรเจกต์และผลงาน"
      />

      {/* กรอบโปรเจกต์ขนาดเท่ากันทุกใบ และเมื่อมี 3 โปรเจกต์ จะจัดใบที่ 3 (#03) ให้อยู่กึ่งกลางแถวล่างพอดี */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 sm:gap-6 items-stretch">
        {projects.map((project, idx) => {
          const isLastOdd =
            idx === projects.length - 1 && projects.length % 2 === 1;

          return (
            <div
              key={project.id}
              className={cn(
                "md:col-span-2 flex",
                isLastOdd && "md:col-start-2"
              )}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
