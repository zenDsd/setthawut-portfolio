"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/section-container";
import { ResumeDialog } from "@/components/shared/resume-dialog";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  ArrowDownRight,
  Check,
  Code2,
  Copy,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function HeroSection() {
  const { profile } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = React.useState<"email" | "phone" | null>(
    null
  );

  const handleCopy = async (text: string, field: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Ignore
    }
  };

  return (
    <SectionContainer id="top" className="pt-6 sm:pt-10 pb-10 sm:pb-14">
      <div id="about" className="scroll-mt-20">
        {/* Compact Unified Profile Frame */}
        <div
          tabIndex={0}
          className="navy-frame navy-frame-interactive p-5 sm:p-6 lg:p-7"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center">
            {/* Right on Desktop / Top on Mobile: Soft-Blended Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center gap-2 order-1 lg:order-2">
              <div className="relative w-36 sm:w-44 lg:w-48 overflow-hidden rounded-2xl p-[2px] bg-gradient-to-b from-sky-300/80 via-blue-500/70 to-sky-900/90 shadow-[0_0_28px_rgba(56,189,248,0.25)]">
                <div className="relative overflow-hidden rounded-[14px] bg-[#071630]">
                  <img
                    src={profile.photoUrl}
                    alt={profile.fullNameEn}
                    className="w-full aspect-[3/4] object-cover object-top brightness-[0.96] contrast-[1.02] saturate-[0.92]"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-sky-300/25 rounded-[14px]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#051024]/80 via-[#051024]/25 to-transparent" />
                </div>
              </div>
              <span className="text-xs font-medium text-blue-700 dark:text-sky-300/90">
                Computer Engineering • RMUTP
              </span>
            </div>

            {/* Left 8 Cols: Concise Thai Bio, Info Grid & Mobile-Friendly Buttons */}
            <div className="lg:col-span-8 space-y-4 order-2 lg:order-1 text-center sm:text-left">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  {profile.fullNameEn}
                </h1>

                <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-700 via-sky-600 to-blue-600 dark:from-sky-200 dark:via-sky-300 dark:to-blue-300 bg-clip-text text-transparent">
                  {profile.fullNameTh}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {profile.universityTh} ({profile.universityEn})
                </p>
              </div>

              {/* Single Concise Thai Bio */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed sm:border-l-2 sm:border-sky-400/50 sm:pl-3.5 text-left">
                {profile.bioTh}
              </p>

              {/* Compact 2x2 Info Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-left">
                <div className="flex items-center gap-2.5 rounded-lg border border-sky-500/25 bg-sky-50/70 dark:border-sky-400/15 dark:bg-[#061328]/70 px-3 py-2">
                  <GraduationCap className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                  <span className="font-medium text-slate-900 dark:text-white truncate">
                    {profile.academicYear}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 rounded-lg border border-sky-500/25 bg-sky-50/70 dark:border-sky-400/15 dark:bg-[#061328]/70 px-3 py-2">
                  <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                  <span className="font-medium text-slate-900 dark:text-white truncate">
                    {profile.locationPublic}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 rounded-lg border border-sky-500/25 bg-sky-50/70 dark:border-sky-400/15 dark:bg-[#061328]/70 px-3 py-1.5">
                  <a
                    href={`tel:${profile.phoneRaw}`}
                    className="flex items-center gap-2.5 font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                    <span>{profile.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(profile.phoneRaw, "phone")}
                    title="คัดลอกเบอร์โทรศัพท์"
                    className="rounded border border-sky-500/30 bg-sky-500/10 p-1 text-blue-700 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-300 hover:bg-sky-400/25 transition-colors"
                  >
                    {copiedField === "phone" ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 rounded-lg border border-sky-500/25 bg-sky-50/70 dark:border-sky-400/15 dark:bg-[#061328]/70 px-3 py-1.5">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="คลิกเพื่อเขียนอีเมลผ่านเว็บ Gmail โดยตรง"
                    className="flex items-center gap-2.5 min-w-0 font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                    <span className="truncate">{profile.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(profile.email, "email")}
                    title="คัดลอกอีเมล"
                    className="rounded border border-sky-500/30 bg-sky-500/10 p-1 text-blue-700 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-300 hover:bg-sky-400/25 transition-colors shrink-0"
                  >
                    {copiedField === "email" ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons: Responsive Grid on Mobile, Flex Row on Tablet/Desktop */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 pt-0.5">
                <Button
                  asChild
                  className="col-span-2 sm:col-span-1 sky-glow-btn h-9 px-4 text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-sky-400 text-white dark:text-slate-950 hover:from-blue-500 hover:to-sky-300 font-semibold border-0"
                >
                  <a href="#projects">
                    ดูโปรเจกต์ผลงาน
                    <ArrowDownRight className="h-4 w-4" />
                  </a>
                </Button>

                <ResumeDialog />

                <Button
                  variant="outline"
                  asChild
                  className="sky-glow-btn h-9 px-4 text-xs sm:text-sm border-sky-500/45 bg-white/80 text-slate-800 dark:border-sky-400/40 dark:bg-[#081730]/80 dark:text-slate-100 hover:bg-sky-400/15 hover:border-sky-400"
                >
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 text-blue-600 dark:text-sky-300" />
                    GitHub (@zenDsd)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
