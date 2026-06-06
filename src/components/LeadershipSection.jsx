import { FadeIn, Pill, classNames } from "./ui";

export function LeadershipSection({ darkMode, leadership, panelClass, mutedText }) {
  const accent = darkMode ? "text-sky-300" : "text-sky-700";
  const timelineLine = darkMode ? "bg-slate-800" : "bg-slate-200";

  return (
    <section id="leadership" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", accent)}>Clubs + Leadership</p>
          <h3 className="text-2xl font-semibold tracking-tight">Student organizations, selective programs, and competitions</h3>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {leadership.map((item, index) => (
          <FadeIn key={item.title} delay={index * 60}>
            <article className={classNames("h-full rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-0.5", panelClass)}>
              <div className="mb-5 flex items-center gap-3">
                <div className={classNames("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold", darkMode ? "border-sky-300/40 bg-sky-300/10 text-sky-300" : "border-sky-700/25 bg-sky-50 text-sky-700")}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className={classNames("h-px flex-1", timelineLine)} />
                <p className={classNames("shrink-0 rounded-full border px-3 py-1 text-xs font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>{item.date}</p>
              </div>

              <p className={classNames("text-xs font-semibold uppercase tracking-[0.22em]", accent)}>{item.category}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className={classNames("mt-4 leading-7", mutedText)}>{item.detail}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.slice(0, 5).map((skill) => <Pill key={skill} darkMode={darkMode}>{skill}</Pill>)}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
