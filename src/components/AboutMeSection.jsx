export function PersonalSection() {
  return (
    <section id="personal" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-300">Personal</p>
      <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">More about me</h2>
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="mb-4 text-xl font-semibold">Background</h3>
          <p className="text-lg leading-8 text-slate-400">I grew up in Mumbai, India, in an environment shaped by engineering and entrepreneurship. That background pushed me to think beyond whether something works and focus on how it can be designed, built, and scaled reliably. It is also what drew me toward mechanical engineering: the chance to turn technical ideas into practical systems that hold up in the real world.</p>
        </div>
        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="mb-5 text-xl font-semibold">Current favorite media</h3>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Movie / Show</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">Beef, Season 2</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Song</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">Eternal Summer</p>
          <p className="mt-1 text-slate-400">The Strokes</p>
        </div>
      </div>
    </section>
  );
}
