import { classNames } from "./ui";

function HighlightMetrics({ text, darkMode }) {
  const metricPattern = /(\$[\d,]+\+?|±\d+(?:\.\d+)?(?:-inch)?|\b\d+(?:\.\d+)?(?:\+|%|X)?\b)/g;
  const parts = String(text).split(metricPattern);

  return parts.map((part, index) => {
    if (!part || !metricPattern.test(part)) return part;

    metricPattern.lastIndex = 0;

    return (
      <span key={`${part}-${index}`} className={classNames("font-bold", darkMode ? "text-sky-300" : "text-sky-700")}>
        {part}
      </span>
    );
  });
}

function PracticalExperienceCard({ item, index, darkMode }) {
  const featured = index < 4;
  const panelClass = darkMode ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white";
  const mutedText = darkMode ? "text-slate-400" : "text-slate-600";
  const accent = darkMode ? "text-sky-300" : "text-sky-700";
  const timelineLine = darkMode ? "bg-slate-800" : "bg-slate-200";
  const points = featured ? item.points : item.points.slice(0, 2);
  const skillLimit = featured ? 7 : 4;

  return (
    <article className={classNames("group relative overflow-hidden rounded-[1.75rem] border p-5 transition duration-300 hover:-translate-y-0.5", panelClass)}>
      <div className="mb-5 flex items-center gap-3">
        <div className={classNames("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold", darkMode ? "border-sky-300/40 bg-sky-300/10 text-sky-300" : "border-sky-700/25 bg-sky-50 text-sky-700")}>
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className={classNames("h-px flex-1", timelineLine)} />
        <p className={classNames("shrink-0 rounded-full border px-3 py-1 text-xs font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>{item.date}</p>
      </div>

      <div className="flex items-start justify-between gap-5">
        <div>
          <p className={classNames("text-[10px] font-bold uppercase tracking-[0.22em]", accent)}>{item.theme}</p>
          <h4 className="mt-2 text-2xl font-semibold tracking-tight">{item.company}</h4>
          <p className={classNames("mt-1 text-sm", mutedText)}>{item.role}</p>
          <p className={classNames("mt-1 text-sm", mutedText)}>{item.location}</p>
        </div>

        {item.image && (
          <div className={classNames("hidden h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border sm:flex", darkMode ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-slate-50")}>
            <img src={item.image} alt={`${item.company} visual`} className="h-full w-full object-contain p-2" />
          </div>
        )}
      </div>

      <div className="mt-5 space-y-3">
        {points.map((point) => (
          <p key={point} className={classNames(featured ? "text-sm leading-6" : "text-sm leading-6", mutedText)}>
            <HighlightMetrics text={point} darkMode={darkMode} />
          </p>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.skills.slice(0, skillLimit).map((skill) => (
          <span key={skill} className={classNames("rounded-full border px-2.5 py-1 text-[11px] font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ExperienceSections({ darkMode, industryExperience }) {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", darkMode ? "text-sky-300" : "text-sky-700")}>Practical Experience</p>
          <h3 className="text-2xl font-semibold tracking-tight">Industry, hardware, research, and systems work</h3>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {industryExperience.map((item, index) => (
          <PracticalExperienceCard key={`${item.company}-${item.date}`} item={item} index={index} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
}

export function CommunityImpactSection({ darkMode, campusExperience }) {
  const panelClass = darkMode ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white";
  const mutedText = darkMode ? "text-slate-400" : "text-slate-600";

  return (
    <section id="community" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", darkMode ? "text-sky-300" : "text-sky-700")}>Community Impact</p>
          <h3 className="text-2xl font-semibold tracking-tight">Mentorship, outreach, and campus operations</h3>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {campusExperience.map((item) => (
          <article key={`${item.company}-${item.date}`} className={classNames("rounded-3xl border p-5", panelClass)}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={classNames("text-[10px] font-bold uppercase tracking-[0.22em]", darkMode ? "text-sky-300" : "text-sky-700")}>{item.theme}</p>
                <h4 className="mt-2 text-lg font-semibold tracking-tight">{item.role}</h4>
                <p className={classNames("mt-1 text-sm", mutedText)}>{item.company}</p>
              </div>
              <p className={classNames("shrink-0 rounded-full border px-3 py-1 text-xs font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>{item.date}</p>
            </div>

            <p className={classNames("mt-4 text-sm leading-6", mutedText)}>{item.impact || item.points[0]}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.slice(0, 3).map((skill) => (
                <span key={skill} className={classNames("rounded-full border px-2.5 py-1 text-[11px] font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
