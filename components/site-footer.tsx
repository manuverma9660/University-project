import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const programmeLinks = [
  { title: "All Programmes", href: "/programmes/" },
  { title: "Undergraduate", href: "/programmes/undergraduate/" },
  { title: "Postgraduate", href: "/programmes/postgraduate/" },
  { title: "Doctoral programmes", href: "/programmes/doctoral/" },
  { title: "PG Diploma", href: "/programmes/pg-diploma/" },
  { title: "Training programmes", href: "/programmes/training/" },
];

const quickLinks = [
  { title: "About ITHS", href: "/about/" },
  { title: "Departments", href: "/academics/" },
  { title: "Admissions", href: "/admissions/" },
  { title: "Research", href: "/research/" },
  { title: "Campus life", href: "/campus-life/" },
  { title: "Our campuses", href: "/campuses/" },
  { title: "Placed students", href: "/placed-students/" },
];

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-intro">
        <Link className="footer-brand" href="/" aria-label={`${siteConfig.name} home`}>
          <Image className="footer-logo" src="/iths-logo.webp" alt="ITHS logo" width={515} height={290} />
          <span className="footer-brand-name">Institute of Translational <span style={{ whiteSpace: "nowrap" }}>Health Science</span></span>
        </Link>
        <p>Degrees and diplomas are awarded by the partner university associated with each programme.</p>
        <Link className="footer-contact" href="/enquire/">Enquire with ITHS <span aria-hidden="true">↗</span></Link>
      </div>

      <div className="footer-group">
        <h2>Programmes</h2>
        {programmeLinks.map(item => <Link href={item.href} key={item.href}>{item.title}</Link>)}
      </div>

      <div className="footer-group">
        <h2>Quick Links</h2>
        {quickLinks.map(item => <Link href={item.href} key={item.href}>{item.title}</Link>)}
      </div>

      <div className="footer-group footer-contact-group">
        <h2>Contact Us</h2>
        <a className="footer-contact-item" href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}><span aria-hidden="true">☎</span>{siteConfig.admissionsPhone}</a>
        <a className="footer-contact-item" href={`mailto:${siteConfig.admissionsEmail}`}><span aria-hidden="true">✉</span>{siteConfig.admissionsEmail}</a>
        <Link className="footer-contact-item" href="/contact/"><span aria-hidden="true">↗</span>Contact admissions</Link>
        <Link className="footer-contact-cta" href="/enquire/">Send an enquiry</Link>
      </div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span></div>
  </footer>;
}
