import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectPreviews } from "../data/projectPreviews";
import "./editorial.css";

const paths = ["M330 175H305L250 95H240", "M670 175H695L750 95H760", "M330 285H290L245 315H240", "M670 285H710L755 315H760", "M500 350V395"];

export function WorkSection({ projects, onOpenProject, sectionId = "work" }) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const active = projects.find(project => project.slug === activeSlug) || projects[0];
  const preview = projectPreviews[active?.slug] || {};
  if (!active) return null;
  function open(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onOpenProject(active.slug);
  }
  return (
    <section id={sectionId} className="work-section mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="editorial-heading project-map-heading">{sectionId != null && <p className="project-section-label">Selected work</p>}<h2>On my workbench.</h2><p>Explore the decisions behind the parts, tools, and mechanisms I’ve designed.</p></div>
      <div className="project-map">
        <svg className="project-connections" viewBox="0 0 1000 480" preserveAspectRatio="none" fill="none" aria-hidden="true">
          {projects.map((project, index) => <g key={project.slug} className={active.slug === project.slug ? "is-active" : ""}><path d={paths[index]} vectorEffect="non-scaling-stroke" /><path className="connection-trace" d={paths[index]} vectorEffect="non-scaling-stroke" pathLength="1" /></g>)}
        </svg>
        <nav className="project-map-links" aria-label="Selected projects">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} position={index} active={active.slug === project.slug} onPreview={setActiveSlug} onOpen={onOpenProject} />)}
        </nav>
        <div className="project-map-preview" aria-label="Project preview">
          <p className="project-preview-label">{preview.label || active.category}</p>
          <div className="project-preview-content" key={active.slug}>
            <h3>{preview.title || active.title}</h3>
            <p className="project-preview-summary">{preview.summary || active.summary}</p>
            <p className="project-preview-outcome">{preview.outcome || active.metric}</p>
            <a href={`#project/${active.slug}`} onClick={open} className="project-preview-open" aria-label={`Open ${active.title} case study`}>Open project <svg className="project-map-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}
