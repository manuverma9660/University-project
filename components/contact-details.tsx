import { campuses } from "@/lib/site-content";
import Link from "next/link";

export function ContactDetails() {
  return <div className="contact-campus-grid">
    {campuses.map(campus => <article className="contact-campus-card" key={campus.href}>
      <span className="eyebrow">{campus.location}</span><h2>{campus.title}</h2><p>{campus.partner}</p>
      {campus.status && <span className="content-pending">{campus.status}</span>}
      <Link href={campus.href}>View campus information <span aria-hidden="true">↗</span></Link>
    </article>)}
    <article className="contact-campus-card contact-admissions-card"><span className="eyebrow">Admissions team</span><h2>Need help choosing?</h2><p>Ask about programmes, eligibility, fees, and campus availability.</p><a href="tel:+917696614978">+91 76966 14978</a><a href="mailto:admission.iths@gmail.com">admission.iths@gmail.com</a><Link href="/enquire/">Send an enquiry <span aria-hidden="true">↗</span></Link></article>
  </div>;
}
