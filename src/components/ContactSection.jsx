import { SymbolIcon, classNames } from "./ui";

export function ContactSection({ profile, darkMode, mutedText }) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className={classNames("rounded-[2rem] border p-8 md:p-10", darkMode ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white")}>
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className={classNames("mb-3 text-xs font-bold uppercase tracking-[0.28em]", darkMode ? "text-sky-300" : "text-sky-700")}>Contact</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Let's Connect.</h2>
            <p className={classNames("mt-4 max-w-2xl leading-7", mutedText)}>I'm always happy to chat about engineering ideas, exciting projects, and opportunities to collaborate.</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`mailto:${profile.email}`} className={classNames("inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition", darkMode ? "bg-sky-300 text-slate-950 hover:bg-sky-200" : "bg-slate-950 text-white hover:bg-slate-800")}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={classNames("inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition", darkMode ? "border-slate-800 bg-slate-950 text-slate-100 hover:bg-slate-800" : "border-slate-200 bg-slate-50 text-slate-950 hover:bg-slate-100")}>LinkedIn <SymbolIcon name="linkedin" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
