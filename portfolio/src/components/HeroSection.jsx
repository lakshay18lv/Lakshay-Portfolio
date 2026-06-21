import { profile } from "../data/portfolio-data";
import portfolioImg from "../assets/portfolio_img.png";

export function HeroSection() {
  return (
    <section
      id="about"
      className="grid items-center gap-10 pb-20 pt-8 lg:grid-cols-[1.2fr_0.8fr]"
    >
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for Internships
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
          I build clean, reliable full-stack products with{" "}
          <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
            React
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
            Node.js
          </span>
          .
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          Final-year Computer Science undergraduate skilled in MERN Stack, REST APIs, and JWT Authentication. Completed a
Web Development Internship and developed multiple full-stack projects. Proficient in React.js, Node.js, Express.js,
MongoDB, Git, and GitHub, with strong problem-solving and software development skills.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download="Lakshay_Verma_Resume.pdf"
            className="rounded-full border border-sky-400/25 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/20"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["3+", "Self-driven projects"],
            ["1", "Industry internship"],
            ["MERN", "Primary stack"],
          ].map((stat) => (
            <div
              key={stat[1]}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur"
            >
              <div className="text-2xl font-bold text-white">{stat[0]}</div>
              <div className="mt-1 text-sm text-slate-300">{stat[1]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-glow backdrop-blur-xl">
          <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src={portfolioImg}
                  alt="Profile"
                  className="w-55 h-55 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {profile.name}
                  </h3>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Professional
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Focus
                </p>
                <p className="mt-2 font-medium text-white">{profile.title}</p>
              </div>

              <div className="grid gap-4 grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Location
                  </p>
                  <p className="mt-2 font-medium text-white text-sm">
                    {profile.location}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Stack
                  </p>
                  <p className="mt-2 font-medium text-white text-sm">MERN</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Contact
                </p>
                <div className="mt-3 space-y-2 text-sm text-slate-200">
                  <p>{profile.email}</p>
                  <p>{profile.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
