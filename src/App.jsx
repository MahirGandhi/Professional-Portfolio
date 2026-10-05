import { useEffect, useMemo, useRef, useState } from "react";
import "./theme.css";
import { profile } from "./data/profile";
import { industryExperience } from "./data/industry";
import { awards, certifications, recognition } from "./data/recognition";
import { communityImpact } from "./data/communityImpact";
import { projects } from "./data/projects";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSections } from "./components/ExperienceSections";
import { WorkSection } from "./components/WorkSection";
import { PersonalSection } from "./components/AboutMeSection";
import { ContactSection } from "./components/ContactSection";
import { CompactSectionShowcase } from "./components/CompactSectionShowcase";
import { RecognitionSection } from "./components/RecognitionSection";
import { StoryDetailPage } from "./components/StoryDetailPage";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { experienceMedia } from "./data/experienceMedia";
import { classNames } from "./components/ui";
import { CardSpotlight } from "./components/CardSpotlight";
import { PrecisionCursor } from "./components/PrecisionCursor";
import "./components/section-overview.css";

const sectionIds = new Set(["top", "experience", "work", "recognition", "community", "personal", "contact"]);
function sectionFromHash(hash) {
  let id;
  try { id = decodeURIComponent(hash.replace(/^#/, "")); } catch { return null; }
  if (sectionIds.has(id)) return id;
  if (Object.values(experienceMedia).some(media => media.id === id)) return "experience";
  return null;
}

const brightnessTokens = {
  "--canvas": ["#080c12", "#111822"],
  "--surface": ["#0d1219", "#18212c"],
  "--surface-raised": ["#131a24", "#202c39"],
  "--line": ["#202936", "#3a4757"],
  "--accent": ["#879cdf", "#a8baf4"],
  "--tint": ["#141d2a", "#243247"],
  "--header-bg": ["#080c12", "#111822"],
  "--section-base": ["#080c12", "#111822"],
  "--section-alt": ["#0a0f16", "#141c27"],
  "--section-emphasis": ["#0d131c", "#182330"],
  "--section-close": ["#0e1722", "#1a2a3d"],
};

function savedBrightness() {
  try {
    const stored = Number(localStorage.getItem("portfolio-brightness"));
    if (Number.isFinite(stored)) return Math.min(100, Math.max(0, stored));

    const legacy = localStorage.getItem("portfolio-lighting");
    if (legacy === "dim") return 18;
    if (legacy === "inspection") return 88;
  } catch {}
  return 55;
}

function mixHex(start, end, amount) {
  const channels = hex => [1, 3, 5].map(index => parseInt(hex.slice(index, index + 2), 16));
  const from = channels(start);
  const to = channels(end);
  return `#${from.map((value, index) => Math.round(value + (to[index] - value) * amount).toString(16).padStart(2, "0")).join("")}`;
}
const detailCollections = { project: projects, recognition, community: communityImpact };
const detailSections = { project: "work", recognition: "recognition", community: "community" };
function detailFromHash() {
  const match = window.location.hash.match(/^#(project|recognition|community)\/(.+)$/);
  if (!match) return null;
  try {
    const slug = decodeURIComponent(match[2]);
    return detailCollections[match[1]].some(item => item.slug === slug) ? { kind: match[1], slug } : null;
  } catch { return null; }
}
export default function App() {
  const [brightness, setBrightness] = useState(savedBrightness);
  const darkMode = true;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(detailFromHash);
  const [navigationRequest, setNavigationRequest] = useState(0);
  const pendingNavigation = useRef(sectionFromHash(window.location.hash) ? window.location.hash : null);
  const previousScroll = useRef(0);
  const previousHash = useRef(window.location.hash);
  const lastDetail = useRef(detailFromHash());
  const pendingRestore = useRef(false);
  const selectedItem = selectedDetail && detailCollections[selectedDetail.kind].find(item => item.slug === selectedDetail.slug);
  const navItems = useMemo(() => [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#work" },
    { label: "Recognition", href: "#recognition" },
    { label: "Community", href: "#community" },
    { label: "Personal", href: "#personal" },
    { label: "Contact", href: "#contact" },
  ], []);
  const requestSection = hash => {
    const section = sectionFromHash(hash);
    if (!section) return;
    if (!lastDetail.current) previousHash.current = hash;
    pendingNavigation.current = hash;
    setNavigationRequest(value => value + 1);
  };
  const followHashLink = event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest?.("a[href^='#']");
    const hash = link?.getAttribute("href");
    if (!hash || !sectionFromHash(hash)) return;
    event.preventDefault();
    requestSection(hash);
    if (window.location.hash !== hash) window.location.hash = hash;
  };
  useEffect(() => {
    const root = document.documentElement;
    const amount = Math.min(100, Math.max(0, brightness)) / 100;
    root.style.colorScheme = "dark";
    root.style.setProperty("--illumination", brightness);
    Object.entries(brightnessTokens).forEach(([token, [start, end]]) => {
      root.style.setProperty(token, mixHex(start, end, amount));
    });
    try {
      localStorage.setItem("portfolio-brightness", String(brightness));
      localStorage.removeItem("portfolio-lighting");
    } catch {}
  }, [brightness]);
  useEffect(() => {
    const syncLocation = () => {
      const next = detailFromHash();
      if (next) {
        if (!lastDetail.current) {
          previousScroll.current = window.scrollY;
        }
        lastDetail.current = next;
      } else if (lastDetail.current) {
        pendingRestore.current = true;
      } else requestSection(window.location.hash);
      setSelectedDetail(next);
      setMobileMenuOpen(false);
    };
    window.addEventListener("hashchange", syncLocation);
    window.addEventListener("popstate", syncLocation);
    return () => {
      window.removeEventListener("hashchange", syncLocation);
      window.removeEventListener("popstate", syncLocation);
    };
  }, []);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (selectedDetail) {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.querySelector("h1")?.focus({ preventScroll: true });
      } else if (pendingRestore.current) {
        pendingRestore.current = false;
        const { kind, slug } = lastDetail.current;
        lastDetail.current = null;
        pendingNavigation.current = null;
        const card = [...document.querySelectorAll(kind === "project" ? "[data-project-slug]" : "[data-story-slug]")].find(element => (kind === "project" ? element.dataset.projectSlug : element.dataset.storySlug) === slug);
        if (window.location.hash === previousHash.current) {
          window.scrollTo({ top: previousScroll.current, behavior: "instant" });
          card?.querySelector("button, a")?.focus({ preventScroll: true });
        } else {
          document.getElementById(detailSections[kind])?.scrollIntoView({ behavior: "instant" });
          card?.querySelector("button, a")?.focus({ preventScroll: true });
        }
      } else if (pendingNavigation.current) {
        const hash = pendingNavigation.current;
        pendingNavigation.current = null;
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          target.scrollIntoView({ behavior: "instant" });
        }
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [selectedDetail, navigationRequest]);
  const openDetail = (kind, slug) => {
    if (!detailCollections[kind]?.some(item => item.slug === slug)) return;
    previousScroll.current = window.scrollY;
    previousHash.current = window.location.hash;
    const next = { kind, slug };
    lastDetail.current = next;
    history.pushState({ portfolioDetail: true }, "", `#${kind}/${encodeURIComponent(slug)}`);
    setSelectedDetail(next);
  };
  const closeDetail = () => {
    if (history.state?.portfolioDetail) history.back();
    else {
      pendingRestore.current = true;
      lastDetail.current = selectedDetail;
      history.replaceState(null, "", `#${detailSections[selectedDetail.kind]}`);
      setSelectedDetail(null);
    }
  };
  if (selectedItem) {
    if (selectedDetail.kind === "project") return <><CardSpotlight /><PrecisionCursor /><ProjectDetailPage project={selectedItem} profile={profile} onBack={closeDetail} /></>;
    return <><CardSpotlight /><PrecisionCursor /><StoryDetailPage item={selectedItem} sectionTitle={selectedDetail.kind === "recognition" ? "Credentials & Recognition" : "Community Impact"} onBack={closeDetail} /></>;
  }
  const mutedText = darkMode ? "theme-muted" : "theme-muted";
  return <main onClickCapture={followHashLink} className={classNames("min-h-screen scroll-smooth font-sans transition-colors duration-500", darkMode ? "theme-canvas theme-ink" : "theme-canvas theme-ink")}>
    <CardSpotlight />
    <PrecisionCursor />
    <a className="skip-link" href="#experience">Skip to experience</a>
    <Header profile={profile} navItems={navItems} brightness={brightness} setBrightness={setBrightness} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} mutedText={mutedText} />
    <div className="portfolio-flow">
      <HeroSection profile={profile} />
      <ExperienceSections darkMode={darkMode} industryExperience={industryExperience} />
      <WorkSection darkMode={darkMode} projects={projects} onOpenProject={slug => openDetail("project", slug)} />
      <RecognitionSection awards={awards} certifications={certifications} onOpen={slug => openDetail("recognition", slug)} />
      <section id="community" className="homepage-compact-shell">
        <CompactSectionShowcase title="Helping others find their next step." intro="Sharing what I’ve learned, and making MSU feel a little easier to navigate." items={communityImpact} detailPrefix="community" onOpen={slug => openDetail("community", slug)} />
      </section>
      <PersonalSection />
      <ContactSection profile={profile} />
    </div>
    <footer className="overview-footer"><p>If you see this, thank you for reading this far :)</p><p>Disclaimer: All product names, logos, brands, and media are property of their respective entities.</p></footer>
  </main>;
}
