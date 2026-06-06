import { FadeIn, Pill, classNames } from "./ui";

export function ProjectCard({ project, index, darkMode, onOpen }) {
  const timelineLine = darkMode ? "bg-slate-800" : "bg-slate-200";

  return (
    <FadeIn delay={index * 70} className={project.gallery ? "lg:col-span-2" : ""}>
      <article
        onClick={() => onOpen(project.slug)}
        className={classNames(
          "group h-full cursor-pointer overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1",
          darkMode ? "border-slate-800 bg-slate-900/70 hover:border-sky-300/50" : "border-slate-200 bg-white hover:border-sky-500/40 hover:shadow-xl"
        )}
      >
        <div className="mb-5 flex items-center gap-3">
          <div className={classNames("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold", darkMode ? "border-sky-300/40 bg-sky-300/10 text-sky-300" : "border-sky-700/25 bg-sky-50 text-sky-700")}>
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className={classNames("h-px flex-1", timelineLine)} />
          <div className={classNames("shrink-0 rounded-full px-3 py-1 text-xs font-bold", darkMode ? "bg-sky-300 text-slate-950" : "bg-sky-100 text-sky-900")}>{project.metric}</div>
        </div>

        <div>
          <p className={classNames("text-xs font-semibold uppercase tracking-[0.22em]", darkMode ? "text-sky-300" : "text-sky-700")}>{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
        </div>

        <p className={classNames("mt-5 leading-7", darkMode ? "text-slate-400" : "text-slate-600")}>{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.skills.slice(0, 6).map((skill) => <Pill key={skill} darkMode={darkMode}>{skill}</Pill>)}
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onOpen(project.slug);
          }}
          className={classNames("mt-6 rounded-full px-4 py-2 text-sm font-bold transition", darkMode ? "bg-sky-300 text-slate-950 hover:bg-sky-200" : "bg-slate-950 text-white hover:bg-slate-800")}
        >
          View project details
        </button>
      </article>
    </FadeIn>
  );
}
