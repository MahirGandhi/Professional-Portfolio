import { FadeIn, Pill, SectionHeader, classNames } from "./ui";

export function LeadershipSection({ darkMode, leadership, panelClass, mutedText }) {
  return (
    <section id="leadership" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeader darkMode={darkMode} eyebrow="Clubs + Leadership" title="Student organizations, selective programs, and competitions" />
      <div className="grid gap-5 md:grid-cols-2">
        {leadership.map((item, index) => (
          <FadeIn key={item.title} delay={index * 60}>
            <article className={classNames("rounded-[1.75rem] border p-6", panelClass)}>
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className={classNames("text-xs font-semibold uppercase tracking-[0.22em]", darkMode ? "text-sky-300" : "text-sky-700")}>{item.category}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                </div>
                <p className={classNames("rounded-full border px-3 py-1 text-xs font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>{item.date}</p>
              </div>
              <p className={classNames("mt-3 leading-7", mutedText)}>{item.detail}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => <Pill key={skill} darkMode={darkMode}>{skill}</Pill>)}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
