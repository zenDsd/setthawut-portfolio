"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Component กลาง #6: ScrollToTopButton
 * รองรับทั้งโหมดสว่างและโหมดมืด พร้อมแสงสีฟ้าอ่อนเมื่อกด
 */
export function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 260);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="เลื่อนกลับขึ้นด้านบนสุด"
      title="เลื่อนกลับขึ้นด้านบน"
      className={cn(
        "fixed bottom-20 md:bottom-8 right-5 sm:right-8 z-50 flex h-11 w-11 items-center justify-center rounded-xl",
        "border border-sky-500/45 bg-white/90 text-blue-700 dark:border-sky-300/40 dark:bg-[#0d2142]/90 dark:text-sky-300 backdrop-blur-md",
        "shadow-[0_4px_20px_rgba(14,65,130,0.2)] dark:shadow-[0_4px_20px_rgba(2,8,23,0.6)] transition-all duration-300",
        "hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950 dark:hover:bg-sky-400 dark:hover:text-slate-950 hover:shadow-[0_0_24px_rgba(56,189,248,0.65)]",
        "active:scale-95 active:shadow-[0_0_32px_rgba(125,211,252,0.9)]",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
