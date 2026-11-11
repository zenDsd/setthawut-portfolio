"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/shared/section-container";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Github,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

export function ContactSection() {
  const { profile } = PORTFOLIO_DATA;
  const [senderName, setSenderName] = React.useState("");
  const [senderEmail, setSenderEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [copiedType, setCopiedType] = React.useState<
    "email" | "phone" | "github" | "fullMessage" | null
  >(null);

  // ลิงก์เปิดหน้าเขียนอีเมลของ Gmail โดยตรง (ไม่ผ่าน mailto: จึงไม่เด้งเข้าโปรแกรม Outlook)
  const getGmailComposeUrl = (subjectText?: string, bodyText?: string) => {
    const base = "https://mail.google.com/mail/?view=cm&fs=1";
    const to = `&to=${encodeURIComponent(profile.email)}`;
    const su = subjectText ? `&su=${encodeURIComponent(subjectText)}` : "";
    const body = bodyText ? `&body=${encodeURIComponent(bodyText)}` : "";
    return `${base}${to}${su}${body}`;
  };

  const handleCopy = async (
    text: string,
    type: "email" | "phone" | "github" | "fullMessage"
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2200);
    } catch {
      // Ignore
    }
  };

  // เปิดหน้าเว็บ Gmail พร้อมกรอกข้อความให้อัตโนมัติ (ไม่เด้งเข้า Outlook)
  const handleOpenGmailWeb = () => {
    const subject = senderName
      ? `ติดต่อจาก Portfolio: คุณ ${senderName}`
      : `ติดต่อจากเว็บไซต์ Portfolio`;
    const body = `ชื่อผู้ติดต่อ / บริษัท: ${senderName || "-"}\nอีเมลติดต่อกลับ: ${senderEmail || "-"}\n\nข้อความ:\n${message || ""}`;
    window.open(getGmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
  };

  // ส่งข้อความเข้า Gmail โดยตรงจากหน้าเว็บผ่าน FormSubmit AJAX API (ไม่ต้องเปิด Outlook)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: senderName,
            email: senderEmail,
            message: message,
            _subject: `ติดต่อจาก Portfolio: คุณ ${senderName}`,
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setSenderName("");
        setSenderEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionContainer id="contact" className="border-b-0 pb-20">
      <SectionHeader
        eyebrow="Contact"
        title="ช่องทางการติดต่อ"
      />

      {/* Symmetrical 6:6 Layout on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        {/* Left 6 Cols: Compact Contact Stack (Full Email Visible) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-2.5 sm:gap-3">
          {/* 1. Email Card — กดแล้วเปิดเว็บ Gmail โดยตรง ไม่เด้งเข้า Outlook */}
          <div className="navy-frame navy-frame-interactive px-3.5 py-3 sm:px-4 sm:py-3.5 flex items-center justify-between gap-2.5 flex-1">
            <a
              href={getGmailComposeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              title="คลิกเพื่อเขียนอีเมลผ่าน Gmail โดยตรง"
              className="flex items-center gap-3 min-w-0 flex-1"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/35 bg-sky-500/15 text-blue-700 dark:border-sky-400/35 dark:bg-sky-400/15 dark:text-sky-300">
                <Mail className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase text-blue-700 dark:text-sky-300 font-semibold leading-none">
                  Email
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white break-all sm:whitespace-nowrap mt-1 hover:text-blue-600 dark:hover:text-sky-300 transition-colors">
                  {profile.email}
                </div>
              </div>
            </a>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleCopy(profile.email, "email")}
              className="shrink-0 h-7 px-2.5 text-[11px] border-sky-500/35 bg-sky-50 text-blue-800 dark:border-sky-400/30 dark:bg-[#081730] dark:text-sky-200 hover:bg-sky-400/20"
            >
              {copiedType === "email" ? (
                <>
                  <Check className="h-3 w-3 text-blue-600 dark:text-sky-300" />
                  <span>คัดลอกแล้ว</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>คัดลอก</span>
                </>
              )}
            </Button>
          </div>

          {/* 2. Phone Card */}
          <div className="navy-frame navy-frame-interactive px-3.5 py-3 sm:px-4 sm:py-3.5 flex items-center justify-between gap-2.5 flex-1">
            <a
              href={`tel:${profile.phoneRaw}`}
              className="flex items-center gap-3 flex-1"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/35 bg-sky-500/15 text-blue-700 dark:border-sky-400/35 dark:bg-sky-400/15 dark:text-sky-300">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase text-blue-700 dark:text-sky-300 font-semibold leading-none">
                  Phone
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1 hover:text-blue-600 dark:hover:text-sky-300 transition-colors">
                  {profile.phone}
                </div>
              </div>
            </a>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleCopy(profile.phoneRaw, "phone")}
              className="shrink-0 h-7 px-2.5 text-[11px] border-sky-500/35 bg-sky-50 text-blue-800 dark:border-sky-400/30 dark:bg-[#081730] dark:text-sky-200 hover:bg-sky-400/20"
            >
              {copiedType === "phone" ? (
                <>
                  <Check className="h-3 w-3 text-blue-600 dark:text-sky-300" />
                  <span>คัดลอกแล้ว</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>คัดลอก</span>
                </>
              )}
            </Button>
          </div>

          {/* 3. GitHub Card */}
          <div className="navy-frame navy-frame-interactive px-3.5 py-3 sm:px-4 sm:py-3.5 flex items-center justify-between gap-2.5 flex-1">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-1 min-w-0"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/35 bg-sky-500/15 text-blue-700 dark:border-sky-400/35 dark:bg-sky-400/15 dark:text-sky-300">
                <Github className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase text-blue-700 dark:text-sky-300 font-semibold leading-none">
                  GitHub Profile
                </div>
                <div className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1 hover:text-blue-600 dark:hover:text-sky-300 transition-colors">
                  <span>{profile.githubLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </a>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleCopy(profile.githubUrl, "github")}
              className="shrink-0 h-7 px-2.5 text-[11px] border-sky-500/35 bg-sky-50 text-blue-800 dark:border-sky-400/30 dark:bg-[#081730] dark:text-sky-200 hover:bg-sky-400/20"
            >
              {copiedType === "github" ? (
                <>
                  <Check className="h-3 w-3 text-blue-600 dark:text-sky-300" />
                  <span>คัดลอกแล้ว</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>คัดลอก</span>
                </>
              )}
            </Button>
          </div>

          {/* 4. Location Card */}
          <div
            tabIndex={0}
            className="navy-frame navy-frame-interactive px-3.5 py-3 sm:px-4 sm:py-3.5 flex items-center gap-3 flex-1"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/35 bg-sky-500/15 text-blue-700 dark:border-sky-400/35 dark:bg-sky-400/15 dark:text-sky-300">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono uppercase text-blue-700 dark:text-sky-300 font-semibold leading-none">
                Location
              </div>
              <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 mt-1 font-semibold">
                {profile.locationPublic}
              </div>
            </div>
          </div>
        </div>

        {/* Right 6 Cols: Direct-to-Gmail Form + Gmail Web Compose Button */}
        <div className="lg:col-span-6 flex">
          <div className="navy-frame p-4 sm:p-5 w-full flex flex-col justify-between">
            <div className="mb-3">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                ส่งข้อความถึง {profile.fullNameTh}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-200"
                  >
                    ชื่อผู้ติดต่อ / บริษัท *
                  </label>
                  <Input
                    id="contact-name"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="ระบุชื่อหรือบริษัทของคุณ"
                    className="h-9 text-xs sm:text-sm border-sky-500/35 bg-white dark:border-sky-400/25 dark:bg-[#050f21] text-slate-900 dark:text-white focus-visible:ring-sky-400"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="contact-email"
                    className="text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-200"
                  >
                    อีเมลสำหรับติดต่อกลับ *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="h-9 text-xs sm:text-sm border-sky-500/35 bg-white dark:border-sky-400/25 dark:bg-[#050f21] text-slate-900 dark:text-white focus-visible:ring-sky-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="contact-message"
                  className="text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-200"
                >
                  รายละเอียดหรือข้อความ *
                </label>
                <Textarea
                  id="contact-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="พิมพ์รายละเอียดตำแหน่งฝึกงานหรือโปรเจกต์ที่ต้องการพูดคุย..."
                  className="min-h-[76px] text-xs sm:text-sm border-sky-500/35 bg-white dark:border-sky-400/25 dark:bg-[#050f21] text-slate-900 dark:text-white focus-visible:ring-sky-400"
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-lg border border-emerald-500/45 bg-emerald-500/15 px-3 py-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>ส่งสำเร็จ</span>
                </div>
              )}

              {status === "error" && (
                <div className="rounded-lg border border-amber-400/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-800 dark:text-amber-200">
                  สามารถกดปุ่ม <strong>&quot;ส่งผ่านเว็บ Gmail&quot;</strong> ด้านล่างเพื่อส่งผ่านหน้าเว็บ Gmail ได้ทันที
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
                {/* ปุ่มหลักปุ่มเดียวชัดเจน ไม่สับสน */}
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="sky-glow-btn h-9 px-6 text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-sky-400 text-white dark:text-slate-950 hover:from-blue-500 hover:to-sky-300 font-semibold border-0"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      กำลังส่งข้อความ...
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      ส่งข้อความ
                    </>
                  )}
                </Button>

                {/* ลิงก์สำรองขนาดเล็กสำหรับเปิดหน้าเว็บ Gmail โดยตรง */}
                <button
                  type="button"
                  onClick={handleOpenGmailWeb}
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-blue-700 dark:text-sky-300/85 hover:text-blue-600 dark:hover:text-sky-200 underline-offset-4 hover:underline transition-colors"
                >
                  <span>หรือเปิดเขียนผ่านเว็บ Gmail โดยตรง</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
