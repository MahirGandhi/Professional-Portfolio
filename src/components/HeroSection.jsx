import { SmartImage } from "./ui";
import "./editorial.css";

export function HeroSection({ profile, sectionId = "top", titleHeading = "h1" }) {
  const NameHeading = titleHeading;
  return (
    <section id={sectionId} className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <div className="intro-layout">
        <div className="intro-portrait"><SmartImage src={profile.profileImage} alt="Mahir Gandhi portrait" loading="eager" className="intro-photo" style={{ objectPosition: "center top" }} /><p>East Lansing, Michigan</p></div>
        <div className="intro-copy">
          <p className="editorial-eyebrow">Mechanical Engineering · Michigan State University</p>
          <NameHeading className="intro-name" tabIndex={-1}>{profile.name}</NameHeading>
          <h2>I design, build, and improve hardware.</h2>
          <p className="intro-description">Across Zoox, Tesla, and GM, I’ve built fixtures, investigated defects, and turned production data into useful tools. I like taking a problem from the drawing into the shop and onto the factory floor.</p>
          <p className="intro-graduation">Graduating December 2027</p>
          <p className="intro-availability">{profile.availability}</p>
          <nav className="intro-actions" aria-label="Introduction links">
            <a className="editorial-primary" href="#experience">See my experience <span aria-hidden="true">↓</span></a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Résumé</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email me</a>
          </nav>
        </div>
      </div>
      <dl className="intro-stats">{profile.quickStats.map((stat) => <div key={stat.label}><dt>{stat.value}</dt><dd>{stat.label}</dd></div>)}</dl>
    </section>
  );
}
