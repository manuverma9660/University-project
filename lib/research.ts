export const researchSections = [
  { title: "Research at ITHS", href: "/research/", group: "Research & innovation", description: "Explore research guidance and specialist health science departments." },
  { title: "Research and Development", href: "/research/research-and-development/", group: "Research & innovation", description: "Explore health science research directions and how to discuss a research idea." },
  { title: "Publications", href: "/research/publications/", group: "Research & innovation", description: "Request verified publication citations and journal or source details." },
  { title: "Patents", href: "/research/patents/", group: "Research & innovation", description: "Request verified patent and intellectual property information." },
  { title: "PhD Scholars", href: "/research/phd-scholars/", group: "People & partnerships", description: "Explore doctoral research areas and enquire about current scholars and supervision." },
  { title: "Research Projects", href: "/research/projects/", group: "Research & innovation", description: "Explore project directions and ask ITHS about current approved project records." },
  { title: "ITHS Research Club (UG and PG research teams)", href: "/research/research-club/", group: "People & partnerships", description: "Explore student research skills and ask about current club activities." },
  { title: "CIPRI: Centre for Intellectual Property Rights & Innovation", href: "/research/cipri/", group: "Research & innovation", description: "Contact ITHS about current intellectual property and innovation information." },
  { title: "Research Collaborators", href: "/research/collaborators/", group: "People & partnerships", description: "Enquire about documented research collaborations and current agreements." },
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
    title: "Publications",
    intro: "Explore how scientific work is documented and shared. For ITHS publication references or supporting documents, contact the university research team.",
    heading: "Explore research outputs.",
    areas: [
      { title: "Scientific publications", text: "A publication record identifies the authors, work title, journal or publisher, year and a DOI or source link. Request these details when enquiring about ITHS research.", href: "/enquire/?topic=publications", link: "Request publication references" },
      { title: "Publication sources", text: "Use a DOI, journal page or publisher record to confirm a paper’s title, authors, publication year and version.", href: "/enquire/?topic=publications", link: "Request publication references" },
      { title: "Student research", text: "Interested in learning how to read and discuss research? Explore the Research Club and ask about current opportunities to participate.", href: "/research/research-club/", link: "Explore the Research Club" },
    ],
    stepsTitle: "Request publication references.",
    steps: [
      { title: "Name the subject", text: "Include the research area, author, publication title or year, if known." },
      { title: "Ask for the citation", text: "Request the journal or publisher details and a DOI or official source link." },
      { title: "Check the source", text: "Confirm the publication details against the journal or publisher record before citing the work." },
    ],
  },
  "/research/patents/": {
    title: "Patents and Intellectual Property",
    intro: "Find guidance on requesting verified patent information from ITHS. Application and grant details should always be checked against the official patent record.",
    heading: "Understand an intellectual property record.",
    areas: [
      { title: "Patent status", text: "A published application, a pending application and a granted patent are different stages. Ask for the current record and its source before citing it.", href: "/enquire/?topic=patents", link: "Ask about a patent record" },
      { title: "Invention details", text: "A useful reference includes the invention title, inventor or applicant, application number, filing date and jurisdiction where available.", href: "/enquire/?topic=patents", link: "Request available details" },
      { title: "Research and translation", text: "Explore ITHS research directions and academic areas that may connect with health science innovation.", href: "/research/research-and-development/", link: "Explore research directions" },
    ],
    stepsTitle: "Request a verified patent reference.",
    steps: [
      { title: "Identify the record", text: "Share a known title, inventor name or application number so the team can identify the record you mean." },
      { title: "Ask for its status", text: "Request the source document or official register entry and confirm whether it is an application or a grant." },
      { title: "Cite the source", text: "Use the verified application or grant details when referencing intellectual property information." },
    ],
  },
  "/research/phd-scholars/": {
    title: "PhD Scholars",
    intro: "Explore doctoral research areas and ask ITHS about current scholar profiles, supervision and opportunities. A verified scholar directory is not currently published on this page.",
    heading: "Start with a research area that interests you.",
    areas: [
      { title: "Choose a discipline", text: "Review specialist academic areas such as molecular medicine, neuroscience, cancer biology and regenerative science.", href: "/academics/", link: "Explore academic departments" },
      { title: "Discuss supervision", text: "Ask the academic team whether an appropriate research supervisor and subject area are currently available.", href: "/enquire/?topic=research", link: "Contact the research team" },
      { title: "Review study requirements", text: "Doctoral entry requirements and current openings should be confirmed with admissions for the intended intake.", href: "/admissions/courses-after-post-graduation/", link: "Explore doctoral admission guidance" },
    ],
    stepsTitle: "Plan a doctoral enquiry.",
    steps: [
      { title: "Share your background", text: "Include your relevant master’s degree, subject area and research experience." },
      { title: "Describe your interests", text: "Outline the health science question or topic you would like to explore." },
      { title: "Confirm availability", text: "Ask about current openings, supervision, eligibility and the application process." },
    ],
  },
  "/research/projects/": {
    title: "Research Projects",
    intro: "Explore health science research directions and learn how to discuss a project idea with ITHS. A verified project list, team details and project statuses are not currently published here.",
    heading: "Turn a question into a project plan.",
    areas: [
      { title: "Cancer and cellular science", text: "Explore cancer biology and cellular research as starting points for a focused question about health.", href: "/academics/cancer-biology/", link: "Explore cancer biology" },
      { title: "Regenerative medicine", text: "Learn about stem cell and regenerative science study areas, then ask about suitable research guidance.", href: "/academics/stem-cell-regenerative-medicine/", link: "Explore regenerative medicine" },
      { title: "Molecular health science", text: "Connect molecular medicine and genetics with questions that can be discussed with an academic supervisor.", href: "/academics/molecular-medicine/", link: "Explore molecular medicine" },
    ],
    stepsTitle: "Discuss a project idea with ITHS.",
    steps: [
      { title: "Define the question", text: "Describe the topic, health science context and what you hope to understand." },
      { title: "Check feasibility", text: "Ask about academic supervision, facilities, methods, timelines and approvals that may apply." },
      { title: "Confirm the project", text: "Agree the scope and participation requirements with ITHS before beginning any research activity." },
    ],
  },
  "/research/cipri/": {
    title: "CIPRI: Centre for Intellectual Property Rights & Innovation",
    intro: "Learn where to ask about intellectual property, research documentation and innovation at ITHS. Contact the university for current information about CIPRI activities, services and participation.",
    heading: "Give health science ideas a clear next step.",
    areas: [
      { title: "Document an idea", text: "Keep a clear record of the research question, contributors and supporting work when discussing a new idea.", href: "/enquire/?topic=research", link: "Ask ITHS for guidance" },
      { title: "Understand IP records", text: "Request verified information about an application, its inventors and its current recorded status.", href: "/research/patents/", link: "Explore patent information" },
      { title: "Connect research and practice", text: "Explore academic and laboratory directions in translational health science.", href: "/research/research-and-development/", link: "Explore research and development" },
    ],
    stepsTitle: "Ask about innovation support.",
    steps: [
      { title: "Describe the idea", text: "Share a short description of the research or innovation question and its health science context." },
      { title: "Ask about the process", text: "Confirm the current ITHS contact, documentation requirements and any review process." },
      { title: "Verify information", text: "Request approved details before citing a service, project, patent or collaboration." },
    ],
  },
  "/research/collaborators/": {
    title: "Research Collaborators",
    intro: "Find out how to enquire about research collaboration with ITHS. A verified public collaborator directory and current agreement details are not published on this page.",
    heading: "Build a clear foundation for collaboration.",
    areas: [
      { title: "Academic collaboration", text: "Describe your institution, research interests and the expertise you hope to connect with.", href: "/enquire/?topic=collaboration", link: "Start a collaboration enquiry" },
      { title: "Clinical and laboratory interests", text: "Outline the research setting, facilities, supervision and approvals relevant to your proposal.", href: "/about/labs/", link: "Explore ITHS laboratories" },
      { title: "University partners", text: "Review ITHS campus partners and confirm which university and programme a proposed activity relates to.", href: "/partnerships/university-partners/", link: "View university partners" },
    ],
    stepsTitle: "Make a collaboration enquiry.",
    steps: [
      { title: "Share the purpose", text: "Summarise the research question, subject area and intended outcome of the collaboration." },
      { title: "Identify the people and institutions", text: "Include the participating teams, institutions and relevant academic contacts." },
      { title: "Confirm current arrangements", text: "Ask ITHS to verify availability, approvals and any agreement required before work begins." },
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
  if (href === "/partnerships/") return true;
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
