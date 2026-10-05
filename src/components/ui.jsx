import { useEffect, useState } from "react";

export function SmartImage({ src, alt, className = "", loading = "lazy", fallback, contain = false, style }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  if (!src || failed) {
    return <div className={classNames("smart-image image-fallback", className)} role="img" aria-label={alt} style={style}>
      <span>{fallback || `${alt || "Project image"} — image unavailable`}</span>
    </div>;
  }
  return <img src={src} alt={alt} loading={loading} decoding="async" onError={() => setFailed(true)} style={style} className={classNames("smart-image", contain ? "image-contain" : "image-cover", className)} />;
}

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

  return (
    <span className={className} aria-hidden="true">
      {symbols[name] || "•"}
    </span>
  );
}

export function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <div
      className={classNames("animate-[fadeInUp_0.55s_ease-out_both]", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, darkMode }) {
  return (
    <div className="mb-10">
      <p
        className={classNames(
          "mb-3 text-xs font-bold uppercase tracking-[0.28em]",
          darkMode ? "theme-accent" : "theme-accent"
        )}
      >
        {eyebrow}
      </p>

      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export function Pill({ children, darkMode }) {
  return (
    <span
      className={classNames(
        "rounded-full border px-3 py-1 text-xs font-medium",
        darkMode
          ? "theme-line theme-raised theme-muted"
          : "theme-line theme-raised theme-muted"
      )}
    >
      {children}
    </span>
  );
}

export function ImageFrame({
  src,
  alt,
  label,
  darkMode,
  className = "aspect-[4/3]",
  contain = false,
  objectPosition = "center top",
}) {
  const isGroup = Array.isArray(src);

  return (
    <div
      className={classNames(
        "overflow-hidden rounded-[1.5rem] border",
        darkMode ? "theme-line theme-raised" : "theme-line theme-surface",
        className
      )}
    >
      {isGroup ? (
        <div className="grid h-full min-h-[320px] grid-cols-1 gap-4 p-4 md:grid-cols-2">
          {src.map((url) => (
            <div
              key={url}
              className={classNames(
                "flex h-full min-h-[280px] items-center justify-center overflow-hidden rounded-2xl",
                darkMode ? "theme-raised" : "theme-raised"
              )}
            >
              <SmartImage
                src={url}
                contain
                alt={alt}
                className="h-full w-full object-contain p-2"
              />
            </div>
          ))}
        </div>
      ) : src ? (
        <SmartImage
          src={src}
          contain={contain}
          alt={alt}
          style={{ objectPosition }}
          className={classNames(
            "h-full w-full",
            contain ? "object-contain p-8" : "object-cover"
          )}
        />
      ) : (
        <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 p-6 text-center">
          <SymbolIcon
            name="image"
            className={classNames(
              "text-3xl",
              darkMode ? "theme-muted" : "theme-muted"
            )}
          />

          <div>
            <p
              className={classNames(
                "text-sm font-semibold",
                darkMode ? "theme-muted" : "theme-muted"
              )}
            >
              {label}
            </p>

            <p
              className={classNames(
                "mt-1 text-xs",
                darkMode ? "theme-muted" : "theme-muted"
              )}
            >
              Image placeholder
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
