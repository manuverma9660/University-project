import Image from "next/image";
import Link from "next/link";
import { labPhotos } from "@/lib/lab-photos";
import styles from "./home-about-section.module.css";

export function HomeAboutSection() {
  return <section className={styles.section} id="about" aria-labelledby="home-about-title">
    <div className={`container ${styles.layout}`}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}><span aria-hidden="true" />ABOUT ITHS</p>
        <h2 id="home-about-title">Where laboratory science meets <span>health care.</span></h2>
        <p className={styles.lead}>A closer look at science.<br />A clearer path to your future.</p>
        <p>Understand how embryos develop, how cancer grows, how genes shape the body’s response to food, and how stem cells and the nervous system work.</p>
        <p>ITHS connects classroom study with laboratory learning across six specialist departments. Find a study pathway that brings your curiosity closer to the questions shaping health care.</p>
        <ul className={styles.features} aria-label="Our approach"><li>Specialist programmes</li><li>Practical learning</li><li>University partnerships</li></ul>
        <div className={styles.actions}><Link className={styles.primary} href="/about/">Discover ITHS <span aria-hidden="true">→</span></Link><Link className={styles.secondary} href="/partnerships/university-partners/">How degrees are awarded <span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className={styles.visual}>
        <figure className={styles.photo}>
          <Image src={labPhotos.airflow.src} alt={labPhotos.airflow.alt} style={{ objectPosition: labPhotos.airflow.position }} fill sizes="(max-width: 900px) 100vw, 48vw" />
          <figcaption><span className={styles.photoMark} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 2v7m4-7v7M8 2h8M10 9a7 7 0 1 0 4 0M7 16h10" /></svg></span><span>From classroom<br /><strong>to laboratory.</strong></span></figcaption>
          <Link className={styles.galleryLink} href="/about/labs/" aria-label="Explore ITHS laboratories">↗</Link>
        </figure>
        <aside className={styles.note} aria-label="Our approach and degree awards"><span className={styles.noteIcon} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 12 13-7 13 7-13 7-13-7Z" /><path d="M9 16v8c5 4 9 4 14 0v-8m6-4v11" /></svg></span><div><p className={styles.kicker}>OUR PURPOSE</p><h3>Learn. Discover. Transform.</h3><p className={styles.degreeNote}>Degrees and diplomas are awarded by the partner university associated with each programme.</p></div></aside>
      </div>
    </div>
  </section>;
}
