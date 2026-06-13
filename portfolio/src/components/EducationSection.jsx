import { education } from "../data/portfolio-data";
import { SectionTitle } from "./SectionTitle";

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <SectionTitle
        kicker="Education"
        title="Academic background and credentials."
        description="Building strong foundations in Computer Science and modern technologies."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {education.map((item) => (
          <div
            key={`${item.school}-${item.year}`}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              {item.year}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {item.school}
            </h3>
            <p className="mt-2 text-sm text-sky-200">{item.place}</p>
            <p className="mt-4 text-sm text-slate-200">{item.degree}</p>
            {item.detail ? (
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
