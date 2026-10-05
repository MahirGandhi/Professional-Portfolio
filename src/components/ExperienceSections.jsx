import { useEffect, useRef, useState } from "react";
import { classNames } from "./ui";
import { experienceMedia } from "../data/experienceMedia";
import "./experience.css";

function ExperiencePhoto({ photo, darkMode = false }) {
  const dialog = useRef(null);
  const src = darkMode && photo.darkSrc ? photo.darkSrc : photo.src;
  return (
    <figure className="career-photo">
      <button type="button" style={{ aspectRatio: photo.aspectRatio }} className={classNames("career-photo-button", photo.rotate && "career-photo-button--rotated", photo.contain && "career-photo-button--contain", photo.darkSrc && "career-photo-button--brand")} onClick={() => dialog.current.showModal()} aria-label={`Enlarge photo: ${photo.alt}`}>
        <img src={src} alt={photo.alt} loading="lazy" style={{ objectPosition: photo.position }} />
        <span className="career-enlarge" aria-hidden="true">↗</span>
      </button>
      <figcaption>{photo.caption}{photo.source && <> · <a href={photo.source} target="_blank" rel="noreferrer">Source ↗</a></>}</figcaption>
      <dialog ref={dialog} className="career-lightbox" onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close(); }}>
        <form method="dialog"><button autoFocus aria-label="Close enlarged photo">Close ×</button></form>
        <div className={classNames("career-lightbox-image", photo.rotate && "career-lightbox-image--rotated")}>
          <img src={src} alt={photo.alt} />
        </div>
        <p>{photo.caption}</p>
      </dialog>
    </figure>
  );
}

function ExperienceImageBanner({ media, darkMode }) {
  const banner = media.banner;
  return (
    <div className="career-banner-group">
      <div className={classNames("career-banner", banner.contain && "career-banner--contain", banner.brand && "career-banner--brand")}>
        <img src={darkMode && banner.darkSrc ? banner.darkSrc : banner.src} alt={banner.alt} loading="lazy" />
        {!banner.brand && <div className="career-banner-shade" />}
        <p className="career-banner-name" aria-hidden="true">{media.bannerName || media.name}</p>
      </div>
      {banner.source && <a className="career-media-source" href={banner.source} target="_blank" rel="noreferrer">{banner.label} ↗</a>}
      {!banner.source && banner.label && <p className="career-media-source">{banner.label}</p>}
    </div>
  );
}

function ExperienceBanner({ media }) {
  const video = useRef(null);
  const [load, setLoad] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  // The user's pause choice survives scrolling back to an entry.
  const intent = useRef(null);
  const visible = useRef(false);
  const motion = useRef(null);

  useEffect(() => {
    const element = video.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    motion.current = preference;
    const sync = () => {
      if (visible.current && (intent.current ?? !preference.matches)) {
        setLoad(true);
        element.play().catch(() => setPlaying(false));
      } else element.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
      sync();
    }, { threshold: 0.1 });
    observer.observe(element);
    preference.addEventListener("change", sync);
    return () => { observer.disconnect(); preference.removeEventListener("change", sync); element.pause(); };
  }, []);

  // Start only after React has attached the lazily loaded source. Calling play
  // in the observer before that render leaves preload="none" on the poster.
  useEffect(() => {
    if (load && visible.current && (intent.current ?? !motion.current?.matches)) {
      video.current.play().catch(() => setPlaying(false));
    }
  }, [load]);

  const toggle = () => {
    intent.current = !playing;
    if (playing) video.current.pause();
    else { setLoad(true); video.current.play().catch(() => setPlaying(false)); }
  };

  return (
    <div className="career-banner-group">
      <div className="career-banner">
        <video ref={video} src={load ? media.video.src : undefined} poster={media.photo.src} muted loop playsInline preload="none" aria-label={`${media.name} public company footage`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} onLoadedData={() => { if (visible.current && (intent.current ?? !motion.current?.matches)) video.current.play().catch(() => setPlaying(false)); }} />
        <div className="career-banner-shade" />
        <p className="career-banner-name" aria-hidden="true">{media.name}</p>
        {!failed && <button type="button" onClick={toggle} className="career-video-control" aria-label={`${playing ? "Pause" : "Play"} ${media.name} video`}>{playing ? "Ⅱ Pause" : "▷ Play"}</button>}
      </div>
      <a className="career-media-source" href={media.video.source} target="_blank" rel="noreferrer">{failed ? "Photo shown · " : ""}{media.video.label} ↗</a>
    </div>
  );
}

export function ExperienceSections({ darkMode, industryExperience, sectionId = "experience" }) {
  return (
    <section id={sectionId} className="career-section mx-auto max-w-7xl px-5 py-16 lg:px-8" data-theme={darkMode ? "dark" : "light"}>
      <div className="career-section-heading">
        <p className="career-eyebrow">Practical experience</p>
        <h2>Engineering, in practice.</h2>
        <p>From production lines to research labs — the problems I worked on, the hardware I built, and the improvements I delivered.</p>
      </div>
      <div className="career-stories">
        {industryExperience.map((item) => {
          const media = experienceMedia[item.company] || { name: item.company };
          const pairedPhotos = Boolean(media.gallery?.length);
          return (
            <article id={media.id} className={classNames("career-entry", !media.photo && "career-entry--text")} key={item.company}>
              {media.video && <ExperienceBanner media={media} />}
              {media.banner && <ExperienceImageBanner media={media} darkMode={darkMode} />}
              <div className={classNames("career-story", pairedPhotos && "career-story--paired")}>
                {media.photo && <div className={classNames("career-photo-group", pairedPhotos && "career-photo-group--paired")}>
                  <ExperiencePhoto photo={media.photo} darkMode={darkMode} />
                  {media.gallery?.map((photo) => <ExperiencePhoto key={photo.src} photo={photo} darkMode={darkMode} />)}
                </div>}
                <div className="career-narrative">
                  <div className="career-heading">
                  <div className="career-company">
                    { !media.hideLogo && (media.logo || item.image) && <a href={item.image || media.logo} target="_blank" rel="noreferrer" aria-label={`View original ${media.name} logo`}><img className={media.logoDark ? "career-logo--theme" : undefined} src={darkMode && media.logoDark ? media.logoDark : (media.logo || item.image)} alt={`${media.name} logo`} loading="lazy" /></a> }
                    <h3>{media.name}</h3>
                  </div>
                  <p className="career-role">{item.role.split(" - ")[0]}</p>
                  <p className="career-program">{media.program}</p>
                  {pairedPhotos && <ExperienceMeta media={media} item={item} />}
                  </div>
                  <div className="career-copy">
                  <div className="career-description">{(media.paragraphs || item.points).map((text) => <p key={text}>{text}</p>)}</div>
                  <Methods skills={item.skills} />
                  {!pairedPhotos && <ExperienceMeta media={media} item={item} />}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ExperienceMeta({ media, item }) {
  return <div className="career-meta">
    {media.website && <a href={media.website} target="_blank" rel="noreferrer">{media.websiteLabel || new URL(media.website).hostname.replace(/^www\./, "")} ↗</a>}
    {media.links?.map((link) => <a className="career-related-link" key={link.href} href={link.href} {...(link.href.startsWith("https:") ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label} ↗</a>)}
    <p>{item.location}</p><p>{item.date}</p>
  </div>;
}

function Methods({ skills }) {
  if (!skills?.length) return null;
  return (
    <details className="methods-details">
      <summary>Methods and tools</summary>
      <ul className="methods-list">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
    </details>
  );
}

function Contributions({ points }) {
  return <ul className="contribution-list">{points.map((point) => <li key={point}>{point}</li>)}</ul>;
}


export function CommunityImpactSection({ campusExperience, sectionId = "community" }) {
  return (
    <section id={sectionId} className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="editorial-heading"><p className="editorial-eyebrow">Community impact</p><h2>Showing up for the community.</h2><p>Mentorship, outreach, and campus operations.</p></div>
      <div className="editorial-list">{campusExperience.map(item => (
        <article key={`${item.company}-${item.date}`} className="editorial-role">
          <div className="editorial-role-meta"><p>{item.theme}</p><p>{item.date}</p></div>
          <div><h3>{item.role}</h3><p className="editorial-role-company">{item.company}</p><p className="editorial-role-description">{item.impact || item.points[0]}</p>
            <details><summary>Full contribution</summary><Contributions points={item.points} /><Methods skills={item.skills} /></details>
            <p className="editorial-tools">{item.skills.join(" · ")}</p>
          </div>
        </article>
      ))}</div>
    </section>
  );
}
