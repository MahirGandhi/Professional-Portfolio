import "./editorial.css";
import "./showcase.css";

export function StoryDetailPage({ item, sectionTitle, onBack }) {
  return <main className="min-h-screen theme-canvas theme-ink px-5 py-6 lg:px-8">
    <div className="project-reading story-reading">
      <nav className="project-reading-nav" aria-label={`${sectionTitle} navigation`}>
        <button type="button" onClick={onBack}>← Back to {sectionTitle.toLowerCase()}</button>
      </nav>
      <header className="story-reading-header">
        <p className="editorial-eyebrow">{item.eyebrow}</p>
        <h1 tabIndex={-1}>{item.fullTitle || item.title}</h1>
        <p className="project-reading-summary">{item.summary}</p>
        <p className="project-reading-tools">{Array.isArray(item.meta) ? item.meta.join(" · ") : item.meta}</p>
        {item.outcome && <p className="project-reading-metric">{item.outcome}</p>}
      </header>
      {!!item.sections?.length && <section className="project-reading-sections" aria-label="Background">{item.sections.map(section => <article key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></article>)}</section>}
      {item.image && <figure className="story-reading-evidence"><a href={item.image} target="_blank" rel="noreferrer" aria-label={`Open full-size ${item.imageAlt || item.title}`}><img src={item.image} alt={item.imageAlt || item.title} loading="eager" /></a><figcaption>{item.imageCaption || "View the original certificate"} <a href={item.image} target="_blank" rel="noreferrer">Open full size ↗</a></figcaption></figure>}
      {!!item.links?.length && <nav className="story-reading-links" aria-label="Related links">{item.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</nav>}
      <footer className="project-reading-footer"><button type="button" onClick={onBack}>← Back to {sectionTitle.toLowerCase()}</button></footer>
    </div>
  </main>;
}
