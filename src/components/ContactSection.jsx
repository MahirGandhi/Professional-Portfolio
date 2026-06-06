import { SymbolIcon, classNames } from "./ui";

export function ContactSection({ profile, darkMode, mutedText }) {
  const panelClass = darkMode ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-white";
  const accent = darkMode ? "text-sky-300" : "text-sky-700";
  const timelineLine = darkMode ? "bg-slate-800" : "bg-slate-200";
  const actions = [
    {
      label: "Email",
      title: "Start a conversation",
      detail: profile.email,
      href: `mailto:${profile.email}`,
      icon: "mail",
      primary: true,
    },
    {
      label: "LinkedIn",
      title: "Connect professionally",
      detail: "View profile and experience updates",
      href: profile.linkedin,
      icon: "linkedin",
      primary: false,
    },
    {
      label: "Resume",
      title: "Download resume",
      detail: "Open the latest resume PDF",
      href: profile.resumeUrl,
      icon: "download",
      primary: false,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", accent)}>Contact</p>
          <h2 className="text-2xl font-semibold tracking-tight">Let's connect.</h2>
          <p className={classNames("mt-3 max-w-2xl leading-7", mutedText)}>I’m always happy to chat about exciting ideas, projects, and opportunities to collaborate.</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {actions.map((action, index) => (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            className={classNames("rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-0.5", panelClass)}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className={classNames("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold", darkMode ? "border-sky-300/40 bg-sky-300/10 text-sky-300" : "border-sky-700/25 bg-sky-50 text-sky-700")}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className={classNames("h-px flex-1", timelineLine)} />
              <div className={classNames("flex h-9 w-9 shrink-0 items-center justify-center rounded-full", action.primary ? "bg-sky-300 text-slate-950" : darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-950")}>
                <SymbolIcon name={action.icon} />
              </div>
            </div>

            <p className={classNames("text-xs font-bold uppercase tracking-[0.22em]", accent)}>{action.label}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{action.title}</h3>
            <p className={classNames("mt-3 text-sm leading-6", mutedText)}>{action.detail}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
