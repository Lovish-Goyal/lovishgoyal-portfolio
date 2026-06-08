import { HeroSection } from "@/app/components/site/HeroSection";
import { AboutSection } from "@/app/components/site/AboutSection";
import { ExperienceSection } from "@/app/components/site/ExperienceSection";
import { EducationSection } from "@/app/components/site/EducationSection";
import { SkillsSection } from "@/app/components/site/SkillsSection";
import { ProjectsSection } from "@/app/components/site/ProjectsSection";
import { ContactSection } from "@/app/components/site/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
