import { experience } from "../data/portfolio-data";
import { SectionTitle } from "./SectionTitle";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <SectionTitle
        kicker="Experience"
        title="Internship work with practical delivery and collaboration."
        description="Hands-on experience with modern tech stacks and real-world problem solving."
      />

      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              {experience.company}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {experience.role}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{experience.location}</p>
          </div>
          <div className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            {experience.date}
          </div>
        </div>

        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {experience.bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm leading-6 text-slate-200"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
