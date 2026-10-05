import { useEffect, useRef, useState } from "react";
import "./personal-contact.css";

const songUrl = "https://open.spotify.com/track/6IRzBP4gVoV4D2zHmocoWy";
const artwork = "https://drive.google.com/thumbnail?id=1ZZWOvyt8qPyRBGAyTEVdx_aNylvIwC37&sz=w600";
let spotifyApi;

function loadSpotifyApi() {
  if (!spotifyApi) {
    spotifyApi = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://open.spotify.com/embed/iframe-api/v1";
      script.async = true;
      const timeout = setTimeout(() => reject(new Error("Player unavailable")), 15000);
      window.onSpotifyIframeApiReady = (api) => { clearTimeout(timeout); resolve(api); };
      script.onerror = () => { clearTimeout(timeout); reject(new Error("Player unavailable")); };
      document.head.appendChild(script);
    }).catch((error) => { spotifyApi = null; throw error; });
  }
  return spotifyApi;
}

function RecordPlayer() {
  const host = useRef(null);
  const controller = useRef(null);
  const [opened, setOpened] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!opened) return;
    let cancelled = false;
    let embed;
    const readyTimeout = setTimeout(() => { if (!cancelled) setFailed(true); }, 20000);
    const target = document.createElement("div");
    host.current.appendChild(target);
    loadSpotifyApi().then((api) => {
      if (cancelled) return;
      api.createController(target, { uri: "spotify:track:6IRzBP4gVoV4D2zHmocoWy", width: "100%", height: 80 }, (player) => {
        if (cancelled) { player.destroy(); return; }
        embed = player;
        controller.current = player;
        player.addListener("ready", () => {
          if (cancelled) return;
          clearTimeout(readyTimeout);
          setReady(true);
          player.play();
        });
        player.addListener("playback_update", ({ data }) => {
          if (!cancelled) setPlaying(!data.isPaused && !data.isBuffering);
        });
      });
    }).catch(() => { if (!cancelled) setFailed(true); });
    const pauseWhenHidden = () => { if (document.hidden) controller.current?.pause(); };
    document.addEventListener("visibilitychange", pauseWhenHidden);
    return () => {
      cancelled = true;
      clearTimeout(readyTimeout);
      document.removeEventListener("visibilitychange", pauseWhenHidden);
      embed?.destroy();
      controller.current = null;
      target.remove();
    };
  }, [opened]);

  function toggle() {
    if (!opened) { setOpened(true); return; }
    if (ready) {
      if (playing) controller.current?.pause();
      else controller.current?.resume();
    }
  }

  return (
    <article className="personal-pick record-pick">
      <p className="personal-pick-label">On repeat</p>
      <div className={`record-deck${playing ? " is-playing" : ""}`}>
        <button className="record-button" type="button" onClick={toggle} aria-label={`${playing ? "Pause" : "Play"} Eternal Summer by The Strokes`} aria-pressed={playing} disabled={failed || (opened && !ready)}>
          <span className="record-disc" aria-hidden="true">
            <img className="record-label" src={artwork} alt="" loading="lazy" />
            <span className="record-spindle" />
          </span>
          <span className="record-play-glyph" aria-hidden="true"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">{playing ? <><rect x="5" y="4" width="5" height="16" rx="1" /><rect x="14" y="4" width="5" height="16" rx="1" /></> : <path d="M7 4v16l14-8z" />}</svg></span>
        </button>
        <span className="record-tonearm" aria-hidden="true" />
        <div className="record-wave" aria-hidden="true">{Array.from({ length: 17 }, (_, i) => <span key={i} style={{ "--bar": `${6 + ((i * 7) % 21)}px`, "--delay": `${i * -0.13}s` }} />)}</div>
      </div>
      <div className="personal-pick-caption">
        <div><h3>Eternal Summer</h3><p>The Strokes</p></div>
        <a href={songUrl} target="_blank" rel="noreferrer" aria-label="Listen to Eternal Summer on Spotify">Spotify <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></a>
      </div>
      {opened && <div className="record-stream">
        <div ref={host} className="record-embed" />
        <p className="record-status" role="status">{failed ? "Player unavailable. Listen on Spotify above." : !ready ? "Loading Spotify…" : playing ? "Playing on Spotify" : "Spotify player · Paused"}</p>
      </div>}
    </article>
  );
}

export function PersonalSection({ sectionId = "personal" }) {
  return (
    <section id={sectionId} className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="personal-layout">
        <div className="personal-intro">
          <p className="personal-eyebrow">Personal</p>
          <h2>More about me</h2>
          <p>I grew up in Mumbai, India, around people who were always building, fixing, selling, improving, or trying to make something work better. That mindset stayed with me, and my subsequent experiences in engineering, manufacturing, quality, and research have only reinforced it. Mechanical engineering and entrepreneurship both pull me in for the same reason: they sit at the point where creativity has to survive real-world constraints!</p>
        </div>
        <div className="personal-picks">
          <article className="personal-pick show-pick">
            <p className="personal-pick-label">Currently watching</p>
            <div className="show-artwork"><img src="https://drive.google.com/thumbnail?id=1TJvvDnRSE23-pH1YzsOJNNmg9pz7e9DB&sz=w600" alt="Beef, Season 2 artwork" loading="lazy" /></div>
            <div className="personal-pick-caption"><div><h3>Beef, Season 2</h3><p>TV series</p></div></div>
          </article>
          <RecordPlayer />
        </div>
      </div>
    </section>
  );
}
