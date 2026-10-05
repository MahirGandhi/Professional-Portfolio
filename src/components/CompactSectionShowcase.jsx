import { useState } from "react";
import "./showcase.css";

export function CompactSectionShowcase({ title, intro, items = [], detailPrefix, onOpen }) {
  const prefix = String(detailPrefix || "").replace(/^#/, "").replace(/\/+$/, "");
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug);
  const active = items.find(item => item.slug === activeSlug) || items[0];
  const meta = value => Array.isArray(value) ? value.join(" · ") : value;
  function openItem(event, slug) {
    if (!onOpen || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onOpen(slug);
  }
  return (
    <section className="compact-showcase">
      <div className="showcase-heading">
        <span className="showcase-heading-rail" aria-hidden="true" />
        <div><h2>{title}</h2>{intro && <p>{intro}</p>}</div>
      </div>
      <div className="showcase-spread">
      {active && <div className="showcase-preview" aria-label="Selected entry preview">
        {active.eyebrow && <p className="showcase-preview-eyebrow">{active.eyebrow}</p>}
        <h3>{active.title}</h3>
        {active.summary && <p className="showcase-preview-summary">{active.summary}</p>}
        {(active.outcome || active.meta) && <p className="showcase-preview-outcome">{active.outcome || meta(active.meta)}</p>}
        <a className="showcase-preview-action" href={`#${prefix}/${encodeURIComponent(active.slug)}`} aria-label={`${active.actionLabel || "Read more about"} ${active.title}`} onClick={event => openItem(event, active.slug)}>{active.actionLabel || "Read the story"}<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" /></svg></a>
      </div>}
      <nav className="showcase-shelf" aria-label={`${title} details`}>
        {items.map(item => (
          <article className={`showcase-entry${active?.slug === item.slug ? " is-selected" : ""}`} data-story-slug={item.slug} key={item.slug}>
            <a className="showcase-entry-link" href={`#${prefix}/${encodeURIComponent(item.slug)}`} aria-label={`${item.actionLabel || "Read more about"} ${item.title}`} onClick={event => openItem(event, item.slug)} onMouseEnter={() => setActiveSlug(item.slug)} onFocus={() => setActiveSlug(item.slug)}>
              {item.eyebrow && <p className="showcase-eyebrow">{item.eyebrow}</p>}
              <h3>{item.title}</h3>
              {item.summary && <p className="showcase-summary">{item.summary}</p>}
              {item.meta && <p className="showcase-meta">{meta(item.meta)}</p>}
              {item.outcome && <p className="showcase-mobile-outcome">{item.outcome}</p>}
              <span className="showcase-entry-action"><span>{item.actionLabel || "Read the story"}</span><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" /></svg></span>
            </a>
          </article>
        ))}
      </nav>
      </div>
    </section>
  );
}
