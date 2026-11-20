import { SiteIcon } from "@/components/site-icon";
import Image from "next/image";
import Link from "next/link";
import styles from "./partner-universities-section.module.css";

const partners = [
  { name: "Scope Global Skills University", location: "Bhopal, Madhya Pradesh", image: "/home/partner-scope.png", href: "/campuses/bhopal/" },
  { name: "Bahra University", location: "Waknaghat, Himachal Pradesh", image: "/home/partner-bahra.png", href: "/campuses/shimla-hills/" },
  { name: "Rayat Bahra Professional University", location: "Hoshiarpur, Punjab", image: "/home/partner-rbpu.png", href: "/campuses/hoshiarpur/" },
  { name: "Rayat Bahra University", location: "Mohali, Punjab", image: "/home/partner-rbu.png", href: "/campuses/mohali/" },
];

export function PartnerUniversitiesSection() {
  return (
    <section id="partners" className={styles.section} aria-labelledby="partner-universities-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.introColumn}>
          <header className={styles.intro}>
            <p className={styles.eyebrow}>How degrees are awarded</p>
            <h2 id="partner-universities-title">Our partner universities</h2>
            <p className={styles.description}>
              Specialist teaching at ITHS, in collaboration with a partner university that awards your qualification.
            </p>
          </header>

          <ul className={styles.benefitsList} aria-label="Degree awarding highlights">
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 8 10-5 10 5-10 5L2 8Zm4 3v7l6 3 6-3v-7m4-3v9" />
                </svg>
              </span>
              <div>
                <strong>UGC-Recognised Qualifications</strong>
                <p>Degrees awarded directly by chartered state private universities</p>
              </div>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2ZM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
                </svg>
              </span>
              <div>
                <strong>Specialist Practical Training</strong>
                <p>Advanced clinical & research laboratory exposure at ITHS</p>
              </div>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <strong>Multi-Campus Network</strong>
                <p>Modern campus locations across MP, Himachal Pradesh & Punjab</p>
              </div>
            </li>
          </ul>

          <div className={styles.actionWrap}>
            <Link className={styles.allPartners} href="/partnerships/university-partners/">
              All partnerships <span aria-hidden="true"><SiteIcon name="arrowRight" /></span>
            </Link>
          </div>
        </div>

        <div className={styles.directory}>
          {partners.map(partner => (
            <article className={styles.university} key={partner.href}>
              <div className={styles.logo}>
                <Image src={partner.image} alt={`${partner.name} logo`} width={240} height={110} />
              </div>
              <h3>{partner.name}</h3>
              <p className={styles.location}>
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M16 8c0 4-6 9-6 9S4 12 4 8a6 6 0 0 1 12 0Z" />
                  <circle cx="10" cy="8" r="2" />
                </svg>
                {partner.location}
              </p>
              <Link className={styles.explore} href={partner.href}>
                Know More <span aria-hidden="true"><SiteIcon name="arrowRight" /></span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
