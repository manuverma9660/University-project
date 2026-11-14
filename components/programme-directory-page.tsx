import Image from "next/image";
import Link from "next/link";
import { departments, programmeCategories } from "@/lib/site-content";
import { courseCatalogue, getProgrammeHref } from "@/lib/course-catalogue";
import styles from "./programme-directory-page.module.css";

const categoryImages: Record<string, { image: string; alt: string; intro: string }> = {
  "/programmes/": { image: "/images/about-iths-dna-research.webp", alt: "Health science research at ITHS", intro: "Explore study routes across specialist health science subjects, from undergraduate learning to postgraduate and research pathways." },
  "/programmes/undergraduate/": { image: "/clinical-embryology.webp", alt: "Clinical embryology laboratory study", intro: "Start after Class 12 with a health science or engineering route. Check the subject requirements for each programme." },
  "/programmes/postgraduate/": { image: "/cancer-biology.webp", alt: "Cancer biology research and postgraduate study", intro: "Build on a relevant undergraduate qualification with specialist postgraduate study in health science." },
  "/programmes/diploma/": { image: "/stem-cell.webp", alt: "Stem cell and regenerative medicine laboratory work", intro: "Explore listed diploma pathways and ask admissions about the current course, duration and entry requirements." },
  "/programmes/doctoral/": { image: "/images/about-iths-biomedical.webp", alt: "Biomedical research for doctoral study", intro: "Explore doctoral study areas and discuss research topics, supervision and current admission requirements with ITHS." },
  "/programmes/certificate/": { image: "/nutrigenetics.webp", alt: "Nutrigenetics and personalised nutrition", intro: "Ask ITHS about current certificate options, subject areas, duration and upcoming availability." },
  "/programmes/pg-diploma/": { image: "/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp", alt: "Students gaining practical laboratory exposure", intro: "Review postgraduate diploma options listed by ITHS and confirm current availability with admissions." },
  "/programmes/fellowship/": { image: "/iths-learning-01.webp", alt: "Collaborative health science learning", intro: "Contact ITHS to ask about current fellowship opportunities, eligibility and application timelines." },
  "/programmes/training/": { image: "/images/notices/New-Batch-at-ITHS-2026.webp", alt: "ITHS students taking part in academic induction", intro: "Ask about practical training options, intended participants, schedules and current registration details." },
};

export function ProgrammeDirectoryPage({ href }: { href: string }) {
  const category = programmeCategories.find(item => item.href === href);
  const visual = categoryImages[href] ?? categoryImages["/programmes/"];
  const heading = category?.title ?? "Programmes at ITHS";
  const offerings = category ? departments.flatMap(department => {
    const matched = department.programmes.filter(programme => category.levels.some(level => programme.startsWith(level)));
    return matched.length ? [{ department, matched }] : [];
  }) : [];

  return <main id="main-content" className={styles.page}>
    <section className={styles.hero}><Image src={visual.image} alt={visual.alt} fill priority sizes="100vw" /><div className={styles.shade} /><div className={styles.heroContent}><p className={styles.eyebrow}>{category ? "Study pathway" : "Courses & study pathways"}</p><h1>{heading}</h1><p>{visual.intro}</p><div className={styles.actions}><Link href="#pathways">Explore pathways <span aria-hidden="true">↓</span></Link><Link href="/enquire/">Ask admissions <span aria-hidden="true">→</span></Link></div></div></section>
    <section id="pathways" className={styles.section}><div className={styles.container}><header className={styles.sectionHead}><p className={styles.eyebrow}>{category ? "Find a programme" : "Choose your direction"}</p><h2>{category ? `Explore ${heading.toLowerCase()} options` : "Browse study pathways"}</h2><p>Programme duration, eligibility, campus and awarding university can differ. Confirm current details with ITHS admissions before applying.</p></header>
      {!category ? <div className={styles.categoryGrid}>{programmeCategories.map((item,index)=>{const image=categoryImages[item.href];return <article className={styles.categoryCard} key={item.href}><Link href={item.href} className={styles.cardImage}><Image src={image.image} alt={image.alt} fill sizes="(max-width:700px) 100vw,(max-width:1000px) 50vw,25vw" /></Link><div><span className={styles.number}>PATHWAY 0{index+1}</span><h3><Link href={item.href}>{item.title}</Link></h3><p>{image.intro}</p><Link className={styles.cardLink} href={item.href}>Explore pathway <span aria-hidden="true">→</span></Link></div></article>;})}</div>
      : offerings.length ? <div className={styles.courseGrid}>{offerings.map(({department,matched})=>{const course=courseCatalogue.find(item=>item.departmentHref===department.href);const destination=getProgrammeHref(department.href,matched.length===1?matched[0]:"");return <article className={styles.courseCard} key={department.href}><Link href={destination} className={styles.cardImage}><Image src={course?.image ?? "/images/about-iths-biomedical.webp"} alt={`${department.shortTitle} study`} fill sizes="(max-width:700px) 100vw,(max-width:1000px) 50vw,33vw" /></Link><div><span className={styles.number}>{matched.join(" · ")}</span><h3><Link href={destination}>{department.shortTitle}</Link></h3><p>{department.description}</p><div className={styles.tags}>{matched.map(level=><span key={level}>{level}</span>)}</div><Link className={styles.cardLink} href={destination}>View course <span aria-hidden="true">→</span></Link></div></article>;})}</div>
      : <div className={styles.emptyPathway}><div><p className={styles.eyebrow}>Availability enquiry</p><h3>Ask about current {heading.toLowerCase()} options.</h3><p>ITHS has not published a confirmed list for this pathway here. Contact admissions for current offerings, eligibility, duration and upcoming dates.</p><Link className={styles.cardLink} href="/enquire/">Ask admissions <span aria-hidden="true">→</span></Link></div><div aria-hidden="true" /></div>}
    </div></section>
  </main>;
}
