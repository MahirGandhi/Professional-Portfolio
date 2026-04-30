import { FadeIn, ImageFrame, SymbolIcon, classNames } from "./ui";

export function HeroSection({ profile, darkMode, panelClass, mutedText }) {
  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
      <style>{`
        @keyframes portraitFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          35% {
            transform: translate3d(5px, -7px, 0) rotate(0.8deg);
          }
          70% {
            transform: translate3d(-4px, -3px, 0) rotate(-0.6deg);
          }
        }
      `}</style>

      <FadeIn>
        <div className="mb-5 space-y-3">
          <p className={classNames("text-xs font-bold uppercase tracking-[0.32em]", darkMode ? "text-sky-300" : "text-sky-700")}>
            {profile.title}
          </p>

          <div className={classNames("inline-flex max-w-fit items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold tracking-wide", darkMode ? "border-sky-300/30 bg-sky-300/10 text-sky-100" : "border-sky-700/25 bg-sky-50 text-sky-950")}>
            <span>{profile.availability}</span>
          </div>
        </div>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          {profile.name}
        </h1>

        <div
          className="mt-8 max-w-sm"
          style={{
            animation: "portraitFloat 4.2s ease-in-out infinite",
            willChange: "transform",
          }}
        >
          <ImageFrame
            src={profile.profileImage}
            alt="Mahir Gandhi portrait"
            label="Profile photo"
            darkMode={darkMode}
            className="aspect-[4/5]"
          />
        </div>

        <p className={classNames("mt-6 max-w-2xl text-lg leading-8", mutedText)}>
          {profile.heroLine}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={profile.resumeUrl}
            className={classNames("inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition", darkMode ? "bg-sky-300 text-slate-950 hover:bg-sky-200" : "bg-slate-950 text-white hover:bg-slate-800")}
          >
            Resume <SymbolIcon name="download" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className={classNames("inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition", darkMode ? "border-slate-800 bg-slate-900 text-slate-100 hover:bg-slate-800" : "border-slate-200 bg-white text-slate-950 hover:bg-slate-100")}
          >
            Email Me <SymbolIcon name="mail" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={classNames("inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition", darkMode ? "border-slate-800 bg-slate-900 text-slate-100 hover:bg-slate-800" : "border-slate-200 bg-white text-slate-950 hover:bg-slate-100")}
          >
            LinkedIn <SymbolIcon name="linkedin" />
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={90}>
        <div className={classNames("rounded-[2rem] border p-5", panelClass)}>
          <div className={classNames("mt-4 rounded-[1.5rem] border p-6", darkMode ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-[#F8FAFC]")}>
            <p className={classNames("text-xs font-bold uppercase tracking-[0.28em]", darkMode ? "text-sky-300" : "text-sky-700")}>
              {profile.aim.label}
            </p>

            <div className="mt-5 space-y-3">
              {profile.aim.lines.map((line) => (
                <h2 key={line} className="text-3xl font-semibold leading-tight tracking-tight">
                  {line}
                </h2>
              ))}
            </div>

            <p className={classNames("mt-4 leading-7", mutedText)}>
              {profile.aim.text}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {profile.quickStats.map((stat) => (
              <div
                key={stat.label}
                className={classNames("rounded-3xl border p-4", darkMode ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-white")}
              >
                <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                <p className={classNames("mt-2 text-sm leading-5", mutedText)}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
