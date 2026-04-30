import { useMemo, useState } from "react";
import { profile } from "./data/profile";
import { industryExperience } from "./data/industry";
import { campusExperience } from "./data/campusExperience";
import { leadership } from "./data/leadership";
import { projects } from "./data/projects";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSections } from "./components/ExperienceSections";
import { WorkSection } from "./components/WorkSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { PersonalSection } from "./components/AboutMeSection";
import { ContactSection } from "./components/ContactSection";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { classNames } from "./components/ui";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);
  const selectedProject = projects.find((project) => project.slug === selectedProjectSlug);
  const navItems = useMemo(() => [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#work" },
    { label: "Clubs + Leadership", href: "#leadership" },
    { label: "Personal", href: "#personal" },
    { label: "Contact", href: "#contact" },
  ], []);

  if (selectedProject) {
    return <ProjectDetailPage project={selectedProject} darkMode={darkMode} onBack={() => setSelectedProjectSlug(null)} />;
  }

  const pageClass = darkMode ? "bg-[#080B10] text-slate-50" : "bg-[#F8FAFC] text-slate-950";
  const panelClass = darkMode ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white";
  const mutedText = darkMode ? "text-slate-400" : "text-slate-600";

  return (
    <main className={classNames("min-h-screen scroll-smooth font-sans transition-colors duration-500", pageClass)}>
      <style>{`@keyframes fadeInUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}html{scroll-behavior:smooth}`}</style>
      <Header profile={profile} navItems={navItems} darkMode={darkMode} setDarkMode={setDarkMode} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} mutedText={mutedText} />
      <HeroSection profile={profile} darkMode={darkMode} panelClass={panelClass} mutedText={mutedText} />
      <ExperienceSections darkMode={darkMode} industryExperience={industryExperience} campusExperience={campusExperience} />
      <WorkSection darkMode={darkMode} projects={projects} onOpenProject={setSelectedProjectSlug} />
      <LeadershipSection darkMode={darkMode} leadership={leadership} panelClass={panelClass} mutedText={mutedText} />
      <PersonalSection profile={profile} darkMode={darkMode} panelClass={panelClass} mutedText={mutedText} />
      <ContactSection profile={profile} darkMode={darkMode} mutedText={mutedText} />
      <footer className={classNames("border-t px-5 py-8 text-center text-sm", darkMode ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-500")}><p>{profile.name} • {profile.location} • {profile.phone}</p></footer>
    </main>
  );
}
