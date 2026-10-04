# Professional Portfolio

React/Vite portfolio website for Mahir Gandhi.


## Experience media

The experience section follows a full-width media banner / personal photo / role narrative layout. Its styles are scoped to `src/components/experience.css`; shared backgrounds remain in `App.jsx`. Change the `--experience-*` tokens when the overall design is decided.

`src/data/experienceMedia.js` holds presentation metadata, public company footage URLs, website links, captions, and descriptive narratives. Career facts remain in `industryExperience.js`. Zoox, Tesla, and GM use native muted, looping video with pause/play controls, offscreen pausing, lazy loading, and reduced-motion support. Company footage is credited to its source and is context, not footage of Mahir's work. If a remote video fails, the personal-photo poster remains visible. Public source URLs can change and can be replaced with approved self-hosted clips later.

Personal photos are stored in `public/media/experience/`. The original signed Tesla spoiler is preserved and displayed 90 degrees counterclockwise through CSS, including in the keyboard-accessible enlarged view. Logos in `public/media/logos/` are extracted from the original portfolio; the previous logo/image URLs remain available by clicking each role's logo. Existing résumé, project, contact, and social links remain in place.
