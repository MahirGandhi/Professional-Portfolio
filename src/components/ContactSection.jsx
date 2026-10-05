import { useState } from "react";
import "./personal-contact.css";

export function ContactSection({ profile, sectionId = "contact" }) {
  const [copyMessage, setCopyMessage] = useState("");
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopyMessage("Email copied."); }
    catch { setCopyMessage(`Copy unavailable. Email: ${profile.email}`); }
  }
  return (
    <section id={sectionId} className="mx-auto max-w-7xl px-5 pb-14 pt-6 lg:px-8">
      <div className="contact-compact">
        <div className="contact-copy">
          <p className="personal-eyebrow">Contact</p>
          <h2>Let’s connect.</h2>
          <p className="contact-availability">{profile.availability}</p>
          <div className="contact-email-row">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button type="button" onClick={copyEmail} aria-label="Copy email address" title="Copy email address">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg>
            </button>
            <span className="contact-copy-status" role="status">{copyMessage}</span>
          </div>
        </div>
        <div className="contact-actions">
          <a className="contact-email-action" href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>Email me <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></a>
          <div className="contact-secondary">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Résumé <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}
