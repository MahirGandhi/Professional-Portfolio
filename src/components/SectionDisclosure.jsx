import { useRef } from "react";
import "./section-overview.css";

export function SectionDisclosure({ id, title, description, expanded, onToggle, children }) {
  const toggle = useRef(null);
  function minimize() {
    onToggle();
    requestAnimationFrame(() => toggle.current?.focus());
  }
  return (
    <section id={id} className="section-disclosure" aria-labelledby={`${id}-section-title`}>
      <h2 id={`${id}-section-title`}>
        <button ref={toggle} type="button" className="section-disclosure-toggle" aria-expanded={expanded} aria-controls={`${id}-section-panel`} aria-label={`${expanded ? "Minimize" : "Expand"} ${title}`} onClick={onToggle}>
          <span className="section-disclosure-copy"><span className="section-disclosure-title">{title}</span><span className="section-disclosure-description">{description}</span></span>
          <span className="section-disclosure-action" aria-hidden="true">{expanded ? "Minimize" : "Explore"}<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14" />{!expanded && <path d="M12 5v14" />}</svg></span>
        </button>
      </h2>
      <div id={`${id}-section-panel`} className="section-disclosure-panel" hidden={!expanded}>
        {expanded && <>{children}<button type="button" className="section-disclosure-minimize" aria-label={`Minimize ${title} and return to section overview`} onClick={minimize}>Minimize {title}<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 14 6-6 6 6" /></svg></button></>}
      </div>
    </section>
  );
}
