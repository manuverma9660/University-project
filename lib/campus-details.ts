export type CampusKey = "bhopal" | "hoshiarpur" | "shimla" | "mohali";

export const campusDetails: Record<CampusKey, {
  shortName: string;
  campusName: string;
  partner: string;
  introduction: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  programmeHeading: string;
  programmeIntro: string;
  programmes: { level: string; name: string; duration: string; durationLabel?: string; eligibility: string; description: string }[];
  highlights: { title: string; description: string }[];
  partnerDescription: string;
  address: string;
}> = {
  bhopal: {
    shortName: "SGSU",
    campusName: "Bhopal",
    partner: "SCOPE Global Skills University",
    introduction: "Study Clinical Embryology & ART in Central India, with specialist teaching, practical lab learning, and clinical exposure.",
    benefits: ["Industry-aligned curriculum", "Hands-on laboratory learning", "Career and placement support"],
    image: "/images/campuses/bhopal-hero.webp",
    imageAlt: "Scope Global Skills University campus in Bhopal",
    programmeHeading: "Clinical Embryology & ART programmes",
    programmeIntro: "Choose a pathway that fits your academic background and career goals.",
    programmes: [
      { level: "Undergraduate", name: "B.Sc. (Hons./Research)", duration: "3 years", eligibility: "10+2 with PCB", description: "Build a strong foundation in clinical embryology, reproductive science, and IVF laboratory practice." },
      { level: "Postgraduate", name: "M.Sc. Clinical Embryology & ART", duration: "2 years", eligibility: "B.Sc. in Life Sciences", description: "Develop advanced knowledge through specialist study, research, and practical laboratory learning." },
      { level: "Diploma", name: "PG Diploma", duration: "1 year", eligibility: "Relevant bachelor’s degree", description: "A focused pathway for graduates looking to specialise in assisted reproductive technology." },
    ],
    highlights: [
      { title: "Practical lab learning", description: "Develop familiarity with the methods and skills used in assisted reproductive technology." },
      { title: "Clinical exposure", description: "Connect classroom learning with clinical practice and IVF centre environments." },
      { title: "Central India location", description: "Study in Bhopal with access for students from Madhya Pradesh and neighbouring states." },
    ],
    partnerDescription: "ITHS Bhopal programmes are delivered in association with SCOPE Global Skills University.",
    address: "NH-12, Near Misrod, Village Bhairopur, Hoshangabad Road, Bhopal, Madhya Pradesh 462026",
  },
  hoshiarpur: {
    shortName: "RBPU",
    campusName: "Hoshiarpur",
    partner: "Rayat Bahra Professional University",
    introduction: "Study ART & Clinical Embryology with advanced laboratory learning, expert guidance, and practical clinical exposure.",
    benefits: ["Industry-aligned health science programmes", "Hands-on lab training and clinical exposure", "Career guidance and placement support"],
    image: "/images/campuses/hoshiarpur.jpg",
    imageAlt: "Rayat Bahra Professional University campus in Hoshiarpur",
    programmeHeading: "ART & Clinical Embryology programmes",
    programmeIntro: "Explore undergraduate and postgraduate pathways offered at the Hoshiarpur campus.",
    programmes: [
      { level: "Undergraduate", name: "B.Sc. (Hons./Research)", duration: "3 years", eligibility: "10+2 with PCB (50%)", description: "Start your study of assisted reproductive technology and clinical embryology with foundational science and practical learning." },
      { level: "Postgraduate", name: "M.Sc. Clinical Embryology", duration: "2 years", eligibility: "B.Sc. Life Sciences (50%)", description: "Build advanced knowledge in clinical embryology through specialist study and laboratory training." },
    ],
    highlights: [
      { title: "Specialist study", description: "Focus your studies on ART and clinical embryology at the Hoshiarpur campus." },
      { title: "Practical learning", description: "Connect subject knowledge with laboratory practice and clinical exposure." },
      { title: "Student guidance", description: "Get support with course enquiries, campus information, and next steps." },
    ],
    partnerDescription: "ITHS Hoshiarpur programmes are delivered in association with Rayat Bahra Professional University.",
    address: "Rayat Bahra Professional University, Hoshiarpur–Phagwara Highway, District Hoshiarpur, Punjab 146001",
  },
  shimla: {
    shortName: "BU",
    campusName: "Shimla",
    partner: "Bahra University",
    introduction: "Study Clinical Embryology and Stem Cell & Regenerative Medicine in a focused campus setting with practical laboratory and clinical learning.",
    benefits: ["Industry-aligned health science programmes", "Hands-on lab training and clinical exposure", "A peaceful hill campus for focused study"],
    image: "/images/campuses/bahra-shimla-section.png",
    imageAlt: "Bahra University campus in Shimla Hills, Waknaghat",
    programmeHeading: "Clinical Embryology & Stem Cell programmes",
    programmeIntro: "Explore the study pathways listed for the Shimla campus.",
    programmes: [
      { level: "Undergraduate", name: "B.Sc. Clinical Embryology", duration: "3 years", eligibility: "Confirm with admissions", description: "Build foundational knowledge in reproductive science with clinical and laboratory learning." },
      { level: "Postgraduate", name: "M.Sc. Clinical Embryology", duration: "2 years", eligibility: "Confirm with admissions", description: "Develop specialist knowledge in clinical embryology and assisted reproductive technology." },
      { level: "Undergraduate", name: "B.Sc. Stem Cell & Regenerative Medicine", duration: "3 years", eligibility: "Confirm with admissions", description: "Explore cell therapy and tissue regeneration through study in regenerative science." },
    ],
    highlights: [
      { title: "Research labs", description: "The campus lists modern research laboratory facilities for specialist learning." },
      { title: "Clinical exposure", description: "Hospital tie-ups connect learning with clinical environments." },
      { title: "Hill campus", description: "Study at Waknaghat in the Himachal Pradesh hills, with listed hostel and transport facilities." },
    ],
    partnerDescription: "ITHS Shimla programmes are offered in collaboration with Bahra University.",
    address: "ITHS, Bahra University, Waknaghat, Solan, Himachal Pradesh 173234",
  },
  mohali: {
    shortName: "RBU",
    campusName: "Mohali",
    partner: "Rayat Bahra University",
    introduction: "Explore specialist health science programmes with laboratory learning and clinical exposure at the Rayat Bahra University campus.",
    benefits: ["Specialist health science programmes", "Hands-on lab training and clinical exposure", "Campus facilities and transport options"],
    image: "/images/campuses/rayat-bahra-mohali-section.png",
    imageAlt: "Rayat Bahra University campus in Mohali, Chandigarh",
    programmeHeading: "Health science programmes",
    programmeIntro: "Explore the programme areas listed for the Chandigarh (Mohali) campus.",
    programmes: [
      { level: "Undergraduate & postgraduate", name: "Nutrigenetics & Personalized Nutrition", duration: "B.Sc. / M.Sc.", durationLabel: "Study pathways", eligibility: "Confirm with admissions", description: "Study how genetics and nutrition relate to personalised health." },
      { level: "Undergraduate, postgraduate & doctoral", name: "ART & Clinical Embryology", duration: "B.Sc. / M.Sc. / Ph.D.", durationLabel: "Study pathways", eligibility: "Confirm with admissions", description: "Explore assisted reproductive technology and clinical embryology." },
      { level: "Undergraduate & postgraduate", name: "Stem Cell & Regenerative Medicine", duration: "B.Sc. / M.Sc.", durationLabel: "Study pathways", eligibility: "Confirm with admissions", description: "Study cell therapy, tissue regeneration, and regenerative science." },
      { level: "Undergraduate & postgraduate", name: "Cancer Biology", duration: "B.Sc. / M.Sc.", durationLabel: "Study pathways", eligibility: "Confirm with admissions", description: "Build knowledge in cancer biology and oncology research." },
    ],
    highlights: [
      { title: "Specialist laboratories", description: "The campus lists research labs and computer lab facilities for student learning." },
      { title: "Clinical training", description: "Hospital tie-ups provide a connection to clinical learning environments." },
      { title: "Campus support", description: "Listed facilities include library, hostels, cafeteria, and bus transport." },
    ],
    partnerDescription: "ITHS Chandigarh (Mohali) programmes are offered in collaboration with Rayat Bahra University.",
    address: "ITHS, Rayat Bahra University, VPO Sahauran, Tehsil Kharar, Punjab 140104",
  },
};

