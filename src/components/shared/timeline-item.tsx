import * as React from "react";
import type { EducationEntry } from "@/data/portfolio-data";
import { GraduationCap } from "lucide-react";

export interface TimelineItemProps {
  education: EducationEntry;
}

/**
 * Component กลาง #5: TimelineItem (Compact Education Card)
 */
export function TimelineItem({ education }: TimelineItemProps) {
  return (
    <div
      tabIndex={0}
      className="navy-frame navy-frame-interactive p-4 sm:p-5 flex flex-col justify-between gap-3.5 h-full"
    >
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded border border-sky-500/40 bg-sky-500/15 dark:border-sky-400/35 dark:bg-sky-400/15 px-2 py-0.5 text-[11px] font-mono font-semibold text-blue-700 dark:text-sky-300">
            {education.period}
          </span>
          {education.current && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-sky-300">
              <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-sky-400 animate-pulse" />
              กำลังศึกษา
            </span>
          )}
        </div>

        <div className="space-y-0.5">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-start gap-2">
            <GraduationCap className="h-4 w-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
            <span>{education.programEn}</span>
          </h3>
          <p className="text-xs text-blue-700 dark:text-sky-200/90 pl-6 font-medium">
            {education.programTh}
          </p>
        </div>

        <div className="pl-6 space-y-0.5 text-xs text-slate-700 dark:text-slate-300">
          <div className="font-semibold text-slate-900 dark:text-white/95">
            {education.schoolEn}
          </div>
          <div className="text-slate-600 dark:text-slate-400">
            {education.schoolTh}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-sky-500/25 dark:border-sky-400/20 pt-2.5 text-xs">
        <span className="text-slate-700 dark:text-slate-300 font-medium">
          ผลการเรียนเฉลี่ย (GPAX)
        </span>
        <span className="font-mono text-sm sm:text-base font-bold text-blue-700 dark:text-sky-300">
          {education.gpax}
        </span>
      </div>
    </div>
  );
}
