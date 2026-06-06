import { SymbolIcon, classNames } from "./ui";

export function ContactSection({ profile, darkMode, mutedText }) {
  const panelClass = darkMode ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white";
  const accent = darkMode ? "text-sky-300" : "text-sky-700";
  const divider = darkMode ? "bg-slate-800" : "bg-slate-200";

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", accent)}>Contact</p>
          <h2 className="text-2xl font-semibold tracking-tight">Let's connect.</h2>
        </div>
      </div>

      <div className={classNames("rounded-[1.75rem] border p-6 md:p-8", panelClass)}>
        <div className="mb-5 flex items-center gap-3">
          <div className={classNames("h-px flex-1", divider)} />
          <p className={classNames("rounded-full border px-3 py-1 text-xs font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>Open to conversations</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Reach out!</h3>
            <p className={classNames("mt-4 max-w-2xl leading-7", mutedText)}>
              I'm always happy to chat about exciting ideas, projects and opportunities to collaborate.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
              className={classNames("inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition", darkMode ? "bg-sky-300 text-slate-950 hover:bg-sky-200" : "bg-slate-950 text-white hover:bg-slate-800")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              <span>Email me</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={classNames("inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition", darkMode ? "border-slate-800 bg-slate-950 text-slate-100 hover:bg-slate-800" : "border-slate-200 bg-slate-50 text-slate-950 hover:bg-slate-100")}
            >
              LinkedIn <SymbolIcon name="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
