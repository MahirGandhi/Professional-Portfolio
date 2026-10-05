# Professional Portfolio

React/Vite portfolio website for Mahir Gandhi.



## Experience media

The experience section follows a full-width media banner / personal photo / role narrative layout. Its styles are scoped to `src/components/experience.css`; shared backgrounds use the original portfolio palette in `src/theme.css`. Change the `--career-*` tokens when the overall design is decided.

`src/data/experienceMedia.js` holds presentation metadata, public company footage sources, website links, captions, and descriptive narratives. Career facts remain in `industryExperience.js`. Zoox, Tesla, and GM use native muted, looping video with pause/play controls, offscreen pausing, lazy loading, and reduced-motion support. Company footage is credited to its source and is context, not footage of Mahir's work. If a remote video fails, the personal-photo poster remains visible. The nine-second banner clips are stored alongside the personal photos, encoded as H.264 MP4 with a fast-start index. This avoids reliance on third-party video hosting during playback; source websites remain credited.

Personal photos are stored in `public/media/experience/`. The original signed Tesla spoiler is preserved and displayed 90 degrees counterclockwise through CSS, including in the keyboard-accessible enlarged view. Logos in `public/media/logos/` are extracted from the original portfolio; the previous logo/image URLs remain available by clicking each role's logo. Existing résumé, project, contact, and social links remain in place.


## Original frame with the new experience stories

The surrounding page uses the original Professional-Portfolio layout: a two-column portrait and engineering-focus hero, centered navigation, rounded project and community cards, and its black/cyan dark theme and pale-gray light theme. The experience banners, personal images, narratives, logos, supporting photo viewer, and local video clips remain in place. Content data, graduation and availability, hash-based project routes, native image dialogs, theme persistence, and email copying are retained.

The previous blue light/dark palettes are saved, without being imported, in `docs/themes/version-2.css` for a future design decision. The original repository is only a reference; edits belong to Professional-Portfolio-2.
