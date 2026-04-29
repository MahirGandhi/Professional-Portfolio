import { SymbolIcon, classNames } from "./ui";

export function Header({ profile, navItems, darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen, mutedText }) {
  return (
    <header className={classNames("sticky top-0 z-50 border-b backdrop-blur-xl", darkMode ? "border-slate-800 bg-[#080B10]/85" : "border-slate-200 bg-[#F8FAFC]/85")}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className={classNames("flex h-10 w-10 items-center justify-center rounded-full text-sm font-black", darkMode ? "bg-sky-300 text-slate-950" : "bg-slate-950 text-white")}>{profile.initials}</div>
          <div>
            <p className="text-sm font-bold leading-none tracking-tight">{profile.name}</p>
            <p className={classNames("mt-1 text-xs", mutedText)}>Engineer | People Leader</p>
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={classNames("text-sm font-medium transition-colors hover:text-sky-500", darkMode ? "text-slate-300" : "text-slate-700")}>{item.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setDarkMode((value) => !value)} className={classNames("inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors", darkMode ? "border-slate-800 bg-slate-900 hover:bg-slate-800" : "border-slate-200 bg-white hover:bg-slate-100")} aria-label="Toggle dark mode">
            <SymbolIcon name={darkMode ? "sun" : "moon"} />
          </button>
          <button onClick={() => setMobileMenuOpen((value) => !value)} className={classNames("inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden", darkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white")} aria-label="Open menu">
            <SymbolIcon name={mobileMenuOpen ? "x" : "menu"} />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className={classNames("border-t px-5 py-4 md:hidden", darkMode ? "border-slate-800" : "border-slate-200")}>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className={classNames("rounded-2xl px-3 py-2 text-sm font-medium", darkMode ? "text-slate-300 hover:bg-slate-900" : "text-slate-700 hover:bg-white")}>{item.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
