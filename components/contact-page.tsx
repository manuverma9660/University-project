import { SiteIcon } from "@/components/site-icon";
import Image from "next/image";
import Link from "next/link";
import { AdmissionEnquiryForm } from "@/components/enquiry-form";
import { siteConfig } from "@/lib/site-config";
import styles from "./contact-page.module.css";

const campuses = [
  { title: "Bhopal Campus", partner: "Scope Global Skills University, Bhopal", phone: "+91 98156-92195", image: "/images/campuses/bhopal.jpg", map: "https://maps.google.com/?q=SCOPE+Global+Skills+University+Bhopal" },
  { title: "Shimla Campus", partner: "Bahra University, Shimla, HP", phone: "+91 84277-76481", image: "/images/campuses/shimla-hills.jpg", map: "https://maps.google.com/?q=Bahra+University+Waknaghat" },
  { title: "Hoshiarpur Campus", partner: "Rayat Bahra Professional University, Hoshiarpur", phone: "+91 76966-08683", image: "/images/campuses/hoshiarpur.jpg", map: "https://maps.google.com/?q=Rayat+Bahra+Professional+University+Hoshiarpur" },
  { title: "Chandigarh Campus", partner: "Rayat Bahra University, Chandigarh", phone: "+91 76966-14978", image: "/images/campuses/chandigarh-mohali.jpg", map: "https://maps.google.com/?q=Rayat+Bahra+University+Chandigarh" },
];

const admissionsPhone = "+91 7696614978";

export function ContactPage() {
  return <main id="main-content" className={styles.page}>
    <section className={styles.hero}>
      <Image src="/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp" alt="ITHS faculty member speaking with students during a campus laboratory visit" fill priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Contact Us</p>
        <h1>Contact Us</h1>
        <p>Have questions? Reach out for admissions inquiries, career counseling, or any information about ITHS.</p>
        <div className={styles.heroActions}><a href={`tel:${admissionsPhone}`}>Call Now <span aria-hidden="true"><SiteIcon name="arrowUpRight" /></span></a><Link href="#send-message">Send us a Message <span aria-hidden="true"><SiteIcon name="arrowDown" /></span></Link></div>
      </div>
      <span className={styles.heroNote}>Contact the right campus directly</span>
    </section>

    <section className={styles.quickSection} aria-label="Contact options">
      <div className={styles.container}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>Get in Touch</p><h2>Get in Touch</h2></div>
        <div className={styles.contactCards}>
          <a href={`tel:${admissionsPhone}`}><span className={styles.contactIcon} aria-hidden="true"><SiteIcon name="phone" /></span><span><small>Phone</small><strong>+91 7696614978</strong></span><b aria-hidden="true"><SiteIcon name="arrowUpRight" /></b></a>
          <a href="https://wa.me/917696614978" target="_blank" rel="noreferrer"><span className={`${styles.contactIcon} ${styles.whatsapp}`} aria-hidden="true"><SiteIcon name="chat" /></span><span><small>WhatsApp</small><strong>Chat with us instantly</strong></span><b aria-hidden="true"><SiteIcon name="arrowUpRight" /></b></a>
          <a href={`mailto:${siteConfig.admissionsEmail}`}><span className={`${styles.contactIcon} ${styles.email}`} aria-hidden="true"><SiteIcon name="mail" /></span><span><small>Email</small><strong>Admission.iths@gmail.com</strong></span><b aria-hidden="true"><SiteIcon name="arrowUpRight" /></b></a>
          <article><span className={`${styles.contactIcon} ${styles.hours}`} aria-hidden="true"><SiteIcon name="clock" /></span><span><small>Office Hours</small><strong>Mon-Sat: 9AM-6PM</strong></span></article>
        </div>
      </div>
    </section>

    <section className={styles.messageSection} id="send-message">
      <div className={`${styles.container} ${styles.messageLayout}`}>
        <div className={styles.messageIntro}><p className={styles.eyebrow}>Contact Us</p><h2>Get in Touch</h2><p>Have questions? Reach out for admissions inquiries, career counseling, or any information about ITHS.</p><div className={styles.responseNote}><span aria-hidden="true"><SiteIcon name="clock" /></span><p><strong>Office Hours</strong><br />Mon-Sat: 9AM-6PM</p></div><p className={styles.disclaimer}>This form is a local preview and does not send or store your details. For an official response, call or email the admissions team.</p></div>
        <div className={styles.formCard}><h2>Send us a Message</h2><AdmissionEnquiryForm variant="contact" /></div>
      </div>
    </section>

    <section className={styles.campusSection}>
      <div className={styles.container}>
        <div className={styles.campusHeading}><div><p className={styles.eyebrow}>Four campus locations</p><h2>Find your nearest ITHS campus.</h2></div><p>Contact your campus to ask about local programmes and visit information.</p></div>
        <div className={styles.campusGrid}>{campuses.map(campus => <article className={styles.campusCard} key={campus.title}>
          <Link className={styles.campusImage} href={campus.map} target="_blank" rel="noreferrer" aria-label={`Find ${campus.title} campus on Google Maps`}><Image src={campus.image} alt={`${campus.partner} campus at ${campus.title}`} fill sizes="(max-width:700px) 100vw,(max-width:1000px) 50vw,25vw" /></Link>
          <div className={styles.campusBody}><p className={styles.eyebrow}>ITHS campus</p><h3>{campus.title}</h3><p>{campus.partner}</p><a href={`tel:${campus.phone.replaceAll(" ", "")}`}>{campus.phone}</a><Link className={styles.mapLink} href={campus.map} target="_blank" rel="noreferrer">View map <span aria-hidden="true"><SiteIcon name="arrowUpRight" /></span></Link></div>
        </article>)}</div>
      </div>
    </section>
  </main>;
}
