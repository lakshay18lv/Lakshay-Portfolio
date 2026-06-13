import { skills } from "../data/portfolio-data";
import { SectionTitle } from "./SectionTitle";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <SectionTitle
        kicker="Skills"
        title="A stack that maps directly to modern product teams."
        description="These are organized for quick scanning by recruiters and make your core strengths easy to understand in seconds."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map(([label, items]) => (
          <div
            key={label}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              {label}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-900/80 px-3 py-1 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
