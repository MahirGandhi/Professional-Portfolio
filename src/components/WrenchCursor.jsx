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
        width: 24,
        height: 24,
        pointerEvents: "none",
        opacity: active ? 1 : 0,
        transform: "translate(-50%, -50%) rotate(-25deg)",
        transition: "opacity 150ms ease",
        color: light ? "#0369a1" : "#38bdf8",
        filter: light
          ? "drop-shadow(0 0 8px rgba(14,165,233,0.12))"
          : "drop-shadow(0 0 10px rgba(56,189,248,0.18))",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <path d="M7 24.5 20.5 11" />
        <path d="M5.5 26a2.1 2.1 0 0 0 3 0l2.2-2.2-3-3L5.5 23a2.1 2.1 0 0 0 0 3z" />
        <path d="M17.5 7.5 24.5 14.5" />
        <path d="M20.5 4.5 27.5 11.5" />
        <path d="M17.5 7.5 20.5 4.5" />
        <path d="M24.5 14.5 27.5 11.5" />
      </svg>
    </div>
  );
}
