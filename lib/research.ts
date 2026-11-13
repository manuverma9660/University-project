export const researchSections = [
  { title: "Research at ITHS", href: "/research/", group: "Research & innovation", description: "Explore research information and specialist health science departments." },
  { title: "Research and Development", href: "/research/research-and-development/", group: "Research & innovation", description: "Research priorities, facilities and approved institutional activities." },
  { title: "Publications", href: "/research/publications/", group: "Research & innovation", description: "Published work with authorship, journal details and source references." },
  { title: "Patents", href: "/research/patents/", group: "Research & innovation", description: "Intellectual property records with application details and recorded status." },
  { title: "PhD Scholars", href: "/research/phd-scholars/", group: "People & partnerships", description: "Approved scholar profiles, research topics and supervision details." },
  { title: "Research Projects", href: "/research/projects/", group: "Research & innovation", description: "Documented projects, research teams and project status." },
  { title: "ITHS Research Club (UG and PG research teams)", href: "/research/research-club/", group: "People & partnerships", description: "Undergraduate and postgraduate research teams and their activities." },
  { title: "CIPRI: Centre for Intellectual Property Right & Innovation", href: "/research/cipri/", group: "Research & innovation", description: "Approved information about intellectual property and innovation activities." },
  { title: "Research Collaborators", href: "/research/collaborators/", group: "People & partnerships", description: "Documented research collaborations and their areas of work." },
  { title: "Partnerships", href: "/partnerships/", group: "People & partnerships", description: "Institutional partnerships supported by signed agreements." },
] as const;

export const researchTopics: Record<string, {
  title: string;
  intro: string;
  heading: string;
  areas: { title: string; text: string; href: string; link: string }[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
}> = {
  "/research/research-and-development/": {
    title: "Research and Development",
    intro: "Explore the questions connecting laboratory science, health and practical learning. Discover subject areas and discuss research opportunities with ITHS.",
    heading: "Find a scientific direction.",
    areas: [
      { title: "Molecular and cellular science", text: "Explore molecular medicine, genetics and cellular processes as starting points for a research question.", href: "/academics/molecular-medicine/", link: "Explore molecular medicine" },
      { title: "Translational health science", text: "Discover how cancer biology and regenerative science connect biological understanding with questions about human health.", href: "/academics/cancer-biology/", link: "Explore cancer biology" },
      { title: "Laboratory learning", text: "Learn about the laboratory information published by ITHS. Ask the academic team about facilities and supervision relevant to your interests.", href: "/about/labs/", link: "Explore laboratory learning" },
    ],
    stepsTitle: "Start with a research question.",
    steps: [
      { title: "Choose a subject", text: "Identify the health science discipline and the question you would like to investigate." },
      { title: "Discuss feasibility", text: "Ask the academic team about supervision, suitable methods, laboratory access and any approvals required for the proposed work." },
      { title: "Plan the next step", text: "Confirm the scope, learning requirements and available opportunities directly with ITHS before starting a project." },
    ],
  },
  "/research/research-club/": {
    title: "ITHS Research Club",
    intro: "A starting point for undergraduate and postgraduate students interested in scientific questions, reading research and working with peers. Contact ITHS for current club activities and participation details.",
    heading: "Build your research skills.",
    areas: [
      { title: "Read and discuss", text: "Explore how to read a scientific paper, compare methods and discuss the evidence behind a conclusion.", href: "/research/publications/", link: "Explore publications and patents" },
      { title: "Develop a question", text: "Connect your course interests with a focused question. Discuss its scope and the skills needed with the academic team.", href: "/research/research-and-development/", link: "Explore research directions" },
      { title: "Connect across disciplines", text: "Find subjects that interest you across ITHS departments, from neuroscience to nutrition and regenerative science.", href: "/academics/", link: "Explore departments" },
    ],
    stepsTitle: "Interested in participating?",
    steps: [
      { title: "Share your interests", text: "Tell ITHS your programme, year of study and the research subjects you would like to explore." },
      { title: "Ask about activities", text: "Request the current club contact, meeting schedule and any opportunities for undergraduate or postgraduate students." },
      { title: "Confirm how to join", text: "Check participation requirements and the next available activity with the university team." },
    ],
  },
  "/research/publications/": {
    title: "Publications and Patents",
    intro: "Explore how scientific work is documented and shared. For ITHS publication references, patent details or supporting documents, contact the university research team.",
    heading: "Explore research outputs.",
    areas: [
      { title: "Scientific publications", text: "A publication record identifies the authors, work title, journal or publisher, year and a DOI or source link. Request these details when enquiring about ITHS research.", href: "/contact/?topic=publications", link: "Request publication references" },
      { title: "Patents and intellectual property", text: "Patent details include the invention title, applicant or inventor, application number and recorded status. An application and a granted patent represent different stages.", href: "/contact/?topic=patents", link: "Enquire about patent records" },
      { title: "Student research", text: "Interested in learning how to read and discuss research? Explore the Research Club and ask about current opportunities to participate.", href: "/research/research-club/", link: "Explore the Research Club" },
    ],
    stepsTitle: "Request the information you need.",
    steps: [
      { title: "Name the subject", text: "Include the research area, author, invention or title you are asking about, if known." },
      { title: "Specify the record", text: "Ask for a publication citation, source document or patent application reference and its current recorded status." },
      { title: "Contact ITHS", text: "The university team can help with available references and questions about research documentation." },
    ],
  },
};

export type ResearchRecord = {
  section: string;
  title: string;
  summary: string;
  reference: string;
  evidenceHref: string;
  verified: boolean;
  verifiedOn: string;
  year?: string;
  mouReference?: string;
};
export type ResearchMou = {
  partner: string;
  reference: string;
  signedOn: string;
  documentHref: string;
  sections: readonly string[];
  verified: boolean;
};
// Add only supplied, checked records. Do not seed publications or agreements.
export const researchRecords: readonly ResearchRecord[] = [];
export const researchMous: readonly ResearchMou[] = [];

function validEvidence(href: string) {
  return href.startsWith("/documents/") || /^https:\/\//.test(href);
}
export function getResearchRecords(href: string, records = researchRecords, mous = researchMous) {
  return records.filter(record => record.section === href && record.verified && record.reference.trim() && record.verifiedOn && validEvidence(record.evidenceHref)
    && (href !== "/research/collaborators/" || mous.some(mou => mou.verified && mou.reference === record.mouReference && mou.signedOn && validEvidence(mou.documentHref) && mou.sections.includes(href))));
}
type Publication = { verifiedResearchPaths: readonly string[]; signedMouPaths: readonly string[] };
export function isResearchPageAvailable(href: string, publication?: Publication) {
  return Object.hasOwn(researchTopics, href) || isResearchReady(href, publication);
}
export function getResearchMous(href: string, mous = researchMous) {
  return mous.filter(mou => mou.verified && mou.reference.trim() && mou.signedOn && validEvidence(mou.documentHref) && mou.sections.includes(href));
}
export function isResearchReady(href: string, publication?: Publication, records = researchRecords, mous = researchMous) {
  // The existing overview is a directory, not a claim of research output.
  if (href === "/research/") return true;
  if (!publication || !publication.signedMouPaths || !publication.verifiedResearchPaths) return false;
  const needsMou = href === "/partnerships/" || href === "/research/collaborators/";
  if (needsMou && (!publication.signedMouPaths.includes(href) || !getResearchMous(href, mous).length)) return false;
  if (href === "/partnerships/") return true;
  return publication.verifiedResearchPaths.includes(href) && getResearchRecords(href, records, mous).length > 0;
}
