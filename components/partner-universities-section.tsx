import Image from "next/image";
import Link from "next/link";
import styles from "./partner-universities-section.module.css";

const partners = [
  { name: "Rayat Bahra University", location: "Mohali, Punjab", image: "/home/partner-rbu.png", href: "/campuses/mohali/" },
  { name: "Rayat Bahra Professional University", location: "Hoshiarpur, Punjab", image: "/home/partner-rbpu.png", href: "/campuses/hoshiarpur/" },
  { name: "Bahra University", location: "Waknaghat, Himachal Pradesh", image: "/home/partner-bahra.png", href: "/campuses/shimla-hills/" },
  { name: "Scope Global Skills University", location: "Bhopal, Madhya Pradesh", image: "/home/partner-scope.png", href: "/campuses/bhopal/" },
];

export function PartnerUniversitiesSection() {
  return <section id="partners" className={styles.section} aria-labelledby="partner-universities-title">
    <div className={`container ${styles.layout}`}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>How degrees are awarded</p>
        <h2 id="partner-universities-title">Our partner universities</h2>
        <p className={styles.description}>Specialist teaching at ITHS, in collaboration with a partner university that awards your qualification.</p>
      </header>
      <div className={styles.visual}>
        <div className={styles.campus} aria-hidden="true"><Image src="/images/campuses/chandigarh-mohali.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 35vw" /></div>
        <Link className={styles.allPartners} href="/partnerships/university-partners/">All partnerships <span aria-hidden="true">→</span></Link>
      </div>
      <div className={styles.directory}>
        {partners.map(partner => <article className={styles.university} key={partner.href}>
          <div className={styles.logo}><Image src={partner.image} alt={`${partner.name} logo`} width={240} height={110} /></div>
          <h3>{partner.name}</h3>
          <p className={styles.location}><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M16 8c0 4-6 9-6 9S4 12 4 8a6 6 0 0 1 12 0Z" /><circle cx="10" cy="8" r="2" /></svg>{partner.location}</p>
          <Link className={styles.explore} href={partner.href}>Know More <span aria-hidden="true">→</span></Link>
        </article>)}
      </div>
    </div>
  </section>;
}
