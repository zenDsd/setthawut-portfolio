import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps
  extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  containerClassName?: string;
}

export function SectionContainer({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-10 sm:py-14 border-b border-sky-500/20 dark:border-sky-400/10",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

export interface SectionHeaderProps {
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

/**
 * SectionHeader แบบเรียบง่ายเป็นธรรมชาติ (เอาแพทเทิร์น 01 // แบบ AI ออก)
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-6 sm:mb-7 flex flex-col sm:flex-row sm:items-end justify-between gap-3",
        className
      )}
    >
      <div className="border-l-4 border-blue-600 dark:border-sky-400 pl-3.5 space-y-0.5">
        {eyebrow && (
          <div className="text-[11px] font-mono uppercase tracking-wider text-blue-700 dark:text-sky-400 font-semibold">
            {eyebrow}
          </div>
        )}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/85 max-w-xl leading-relaxed pt-0.5">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
