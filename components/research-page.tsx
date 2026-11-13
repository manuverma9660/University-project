import Image from "next/image";
import Link from "next/link";
import { departments } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";
import { navigationPublication } from "@/lib/site-map";
import { getResearchMous, getResearchRecords, isResearchPageAvailable, researchSections, researchTopics } from "@/lib/research";
import styles from "./research.module.css";

export function ResearchOverview() {
  return <main id="main-content" className={styles.page}>
    <section className={styles.hero}>
      <Image src="/images/about-iths-dna-research.webp" alt="" fill priority sizes="100vw" />
      <div className={`container ${styles.heroContent}`}><Link className={styles.breadcrumb} href="/">Home <span aria-hidden="true">/</span> Research</Link><p className={styles.eyebrow}>Research &amp; innovation</p><h1>Research at ITHS<span>.</span></h1><p className={styles.heroDescription}>Explore research information, intellectual property and the people behind health science.</p><div className={styles.actions}><a href="#research-directory">Explore research <span aria-hidden="true">&darr;</span></a><Link href="/contact/">Contact ITHS <span aria-hidden="true">&rarr;</span></Link></div></div>
    </section>
    <section id="research-directory" className={`container ${styles.directory}`} aria-labelledby="research-directory-title">
      <div><p className={styles.eyebrow}>Explore research</p><h2 id="research-directory-title">From scientific questions<br />to new possibilities.</h2><p className={styles.intro}>Explore research directions, student participation and information about publications and patents.</p>
        <div className={styles.sectionGrid}>{researchSections.map((section, index) => {
          const content = <><div className={styles.sectionTop}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><span className={styles.availability}>{isResearchPageAvailable(section.href, navigationPublication) ? "Overview" : "Coming soon"}</span></div><h3>{section.title}</h3><p>{section.description}</p>{isResearchPageAvailable(section.href, navigationPublication) && <span className={styles.sectionArrow} aria-hidden="true">&rarr;</span>}</>;
          return isResearchPageAvailable(section.href, navigationPublication) ? <Link className={`${styles.sectionCard} ${styles.availableCard}`} href={section.href} key={section.href}>{content}</Link> : <div className={styles.sectionCard} key={section.href} aria-disabled="true">{content}</div>;
        })}</div>
      </div>
      <aside className={styles.helpCard}><span className={styles.helpIcon} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 4h10m-8 0v9L5 26a2 2 0 0 0 2 3h18a2 2 0 0 0 2-3l-8-13V4M9 21h14"/></svg></span><p className={styles.eyebrow}>Get in touch</p><h2>Have a research<br />enquiry?</h2><p>For information about research activity, academic records or a collaboration enquiry, contact ITHS directly.</p><Link className={styles.contactButton} href="/contact/">Contact ITHS <span aria-hidden="true">&rarr;</span></Link><a className={styles.email} href={`mailto:${siteConfig.admissionsEmail}`}>{siteConfig.admissionsEmail}</a><div className={styles.helpNote}><strong>Research information</strong><p>Detailed information is being prepared. Please contact ITHS for current records and documentation.</p></div></aside>
    </section>
    <section className={styles.subjects} aria-labelledby="research-subjects-title"><div className="container"><p className={styles.eyebrow}>Academic disciplines</p><h2 id="research-subjects-title">Explore the science.</h2><p>Learn more about our specialist health science departments.</p><div className={styles.subjectGrid}>{departments.map(department => <Link href={department.href} key={department.href}>{department.shortTitle}<span aria-hidden="true">{"\u2197"}</span></Link>)}</div></div></section>
  </main>;
}

export function ResearchRecordPage({ href }: { href: string }) {
  if (Object.hasOwn(researchTopics, href)) return <ResearchTopicPage href={href} />;
  const section = researchSections.find(section => section.href === href)!;
  const records = href === "/partnerships/" ? getResearchMous(href).map(mou => ({ title: mou.partner, summary: `Partnership agreement signed on ${mou.signedOn}.`, reference: mou.reference, evidenceHref: mou.documentHref, year: undefined })) : getResearchRecords(href);
  return <main id="main-content" className={styles.page}><section className={styles.recordHero}><div className="container"><Link className={styles.breadcrumb} href="/research/">Research at ITHS <span aria-hidden="true">/</span> {section.title}</Link><p className={styles.eyebrow}>Research &amp; innovation</p><h1>{section.title}</h1><p>{section.description}</p></div></section><section className={`container ${styles.records}`} aria-label={section.title}>{records.map(record => <article className={styles.record} key={record.reference}><div className={styles.recordMeta}><span>{record.reference}</span>{record.year && <span>{record.year}</span>}</div><h2>{record.title}</h2><p>{record.summary}</p><a href={record.evidenceHref} target={record.evidenceHref.startsWith("https:") ? "_blank" : undefined} rel="noreferrer">View supporting record <span aria-hidden="true">&rarr;</span></a></article>)}</section><div className={`container ${styles.backLink}`}><Link href="/research/">&larr; All research information</Link></div></main>;
}

function ResearchTopicPage({ href }: { href: string }) {
  const topic = researchTopics[href];
  const records = getResearchRecords(href);
  return <main id="main-content" className={styles.page}>
    <section className={styles.recordHero}><div className="container"><Link className={styles.breadcrumb} href="/research/">Research at ITHS <span aria-hidden="true">/</span> {topic.title}</Link><p className={styles.eyebrow}>Research &amp; innovation</p><h1>{topic.title}<span className={styles.titleDot}>.</span></h1><p>{topic.intro}</p><div className={styles.actions}><a href="#explore-topic">Explore this area <span aria-hidden="true">&darr;</span></a><Link href="/contact/">Contact ITHS <span aria-hidden="true">&rarr;</span></Link></div></div></section>
    <section id="explore-topic" className={`container ${styles.topicSection}`} aria-labelledby="topic-heading"><p className={styles.eyebrow}>Explore and discover</p><h2 id="topic-heading">{topic.heading}</h2><div className={styles.topicGrid}>{topic.areas.map(area => <article className={styles.topicCard} key={area.title}><h3>{area.title}</h3><p>{area.text}</p><Link href={area.href}>{area.link} <span aria-hidden="true">&rarr;</span></Link></article>)}</div></section>
    <section className={styles.subjects} aria-labelledby="topic-steps-heading"><div className="container"><p className={styles.eyebrow}>Your next steps</p><h2 id="topic-steps-heading">{topic.stepsTitle}</h2><ol className={styles.steps}>{topic.steps.map((step, index) => <li key={step.title}><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>
    {!!records.length && <section className={`container ${styles.records}`} aria-label="Research records">{records.map(record => <article className={styles.record} key={record.reference}><h2>{record.title}</h2><p>{record.summary}</p><a href={record.evidenceHref}>View supporting record <span aria-hidden="true">&rarr;</span></a></article>)}</section>}
    <section className={`container ${styles.topicSection}`} aria-labelledby="related-research-heading"><h2 id="related-research-heading">Keep exploring.</h2><div className={styles.topicLinks}>{Object.entries(researchTopics).filter(([path]) => path !== href).map(([path, item]) => <Link href={path} key={path}>{item.title}<span aria-hidden="true">&rarr;</span></Link>)}</div><div className={styles.topicContact}><div><h3>Have a question for ITHS?</h3><p>Contact the university for current activities, opportunities and research documentation.</p></div><Link className={styles.contactButton} href="/contact/">Contact ITHS <span aria-hidden="true">&rarr;</span></Link></div><Link href="/research/">&larr; All research information</Link></section>
  </main>;
}
