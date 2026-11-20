import { SiteIcon } from "@/components/site-icon";
import Image from "next/image";
import Link from "next/link";
import { leadership } from "@/lib/site-content";
import styles from "./about-page.module.css";

const highlights = [
  { icon: <SiteIcon name="university" />, value: "UGC", label: "Recognized University Partner" },
  { icon: <SiteIcon name="microscope" />, value: "15+", label: "Research Patents Filed" },
  { icon: <SiteIcon name="award" />, value: "95%", label: "Placement Support" },
  { icon: <SiteIcon name="dna" />, value: "1st", label: "Nutrigenetics in India" },
  { icon: <SiteIcon name="university" />, value: "4", label: "Campuses Across India" },
];

const values = [
  { icon: <SiteIcon name="trophy" />, title: "Excellence", text: "Set high standards for learning, scientific enquiry and student achievement." },
  { icon: <SiteIcon name="shield" />, title: "Integrity", text: "Act with honesty, openness and responsibility in everything we do." },
  { icon: <SiteIcon name="lightbulb" />, title: "Innovation", text: "Welcome new thinking and keep developing how we teach and learn." },
  { icon: <SiteIcon name="target" />, title: "Industry Focus", text: "Connect academic learning with the needs of professional practice." },
  { icon: <SiteIcon name="graduation" />, title: "Student Success", text: "Put student development and career aspirations at the centre." },
  { icon: <SiteIcon name="globe" />, title: "Global Impact", text: "Build knowledge and skills that can contribute to better health." },
];

export function AboutPage() {
  return <main id="main-content" className={styles.page}>
    <section className={styles.hero} aria-labelledby="about-title">
      <div className={styles.heroImage}><Image src="/images/about-iths-dna-research.webp" alt="" fill priority sizes="(max-width:760px) 100vw, 50vw" /></div>
      <div className={styles.heroContent}>
        <h1 id="about-title">About <span>ITHS</span></h1>
        <p>Specialist health science education connecting academic understanding with clinical practice since 2023.</p>
      </div>
    </section>

    <section className={`${styles.section} ${styles.why}`} aria-labelledby="about-why-title">
      <div className={styles.container}>
        <div className={styles.whyCopy}>
          <h2 id="about-why-title">Why Choose <span>ITHS</span></h2>
          <p>Discover a practical approach to health science: clinical exposure, experienced teachers and laboratory learning that connects your studies with professional practice.</p>
          <p>Explore specialist disciplines and get guidance on the next step from education to a career in health science.</p>
          <Link className={styles.inlineLink} href="/academics/">Explore our departments <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link>
        </div>
        <div className={styles.highlights} aria-label="ITHS highlights">
          {highlights.map(item => <div className={styles.highlight} key={item.label}><span className={styles.icon} aria-hidden="true">{item.icon}</span><strong>{item.value}</strong><p>{item.label}</p></div>)}
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="about-leadership-title">
      <div className={styles.container}>
        <div className={styles.sectionHead}><h2 id="about-leadership-title">Meet Our <span>Leadership</span></h2><p>The people guiding health science education at ITHS.</p></div>
        <div className={styles.leaders}>
          {leadership.map(person => <article className={styles.leader} key={person.href}>
            <div className={styles.portrait}><span className={styles.badge}>{person.badge}</span><Image src={person.title === "Founder" ? "/home/founder.png" : "/home/director.webp"} alt={person.name} fill sizes="(max-width: 760px) 90vw, 450px" /></div>
            <div className={styles.leaderBody}><h3>{person.name}</h3><p className={styles.role}>{person.title}</p><ul className={styles.credentials}>{person.credentials.map(credential => <li key={credential}>{credential}</li>)}</ul><p>{person.description}</p><blockquote>{person.quote}</blockquote><Link className={styles.inlineLink} href={person.href}>Read {person.title.toLowerCase()}&apos;s message <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.purposeSection}`} aria-labelledby="about-purpose-title">
      <div className={styles.container}>
        <div className={styles.sectionHead}><p className={styles.badge}>Our Purpose</p><h2 id="about-purpose-title">Our <span>Mission &amp; Vision</span></h2><p>A shared purpose for learning, discovery and healthcare.</p></div>
        <div className={styles.purposeGrid}>
          <article className={styles.purposeCard}><span className={styles.icon} aria-hidden="true"><SiteIcon name="target" /></span><h3>Our Mission</h3><p>Prepare students for health science practice through clinical learning, faculty guidance and connections with industry.</p></article>
          <article className={styles.purposeCard}><span className={styles.icon} aria-hidden="true"><SiteIcon name="eye" /></span><h3>Our Vision</h3><p>Advance health science education and research while developing knowledgeable, capable and compassionate professionals.</p></article>
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="about-values-title">
      <div className={styles.container}>
        <div className={styles.sectionHead}><p className={styles.badge}>What We Stand For</p><h2 id="about-values-title">Our Core <span>Values</span></h2><p>The principles behind our academic community.</p></div>
        <div className={styles.valuesGrid}>{values.map(value => <article className={styles.valueCard} key={value.title}><span className={styles.icon} aria-hidden="true">{value.icon}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
      </div>
    </section>

    <section className={styles.cta} aria-labelledby="about-cta-title"><div className={styles.container}><h2 id="about-cta-title">Be Part of the ITHS Family</h2><p>Explore your next step in health science.</p><div className={styles.actions}><Link href="/apply/">Apply Now <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link><Link href="/contact/">Contact Us <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link></div></div></section>
  </main>;
}
