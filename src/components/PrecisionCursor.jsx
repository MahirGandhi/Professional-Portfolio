import { useEffect, useRef } from "react";

export function PrecisionCursor() {
  const cursor = useRef(null);
  const halo = useRef(null);
  const releaseTimer = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const root = document.documentElement;
    const cursorElement = cursor.current;
    const haloElement = halo.current;
    const interactiveSelector = [
      "a",
      "button",
      "summary",
      "input",
      "select",
      "textarea",
      "[role='button']",
      "[data-project-slug]",
      "[data-story-slug]",
      ".project-map-preview",
      ".career-story",
      ".recognition-entry",
      ".personal-pick",
      ".contact-compact",
    ].join(", ");

    root.classList.add("precision-cursor-enabled");

    const move = event => {
      const x = event.clientX;
      const y = event.clientY;
      const isNear = Boolean(event.target.closest?.(interactiveSelector));

      for (const element of [cursorElement, haloElement]) {
        if (!element) continue;
        element.style.left = x + "px";
        element.style.top = y + "px";
        element.classList.add("is-visible");
        element.classList.toggle("is-near", isNear);
      }
    };

    const press = event => {
      if (event.button !== 0) return;
      window.clearTimeout(releaseTimer.current);
      cursorElement?.classList.add("is-pressed");
      haloElement?.classList.add("is-pressed");
    };

    const release = () => {
      window.clearTimeout(releaseTimer.current);
      releaseTimer.current = window.setTimeout(() => {
        cursorElement?.classList.remove("is-pressed");
        haloElement?.classList.remove("is-pressed");
      }, 90);
    };

    const leave = () => {
      cursorElement?.classList.remove("is-visible", "is-near", "is-pressed");
      haloElement?.classList.remove("is-visible", "is-near", "is-pressed");
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.clearTimeout(releaseTimer.current);
      root.classList.remove("precision-cursor-enabled");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div ref={halo} className="cursor-halo" aria-hidden="true" />
      <div ref={cursor} className="precision-cursor" aria-hidden="true">
        <svg viewBox="0 0 28 34" focusable="false" aria-hidden="true">
          <path
            className="precision-cursor-body"
            d="M0 0 L2.7 26.2 L8.8 19.8 L14.9 32.4 L19.1 30.2 L13 17.9 L22.4 17.2 Z"
          />
          <path
            className="precision-cursor-chamfer"
            d="M12.8 18.2 L18.9 17.6"
          />
          <circle className="precision-cursor-datum-ring" cx="7.7" cy="12.3" r="2.4" />
          <circle className="precision-cursor-datum" cx="7.7" cy="12.3" r="1.05" />
        </svg>
      </div>
    </>
  );
}
