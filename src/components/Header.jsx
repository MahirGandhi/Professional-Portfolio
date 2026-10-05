import { useEffect, useRef, useState } from "react";
import { SymbolIcon, classNames } from "./ui";

const PINION_TEETH = 16;
const PINION_PITCH_RADIUS = 13.25;

export function Header({ profile, navItems, brightness, setBrightness, mobileMenuOpen, setMobileMenuOpen, mutedText }) {
  const [activeSection, setActiveSection] = useState(() => window.location.hash || "#top");
  const [adjustingBrightness, setAdjustingBrightness] = useState(false);
  const [brightnessFocused, setBrightnessFocused] = useState(false);
  const menuButton = useRef(null);
  const mobileNavigation = useRef(null);
  const mechanism = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const targets = [document.getElementById("top"), ...navItems.map(item => document.getElementById(item.href.slice(1)))].filter(Boolean);
    const updateActive = () => {
      let current = "#top";
      for (const target of targets) if (target.getBoundingClientRect().top <= 150) current = `#${target.id}`;
      setActiveSection(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [navItems]);

  useEffect(() => {
    if (mobileMenuOpen) mobileNavigation.current?.querySelector("a")?.focus();
    else if (wasOpen.current && mobileNavigation.current?.contains(document.activeElement)) menuButton.current?.focus();
    wasOpen.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = event => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const resize = () => { if (window.matchMedia("(min-width: 1280px)").matches) setMobileMenuOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", resize);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  useEffect(() => {
    const element = mechanism.current;
    if (!element) return;

    const updateMechanics = () => {
      const gearDiameter = 36;
      const travel = Math.max(0, element.clientWidth - gearDiameter);
      const linearTravel = travel * (brightness / 100);
      const rotationRadians = linearTravel / PINION_PITCH_RADIUS;
      const rotationDegrees = -(rotationRadians * 180 / Math.PI);

      element.style.setProperty("--pinion-x", `${linearTravel}px`);
      element.style.setProperty("--pinion-angle", `${rotationDegrees}deg`);
      element.style.setProperty("--rack-fill", `${brightness}%`);
    };

    updateMechanics();
    const observer = new ResizeObserver(updateMechanics);
    observer.observe(element);
    return () => observer.disconnect();
  }, [brightness]);

  const followSection = href => {
    setMobileMenuOpen(false);
    setActiveSection(href);
    requestAnimationFrame(() => {
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  };

  const renderLinks = (mobile = false) => navItems.map(item => (
    <a
      key={item.href}
      href={item.href}
      aria-current={activeSection === item.href ? "location" : undefined}
      onClick={() => followSection(item.href)}
      className={classNames("text-sm font-medium transition-colors theme-hover-text theme-muted", mobile && "block rounded-2xl px-3 py-2")}
    >
      {item.label}
    </a>
  ));

  const roundedBrightness = Math.round(brightness);
  const counterReels = [
    { key: "hundreds", index: Math.floor(roundedBrightness / 100), values: [0, 1] },
    { key: "tens", index: Math.floor(roundedBrightness / 10), values: Array.from({ length: 11 }, (_, value) => value % 10) },
    { key: "ones", index: roundedBrightness, values: Array.from({ length: 101 }, (_, value) => value % 10) },
  ];

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-xl theme-line theme-header">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black theme-primary">{profile.initials}</div>
          <div>
            <p className="text-sm font-bold leading-none tracking-tight">{profile.name}</p>
            <p className={classNames("mt-1 text-xs", mutedText)}>Engineer | People Leader</p>
          </div>
        </a>

        <div className="hidden items-center gap-5 xl:flex">{renderLinks()}</div>

        <div className="flex items-center gap-2">
          <div
            className={classNames(
              "rack-control",
              adjustingBrightness && "is-dragging",
              (adjustingBrightness || brightnessFocused) && "is-active"
            )}
          >
            <div ref={mechanism} className="rack-mechanism" aria-hidden="true">
              <span className="rack-light-fill" />
              <span className="rack-scale" aria-hidden="true">
                <span className="rack-scale-mark rack-scale-start"><i />0</span>
                <span className="rack-scale-mark rack-scale-mid"><i />50</span>
                <span className="rack-scale-mark rack-scale-end"><i />100</span>
              </span>

              <svg className="rack-rail" viewBox="0 0 150 15" preserveAspectRatio="none" focusable="false">
                <rect className="rack-base" x="0" y="5" width="150" height="8" rx="1.3" />
                {Array.from({ length: 29 }, (_, index) => (
                  <rect
                    key={index}
                    className="rack-tooth"
                    x={index * 5.2}
                    y="0"
                    width="3.1"
                    height="6"
                    rx=".35"
                  />
                ))}
                <path className="rack-guide" d="M1 12.3H149" />
              </svg>

              <span className="pinion-carriage">
                <span className="mechanical-counter" aria-hidden="true">
                  <span className="counter-window">
                    {counterReels.map(reel => (
                      <span className="counter-drum" key={reel.key}>
                        <span
                          className="counter-reel"
                          style={{ "--counter-index": reel.index }}
                        >
                          {reel.values.map((digit, index) => (
                            <span className="counter-number" key={index}>{digit}</span>
                          ))}
                        </span>
                      </span>
                    ))}
                  </span>
                  <span className="counter-percent">%</span>
                </span>
                <span className="pinion-shadow" />
                <svg className="pinion-wheel" viewBox="0 0 36 36" focusable="false">
                  <g className="pinion-rotor">
                    {Array.from({ length: PINION_TEETH }, (_, index) => (
                      <rect
                        key={index}
                        className="pinion-tooth"
                        x="15.2"
                        y=".25"
                        width="5.6"
                        height="5.1"
                        rx=".7"
                        transform={`rotate(${index * (360 / PINION_TEETH)} 18 18)`}
                      />
                    ))}
                    <circle className="pinion-rim" cx="18" cy="18" r="13.8" />
                    {Array.from({ length: 6 }, (_, index) => (
                      <path
                        key={index}
                        className="pinion-spoke"
                        d="M18 8.2V14"
                        transform={`rotate(${index * 60} 18 18)`}
                      />
                    ))}
                    <circle className="pinion-hub" cx="18" cy="18" r="5.2" />
                    <circle className="pinion-bore" cx="18" cy="18" r="2.15" />
                    <path className="pinion-keyway" d="M18 15.9V13.7" />
                  </g>
                </svg>
              </span>

              <input
                className="rack-range"
                type="range"
                min="0"
                max="100"
                step="1"
                value={brightness}
                aria-label={`Interface brightness: ${Math.round(brightness)} percent`}
                onChange={event => setBrightness(Number(event.target.value))}
                onPointerDown={() => setAdjustingBrightness(true)}
                onPointerUp={() => setAdjustingBrightness(false)}
                onPointerCancel={() => setAdjustingBrightness(false)}
                onFocus={() => setBrightnessFocused(true)}
                onBlur={() => {
                  setBrightnessFocused(false);
                  setAdjustingBrightness(false);
                }}
              />
            </div>
          </div>

          <button
            ref={menuButton}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(value => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border theme-line theme-surface xl:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <SymbolIcon name={mobileMenuOpen ? "x" : "menu"} />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div ref={mobileNavigation} id="mobile-navigation" className="border-t px-5 py-4 theme-line xl:hidden">
          <div className="flex flex-col gap-2">{renderLinks(true)}</div>
        </div>
      )}
    </header>
  );
}
