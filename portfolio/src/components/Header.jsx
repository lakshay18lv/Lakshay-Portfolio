import { profile } from "../data/portfolio-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#top"
          className="text-lg font-semibold tracking-wide text-white"
        >
          {profile.name}
        </a>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {["About", "Projects", "Experience", "Skills", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-white"
              >
                {item}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
