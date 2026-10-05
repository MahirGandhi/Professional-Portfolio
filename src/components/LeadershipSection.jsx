import "./editorial.css";

export function LeadershipSection({ leadership, sectionId = "leadership" }) {
  return (
    <section id={sectionId} className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="editorial-heading"><p className="editorial-eyebrow">Clubs + leadership</p><h2>Building with other people.</h2><p>Student organizations, selective programs, and competitions.</p></div>
      <div className="editorial-list">{leadership.map(item => <article className="editorial-role" key={item.title}>
        <div className="editorial-role-meta"><p>{item.category}</p><p>{item.date}</p></div>
        <div><h3>{item.title}</h3><p className="editorial-role-description">{item.detail}</p><p className="editorial-tools">{item.skills.join(" · ")}</p></div>
      </article>)}</div>
    </section>
  );
}
