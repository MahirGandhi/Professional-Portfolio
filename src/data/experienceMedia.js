// Presentation stays separate from career facts and the site's shared theme.
const root = "/media/experience/";
const logos = "/media/logos/";

export const experienceMedia = {
  "Zoox, Inc.": {
    name: "Zoox", logo: `${logos}zoox.png`, website: "https://zoox.com/",
    program: "Purpose-built autonomous robotaxi",
    photo: { src: `${root}zoox.jpg`, alt: "Mahir alongside a Zoox robotaxi", position: "50% 75%", caption: "Hayward, California · Summer 2026" },
    video: { src: "https://stream.mux.com/A9kJs00394XIgtpxPeAO4QjHo5FgM5ZG6/high.mp4", source: "https://zoox.com/", label: "Public robotaxi footage · Zoox" },
    paragraphs: [
      "I worked at the intersection of supplier quality, physical hardware, and quality systems. Across interiors and low-voltage harnesses, I led root-cause investigations and corrective actions with three suppliers, closing more than ten open quality issues.",
      "For a recurring PCU air leak, I isolated failure modes, ran design-of-experiments trials, and designed a poka-yoke fixture that reduced repeat defects by 80%. I also built Zoox’s first cross-platform SQE dashboard in Next.js and React, connecting Jira/JQL and quality records across 30+ suppliers for 50+ concurrent users."
    ]
  },
  "Tesla, Inc.": {
    name: "Tesla", logo: `${logos}tesla.png`, website: "https://www.tesla.com/",
    program: "Model S & Model X · Fremont Factory",
    photo: { src: `${root}tesla.png`, alt: "Mahir at Tesla’s Fremont Factory sign", caption: "Fremont, California · Fall 2025" },
    video: { src: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-FSD-Card-Desktop.mp4", source: "https://www.tesla.com/", label: "Public vehicle footage · Tesla" },
    paragraphs: [
      "I used metrology and production data to resolve persistent fit, function, and sealing issues on Model S and Model X. Combining five-plus datasets with 8D root-cause trials, I helped reduce door-closing effort defects by 30% and end a year-long containment.",
      "I investigated more than twenty trunk-panel water-leak defects, applying DOE and process containments to eliminate repeat occurrences of certain defects. Supplier and design coordination improved hinge torque by 18%. I also designed protective equipment for alignment systems in SolidWorks and CATIA 3DX, incorporating fail-safes and error-proofing."
    ],
    gallery: [{ src: `${root}tesla-sendoff.png`, alt: "A red spoiler signed with farewell messages by Mahir’s Tesla teammates", rotate: true, caption: "A signed spoiler from my team — a farewell I’ll always keep." }]
  },
  "General Motors": {
    name: "General Motors", logo: `${logos}gm.png`, website: "https://www.gm.com/",
    program: "GMC Acadia · Buick Enclave · Chevrolet Traverse",
    photo: { src: `${root}gm.png`, alt: "Mahir working beside a manufacturing fixture at General Motors", caption: "Lansing, Michigan · Summer 2025" },
    video: { src: "https://video.avpn.gm-cdn.com/media/v1/pmp4/static/clear/5819061474001/c4214740-8078-4f47-8364-6c5a4365995a/1afd4827-0602-4752-a1f6-12a7a5ecbd67/main.mp4", source: "https://www.gm.com/", label: "Public vehicle and manufacturing footage · GM" },
    paragraphs: [
      "At Lansing’s assembly operations, I translated dimensional-quality problems into practical tooling improvements for three vehicle programs. I designed, fabricated, and implemented six additively manufactured fixtures in Siemens NX and Teamcenter, reducing equipment weight by 70% and saving more than $10,000 in maintenance costs.",
      "I initiated over twenty data-driven tooling moves and troubleshot more than ten FANUC automation faults, contributing to a 15% reduction in defect call-outs. Applying Lean Six Sigma methods in internal audits, I root-caused more than fifty dimensional findings."
    ]
  },
  "Physical Ultrasonics, Microscopy, and Acoustics Lab, MSU": { name: "PUMA Lab", logo: `${logos}msu.png`, website: "https://www.egr.msu.edu/", program: "Advanced manufacturing & materials processing" },
  "MSU Solar Racing Team": { name: "MSU Solar Racing", logo: `${logos}solar.png`, website: "https://www.msusolar.com/", program: "Cynisca · In-wheel motor hardware" },
  "NASA LSPACE": { name: "NASA L’SPACE", website: "https://www.lspace.asu.edu/", program: "Orpheus · Venus aerobot thermal architecture" },
  "Experimental Solid Mechanics Lab, MSU": { name: "Experimental Solid Mechanics Lab", logo: `${logos}msu.png`, website: "https://www.egr.msu.edu/", program: "Experimental mechanics & battery research" }
};
