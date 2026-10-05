import { projectPreviews } from "../data/projectPreviews";

export function ProjectCard({ project, position, active, onPreview, onOpen }) {
  const preview = projectPreviews[project.slug] || {};
  function open(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onOpen(project.slug);
  }
  return (
    <article data-project-slug={project.slug} className={`project-map-entry project-map-entry--${position}${active ? " is-active" : ""}`}>
      <a className="project-map-link" href={`#project/${project.slug}`} onClick={open} onMouseEnter={() => onPreview(project.slug)} onFocus={() => onPreview(project.slug)} aria-label={`View ${project.title} project`}>
        <span className="project-map-label">{preview.label || project.category}</span>
        <h3>{preview.title || project.title}</h3>
        <p className="project-map-mobile-summary">{preview.summary || project.summary}</p>
        <p className="project-map-mobile-outcome">{preview.outcome || project.metric}</p>
        <span className="project-map-invitation">{preview.invitation || "Explore the project"}<svg className="project-map-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></span>
        <span className="project-map-terminal" aria-hidden="true" />
      </a>
    </article>
  );
}
