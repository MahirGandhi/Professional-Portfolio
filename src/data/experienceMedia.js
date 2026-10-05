// Presentation stays separate from career facts and the site's shared theme.
const root = "/media/experience/";
const logos = "/media/logos/";

export const experienceMedia = {
  "Zoox, Inc.": {
    name: "Zoox", logo: `${logos}zoox.png`, website: "https://zoox.com/",
    program: "Purpose-built autonomous robotaxi",
    photo: { src: `${root}zoox.jpg`, alt: "Mahir alongside a Zoox robotaxi", position: "50% 75%", caption: "Hayward, California · Summer 2026" },
    video: { src: `${root}zoox-banner.mp4`, source: "https://zoox.com/", label: "Public robotaxi footage · Zoox" },
    paragraphs: [
      "I connected hands-on supplier problem-solving with clearer quality decisions, resolving recurring hardware defects and building Zoox’s first cross-platform supplier quality engineering dashboard for teams working across 30+ suppliers."
    ]
  },
  "Tesla, Inc.": {
    id: "tesla", name: "Tesla", logo: `${logos}tesla.png`, website: "https://www.tesla.com/",
    program: "Model S & Model X · Fremont Factory",
    photo: { src: `${root}tesla.png`, alt: "Mahir at Tesla’s Fremont Factory sign", contain: true, caption: "Fremont, California · Fall 2025" },
    video: { src: `${root}tesla-banner.mp4`, source: "https://www.tesla.com/", label: "Public vehicle footage · Tesla" },
    paragraphs: [
      "I turned persistent vehicle-quality problems into production fixes, combining root-cause investigation, precision measurement, and protective tooling to improve Model S and Model X sealing, fit, and factory reliability."
    ],
    gallery: [{ src: `${root}tesla-sendoff.png`, alt: "A red spoiler signed with farewell messages by Mahir’s Tesla teammates", rotate: true, caption: "a signed spoiler from my team :)" }]
  },
  "General Motors": {
    name: "General Motors", logo: `${logos}gm.png`, website: "https://www.gm.com/",
    program: "GMC Acadia · Buick Enclave · Chevrolet Traverse",
    photo: { src: `${root}gm.png`, alt: "Mahir working beside a manufacturing fixture at General Motors", caption: "Lansing, Michigan · Summer 2025" },
    video: { src: `${root}gm-banner.mp4`, source: "https://www.gm.com/", label: "Public vehicle and manufacturing footage · General Motors" },
    paragraphs: [
      "I improved assembly across three vehicle programs by taking lighter fixtures from computer-aided design to the line and solving dimensional and automation problems that affected production."
    ]
  },
  "Physical Ultrasonics, Microscopy, and Acoustics Lab, Michigan State University": {
    id: "puma", name: "Physical Ultrasonics, Microscopy, and Acoustics Lab", logo: `${logos}msu.png`, website: "https://www.egr.msu.edu/~csk/",
    program: "Advanced manufacturing & materials processing",
    photo: { src: `${root}puma-defect-scan.png`, aspectRatio: "617 / 255", alt: "Physical Ultrasonics, Microscopy, and Acoustics Lab ultrasonic scans comparing an intact and damaged silicon wafer", contain: true, source: "https://www.egr.msu.edu/~csk/page10.html", caption: "Public lab image · Ultrasonic detection of material defects" },
    paragraphs: [
      "I explored how ultrasound can reshape and repair materials, using controlled experiments and microscopy to connect processing choices with changes in copper, printed composites, and damaged polymers."
    ]
  },
  "Michigan State University Solar Racing Team": {
    id: "solar-racing", name: "Michigan State University Solar Racing", logo: `${logos}solar.png`, website: "https://www.msusolar.com/",
    program: "Cynisca · In-wheel motor hardware",
    photo: { src: `${root}solar-cynisca.png`, alt: "Michigan State University Solar Racing’s published computer-aided design rendering of Cynisca", contain: true, source: "https://www.msusolar.com/heritage-2/", caption: "Cynisca · Michigan State University Solar Racing vehicle rendering" },
    paragraphs: [
      "I led Cynisca’s motor housing from design to a tested motor stack, bringing structural analysis, precision machining, and team leadership together to deliver lighter hardware built for the track."
    ],
    links: [{ href: "#project/solar-racing-motor-housing", label: "Explore the motor housing project" }]
  },
  "Spartan Technical Consulting": {
    id: "spartan-technical-consulting", name: "Spartan Technical Consulting", bannerName: "Spartan Technical Consulting",
    hideLogo: true, logo: `${logos}stc-light.png`, logoDark: `${logos}stc-dark.jpg`, website: "https://www.linkedin.com/company/stc-msu/", websiteLabel: "Spartan Technical Consulting on LinkedIn",
    program: "Student-led engineering consulting · Michigan State University",
    photo: { src: `${logos}stc-light.png`, darkSrc: `${logos}stc-dark.jpg`, alt: "Spartan Technical Consulting's green and black logo", contain: true, caption: "Building a bridge between student engineers and growing companies." },
    paragraphs: [
      "I founded Michigan State University’s first engineering-focused, project-based consulting group, building partnerships, teams, and training that give students real client experience and growing companies pro bono technical support."
    ],
    links: [{ href: "https://www.instagram.com/spartantechnicalconsulting/", label: "Spartan Technical Consulting on Instagram" }]
  },
  "National Aeronautics and Space Administration Lucy Student Pipeline Accelerator and Competency Enabler": {
    id: "nasa-lspace", name: "Lucy Mission Student Academy", bannerName: "Venus Aerobot Reference", website: "https://www.lspace.asu.edu/",
    program: "Orpheus · Venus aerobot thermal architecture",
    banner: { src: `${root}venus-aerobot.jpg`, alt: "National Aeronautics and Space Administration Jet Propulsion Laboratory's Venus aerobot prototype being prepared for a desert test flight", label: "Public aerobot reference · National Aeronautics and Space Administration/Jet Propulsion Laboratory-Caltech · Separate from the Orpheus student concept" },
    photo: { src: `${root}lspace-logo.png`, alt: "National Aeronautics and Space Administration Lucy Student Pipeline Accelerator and Competency Enabler program logo", contain: true, source: "https://www.lspace.asu.edu/", caption: "Mission Concept Academy · Lead Thermal Engineer" },
    paragraphs: [
      "I led thermal engineering for a Venus aerobot student concept, bringing architecture, hardware integration, and risk planning together into a lighter system ready for preliminary design review."
    ]
  },
  "Experimental Solid Mechanics Lab, Michigan State University": {
    id: "experimental-mechanics", name: "Experimental Solid Mechanics Lab", bannerName: "Experimental Mechanics",
    logo: `${logos}msu.png`, website: "https://www.egr.msu.edu/~sivan/",
    program: "Experimental mechanics & battery research",
    photo: { src: `${root}esm-setup.jpg`, alt: "Optical table and measurement setup published by Michigan State University's Experimental Solid Mechanics Laboratory", contain: true, source: "https://www.egr.msu.edu/~sivan/", caption: "Public lab photograph · Experimental instrumentation" },
    paragraphs: [
      "I studied what lithium-ion cell strain reveals about electrochemical behavior and overheating risk, combining experimental mechanics with test-fixture design to make battery measurements more repeatable."
    ]
  }
};
