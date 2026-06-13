import { projects } from "../data/portfolio-data";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <SectionTitle
        kicker="Projects"
        title="Selected work that shows end-to-end product thinking."
        description="Each project reflects practical implementation skills, from authentication and CRUD flows to AI-enabled experiences and maintainable backend structure."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur transition hover:-translate-y-1 hover:bg-white/8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {project.summary}
                </p>
              </div>
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200 whitespace-nowrap">
                Featured
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-400">{project.tech}</p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:scale-[1.02] transition"
                >
                  Live
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
