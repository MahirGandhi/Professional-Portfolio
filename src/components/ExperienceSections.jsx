import { ExperienceTimeline } from "./ExperienceTimeline";
import { classNames } from "./ui";

export function ExperienceSections({ darkMode, industryExperience, campusExperience }) {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", darkMode ? "text-sky-300" : "text-sky-700")}>Engineering Track</p>
            <h3 className="text-2xl font-semibold tracking-tight">Engineering focused leadership</h3>
          </div>
        </div>
        <ExperienceTimeline darkMode={darkMode} items={industryExperience} />
      </div>
      <div>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className={classNames("mb-2 text-xs font-bold uppercase tracking-[0.24em]", darkMode ? "text-sky-300" : "text-sky-700")}>Community Impact</p>
            <h3 className="text-2xl font-semibold tracking-tight">Mentorship, outreach, and student-facing leadership</h3>
          </div>
        </div>
        <ExperienceTimeline darkMode={darkMode} items={campusExperience} />
      </div>
    </section>
  );
}
