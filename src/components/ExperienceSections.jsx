import { ExperienceTimeline } from "./ExperienceTimeline";
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

function SupportingExperienceCard({ item, darkMode }) {
  const panelClass = darkMode ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white";
  const mutedText = darkMode ? "text-slate-400" : "text-slate-600";
  const accent = darkMode ? "text-sky-300" : "text-sky-700";

  return (
    <article className={classNames("rounded-[1.75rem] border p-5 transition duration-300 hover:-translate-y-0.5", panelClass)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className={classNames("text-[10px] font-bold uppercase tracking-[0.22em]", accent)}>{item.theme}</p>
          <h4 className="mt-2 text-xl font-semibold tracking-tight">{item.role}</h4>
          <p className={classNames("mt-1 text-sm", mutedText)}>{item.company}</p>
        </div>
        <p className={classNames("w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>{item.date}</p>
      </div>

      <div className="mt-4 space-y-2">
        {item.points.slice(0, 2).map((point) => (
          <p key={point} className={classNames("text-sm leading-6", mutedText)}>
            <HighlightMetrics text={point} darkMode={darkMode} />
          </p>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.skills.slice(0, 3).map((skill) => (
          <span key={skill} className={classNames("rounded-full border px-2.5 py-1 text-[11px] font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ExperienceSections({ darkMode, industryExperience }) {
  const featuredExperience = industryExperience.slice(0, 4);
  const supportingExperience = industryExperience.slice(4);

  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", darkMode ? "text-sky-300" : "text-sky-700")}>Engineering Track</p>
          <h3 className="text-2xl font-semibold tracking-tight">Engineering experience</h3>
        </div>
      </div>

      <ExperienceTimeline darkMode={darkMode} items={featuredExperience} />

      {supportingExperience.length > 0 && (
        <div className="mt-12">
          <div className="mb-5 max-w-3xl">
            <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", darkMode ? "text-sky-300" : "text-sky-700")}>Research + Technical Experience</p>
            <h3 className="text-xl font-semibold tracking-tight">Additional research and systems work</h3>
            <p className={classNames("mt-2 text-sm leading-6", darkMode ? "text-slate-400" : "text-slate-600")}>Condensed supporting experience keeps the main industry and hardware ownership roles visually dominant.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {supportingExperience.map((item) => (
              <SupportingExperienceCard key={`${item.company}-${item.date}`} item={item} darkMode={darkMode} />
            ))}
          </div>
        </div>
      )}
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
