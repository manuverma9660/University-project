import Image from "next/image";
import Link from "next/link";
import { campusDetails, type CampusKey } from "@/lib/campus-details";
import { campuses } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";
import styles from "./campuses-page.module.css";

const campusKeys: CampusKey[] = ["mohali", "hoshiarpur", "shimla", "bhopal"];
const campusLinks = { mohali: "/campuses/mohali/", hoshiarpur: "/campuses/hoshiarpur/", shimla: "/campuses/shimla-hills/", bhopal: "/campuses/bhopal/" };
const partnerLogos = { mohali: "/home/partner-rbu.png", hoshiarpur: "/home/partner-rbpu.png", shimla: "/home/partner-bahra.png", bhopal: "/home/partner-scope.png" };
const campusLabels = { mohali: "Chandigarh (Mohali)", hoshiarpur: "Hoshiarpur", shimla: "Shimla Hills", bhopal: "Bhopal" };

function courseHref(name: string) {
  if (name.includes("Nutrigenetics")) return "/programs/nutrigenetics-personalized-nutrition/";
  if (name.includes("B.Tech")) return "/programs/b-tech-stem-cell-tissue-engineering/";
  if (name.includes("Stem Cell")) return "/programs/stem-cell-regenerative-medicine/";
  if (name.includes("Cancer")) return "/programs/cancer-biology/";
  if (name.includes("Molecular")) return "/molecular-medicine/";
  if (name.includes("Neuroscience")) return "/msc-neuroscience/";
  return "/programs/clinical-embryology/";
}

function PinIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

const questions = [
  ["How do I choose a campus?", "Start with your course and entry qualification, then explore the campus location and university partner. Ask admissions to confirm the programme and intake available at your preferred campus."],
  ["Are all courses offered at every campus?", "No. Programme areas and study levels differ by campus. The listings on this page help you compare; admissions can confirm current availability, eligibility and fees."],
  ["Can I arrange a campus visit?", "Contact the admissions team before travelling. Ask about visit timings, the appropriate campus contact and whether you can discuss your course with the academic team."],
  ["What about accommodation and transport?", "Facilities and arrangements depend on the partner university campus. Confirm hostel availability, accommodation costs and transport options directly before making plans."],
  ["Which university awards my qualification?", "The university partner associated with your programme awards the qualification. Confirm your course, campus and awarding university with admissions before applying."],
];

export function CampusesPage() {
  return <main id="main-content" className={styles.page}>
    <section className={styles.hero} aria-labelledby="campuses-title"><div className={styles.container}><div className={styles.heroCopy}><p className={styles.eyebrow}>Find your place at ITHS</p><h1 id="campuses-title">Four campuses.<br />One shared <span>purpose.</span></h1><p>Explore health science education across our university partner locations. Find the setting, subject and study pathway that fit your next chapter.</p><div className={styles.heroActions}><a className={styles.button} href="#explore-campuses">Explore our campuses <span aria-hidden="true">&darr;</span></a><Link className={styles.heroSecondary} href="/enquire/">Talk to admissions <span aria-hidden="true">&rarr;</span></Link></div><div className={styles.heroFacts}><div><strong>04</strong><span>Campus locations</span></div><div><strong>04</strong><span>University partners</span></div><div><strong>UG &amp; PG</strong><span>Study pathways</span></div></div></div><div className={styles.collage}>{campusKeys.map((key,index)=><a className={styles.collagePhoto} href={`#campus-${key}`} key={key}><Image src={campusDetails[key].image} alt={campusDetails[key].imageAlt} fill priority={index<2} sizes="(max-width: 760px) 45vw, 23vw" /><span><PinIcon />{campusLabels[key]}</span></a>)}</div></div></section>

    <section id="explore-campuses" className={`${styles.section} ${styles.container}`} aria-labelledby="campus-directory-title"><header className={styles.sectionHead}><p className={styles.eyebrow}>Our campuses</p><h2 id="campus-directory-title">Your next chapter <span>starts here.</span></h2><p>Discover each location, its university partner and the programmes listed for that campus.</p></header><nav className={styles.jumpLinks} aria-label="Jump to a campus">{campusKeys.map(key=><a href={`#campus-${key}`} key={key}><PinIcon />{campusLabels[key]}</a>)}</nav><div className={styles.campusGrid}>{campusKeys.map(key=>{
      const details=campusDetails[key];
      const location=campuses.find(campus=>campus.href===campusLinks[key])!.location;
      return <article className={styles.campusCard} id={`campus-${key}`} key={key} aria-labelledby={`campus-${key}-title`}>
        <Link className={styles.campusPhoto} href={campusLinks[key]} tabIndex={-1} aria-hidden="true"><Image src={details.image} alt={details.imageAlt} fill sizes="(max-width: 760px) 90vw, 45vw" /><span className={styles.locationBadge}><PinIcon />{location}</span></Link>
        <div className={styles.campusBody}><div className={styles.partnerLogo}><Image src={partnerLogos[key]} alt={`${details.partner} logo`} width={180} height={80} /></div><p className={styles.kicker}>ITHS · {details.shortName}</p><h3 id={`campus-${key}-title`}>{campusLabels[key]}</h3><p className={styles.partnerName}>{details.partner}</p><p className={styles.description}>{details.introduction}</p><div className={styles.programmes}><h4>Study pathways</h4><ul>{details.programmes.map(programme=><li key={programme.name}><Link href={courseHref(programme.name)}><span>{programme.name}</span><span aria-hidden="true">&rarr;</span></Link><small>{programme.level} · {programme.duration}</small></li>)}</ul></div><div className={styles.highlights}><h4>Campus highlights</h4><ul>{details.highlights.map(highlight=><li key={highlight.title}><span aria-hidden="true">✓</span>{highlight.title}</li>)}</ul></div><div className={styles.cardBottom}><address><PinIcon /><span>{details.address}</span></address><a className={styles.mapLink} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(details.address)}`} target="_blank" rel="noreferrer">View location on map <span aria-hidden="true">↗</span></a><div className={styles.cardActions}><Link className={styles.button} href={campusLinks[key]}>Explore campus <span aria-hidden="true">&rarr;</span></Link><Link className={styles.outlineButton} href={`/enquire/?campus=${encodeURIComponent(campusLabels[key])}`}>Enquire</Link></div></div></div>
      </article>;
    })}</div><p className={styles.note}>Programme availability can vary by intake. Confirm your course, campus, fees and awarding university with the admissions team.</p></section>

    <section className={styles.comparisonSection} aria-labelledby="campus-compare-title"><div className={styles.container}><header className={styles.sectionHead}><p className={styles.eyebrow}>At a glance</p><h2 id="campus-compare-title">Compare your <span>campus options.</span></h2><p>A quick guide to the locations and academic partners.</p></header><div className={styles.tableWrap} tabIndex={0} role="region" aria-label="Campus comparison table"><table><thead><tr><th scope="col">Campus</th><th scope="col">University partner</th><th scope="col">Location</th><th scope="col">Study options</th></tr></thead><tbody>{campusKeys.map(key=><tr key={key}><th scope="row"><Link href={campusLinks[key]}>{campusLabels[key]}</Link></th><td>{campusDetails[key].partner}</td><td>{campuses.find(campus=>campus.href===campusLinks[key])!.location}</td><td><Link href={`${campusLinks[key]}#${key}-programmes`}>View programmes <span aria-hidden="true">&rarr;</span></Link></td></tr>)}</tbody></table></div></div></section>

    <section className={`${styles.section} ${styles.container}`} aria-labelledby="campus-visit-title"><header className={styles.sectionHead}><p className={styles.eyebrow}>Make an informed choice</p><h2 id="campus-visit-title">Plan your <span>next step.</span></h2></header><ol className={styles.steps}>{[["Choose your subject","Explore course details and check which campus offers the pathway you are considering."],["Speak with admissions","Discuss eligibility, fees, university details and the current intake before applying."],["Plan your visit","Ask about campus visits, accommodation and travel arrangements before you set off."]].map(([title,text],index)=><li key={title}><span aria-hidden="true">0{index+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

    <section className={styles.faqSection} aria-labelledby="campus-faq-title"><div className={styles.container}><header className={styles.sectionHead}><p className={styles.eyebrow}>Campus questions</p><h2 id="campus-faq-title">A little more <span>clarity.</span></h2></header><div className={styles.faqs}>{questions.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className={styles.cta} aria-labelledby="campus-cta-title"><div className={styles.container}><div><p className={styles.eyebrow}>Your future in health science</p><h2 id="campus-cta-title">Let&apos;s find your campus.</h2><p>Tell us what you want to study. We&apos;ll help you understand your options.</p></div><div className={styles.ctaActions}><Link className={styles.button} href="/enquire/">Enquire about a campus <span aria-hidden="true">&rarr;</span></Link><a className={styles.ctaPhone} href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}>Call {siteConfig.admissionsPhone}</a><Link href="/apply/">Ready to apply? <span aria-hidden="true">&rarr;</span></Link></div></div></section>
  </main>;
}
