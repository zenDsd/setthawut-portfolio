"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";
import {
  Code2,
  Download,
  FolderGit2,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Sun,
  User,
} from "lucide-react";

const NAV_LINKS = [
  { id: "about", label: "About", thai: "ข้อมูลส่วนตัว", href: "#about", icon: User },
  { id: "skills", label: "Skills", thai: "ทักษะ", href: "#skills", icon: Code2 },
  { id: "projects", label: "Projects", thai: "โปรเจกต์", href: "#projects", icon: FolderGit2 },
  { id: "education", label: "Education", thai: "การศึกษา", href: "#education", icon: GraduationCap },
  { id: "contact", label: "Contact", thai: "ติดต่อ", href: "#contact", icon: Mail },
];

export function Navbar() {
  const { profile } = PORTFOLIO_DATA;
  const [activeSection, setActiveSection] = React.useState<string>("about");
  const [isDark, setIsDark] = React.useState<boolean>(true);

  // ซิงค์สถานะโหมดมืด/สว่างเมื่อโหลดหน้าเว็บ
  React.useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const root = document.documentElement;
    if (saved === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      root.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  // Scroll-Spy: ตรวจจับว่าผู้ใช้งานกำลังอ่าน Section ไหนอยู่จริง
  React.useEffect(() => {
    const sectionIds = NAV_LINKS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-sky-500/25 bg-white/80 dark:border-sky-300/15 dark:bg-[#040b18]/85 backdrop-blur-xl transition-colors duration-300">
        <div className="container mx-auto max-w-5xl px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Brand Title */}
          <a
            href="#top"
            onClick={() => setActiveSection("about")}
            className="flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 transition-colors"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 shadow-[0_0_12px_#38bdf8]" />
            <span>{profile.fullNameEn}</span>
          </a>

          {/* Desktop Navigation Links with Real Scroll-Spy Active State */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-sm font-medium transition-all",
                    isActive
                      ? "bg-sky-500/15 text-blue-700 border border-sky-500/40 dark:bg-sky-400/15 dark:text-sky-300 dark:border-sky-300/35 shadow-[0_0_16px_rgba(56,189,248,0.25)]"
                      : "text-slate-600 dark:text-slate-300 border border-transparent hover:bg-sky-400/10 hover:text-blue-700 dark:hover:text-sky-200"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle Button (แสงมืด / แสงสว่าง) + Resume PDF + Mobile Drawer */}
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              aria-label="สลับโหมดแสงมืด / แสงสว่าง"
              title="กดเพื่อสลับโหมดแสงมืด / แสงสว่าง"
              className="sky-glow-btn h-9 px-3 border-sky-500/40 bg-sky-100/80 text-blue-800 hover:bg-sky-200 dark:border-sky-400/35 dark:bg-[#081730] dark:text-sky-200 dark:hover:bg-sky-400/20 font-medium text-xs gap-1.5"
            >
              {isDark ? (
                <>
                  <Sun className="h-4 w-4 text-amber-300" />
                  <span>แสงสว่าง</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-blue-700" />
                  <span>แสงมืด</span>
                </>
              )}
            </Button>

            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex sky-glow-btn bg-gradient-to-r from-blue-600 to-sky-400 text-white dark:text-slate-950 hover:from-blue-500 hover:to-sky-300 font-semibold h-9 px-4 border-0"
            >
              <a
                href={profile.resumePdfUrl}
                download="Setthawut_Kieebumrung_Resume_RMUTP.pdf"
              >
                <Download className="h-4 w-4" />
                Resume PDF
              </a>
            </Button>

            {/* Mobile Hamburger Drawer */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 border-sky-500/40 bg-white/90 text-slate-800 dark:border-sky-400/30 dark:bg-[#08152c] dark:text-sky-200 hover:bg-sky-400/15"
                    aria-label="เปิดเมนูนำทาง"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="flex flex-col justify-between border-sky-500/30 bg-white/95 dark:border-sky-400/20 dark:bg-[#050e1f]/95 backdrop-blur-2xl text-slate-900 dark:text-white"
                >
                  <div className="space-y-6">
                    <SheetHeader className="border-b border-sky-500/20 dark:border-sky-400/15 pb-4">
                      <SheetTitle className="text-base font-bold text-slate-900 dark:text-white">
                        {profile.fullNameEn}
                      </SheetTitle>
                      <SheetDescription className="text-xs text-blue-700 dark:text-sky-300/80 font-medium">
                        {profile.fullNameTh} • {profile.roleEn}
                      </SheetDescription>
                    </SheetHeader>

                    <div className="space-y-1.5">
                      {NAV_LINKS.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        return (
                          <SheetClose asChild key={item.href}>
                            <a
                              href={item.href}
                              onClick={() => setActiveSection(item.id)}
                              className={cn(
                                "flex items-center justify-between rounded-lg px-3.5 py-3 text-sm font-medium transition-all",
                                isActive
                                  ? "bg-sky-500/15 text-blue-700 border border-sky-500/40 dark:bg-sky-400/20 dark:text-sky-200 dark:border-sky-300/40 shadow-[0_0_16px_rgba(56,189,248,0.25)]"
                                  : "text-slate-700 dark:text-slate-200 hover:bg-sky-400/10 hover:text-blue-700 dark:hover:text-sky-300"
                              )}
                            >
                              <span className="flex items-center gap-3">
                                <Icon className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                                {item.label}
                              </span>
                              <span className="text-xs text-slate-500 dark:text-slate-400">
                                {item.thai}
                              </span>
                            </a>
                          </SheetClose>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2.5 border-t border-sky-500/20 dark:border-sky-400/15 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={toggleTheme}
                      className="w-full border-sky-500/40 bg-sky-50 text-blue-800 dark:border-sky-400/30 dark:bg-[#081730] dark:text-sky-200"
                    >
                      {isDark ? (
                        <>
                          <Sun className="h-4 w-4 text-amber-300" />
                          สลับเป็นโหมดแสงสว่าง (Light Mode)
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4 text-blue-700" />
                          สลับเป็นโหมดแสงมืด (Dark Mode)
                        </>
                      )}
                    </Button>

                    <SheetClose asChild>
                      <Button
                        asChild
                        className="w-full sky-glow-btn bg-gradient-to-r from-blue-600 to-sky-400 text-white dark:text-slate-950 font-semibold border-0"
                      >
                        <a
                          href={profile.resumePdfUrl}
                          download="Setthawut_Kieebumrung_Resume_RMUTP.pdf"
                        >
                          <Download className="h-4 w-4" />
                          ดาวน์โหลด Resume PDF
                        </a>
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar with Dynamic Scroll-Spy Highlight */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-0 inset-x-0 z-40 border-t border-sky-500/25 bg-white/95 dark:border-sky-400/20 dark:bg-[#040b18]/95 backdrop-blur-xl md:hidden transition-colors duration-300"
      >
        <div className="grid grid-cols-5 h-14 px-1">
          {NAV_LINKS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-all",
                  isActive
                    ? "text-blue-700 dark:text-sky-300 font-semibold"
                    : "text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-200"
                )}
              >
                <div
                  className={cn(
                    "flex h-6 w-8 items-center justify-center rounded-md transition-all",
                    isActive &&
                      "bg-sky-500/15 text-blue-700 dark:bg-sky-400/20 dark:text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
