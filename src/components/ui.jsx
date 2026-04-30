export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function SymbolIcon({ name, className = "" }) {
  const symbols = {
    download: "↓",
    mail: "@",
    linkedin: "in",
    sun: "☀",
    moon: "☾",
    menu: "☰",
    x: "×",
    heart: "♡",
    music: "♪",
    image: "▧",
  };
  return <span className={className} aria-hidden="true">{symbols[name] || "•"}</span>;
}

export function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <div className={classNames("animate-[fadeInUp_0.55s_ease-out_both]", className)} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, darkMode }) {
  return (
    <div className="mb-10">
      <p className={classNames("mb-3 text-xs font-bold uppercase tracking-[0.28em]", darkMode ? "text-sky-300" : "text-sky-700")}>{eyebrow}</p>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

export function Pill({ children, darkMode }) {
  return <span className={classNames("rounded-full border px-3 py-1 text-xs font-medium", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-white text-slate-700")}>{children}</span>;
}

export function ImageFrame({ src, alt, label, darkMode, className = "aspect-[4/3]", contain = false, objectPosition = "center" }) {
  return (
    <div className={classNames("overflow-hidden rounded-[1.5rem] border", darkMode ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-slate-100", className)}>
      {src ? (
        <img src={src} alt={alt} style={{ objectPosition }} className={classNames("h-full w-full", contain ? "object-contain p-3" : "object-cover")} />
      ) : (
        <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 p-6 text-center">
          <SymbolIcon name="image" className={classNames("text-3xl", darkMode ? "text-slate-600" : "text-slate-400")} />
          <div>
            <p className={classNames("text-sm font-semibold", darkMode ? "text-slate-300" : "text-slate-700")}>{label}</p>
            <p className={classNames("mt-1 text-xs", darkMode ? "text-slate-500" : "text-slate-500")}>Image placeholder</p>
          </div>
        </div>
      )}
    </div>
  );
}
