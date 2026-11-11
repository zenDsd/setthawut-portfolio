"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

/**
 * Component กลาง #7: ResumeDialog
 * รองรับทั้งโหมดสว่างและโหมดมืด พร้อมลิงก์ GitHub @zenDsd
 */
export function ResumeDialog() {
  const { profile, skillCategories, projects, educations } = PORTFOLIO_DATA;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="sky-glow-btn h-9 px-4 text-xs sm:text-sm border-sky-500/45 bg-white/80 text-slate-900 hover:bg-sky-400/15 dark:border-sky-400/40 dark:bg-[#081730] dark:text-sky-100 dark:hover:bg-sky-400/15 hover:border-sky-400"
        >
          <FileText className="h-4 w-4 text-blue-600 dark:text-sky-300" />
          ดูตัวอย่าง Resume
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl border-sky-500/35 bg-white/95 dark:border-sky-400/30 dark:bg-[#061226]/95 backdrop-blur-2xl text-slate-900 dark:text-white p-5 sm:p-7">
        <DialogHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-500/20 dark:border-sky-400/15 pb-4">
          <div>
            <DialogTitle className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {profile.fullNameEn} — Resume
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-blue-700 dark:text-sky-300/90 font-medium">
              {profile.fullNameTh} • {profile.roleEn}
            </DialogDescription>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-sky-500/40 bg-sky-50 text-blue-800 dark:border-sky-400/35 dark:bg-[#0a1d3b] dark:text-sky-200 hover:bg-sky-400/20"
            >
              <a
                href={profile.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                เปิด PDF แท็บใหม่
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              className="sky-glow-btn bg-gradient-to-r from-blue-600 to-sky-400 text-white dark:text-slate-950 font-semibold border-0"
            >
              <a
                href={profile.resumePdfUrl}
                download="Setthawut_Kieebumrung_Resume_RMUTP.pdf"
              >
                <Download className="h-4 w-4" />
                ดาวน์โหลด PDF
              </a>
            </Button>
          </div>
        </DialogHeader>

        {/* Mobile & Desktop Universal Resume Reader */}
        <div className="space-y-5 pt-2 text-xs sm:text-sm">
          {/* Contact Header Strip */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 rounded-xl border border-sky-500/25 bg-sky-50/80 dark:border-sky-400/20 dark:bg-[#091a36] p-3.5 text-slate-800 dark:text-slate-200">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
              {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
              {profile.email}
            </span>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-sky-300"
            >
              <Github className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
              {profile.githubLabel}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
              {profile.locationPublic}
            </span>
          </div>

          {/* Personal Summary */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-sky-400 font-semibold">
              Personal Information
            </h4>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              {profile.bioEn}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-sky-400 font-semibold flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" />
              Education
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-xl border border-sky-500/25 bg-sky-50/70 dark:border-sky-400/20 dark:bg-[#091a36] p-3.5 space-y-1"
                >
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-blue-700 dark:text-sky-300">
                    <span>{edu.period}</span>
                    <span>GPAX: {edu.gpax}</span>
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {edu.programEn}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    {edu.schoolEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-sky-400 font-semibold">
              Technical &amp; Soft Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {skillCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="rounded-xl border border-sky-500/25 bg-sky-50/70 dark:border-sky-400/15 dark:bg-[#091a36] p-3"
                >
                  <div className="text-xs font-bold text-blue-700 dark:text-sky-300 mb-1">
                    {cat.label}
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-200">
                    {cat.items.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 dark:text-sky-400 font-semibold">
              Projects
            </h4>
            <div className="space-y-2.5">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-xl border border-sky-500/25 bg-sky-50/70 dark:border-sky-400/15 dark:bg-[#091a36] p-3.5 space-y-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {proj.number}. {proj.titleEn}
                    </span>
                    <span className="text-[11px] font-mono text-blue-700 dark:text-sky-300">
                      {proj.techStack.join(" • ")}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {proj.descriptionTh}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
