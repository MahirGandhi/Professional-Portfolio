import { useEffect, useRef, useState } from "react";
import { classNames } from "./ui";
import { experienceMedia } from "../data/experienceMedia";
import "./experience.css";

function ExperiencePhoto({ photo, compact = false }) {
  const dialog = useRef(null);
  return (
    <figure className={classNames("experience-photo", compact && "experience-photo--wide")}>
      <button type="button" className={classNames("experience-photo-button", photo.rotate && "experience-photo-button--rotated")} onClick={() => dialog.current.showModal()} aria-label={`Enlarge photo: ${photo.alt}`}>
        <img src={photo.src} alt={photo.alt} loading="lazy" style={{ objectPosition: photo.position }} />
        <span className="experience-enlarge" aria-hidden="true">↗</span>
      </button>
      <figcaption>{photo.caption}</figcaption>
      <dialog ref={dialog} className="experience-lightbox" onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close(); }}>
        <form method="dialog"><button autoFocus aria-label="Close enlarged photo">Close ×</button></form>
        <div className={classNames("experience-lightbox-image", photo.rotate && "experience-lightbox-image--rotated")}>
          <img src={photo.src} alt={photo.alt} />
        </div>
        <p>{photo.caption}</p>
      </dialog>
    </figure>
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
    <div className="experience-banner-group">
      <div className="experience-banner">
        <video ref={video} src={load ? media.video.src : undefined} poster={media.photo.src} muted loop playsInline preload="none" aria-label={`${media.name} public company footage`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} onLoadedData={() => { if (visible.current && (intent.current ?? !motion.current?.matches)) video.current.play().catch(() => setPlaying(false)); }} />
        <div className="experience-banner-shade" />
        <p className="experience-banner-name" aria-hidden="true">{media.name}</p>
        {!failed && <button type="button" onClick={toggle} className="experience-video-control" aria-label={`${playing ? "Pause" : "Play"} ${media.name} video`}>{playing ? "Ⅱ Pause" : "▷ Play"}</button>}
      </div>
      <a className="experience-media-source" href={media.video.source} target="_blank" rel="noreferrer">{failed ? "Photo shown · " : ""}{media.video.label} ↗</a>
    </div>
  );
}

export function ExperienceSections({ darkMode, industryExperience }) {
  return (
    <section id="experience" className="experience-section mx-auto max-w-7xl px-5 py-16 lg:px-8" data-theme={darkMode ? "dark" : "light"}>
      <div className="experience-section-heading">
        <p className="experience-eyebrow">Practical experience</p>
        <h2>Engineering, in practice.</h2>
        <p>From production lines to research labs — the problems I worked on, the hardware I built, and the improvements I delivered.</p>
      </div>
      <div className="experience-stories">
        {industryExperience.map((item) => {
          const media = experienceMedia[item.company] || { name: item.company };
          return (
            <article className={classNames("experience-entry", !media.photo && "experience-entry--text")} key={item.company}>
              {media.video && <ExperienceBanner media={media} />}
              <div className="experience-story">
                {media.photo && <ExperiencePhoto photo={media.photo} />}
                <div className="experience-narrative">
                  <div className="experience-company">
                    { (media.logo || item.image) && <a href={item.image} target="_blank" rel="noreferrer" aria-label={`View original ${media.name} logo`}><img src={media.logo || item.image} alt={`${media.name} logo`} loading="lazy" /></a> }
                    <h3>{media.name}</h3>
                  </div>
                  <p className="experience-role">{item.role.split(" - ")[0]}</p>
                  <p className="experience-program">{media.program}</p>
                  <div className="experience-description">{(media.paragraphs || item.points).map((text) => <p key={text}>{text}</p>)}</div>
                  <div className="experience-meta">
                    {media.website && <a href={media.website} target="_blank" rel="noreferrer">{new URL(media.website).hostname.replace(/^www\./, "")} ↗</a>}
                    <p>{item.location}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
              </div>
              {media.gallery && <div className="experience-gallery">{media.gallery.map((photo) => <ExperiencePhoto key={photo.src} photo={photo} compact />)}</div>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function CommunityImpactSection({ darkMode, campusExperience }) {
  const panelClass = darkMode ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white";
  const mutedText = darkMode ? "text-slate-400" : "text-slate-600";

  return (
    <section id="community" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", darkMode ? "text-sky-300" : "text-sky-700")}>Community Impact</p>
          <h3 className="text-2xl font-semibold tracking-tight">Mentorship, outreach, and campus operations</h3>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {campusExperience.map((item) => (
          <article key={`${item.company}-${item.date}`} className={classNames("rounded-3xl border p-5", panelClass)}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={classNames("text-[10px] font-bold uppercase tracking-[0.22em]", darkMode ? "text-sky-300" : "text-sky-700")}>{item.theme}</p>
                <h4 className="mt-2 text-lg font-semibold tracking-tight">{item.role}</h4>
                <p className={classNames("mt-1 text-sm", mutedText)}>{item.company}</p>
              </div>
              <p className={classNames("shrink-0 rounded-full border px-3 py-1 text-xs font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>{item.date}</p>
            </div>

            <p className={classNames("mt-4 text-sm leading-6", mutedText)}>{item.impact || item.points[0]}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.slice(0, 3).map((skill) => (
                <span key={skill} className={classNames("rounded-full border px-2.5 py-1 text-[11px] font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
