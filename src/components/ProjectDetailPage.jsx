import { useEffect, useRef, useState } from "react";
import { SmartImage } from "./ui";
import "./editorial.css";

export function ProjectDetailPage({ project, profile, onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeButtonRef = useRef(null);
  const imageTrigger = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => { titleRef.current?.focus({ preventScroll: true }); }, [project.slug]);
  function openImage(item, event) { imageTrigger.current = event.currentTarget; setSelectedImage(item); }
  function closeImage() {
    setSelectedImage(null);
    requestAnimationFrame(() => imageTrigger.current?.focus({ preventScroll: true }));
  }
  useEffect(() => {
    if (!selectedImage) return;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus());
    const closeOnEscape = event => {
      if (event.key === "Escape") closeImage();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedImage]);
  const images = !project.hideImage && project.image ? (Array.isArray(project.image) ? project.image : [project.image]) : [];
  return (
    <main className="min-h-screen theme-canvas theme-ink px-5 py-6 lg:px-8">
      <div className="project-reading">
        <nav className="project-reading-nav" aria-label="Project navigation">
          <button type="button" onClick={onBack}>← Back to projects</button>
          <div><a href={profile.resumeUrl} target="_blank" rel="noreferrer">View résumé</a></div>
        </nav>
        <section className={`project-reading-hero${!images.length ? " project-reading-hero--text" : ""}`}>
          {!!images.length && <figure className={images.length > 1 ? "project-reading-figure--multiple" : undefined}>{images.map((src, index) => <SmartImage key={src} src={src} alt={`${project.title} project visual${images.length > 1 ? ` ${index + 1}` : ""}`} className="project-reading-visual" loading="eager" contain />)}</figure>}
          <div><p className="editorial-eyebrow">{project.category}</p><h1 ref={titleRef} tabIndex={-1}>{project.title}</h1><p className="project-reading-summary">{project.summary}</p><p className="project-reading-metric">{project.metric}</p><p className="project-reading-tools">{project.skills.join(" · ")}</p></div>
        </section>
        {project.sections && <section className="project-reading-sections" aria-label="Project story">{project.sections.map(section => <article key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></article>)}</section>}
        {!!project.details?.length && <section className="project-reading-section"><h2>My contribution</h2><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></section>}
        {project.components && <section className="project-reading-section"><h2>Project breakdown</h2><ul>{project.components.map(component => <li key={component}>{component}</li>)}</ul></section>}
        {project.gallery && <section className="project-reading-gallery"><h2>Full CAD gallery</h2><div>{project.gallery.map(item => <figure key={item.title}>
          <button type="button" className="project-gallery-image" aria-label={`Enlarge ${item.title}`} onClick={event => openImage(item, event)}><SmartImage src={item.image} alt={item.title} contain /><span aria-hidden="true">Enlarge</span></button>
          <figcaption><h3>{item.title}</h3>{item.caption && <p>{item.caption}</p>}</figcaption>
        </figure>)}</div></section>}
        {project.confidentialityNote && <p className="project-confidentiality">{project.confidentialityNote}</p>}
        <footer className="project-reading-footer"><button type="button" onClick={onBack}>← Back to projects</button><a href={profile.resumeUrl} target="_blank" rel="noreferrer">View résumé</a></footer>
      </div>
      {selectedImage && <div className="gallery-lightbox" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) closeImage(); }}>
        <section className="gallery-dialog" role="dialog" aria-modal="true" aria-labelledby="gallery-dialog-title" aria-describedby={selectedImage.caption ? "gallery-dialog-description" : undefined} onMouseDown={event => event.stopPropagation()}>
          <button ref={closeButtonRef} type="button" className="gallery-dialog-close" onClick={closeImage} aria-label="Close image">Close ×</button>
          <SmartImage src={selectedImage.image} alt={selectedImage.title} loading="eager" className="gallery-dialog-image" contain />
          <div className="gallery-dialog-caption"><h2 id="gallery-dialog-title">{selectedImage.title}</h2>{selectedImage.caption && <p id="gallery-dialog-description">{selectedImage.caption}</p>}<a href={selectedImage.image} target="_blank" rel="noreferrer">Open original image</a></div>
        </section>
      </div>}
    </main>
  );
}
