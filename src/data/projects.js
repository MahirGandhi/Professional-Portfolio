import { projectsCore } from "./projectsCore";
import { surfaceGallery } from "./surfaceGallery";

const surfaceModelingProject = {
  slug: "surface-modeling-library",
  title: "Surface Modeling Library",
  category: "CAD Skill Development",
  image: "",
  summary: "A full visual library of CAD models exploring sheet metal, surface modeling, assemblies, mechanisms, routing, and dynamic simulation workflows.",
  details: [
    "Built to demonstrate breadth across surfacing, sheet metal, mechanical assemblies, routing, motion constraints, and fit-for-function modeling",
    "Focused on manufacturability, clean feature strategy, geometric control, and visual communication of mechanical systems",
  ],
  metric: "15+ CAD studies",
  skills: ["Siemens NX", "Sheet Metal", "Tube & Pipe Routing", "Freeform", "Assemblies", "Animation Designer"],
  sections: [
    { heading: "Purpose", body: "This library documents smaller CAD studies used to build fluency across surfacing, mechanical assemblies, sheet metal workflows, routing, expressions, motion constraints, and design communication." },
    { heading: "Modeling Range", body: "The set spans consumer-product forms, mechanical linkages, sheet-metal brackets, routed pipe systems, mechanism assemblies, tanks, housings, couplings, gears, and dynamic simulation rigs." },
  ],
  gallery: surfaceGallery,
};

export const projects = [...projectsCore, surfaceModelingProject];
