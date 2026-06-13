export function SectionTitle({ kicker, title, description }) {
  return (
    <div className="mb-8">
      <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
        {description}
      </p>
    </div>
  );
}
