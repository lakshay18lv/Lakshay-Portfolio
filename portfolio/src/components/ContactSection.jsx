import { profile } from "../data/portfolio-data";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-r from-sky-500/15 to-violet-500/15 p-8 shadow-glow backdrop-blur-xl md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-200/80">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Let's build something useful together.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              If you're reviewing this portfolio for internships or
              collaboration, the fastest way to reach me is email or LinkedIn.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Email Me
              </a>
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Details
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              <div>
                <p className="text-slate-400">Name</p>
                <p className="mt-1 font-medium text-white">{profile.name}</p>
              </div>
              <div>
                <p className="text-slate-400">Email</p>
                <p className="mt-1 font-medium text-white">{profile.email}</p>
              </div>
              <div>
                <p className="text-slate-400">Phone</p>
                <p className="mt-1 font-medium text-white">{profile.phone}</p>
              </div>
              <div>
                <p className="text-slate-400">Location</p>
                <p className="mt-1 font-medium text-white">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
