import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";
import { CursorGlow } from "@/components/shared/cursor-glow";

export default function PortfolioHomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-navy-canvas text-foreground">
      {/* Interactive Mouse Spotlight & Spring Cursor Ring */}
      <CursorGlow />
      {/* Subtle Aurora Dot-Matrix Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-aurora-dots"
      />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}
