import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { ThemeToggle } from "./components/ThemeToggle";
import { CVPopup } from "./components/CVPopup";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";
import { toast } from "sonner";
import "./styles/globals.css"

export default function App() {
  const [cvPopupOpen, setCvPopupOpen] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      <Toaster />
      <CVPopup open={cvPopupOpen} onOpenChange={setCvPopupOpen} />

      <HeroSection onGetResume={() => setCvPopupOpen(true)} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection onSubmit={handleContactSubmit} />
      <Footer />
    </div>
  );
}