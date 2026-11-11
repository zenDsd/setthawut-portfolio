import * as React from "react";
import { cn } from "@/lib/utils";

export interface TechBadgeProps {
  name: string;
  size?: "sm" | "default";
  featured?: boolean;
  className?: string;
}

/**
 * Component กลาง #3: TechBadge
 * ดีไซน์เรียบสะอาดแบบนักพัฒนาเขียนเอง (ไม่มีไอคอนดาววิ้งๆ แบบ AI)
 */
export function TechBadge({
  name,
  size = "default",
  featured = false,
  className,
}: TechBadgeProps) {
  return (
    <span
      tabIndex={0}
      className={cn(
        "inline-flex items-center rounded-md border font-medium transition-all duration-200 cursor-default select-none",
        size === "sm"
          ? "gap-1.5 px-2.5 py-0.5 text-[11px]"
          : "gap-2 px-3 py-1 text-xs",
        featured
          ? "border-sky-400/60 bg-sky-500/15 text-slate-900 font-semibold dark:border-sky-300/45 dark:bg-sky-400/15 dark:text-white"
          : "border-sky-500/25 bg-sky-100/60 text-slate-700 dark:border-sky-400/15 dark:bg-[#09172e]/85 dark:text-slate-200",
        "hover:border-sky-400 hover:bg-sky-200/80 hover:text-slate-950 dark:hover:border-sky-300 dark:hover:bg-sky-500/25 dark:hover:text-white",
        className
      )}
    >
      <span
        className={cn(
          "rounded-full",
          featured
            ? "bg-blue-600 dark:bg-sky-300 h-1.5 w-1.5"
            : "bg-blue-600/65 dark:bg-sky-400/65 h-1.5 w-1.5",
          size === "sm" && "h-1 w-1"
        )}
      />
      <span>{name}</span>
    </span>
  );
}
