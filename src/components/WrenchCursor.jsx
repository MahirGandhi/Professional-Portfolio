import { useEffect, useState } from "react";

export function WrenchCursor() {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [light, setLight] = useState(false);

  useEffect(() => {
    const selector = [
      ".spotlight-card",
      "article",
      "section [class*='rounded'][class*='border']",
    ].join(", ");

    const move = (event) => {
      const block = event.target.closest(selector);

      setActive(Boolean(block));
      setPosition({ x: event.clientX, y: event.clientY });
      setLight(!document.querySelector("main")?.className.includes("080B10"));

      document.querySelectorAll(selector).forEach((item) => {
        item.style.cursor = block ? "none" : "";
      });
    };

    const leave = () => setActive(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);

      document.querySelectorAll(selector).forEach((item) => {
        item.style.cursor = "";
      });
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: 9999,
        width: 24,
        height: 24,
        pointerEvents: "none",
        opacity: active ? 1 : 0,
        transform: active
          ? "translate(-50%, -50%) rotate(18deg) scale(1)"
          : "translate(-50%, -50%) rotate(0deg) scale(0.9)",
        transition: "opacity 150ms ease, transform 180ms ease",
        color: light ? "#0369a1" : "#38bdf8",
        filter: light
          ? "drop-shadow(0 0 8px rgba(14,165,233,0.12))"
          : "drop-shadow(0 0 10px rgba(56,189,248,0.18))",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8.9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.32.25.66.33 1H21a2 2 0 1 1 0 4h-1.27c-.08.34-.19.68-.33 1z" />
      </svg>
    </div>
  );
}
