import "./recognition.css";

function metaText(value) {
  return Array.isArray(value) ? value.join(" · ") : value;
}

function RecognitionEntry({ item, onOpen }) {
  const slug = item.slug || item.id;
  const canOpen = Boolean(onOpen && item.sections?.length);
  const content = <>
    <div className="recognition-entry-copy">
      {item.eyebrow && <p className="recognition-entry-eyebrow">{item.eyebrow}</p>}
      <h4>{item.title}</h4>
      {item.meta && <p className="recognition-entry-meta">{metaText(item.meta)}</p>}
    </div>
    <div className="recognition-entry-side">
      {item.outcome && <span className="recognition-entry-outcome">{item.outcome}</span>}
      {canOpen && <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" /></svg>}
    </div>
  </>;

  if (!canOpen) return <article className="recognition-entry recognition-entry-static">{content}</article>;

  function open(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onOpen(slug);
  }

  return (
    <article className="recognition-entry" data-story-slug={slug}>
      <a className="recognition-entry-link" href={"#recognition/" + encodeURIComponent(slug)} onClick={open} aria-label={(item.actionLabel || "Explore") + " " + item.title}>
        {content}
      </a>
    </article>
  );
}

function RecognitionColumn({ label, items, onOpen }) {
  return (
    <div className="recognition-column">
      <div className="recognition-column-heading">
        <h3>{label}</h3>
        <span>{items.length.toString().padStart(2, "0")}</span>
      </div>
      <div className="recognition-list">
        {items.map(item => <RecognitionEntry key={item.id} item={item} onOpen={onOpen} />)}
      </div>
    </div>
  );
}

export function RecognitionSection({ awards = [], certifications = [], onOpen }) {
  return (
    <section id="recognition" className="recognition-section">
      <div className="recognition-heading">
        <span className="recognition-heading-rail" aria-hidden="true" />
        <div>
          <p className="recognition-kicker">Credentials & Recognition</p>
          <h2>Always building on what I know.</h2>
          <p>Awards, scholarships, competition wins, and technical certifications.</p>
        </div>
      </div>
      <div className="recognition-grid">
        <RecognitionColumn label="Awards" items={awards} onOpen={onOpen} />
        <RecognitionColumn label="Certifications" items={certifications} onOpen={onOpen} />
      </div>
    </section>
  );
}
