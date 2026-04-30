import { ImageFrame, Pill, SymbolIcon, classNames } from "./ui";

export function ProjectDetailPage({ project, darkMode, onBack }) {
  const mutedText = darkMode ? "text-slate-400" : "text-slate-600";
  const panelClass = darkMode ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white";

  return (
    <main className={classNames("min-h-screen px-5 py-10 lg:px-8", darkMode ? "bg-[#080B10] text-slate-50" : "bg-[#F8FAFC] text-slate-950")}>
      <div className="mx-auto max-w-6xl">
        <button type="button" onClick={onBack} className={classNames("mb-8 rounded-full border px-4 py-2 text-sm font-bold transition", darkMode ? "border-slate-800 bg-slate-900 text-slate-100 hover:bg-slate-800" : "border-slate-200 bg-white text-slate-950 hover:bg-slate-100")}>Back to portfolio</button>

        <section className={classNames("overflow-hidden rounded-[2rem] border", panelClass)}>
          <ImageFrame src={project.image} alt={`${project.title} project visual`} label={`${project.title} image`} darkMode={darkMode} className="aspect-[21/10] rounded-none border-0" objectPosition="center center" />
            <p className={classNames("text-xs font-bold uppercase tracking-[0.28em]", darkMode ? "text-sky-300" : "text-sky-700")}>{project.category}</p>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
                <p className={classNames("mt-5 max-w-3xl text-lg leading-8", mutedText)}>{project.summary}</p>
              </div>
              <div className={classNames("shrink-0 rounded-full px-4 py-2 text-sm font-bold", darkMode ? "bg-sky-300 text-slate-950" : "bg-sky-100 text-sky-900")}>{project.metric}</div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.skills.map((skill) => <Pill key={skill} darkMode={darkMode}>{skill}</Pill>)}
            </div>
          </div>
        </section>

        {project.sections && (
          <section className="mt-8 grid gap-5 md:grid-cols-3">
            {project.sections.map((section) => (
              <article key={section.heading} className={classNames("rounded-[1.5rem] border p-6", panelClass)}>
                <h2 className="text-xl font-semibold">{section.heading}</h2>
                <p className={classNames("mt-3 leading-7", mutedText)}>{section.body}</p>
              </article>
            ))}
          </section>
        )}

        {project.components && (
          <section className={classNames("mt-8 rounded-[2rem] border p-6 md:p-8", panelClass)}>
            <p className={classNames("mb-5 text-xs font-bold uppercase tracking-[0.24em]", darkMode ? "text-sky-300" : "text-sky-700")}>Project Breakdown</p>
            <div className="grid gap-3 md:grid-cols-2">
              {project.components.map((component) => (
                <div key={component} className="flex gap-3 text-sm leading-6">
                  <span className={classNames("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", darkMode ? "bg-sky-300" : "bg-sky-700")} />
                  <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{component}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.gallery && (
          <section className={classNames("mt-8 rounded-[2rem] border p-6 md:p-8", panelClass)}>
            <p className={classNames("mb-5 text-xs font-bold uppercase tracking-[0.24em]", darkMode ? "text-sky-300" : "text-sky-700")}>Full CAD Gallery</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {project.gallery.map((item) => (
                <div key={item.title} className={classNames("overflow-hidden rounded-2xl border", darkMode ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-slate-50")}>
                  <div className={classNames("flex aspect-[4/3] items-center justify-center", darkMode ? "bg-slate-950" : "bg-slate-100")}>
                    {item.image ? <img src={item.image} alt={item.title} className="h-full w-full object-contain p-3" /> : <div className="flex flex-col items-center justify-center gap-2 p-4 text-center"><SymbolIcon name="image" className={classNames("text-3xl", darkMode ? "text-slate-600" : "text-slate-400")} /><p className={classNames("text-xs font-semibold", darkMode ? "text-slate-500" : "text-slate-500")}>Image placeholder</p></div>}
                  </div>
                  <div className="p-4"><h3 className="text-sm font-semibold">{item.title}</h3><p className={classNames("mt-1 text-xs leading-5", mutedText)}>{item.caption}</p></div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
