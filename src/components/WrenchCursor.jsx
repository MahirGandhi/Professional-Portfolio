import { useEffect, useState } from "react";

export function WrenchCursor() {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [light, setLight] = useState(false);

  useEffect(() => {
    const selector = "#experience article, #work article";

    const move = (event) => {
      const card = event.target.closest(selector);
      setActive(Boolean(card));
      setPosition({ x: event.clientX, y: event.clientY });
      setLight(!document.querySelector("main")?.className.includes("080B10"));

      document.querySelectorAll(selector).forEach((item) => {
        item.style.cursor = card ? "none" : "pointer";
      });
    };

    const leave = () => setActive(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.querySelectorAll(selector).forEach((item) => {
        item.style.cursor = "pointer";
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
        width: 22,
        height: 22,
        pointerEvents: "none",
        opacity: active ? 1 : 0,
        transform: "translate(-50%, -50%) rotate(-18deg)",
        transition: "opacity 150ms ease",
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
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z" />
</svg>
    </div>
  );
}
