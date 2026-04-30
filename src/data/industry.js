import { industryExperience as base } from "./industryExperience";

export const industryExperience = base.map((item) =>
  item.company === "Zoox"
    ? { ...item, company: "Zoox, Inc.", theme: "Automotive Quality Engineering" }
    : item
);
