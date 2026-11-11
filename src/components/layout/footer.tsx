import * as React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Footer() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="border-t border-sky-500/25 bg-sky-50/70 dark:border-sky-400/15 dark:bg-[#061020] pb-20 md:pb-8 pt-8 text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-semibold text-slate-900 dark:text-slate-200">
          © {new Date().getFullYear()} {profile.fullNameEn} ({profile.fullNameTh})
        </div>
        <div className="text-center sm:text-right">
          {profile.roleEn} • RMUTP
        </div>
      </div>
    </footer>
  );
}
