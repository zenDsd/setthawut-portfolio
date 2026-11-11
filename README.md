# Setthawut Kieebumrung — Portfolio Website

เว็บไซต์พอร์ตโฟลิโอของ **เสฏฐวุฒิ คลี่บำรุง (SETTHAWUT KIEEBUMRUNG)** นักศึกษาสาขาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร (RMUTP)

พัฒนาด้วย **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** และ **shadcn/ui** โดยใช้โครงสร้าง **Component กลาง (Shared Reusable Components)** ในโทนสีน้ำเงินเข้ม (Deep Navy Blue) พร้อมเอฟเฟกต์แสงสีฟ้าอ่อน (Light Sky Blue Glow) เวลาคลิกหรือชี้เมาส์

---

## วิธีใส่รูปภาพและลิงก์โปรเจกต์เพิ่มเติมในอนาคต

เมื่อมีรูปภาพหน้าจอโปรเจกต์ (เช่น รูปเว็บจองห้องพัก หรือวงจรระบบคิว) หรือลิงก์ใช้งานจริง สามารถเพิ่มได้ง่ายๆ ในจุดเดียว:

1. นำไฟล์รูปภาพไปวางไว้ในโฟลเดอร์ `public/images/` (เช่น `public/images/hotel-booking.png`)
2. เปิดไฟล์ `src/data/portfolio-data.ts` แล้วใส่ค่าใน `imageUrl`, `liveUrl`, หรือ `repoUrl`:

```ts
{
  id: "hotel-booking-webapp",
  number: "01",
  titleEn: "Online Hotel Booking Web Application",
  // ...
  imageUrl: "/images/hotel-booking.png",
  liveUrl: "https://your-hotel-booking-url.web.app",
  repoUrl: "https://github.com/your-username/hotel-booking",
}
```

---

## โครงสร้าง Component กลาง (`src/components/shared/`)

- `section-container.tsx` — `SectionContainer` & `SectionHeader` คุมโครงสร้าง Grid และหัวข้อพร้อมเลขลำดับ `01 //`, `02 //`
- `tech-badge.tsx` — ป้ายชื่อเทคโนโลยีพร้อมเอฟเฟกต์แสงสีฟ้าอ่อนเวลากดหรือชี้เมาส์
- `project-card.tsx` — การ์ดแสดงโปรเจกต์แบบ 2 คอลัมน์ (กรอบภาพตัวอย่างด้านซ้าย + รายละเอียดด้านขวา)
- `timeline-item.tsx` — การ์ดแสดงประวัติการศึกษาและเกรดเฉลี่ย (GPAX)
- `resume-dialog.tsx` — หน้าต่าง Modal สำหรับเปิดดูและดาวน์โหลดไฟล์ `Setthawut_Kieebumrung_Resume_RMUTP.pdf`
- `scroll-to-top.tsx` — ปุ่มลูกศรลอยตัวมุมขวาล่างสำหรับเลื่อนกลับขึ้นด้านบนสุดของหน้าเว็บ
"# setthawut-portfolio" 
"# setthawut-portfolio" 
