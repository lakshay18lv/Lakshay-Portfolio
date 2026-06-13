import {
  Header,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  AchievementsSection,
  ContactSection,
} from "./components";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100 antialiased">
      <div className="noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

      <Header />

      <main
        id="top"
        className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8"
      >
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Lakshay Verma. Designed with React and
        Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
