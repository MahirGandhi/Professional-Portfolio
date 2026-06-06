import { classNames } from "./ui";

export function PersonalSection({ darkMode, panelClass, mutedText }) {
  const accent = darkMode ? "text-sky-300" : "text-sky-700";
  const mediaCard = darkMode
    ? "border-slate-800 bg-slate-950 text-slate-100"
    : "border-slate-200 bg-white text-slate-950 shadow-sm";
  const timelineLine = darkMode ? "bg-slate-800" : "bg-slate-200";

  return (
    <section id="personal" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <style>{`
        @keyframes equalizerBounce {
          0%, 100% { height: 8px; }
          50% { height: 24px; }
        }

        @keyframes posterDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          25% {
            transform: translate3d(4px, -3px, 0) scale(1.035);
          }
          50% {
            transform: translate3d(-3px, -7px, 0) scale(1.055);
          }
          75% {
            transform: translate3d(-5px, 2px, 0) scale(1.03);
          }
        }
      `}</style>

      <div className="mb-7">
        <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", accent)}>
          Personal
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">
          More about me
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className={classNames("rounded-[1.75rem] border p-6", panelClass)}>
          <div className="mb-5 flex items-center gap-3">
            <div className={classNames("h-px flex-1", timelineLine)} />
            <p className={classNames("rounded-full border px-3 py-1 text-xs font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>Background</p>
          </div>

          <p className={classNames("text-xs font-bold uppercase tracking-[0.22em]", accent)}>Origin + mindset</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">Mumbai, engineering, and constraints</h3>
          <p className={classNames("mt-4 text-lg leading-8", mutedText)}>
            I grew up in Mumbai, India, around people who were always building, fixing, selling, improving, or trying to make something work better. That mindset stayed with me, and my subsequent experiences in engineering, manufacturing, quality, and research have only reinforced it. Mechanical engineering and entrepreneurship both pull me in for the same reason: they sit at the point where creativity has to survive real-world constraints!
          </p>
        </div>

        <div className={classNames("rounded-[1.75rem] border p-6", panelClass)}>
          <div className="mb-5 flex items-center gap-3">
            <div className={classNames("h-px flex-1", timelineLine)} />
            <p className={classNames("rounded-full border px-3 py-1 text-xs font-semibold", darkMode ? "border-slate-800 bg-slate-950 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-700")}>Current picks</p>
          </div>

          <p className={classNames("text-xs font-bold uppercase tracking-[0.22em]", accent)}>Favorite media</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">What I’m watching and listening to</h3>

          <div className="mt-5 grid gap-5 xl:grid-cols-2">
            <div className="relative min-h-[250px]">
              <div className={classNames("absolute left-8 top-6 h-44 w-32 rotate-6 rounded-xl border p-2 opacity-45", mediaCard)} />
              <div
                className={classNames("absolute left-2 top-2 h-52 w-40 -rotate-3 rounded-xl border p-3 transition duration-300 hover:-translate-y-2 hover:rotate-0", mediaCard)}
              >
                <div className="h-32 w-full overflow-hidden rounded-lg">
                  <img
                    src="https://drive.google.com/thumbnail?id=1TJvvDnRSE23-pH1YzsOJNNmg9pz7e9DB&sz=w600"
                    alt="Beef Season 2"
                    className="h-full w-full object-cover"
                    style={{
                      animation: "posterDrift 3.4s ease-in-out infinite",
                      willChange: "transform",
                    }}
                  />
                </div>

                <p className={classNames("mt-3 text-[10px] font-bold uppercase tracking-[0.22em]", accent)}>
                  Movie / Show
                </p>
                <p className="mt-1 text-lg font-semibold leading-tight">
                  Beef, Season 2
                </p>
              </div>
            </div>

            <div className={classNames("rounded-2xl border p-4", darkMode ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-slate-50")}>
              <p className={classNames("text-[10px] font-bold uppercase tracking-[0.22em]", accent)}>
                Now Playing
              </p>

              <div className="mt-4 flex items-center gap-4">
                <img
                  src="https://drive.google.com/thumbnail?id=1ZZWOvyt8qPyRBGAyTEVdx_aNylvIwC37&sz=w600"
                  alt="Eternal Summer by The Strokes"
                  className="h-16 w-16 rounded-xl object-cover"
                />

                <div>
                  <p className="text-xl font-semibold leading-tight">Eternal Summer</p>
                  <p className={classNames("mt-1 text-sm", mutedText)}>The Strokes</p>
                </div>
              </div>

              <div className="mt-5 flex h-8 items-end gap-1.5">
                {[0, 120, 240, 80, 180].map((delay) => (
                  <span
                    key={delay}
                    className="w-1.5 rounded-full bg-sky-400"
                    style={{
                      height: 10,
                      animation: `equalizerBounce 1s ease-in-out ${delay}ms infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
