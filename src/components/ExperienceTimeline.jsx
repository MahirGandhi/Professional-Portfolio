import { FadeIn, ImageFrame, Pill, classNames } from "./ui";

export function ExperienceTimeline({ darkMode, items }) {
  return (
    <div className="relative">
      <div className={classNames("absolute left-4 top-0 h-full w-px", darkMode ? "bg-slate-800" : "bg-slate-200")} />

      <div className="space-y-5">
        {items.map((item, index) => {
          const imageSrc = item.image || "";

          return (
            <FadeIn key={`${item.company}-${item.date}`} delay={index * 70}>
              <article className="relative pl-12">
                <div className={classNames("absolute left-[9px] top-7 h-3 w-3 rounded-full border-2", darkMode ? "border-slate-950 bg-sky-300" : "border-white bg-sky-600")} />

                <div className={classNames("grid gap-6 rounded-3xl border p-6 lg:grid-cols-[0.72fr_1.28fr]", darkMode ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white")}>
                  <ImageFrame
                    src={imageSrc}
                    alt={`${item.company} visual`}
                    label={`${item.company} image`}
                    darkMode={darkMode}
                    className="aspect-[4/3]"
                    contain
                  />

                  <div>
                    <div className="mb-4 flex flex-col justify-between gap-3 lg:flex-row lg:items-start">
                      <div>
                        <p className={classNames("text-xs font-semibold uppercase tracking-[0.22em]", darkMode ? "text-sky-300" : "text-sky-700")}>
                          {item.theme}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                          {item.company}
                        </h3>

                        <p className={classNames("mt-1", darkMode ? "text-slate-300" : "text-slate-700")}>
                          {item.role}
                        </p>
                      </div>

                      <div className={classNames("rounded-2xl border px-4 py-3 text-sm", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>
                        <p className="font-semibold">{item.date}</p>
                        <p>{item.location}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {item.points.map((point) => (
                        <p key={point} className={classNames("leading-7", darkMode ? "text-slate-400" : "text-slate-600")}>
                          {point}
                        </p>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Pill key={skill} darkMode={darkMode}>
                          {skill}
                        </Pill>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
