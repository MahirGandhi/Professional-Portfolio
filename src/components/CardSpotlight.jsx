import { useEffect } from "react";

export function CardSpotlight() {
  useEffect(() => {
    const wobbleSelector = ".intro-photo, .show-artwork, .record-button";
    let activeWobble = null;

    const resetWobble = (element) => {
      if (!element) return;
      element.classList.remove("cursor-wobble");
      element.style.removeProperty("--wobble-x");
      element.style.removeProperty("--wobble-y");
    };

    const move = (event) => {
      const wobble = event.target.closest?.(wobbleSelector);
      if (activeWobble && activeWobble !== wobble) resetWobble(activeWobble);
      activeWobble = wobble || null;
      if (!wobble) return;

      const rect = wobble.getBoundingClientRect();
      const nx = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
      const ny = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
      wobble.style.setProperty("--wobble-x", (nx * 1.15).toFixed(2) + "deg");
      wobble.style.setProperty("--wobble-y", (ny * -1.15).toFixed(2) + "deg");
      wobble.classList.add("cursor-wobble");
    };

    window.addEventListener("pointermove", move, { passive: true });

    return () => {
      resetWobble(activeWobble);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return null;
}
