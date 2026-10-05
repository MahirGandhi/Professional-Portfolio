# Portfolio redesign

## Brief and plan

The first draft changed the surface of the site without changing how visitors understood the work. The review required a distinct personality, complete light/dark themes, a clear December 2027 graduation and job-search statement, and thoughtful content instead of keyword stacks.

Work was divided into focused tasks. Each agent worked on one task at a time: primary-source design research; feature audit; theme/navigation; introduction; work overview; project reading; personal/contact. Completed agents subsequently handled independent content or runtime verification tasks. The root agent established the visual system, integrated the components, reviewed screenshots, corrected layout problems, and committed the result.

## Direction

Visitors should be able to examine an engineering decision before opening a project. The selectable introduction examples use actual GM, Solar Racing, and Zoox work to connect a challenge, Mahir's contribution, and supporting evidence. This drives the composition: an upright introduction, a blue review panel, an offset evidence panel, and varied narrative sections. The normal cursor and scrolling remain predictable.

The monogram is drawn from M and G, with no star. Archivo and Manrope are bundled locally. Every section, image fallback, disclosure, button, project page, footer, and focus state uses shared light/dark tokens. The two palettes are designed independently rather than keeping the hero fixed.

## Research and adaptation

- [Anthropic frontend design guidance](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md): ground choices in the subject, use real content, and critique defaults. This version specifically cautions against predictable cream/serif/clay treatments. We replaced the previous composition and brittle CSS overrides.
- [Jackie Zhang's firsthand portfolio process](https://tympanus.net/codrops/2026/03/20/jackie-zhangs-portfolio-from-chasing-references-to-finding-direction/): extract the qualities that make a reference effective rather than translate its appearance. Here, the qualities are curiosity, precision, initiative, and responsibility.
- [Max Milkin and Olha Lazarieva's process](https://tympanus.net/codrops/2025/12/02/two-portfolios-one-process-where-design-motion-and-code-come-together/): start with the person and let interaction support that direction. No forced loader or decorative cursor was adopted.
- [Artem Shcherban's project presentation process](https://tympanus.net/codrops/2026/05/02/designing-against-the-gallery-a-two-year-journey-to-a-layered-portfolio-experience/): explain work from the index, rather than require visitors to decode thumbnails. Our project collection shows the existing problem and outcome before the project link.
- [Sean Halpin](https://www.seanhalpin.software/): a purposeful interaction can demonstrate identity. Our selector exposes real engineering judgment; it does not copy his widget.
- [Niccolo Miranda](https://www.niccolomiranda.com/): make the entire experience coherent. His newspaper styling was not adopted.
- [Soren's creator](https://www.bryntaylor.co.uk/resources/soren-framer-template) and [Diego's portfolio build](https://webflow.com/made-in-webflow/website/diegolivworks): separate recognizable signatures from transferable project priority. No giant serif nameplate, animated ASCII, or copied green layout.

## Content policy

All original project, experience, campus, leadership, and gallery data remain unchanged. Complete contributions and tools are accessible in native disclosures; previously omitted fourth bullets are now available. Project contribution arrays are now shown, too. The original biography, engineering focus, statistics, portrait, personal paragraph, and media selections remain available.

Only the profile title and availability were corrected, with a new concise introduction and role-interest statement. New plain-language overview copy uses the original claims and metrics. No performance figures, simulations, or CAD evidence were invented. The original image URLs and confidentiality notes are preserved.

## Feature changes

- Global themes respect system preference, persist explicit selection, and apply before rendering.
- Addressable `#project/slug` pages survive refresh and support browser Back/Forward, scroll restoration, and focus restoration.
- Mobile navigation supports Escape, predictable focus, active-section indication, and comfortable targets.
- Native disclosures retain technical detail without dominating the main reading path.
- CAD images enlarge in a labelled native dialog, with Escape, focus restoration, caption, and original-image link.
- Image failures show honest text fallbacks; no broken icons or invented replacements.
- Contact shows the actual email, job timing, resume and LinkedIn links, and truthful clipboard feedback.
- A fake animated music equalizer was replaced by a static favorite-song reference.

## Validation

Production build and whitespace checks pass. Main text/button theme pairs were checked numerically: the lowest tested contrast ratio is 5.34:1. Browser verification found no runtime errors. Both themes were checked across the body, hero, review panel, experience, projects, personal section, contact, and project details. All five project routes, direct refresh, Back/Forward, return scroll/focus, selector examples, disclosures, gallery Escape/focus, and clipboard success/failure were exercised. Mobile layouts at 320, 390, and 768px have no horizontal overflow in either theme. Active-section navigation was checked after smooth scrolling settled.

Remote images could not load in the restricted verification environment; their fallback behavior was verified. Live permissions and availability of those external files still require confirmation outside that environment.

## Existing factual items requiring Mahir's confirmation

These were preserved, not guessed:
- Solar Racing ends May 2026 in experience but says Present in leadership.
- Zoox and PUMA still say Present.
- The expanded original biography still says junior.

The original portfolio repository was not modified. This work is saved only in Professional-Portfolio-2.



## October 4: original frame, media-led experience

At Mahir’s request, the surrounding layout and background styling now follow the original portfolio. The new experience presentation remains: local looping company-video banners, personal photos beside targeted narratives, original portfolio logos and links, and the rotated Tesla farewell image. Original project/card framing is paired with the current facts and full project contributions. Global theme persistence, addressable project pages, gallery dialogs, and clipboard feedback are kept. The previous blue palettes are preserved in `themes/version-2.css` as a reference for later.


## Active blue themes and concise stories

The saved version-2 blue light/dark palettes now apply throughout the original layout, including navigation, cards, actions, hover effects, galleries, and experience frames. New entries use one main image each, with the NASA two-image exception. Descriptions lead with specific contributions and outcomes; STC highlights its founding distinction.

## October 4: compact contact and interactive personal picks

The personal section now uses a short biography beside two standalone media cards, without nested background/current-pick badges. Both cards have restrained sway that pauses on hover/focus and respects reduced-motion preferences. The record controls the official Spotify embed for Eternal Summer; record spin, tonearm position, and decorative playback bars follow Spotify playback events. The player loads only after interaction, pauses when the document is hidden, cleans up on unmount, and keeps a direct Spotify fallback link. No song audio is copied into the repository.

Contact is a compact closing panel with availability, the email address and adjacent copy control, one primary email action, and smaller LinkedIn/resume links. The saved blue theme tokens cover both sections.

## October 4: experience-led layout across the portfolio

The experience section is now the visual guide for the whole site: open canvas, images beside clear narratives, thin section rules, and consistent headings. The hero pairs a smaller portrait with a direct introduction, visible graduation/availability, and an unboxed statistics strip; its background disclosure and nested focus panels are removed. Projects use compact linked rows with actual CAD previews and specific invitations. GM/Tesla confidential case studies use their logos and honest written-case-study labels. All project details and the full CAD gallery remain accessible in open reading layouts. Solar uses the complete existing CAD image with object-fit containment; the shared ImageFrame containment prop is also corrected. Leadership and community entries are open rows with dates and summaries instead of tiles. Personal media retain their subtle motion and Spotify controls, the original heartfelt biography is restored verbatim, and contact becomes a short closing row. Both saved blue themes remain active.

## October 4: natural image framing and Tesla photo group

Wide lab photographs, logos, CAD previews, and gallery images now use their natural proportions instead of fixed white mattes. This removes added letterboxing while preserving complete engineering imagery. The signed Tesla spoiler remains rotated 90 degrees with its original caption, and sits directly below the Fremont photo within the same media column beside the experience narrative. Sand King’s two detail images use natural heights and stack on narrow screens. Independent layout and content reviews found no lost links or story requirements; the production build passed.

## October 4: concise experience statements and a balanced Tesla spread

Each of the eight engineering experiences now has one short statement that synthesizes the scope and value of the work, rather than repeating resume bullets and metrics. Career facts and project case studies remain intact. Tesla’s factory photo and rotated signed spoiler now share one horizontal strip at equal image heights, using their natural proportions. Role details and the statement sit beneath the pair; narrow screens stack the images naturally. Both captions, enlargement dialogs, websites, methods, and blue themes are preserved. Independent content/layout reviews and the production build passed.

## October 4: compact text-only Selected Work index

Selected Work uses two open entries in the first row and three in the second at desktop widths. Thin rules, small numbered labels, short titles, and concise design summaries keep the experience section's open visual language without repeating boxed cards. All five entries remain full semantic links with distinct invitations and outcome text; index images and logos are removed. Tablet layouts use two columns and narrow screens use one. Original case-study names, content, imagery, galleries, routes, and return-focus behavior remain in the project detail pages.
