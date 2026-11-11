import * as React from "react";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/shared/section-container";
import { TimelineItem } from "@/components/shared/timeline-item";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <SectionContainer id="education">
      <SectionHeader
        eyebrow="Education"
        title="ประวัติการศึกษา"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        {PORTFOLIO_DATA.educations.map((edu) => (
          <TimelineItem key={edu.id} education={edu} />
        ))}
      </div>
    </SectionContainer>
  );
}
