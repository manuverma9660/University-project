export const courseCatalogue = [
  { title: "Clinical Embryology & ART", href: "/programs/clinical-embryology/", departmentHref: "/academics/clinical-embryology-art/", image: "/clinical-embryology.webp", levels: "B.Sc. · M.Sc. · PG Diploma · Ph.D.", description: "Explore reproductive science, embryology and practical laboratory methods used in assisted reproduction." },
  { title: "Stem Cell & Regenerative Medicine", href: "/programs/stem-cell-regenerative-medicine/", departmentHref: "/academics/stem-cell-regenerative-medicine/", image: "/stem-cell.webp", levels: "B.Sc. · M.Sc.", description: "Discover stem cell biology, cell culture and the science of tissue repair and regeneration." },
  { title: "Nutrigenetics & Personalised Nutrition", href: "/programs/nutrigenetics-personalized-nutrition/", departmentHref: "/academics/nutrigenetics-personalised-nutrition/", image: "/nutrigenetics.webp", levels: "B.Sc. · M.Sc.", description: "Study how genetic variation influences nutrition and approaches to personalised dietary planning." },
  { title: "Molecular Medicine", href: "/molecular-medicine/", departmentHref: "/academics/molecular-medicine/", image: "/images/about-iths-dna-research.webp", levels: "B.Sc. · M.Sc.", description: "Explore genes, proteins and cells, and their role in disease research and molecular diagnostics." },
  { title: "Cancer Biology", href: "/programs/cancer-biology/", departmentHref: "/academics/cancer-biology/", image: "/cancer-biology.webp", levels: "B.Sc. · M.Sc.", description: "Understand tumour biology, molecular oncology and laboratory approaches to cancer research." },
  { title: "Neuroscience", href: "/msc-neuroscience/", departmentHref: "/academics/neuroscience/", image: "/images/about-iths-biomedical.webp", levels: "M.Sc.", description: "Study the nervous system, cognition and behaviour through postgraduate coursework and research." },
  { title: "B.Tech Stem Cell & Tissue Engineering", href: "/programs/b-tech-stem-cell-tissue-engineering/", departmentHref: "/programs/b-tech-stem-cell-tissue-engineering/", image: "/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp", levels: "B.Tech · 4 years", description: "Combine engineering and biology through biomaterials, bioreactor design and tissue fabrication." },
] as const;

export const btechCourseHref = "/programs/b-tech-stem-cell-tissue-engineering/";

export function getCourseDestination(href: string) {
  return courseCatalogue.find(course => course.href === href)?.departmentHref ?? href;
}

export function getProgrammeHref(departmentHref: string, programme: string) {
  if (programme.startsWith("B.Tech")) return btechCourseHref;
  return courseCatalogue.find(course => course.departmentHref === departmentHref)?.href ?? departmentHref;
}

