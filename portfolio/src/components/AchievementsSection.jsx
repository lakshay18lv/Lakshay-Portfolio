import { certifications } from "../data/portfolio-data";
import { SectionTitle } from "./SectionTitle";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <SectionTitle
        kicker="Achievements"
        title="Certifications and learning momentum."
        description="Continuous learning and professional development certifications."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {certifications.map((item) => (
          <div
            key={item}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400" />
              <p className="text-sm leading-7 text-slate-200">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
