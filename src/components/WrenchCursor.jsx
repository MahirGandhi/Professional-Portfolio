import { useEffect, useState } from "react";

export function WrenchCursor() {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const selector = "#experience article, #work article";
    const move = (event) => {
      const card = event.target.closest(selector);
      setActive(Boolean(card));
      setPosition({ x: event.clientX, y: event.clientY });
    };
    const leave = () => setActive(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className={active ? "wrench-cursor wrench-cursor-active" : "wrench-cursor"} style={{ left: position.x, top: position.y }} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4.2 4.2 0 0 0 5 5L11.2 19.8a2.4 2.4 0 0 1-3.4-3.4l8.5-8.5a4.2 4.2 0 0 0-5-5" />
      </svg>
    </div>
  );
}
