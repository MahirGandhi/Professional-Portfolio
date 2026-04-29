import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./ui";

export function WorkSection({ darkMode, projects, onOpenProject }) {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeader darkMode={darkMode} eyebrow="Selected Work" title="Projects with engineering depth" />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} darkMode={darkMode} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  );
}
