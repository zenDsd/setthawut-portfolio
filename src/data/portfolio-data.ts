export interface SkillCategory {
  id: string;
  label: string;
  thaiLabel: string;
  items: string[];
  coreItems?: string[];
}

export interface ProjectEntry {
  id: string;
  number: string;
  titleEn: string;
  titleTh: string;
  category: string;
  role: string;
  status: "Completed" | "In Development";
  descriptionTh: string;
  descriptionEn: string;
  highlights: string[];
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface EducationEntry {
  id: string;
  period: string;
  programEn: string;
  programTh: string;
  schoolEn: string;
  schoolTh: string;
  gpax: string;
  current?: boolean;
  coursework?: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    fullNameEn: "SETTHAWUT KIEEBUMRUNG",
    fullNameTh: "เสฏฐวุฒิ คลี่บำรุง",
    shortBrand: "SETTHAWUT.K",
    roleEn: "Computer Engineering Student",
    roleTh: "นักศึกษาวิศวกรรมคอมพิวเตอร์",
    academicYear: "ชั้นปีที่ 3 วิศวกรรมคอมพิวเตอร์",
    universityEn: "Rajamangala University of Technology Phra Nakhon (RMUTP)",
    universityTh: "มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร",
    bioEn:
      "Computer Engineering student at Rajamangala University of Technology Phra Nakhon, with experience in web application development using React, JavaScript, Python, Firebase, and Supabase. Committed to bringing technical skills and creativity to build software that meets real-world needs, while being ready to learn and grow alongside the modern era.",
    bioTh:
      "นักศึกษาสาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร มีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันด้วย React, JavaScript, Python, Firebase และ Supabase มุ่งมั่นนำทักษะทางเทคนิคและความคิดสร้างสรรค์มาพัฒนาซอฟต์แวร์ที่ตอบโจทย์การใช้งานจริง พร้อมเรียนรู้และเติบโตไปกับเทคโนโลยียุคใหม่",
    photoUrl: "/images/setthawut-profile.jpg",
    resumePdfUrl: "/Setthawut_Kieebumrung_Resume_RMUTP.pdf",
    phone: "099-734-5847",
    phoneRaw: "0997345847",
    email: "Setthawut09902@gmail.com",
    nationality: "Thai (ไทย)",
    locationPublic: "อ.เมืองนนทบุรี จ.นนทบุรี",
    githubUrl: "https://github.com/zenDsd",
    githubLabel: "github.com/zenDsd",
  },

  skillCategories: [
    {
      id: "languages",
      label: "Programming Languages",
      thaiLabel: "ภาษาโปรแกรมที่ใช้พัฒนา",
      items: ["JavaScript", "Python", "C", "Java"],
      coreItems: ["JavaScript", "Python"],
    },
    {
      id: "frontend",
      label: "Frontend Tools",
      thaiLabel: "การพัฒนาหน้าเว็บและส่วนติดต่อผู้ใช้",
      items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "Bootstrap"],
      coreItems: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: "backend-db",
      label: "Backend & Database Tools",
      thaiLabel: "ระบบหลังบ้าน ฐานข้อมูล และโฮสติ้ง",
      items: ["Supabase", "Firebase", "Node.js"],
      coreItems: ["Supabase", "Firebase"],
    },
    {
      id: "dev-tools",
      label: "Software / Developer Tools",
      thaiLabel: "เครื่องมือสำหรับนักพัฒนาและจำลองวงจร",
      items: ["GitHub", "VS Code", "PICSimLab"],
      coreItems: ["GitHub", "VS Code"],
    },
  ] satisfies SkillCategory[],

  projects: [
    {
      id: "hotel-booking-webapp",
      number: "01",
      titleEn: "Online Hotel Booking Web Application",
      titleTh: "ระบบจองห้องพักออนไลน์ (Accommodation Booking System)",
      category: "Full-Stack Web Application",
      role: "Full-Stack Developer (Frontend & Supabase Database)",
      status: "Completed",
      descriptionTh:
        "เว็บแอปพลิเคชันจองที่พักแบบชั่วคราวและรายวัน พร้อมเช็กสถานะห้องว่างแบบ Real-time ผ่านฐานข้อมูล Supabase",
      descriptionEn:
        "Developed a web application for accommodation services, supporting temporary and daily booking options with real-time room availability.",
      highlights: [
        "เช็กสถานะห้องว่าง Real-time บน Supabase ป้องกันการจองซ้ำ",
        "พัฒนา UI ด้วย React + Tailwind CSS และ Deploy บน Firebase Hosting",
      ],
      techStack: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Supabase",
        "Firebase",
        "HTML",
        "CSS",
      ],
      imageUrl: "",
      liveUrl: "https://setthasit-hotel-a01d9.web.app/",
      repoUrl: "https://github.com/zenDsd/setthasitHotel",
    },
    {
      id: "personal-portfolio-web",
      number: "02",
      titleEn: "Personal Portfolio Website",
      titleTh: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว",
      category: "Web Development",
      role: "Frontend Developer",
      status: "Completed",
      descriptionTh:
        "พัฒนาเว็บไซต์ส่วนตัวตั้งแต่เริ่มต้นเพื่อนำเสนอข้อมูลประวัติ ผลงาน ทักษะ และประวัติการศึกษา รองรับการแสดงผลทั้งบนมือถือและคอมพิวเตอร์",
      descriptionEn:
        "Developed a personal website from scratch to showcase personal information, projects, skills, and educational background.",
      highlights: [
        "จัดวางโครงสร้างเนื้อหาแยกเป็นหมวดหมู่ชัดเจน (About, Skills, Projects, Education, Contact)",
        "รองรับการสลับโหมดมืด/สว่าง ดูตัวอย่างเรซูเม่ และส่งข้อความติดต่อผ่านอีเมลได้โดยตรง",
      ],
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML",
        "CSS",
        "Firebase",
      ],
      imageUrl: "",
      liveUrl: "https://setthawut-portfolio.web.app",
      repoUrl: "https://github.com/zenDsd/setthawut-portfolio",
    },
    {
      id: "queue-display-pic16f877a",
      number: "03",
      titleEn: "Queue Number Display System for Small Shops",
      titleTh: "ระบบแสดงหมายเลขคิวสำหรับร้านค้าขนาดเล็ก",
      category: "Embedded Systems & Microcontroller",
      role: "Embedded Software Developer (Assembly & Circuit Simulation)",
      status: "Completed",
      descriptionTh:
        "ระบบจัดการและเรียกคิวด้วยไมโครคอนโทรลเลอร์ PIC16F877A ภาษา Assembly แสดงผลบนจอ 7-Segment และ LCD 16x2",
      descriptionEn:
        "Developed a queue management system using the PIC16F877A microcontroller and Assembly language, simulated via PICSimLab.",
      highlights: [
        "ใช้ TMR0 Interrupt ควบคุมจอ 7-Segment แบบ Multiplexed แก้ปัญหาไฟกระพริบ",
        "ตรวจสอบเงื่อนไขป้องกันการกดเรียกคิวเกินจำนวนบัตรคิวจริงควบคู่จอ LCD 16x2",
      ],
      techStack: [
        "PIC16F877A",
        "Assembly Language",
        "PICSimLab",
        "7-Segment (TMR0)",
        "LCD 16x2",
      ],
      imageUrl: "",
      liveUrl: "",
      repoUrl: "https://github.com/zenDsd",
    },
  ] satisfies ProjectEntry[],

  educations: [
    {
      id: "edu-rmutp",
      period: "2024 - PRESENT",
      programEn: "Faculty of Engineering | Computer Engineering",
      programTh: "คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์",
      schoolEn: "Rajamangala University of Technology Phra Nakhon",
      schoolTh: "มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร (RMUTP)",
      gpax: "3.10",
      current: true,
    },
    {
      id: "edu-niramon",
      period: "2021 - 2023",
      programEn: "Mathematics-Science Program",
      programTh: "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
      schoolEn: "Niramon Chumphon School",
      schoolTh: "โรงเรียนนิรมลชุมพร",
      gpax: "3.30",
      current: false,
    },
  ] satisfies EducationEntry[],
};
