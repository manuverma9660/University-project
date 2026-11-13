export type SitePage = { title: string; href: string; description?: string; status?: string };
export type NavigationGroup = { label: string; href: string; columns?: { title: string; items: SitePage[] }[]; items?: SitePage[]; direct?: boolean };

const pages = (items: [string, string, string?][]): SitePage[] => items.map(([title, href, status]) => ({ title, href, status }));

export const navigation: NavigationGroup[] = [
  {
    label: "About", href: "/about/", columns: [
      { title: "About ITHS", items: pages([["About ITHS", "/about/"], ["Founder’s Message", "/about/founder-message/"], ["Director’s Message", "/about/director-message/"], ["Awards and Recognitions", "/about/awards-and-recognitions/"], ["Leadership", "/about/leadership/"], ["Faculty", "/about/faculty/"], ["Labs", "/about/labs/"], ["Approvals and Recognition", "/about/approvals-and-recognition/"]]) },
      { title: "Governance", items: pages([["Governance", "/governance/"], ["Board of Governance", "/governance/board-of-governance/"], ["Board of Management", "/governance/board-of-management/"], ["IQAC", "/governance/iqac/", "Shown when constituted by ITHS"]]) },
      { title: "Partnerships", items: pages([["Partnerships", "/partnerships/"], ["University Partners", "/partnerships/university-partners/"]]) },
    ]
  },
  {
    label: "Courses", href: "/academics/", columns: [
      { title: "Departments", items: pages([["All Departments", "/academics/"], ["Clinical Embryology & ART", "/academics/clinical-embryology-art/"], ["Cancer Biology", "/academics/cancer-biology/"], ["Nutrigenetics & Personalised Nutrition", "/academics/nutrigenetics-personalised-nutrition/"], ["Stem Cell & Regenerative Medicine", "/academics/stem-cell-regenerative-medicine/"], ["Molecular Medicine", "/academics/molecular-medicine/"], ["Neuroscience", "/academics/neuroscience/"]]) },
      { title: "Programmes", items: pages([["All Programmes", "/programmes/"], ["Undergraduate", "/programmes/undergraduate/"], ["Postgraduate", "/programmes/postgraduate/"], ["Diploma", "/programmes/diploma/"], ["Doctoral (PhD)", "/programmes/doctoral/"], ["Certificate Programmes", "/programmes/certificate/"], ["PG Diploma", "/programmes/pg-diploma/"], ["Fellowship Programmes", "/programmes/fellowship/"], ["Training Programmes", "/programmes/training/"]]) },
    ]
  },
  { label: "Campuses", href: "/campuses/", items: pages([["All Campuses", "/campuses/"], ["Hoshiarpur", "/campuses/hoshiarpur/"], ["Bhopal", "/campuses/bhopal/"], ["Mohali", "/campuses/mohali/"], ["Shimla Hills (Waknaghat)", "/campuses/shimla-hills/"]]) },
  {
    label: "Admission", href: "/admissions/", columns: [
      { title: "Find your course", items: pages([["Courses After 10th", "/admissions/courses-after-10th/"], ["Courses After 10+2", "/admissions/courses-after-12th/"], ["Courses After Graduation", "/admissions/courses-after-graduation/"], ["Courses After Post Graduation", "/admissions/courses-after-post-graduation/"], ["Industry Embedded Courses", "/admissions/industry-embedded-courses/"], ["Lateral Entry Programmes", "/admissions/lateral-entry-programmes/"], ["Specialised Courses", "/admissions/specialised-courses/"]]) },
      { title: "Apply and pay", items: pages([["Admissions Overview", "/admissions/"], ["How to Apply", "/admissions/how-to-apply/"], ["Eligibility", "/admissions/eligibility/"], ["Important Dates", "/admissions/important-dates/"], ["Apply Online", "/apply/"], ["Enquire", "/enquire/"]]) },
      { title: "Scholarships and help", items: pages([["ITHS-SET", "/iths-set/"], ["Register for ITHS-SET", "/iths-set/#register"], ["Scholarships and ITHS-SET (up to 100%)", "/admissions/scholarships-iths-set/"], ["National Scholarship Portal (NSP)", "/admissions/national-scholarship-portal/"], ["FAQs", "/faqs/"], ["For Parents", "/admissions/for-parents/"], ["Fee Details", "/enquire/?topic=fees"], ["Contact Admissions", "/contact/#admissions"]]) },
    ]
  },
  { label: "Life @ ITHS", href: "/campus-life/", items: pages([["ITHS Events", "/events/"], ["Life at ITHS", "/campus-life/"], ["ITHS Wellness Studio", "/wellness-studio/"]]) },
  {
    label: "ITHS Events", href: "/events/", columns: [
      { title: "Research at ITHS", items: pages([["Research at ITHS", "/research/"], ["Research and Development", "/research/research-and-development/"], ["Publications", "/research/publications/"], ["Patents", "/research/patents/"], ["PhD Scholars", "/research/phd-scholars/"], ["Research Projects", "/research/projects/"], ["ITHS Research Club (UG and PG research teams)", "/research/research-club/"], ["CIPRI: Centre for Intellectual Property Right & Innovation", "/research/cipri/"], ["Research Collaborators", "/research/collaborators/"], ["Partnerships", "/partnerships/"], ["University Partners", "/partnerships/university-partners/"]]) },
    ]
  },
  { label: "Contact Us", href: "/contact/", direct: true },
];

export const quickLinks: SitePage[] = [
  { title: "Placements", href: "/placed-students/" },
  { title: "Contact", href: "/contact/" },
  { title: "Apply Online", href: "/apply/" },
];

export const routePages: SitePage[] = [
  ...navigation.flatMap(group => [
    { title: group.label, href: group.href },
    ...(group.items ?? []),
    ...(group.columns ?? []).flatMap(column => column.items),
  ]),
  ...quickLinks,
  { title: "Enquire", href: "/enquire/" },
  { title: "Cancer Biology Course", href: "/programs/cancer-biology/" },
  { title: "Placed Students", href: "/placed-students/" },
];

const uniquePages = [...new Map(routePages.map(page => {
  const pathname = page.href.split(/[?#]/)[0];
  return [pathname, { ...page, href: pathname }];
})).values()];
export const allRoutePages = uniquePages;

export const pageDescriptions: Record<string, string> = {
  "/about/": "Learn about the University of Translational Health Science, its purpose, and its academic community.",
  "/academics/": "Explore ITHS departments and study areas across the health sciences.",
  "/programmes/": "Browse undergraduate, postgraduate, diploma, doctoral, certificate, fellowship, and training programmes.",
  "/programs/cancer-biology/": "Explore undergraduate and postgraduate Cancer Biology study pathways at ITHS.",
  "/admissions/": "Find course guidance, eligibility information, important dates, and ways to apply to ITHS.",
  "/research/": "Discover research activity, publications, projects, patents, and collaboration at ITHS.",
  "/research/research-and-development/": "Explore health science research directions, laboratory learning and how to discuss research opportunities with ITHS.",
  "/research/research-club/": "Explore research skills, scientific reading and participation enquiries for undergraduate and postgraduate students at ITHS.",
  "/research/publications/": "Find information about scientific publications, patents and how to request research documentation from ITHS.",
  "/campuses/": "Explore ITHS campus locations and university collaborations.",
  "/placed-students/": "Meet ITHS graduates who have given written consent to share their placement stories.",
  "/events/": "Explore events, workshops, and moments from the ITHS campus community.",
};

export const departmentProgrammes: Record<string, string[]> = {
  "/academics/clinical-embryology-art/": ["B.Sc", "M.Sc", "PG Diploma", "PhD"],
  "/academics/cancer-biology/": ["B.Sc", "M.Sc"],
  "/academics/nutrigenetics-personalised-nutrition/": ["B.Sc", "M.Sc"],
  "/academics/stem-cell-regenerative-medicine/": ["B.Sc", "M.Sc", "B.Tech Stem Cell & Tissue Engineering"],
  "/academics/molecular-medicine/": ["B.Sc", "M.Sc", "PG Diploma in Genetic Counselling"],
  "/academics/neuroscience/": ["M.Sc"],
};


export const navigationPublication = {
  verifiedResearchPaths: [] as readonly string[],
  signedMouPaths: [] as readonly string[],
};

export function getVisibleNavigation(): NavigationGroup[] {
  return navigation;
}
