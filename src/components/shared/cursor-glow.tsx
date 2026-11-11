"use client";

import * as React from "react";

interface TapRipple {
  id: number;
  x: number;
  y: number;
}

/**
 * Component กลาง #8: CursorGlow (Universal Desktop Mouse & Mobile Touch Spotlight + Tap Ripple)
 *
 * ออกแบบให้รองรับทั้ง Mobile (Touchscreen) และ Desktop (Mouse) 100%:
 * 1. บนคอมพิวเตอร์ (Mouse):
 *    ลำแสง Aurora Spotlight สีฟ้าอ่อนเคลื่อนตามเมาส์แบบนุ่มนวล และส่องสว่างขอบการ์ด (.navy-frame-interactive)
 *    โดยไม่มีวงกลมหรือจุดค้างบังตัวหนังสือ
 * 2. บนมือถือและแท็บเล็ต (Mobile Touch / Tap / Scroll):
 *    เมื่อใช้นิ้วแตะหรือเลื่อนหน้าจอ (touchstart / touchmove / pointerdown)
 *    แสงสีฟ้าอ่อนจะสว่างขึ้นตามตำแหน่งนิ้วที่แตะ พร้อมเอฟเฟกต์คลื่นแสง (Touch Ripple Wave)
 *    ที่กระจายออกแล้วจางหายไปอย่างนุ่มนวล ไม่เกะกะหน้าจอมือถือ
 */
export function CursorGlow() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [ripples, setRipples] = React.useState<TapRipple[]>([]);
  const spotlightRef = React.useRef<HTMLDivElement>(null);
  const hideTimeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const updatePosition = (clientX: number, clientY: number, target: EventTarget | null) => {
      setIsVisible(true);

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mouse-x", `${clientX}px`);
        spotlightRef.current.style.setProperty("--mouse-y", `${clientY}px`);
      }

      const el = target as HTMLElement | null;
      if (el && typeof el.closest === "function") {
        const cardEl = el.closest(".navy-frame-interactive") as HTMLElement | null;
        if (cardEl) {
          const rect = cardEl.getBoundingClientRect();
          cardEl.style.setProperty("--card-x", `${clientX - rect.left}px`);
          cardEl.style.setProperty("--card-y", `${clientY - rect.top}px`);
        }
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      updatePosition(e.clientX, e.clientY, e.target);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY, e.target);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      updatePosition(e.clientX, e.clientY, e.target);

      // สร้างคลื่นแสงสีฟ้าอ่อน (Ripple Pulse) ณ จุดที่คลิกเมาส์หรือใช้นิ้วแตะบนจอมือถือ
      const newRipple: TapRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);

      window.setTimeout(() => {
        setRipples((prev) => prev.filter((item) => item.id !== newRipple.id));
      }, 650);

      // บนมือถือ เมื่อปล่อยนิ้วแล้วให้แสง Spotlight ค่อยๆ จางลงหลังผ่านไป 1.5 วินาทีเพื่อความคลีน
      if (e.pointerType === "touch") {
        if (hideTimeoutRef.current) {
          window.clearTimeout(hideTimeoutRef.current);
        }
        hideTimeoutRef.current = window.setTimeout(() => {
          setIsVisible(false);
        }, 1500);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {/* 1. Ambient Aurora Spotlight (ทำงานทั้งเวลาเลื่อนเมาส์บนคอม และเวลาแตะ/เลื่อนนิ้วบนมือถือ) */}
      <div
        ref={spotlightRef}
        className={`pointer-events-none fixed inset-0 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(380px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.14), rgba(37, 99, 235, 0.06) 45%, transparent 75%)",
        }}
      />

      {/* 2. Touch & Click Ripple Wave (วงคลื่นแสงสีฟ้าอ่อนเมื่อแตะหน้าจอมือถือหรือคลิกเมาส์ แล้วจางหายไปเอง ไม่ค้างบนจอ) */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          className="pointer-events-none fixed -ml-8 -mt-8 h-16 w-16 rounded-full border border-sky-400/60 bg-sky-400/15 shadow-[0_0_24px_rgba(56,189,248,0.5)] animate-ping"
        />
      ))}
    </div>
  );
}
