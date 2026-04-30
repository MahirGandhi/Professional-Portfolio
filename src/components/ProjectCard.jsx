import { FadeIn, Pill, classNames } from "./ui";

export function ProjectCard({ project, index, darkMode, onOpen }) {
  return (
    <FadeIn delay={index * 70} className={project.gallery ? "lg:col-span-2" : ""}>
      <article
        onClick={() => onOpen(project.slug)}
        className={classNames(
          "group h-full cursor-pointer overflow-hidden rounded-[1.75rem] border transition duration-300 hover:-translate-y-1",
          darkMode ? "border-slate-800 bg-slate-900/70 hover:border-sky-300/50" : "border-slate-200 bg-white hover:border-sky-500/40 hover:shadow-xl"
        )}
      >
        <div className="p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className={classNames("text-xs font-semibold uppercase tracking-[0.22em]", darkMode ? "text-sky-300" : "text-sky-700")}>{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
            </div>
            <div className={classNames("shrink-0 rounded-full px-3 py-1 text-xs font-bold", darkMode ? "bg-sky-300 text-slate-950" : "bg-sky-100 text-sky-900")}>{project.metric}</div>
          </div>
          <p className={classNames("mb-5 leading-7", darkMode ? "text-slate-400" : "text-slate-600")}>{project.summary}</p>
          <div className="mb-5 space-y-2">
            {project.details.map((detail) => (
              <div key={detail} className="flex gap-3 text-sm leading-6">
                <span className={classNames("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", darkMode ? "bg-sky-300" : "bg-sky-700")} />
                <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{detail}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => <Pill key={skill} darkMode={darkMode}>{skill}</Pill>)}
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
        </div>
      </article>
    </FadeIn>
  );
}
