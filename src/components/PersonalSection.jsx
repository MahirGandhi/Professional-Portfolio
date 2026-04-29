import { Pill, SectionHeader, SymbolIcon, classNames } from "./ui";

export function PersonalSection({ profile, darkMode, panelClass, mutedText }) {
  return (
    <section id="personal" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeader darkMode={darkMode} eyebrow="Personal" title="Interests and a little personality" />
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className={classNames("rounded-[1.75rem] border p-6", panelClass)}>
          <div className="mb-5 flex items-center gap-3"><div className={classNames("flex h-10 w-10 items-center justify-center rounded-full", darkMode ? "bg-sky-300/10 text-sky-300" : "bg-sky-100 text-sky-800")}><SymbolIcon name="heart" /></div><h3 className="text-xl font-semibold">Interests</h3></div>
          <div className="flex flex-wrap gap-2">{profile.interests.map((interest) => <Pill key={interest} darkMode={darkMode}>{interest}</Pill>)}</div>
        </div>
        <div className={classNames("rounded-[1.75rem] border p-6", panelClass)}>
          <div className="mb-5 flex items-center gap-3"><div className={classNames("flex h-10 w-10 items-center justify-center rounded-full", darkMode ? "bg-sky-300/10 text-sky-300" : "bg-sky-100 text-sky-800")}><SymbolIcon name="music" /></div><h3 className="text-xl font-semibold">Favorite Song</h3></div>
          <p className="text-2xl font-semibold tracking-tight">{profile.favoriteSong.title}</p>
          <p className={classNames("mt-1", mutedText)}>{profile.favoriteSong.artist}</p>
          <p className={classNames("mt-4 text-sm leading-6", mutedText)}>{profile.favoriteSong.note}</p>
        </div>
      </div>
    </section>
  );
}
