import { useEffect } from "react";

export function CardSpotlight() {
  useEffect(() => {
    const selector = "article, #personal > div > div, #contact > div";
    const addClass = () => {
      document.querySelectorAll(selector).forEach((card) => card.classList.add("spotlight-card"));
    };
    const move = (event) => {
      const card = event.target.closest(".spotlight-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
    };
    addClass();
    window.addEventListener("mousemove", move);
    window.addEventListener("scroll", addClass, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", addClass);
    };
  }, []);
  return null;
}
