import { ProjectCard } from "./ProjectCard";
import { classNames } from "./ui";

export function WorkSection({ darkMode, projects, onOpenProject }) {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", darkMode ? "text-sky-300" : "text-sky-700")}>Selected Work</p>
          <h3 className="text-2xl font-semibold tracking-tight">Projects with engineering depth</h3>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} darkMode={darkMode} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  );
}
