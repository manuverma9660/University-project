import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";

const curriculum = [
  ["Year 1 · Foundations", "Engineering mathematics, physics, chemistry, biology and programming."],
  ["Year 2 · Core engineering", "Cell biology, biomaterials, thermodynamics and biochemistry."],
  ["Year 3 · Specialisation", "Stem cell technology, tissue scaffolds, bioreactors and bioprinting."],
  ["Year 4 · Applied learning", "Advanced materials, regenerative medicine, internship and project work."],
];
const careers = ["Tissue engineering", "Bioprocess engineering", "Bioprinting", "Biomaterials development", "Pharmaceutical R&D", "Medical device engineering"];
const benefits = [
  ["Engineering perspective", "Connect biological science with design and manufacturing."],
  ["Materials and systems", "Explore biomaterials, tissue scaffolds and bioreactors."],
  ["University pathway", "Study at the listed Rayat Bahra University campus."],
  ["Practical learning", "Connect classroom subjects with laboratory methods."],
  ["Industry experience", "The curriculum includes internship and project work."],
  ["Academic guidance", "Discuss further study and career directions with ITHS."],
];
const faqs = [
  ["How long is the programme?", "Four years of full-time undergraduate engineering study."],
  ["What is the entry requirement?", "Class 12 with Physics, Chemistry and Mathematics, and at least 50% marks. Confirm current admission criteria with ITHS."],
  ["Is JEE mandatory?", "JEE is listed as optional; ask admissions about the current merit process."],
  ["How does it differ from B.Sc. Stem Cell?", "The B.Tech emphasises engineering design and fabrication. B.Sc. focuses on biological science."],
];

export function BtechTissueEngineeringPage() {
  return <div className="molecular-page">
    <section className="molecular-hero"><div className="molecular-inner molecular-hero-grid"><div className="molecular-hero-copy"><p className="molecular-kicker">ENGINEERING &amp; HEALTH SCIENCE</p><h1>B.Tech Stem Cell &amp; Tissue Engineering</h1><h2>Build the future of <em>regenerative science.</em></h2><p>Connect biology with engineering through biomaterials, tissue fabrication and bioreactor design.</p><div className="molecular-hero-actions"><Link href="/apply/">Apply now <span aria-hidden="true">&rarr;</span></Link><a href="tel:+917696614978">Call 76966 14978</a></div><small>4 years · After Class 12 PCM · Chandigarh (Mohali)</small></div><div className="molecular-form-wrap"><EnquiryForm compact courseOptions={["B.Tech Stem Cell & Tissue Engineering"]} /></div></div></section>
    <section className="molecular-overview molecular-inner"><div><span className="molecular-eyebrow">ABOUT THE COURSE</span><h2>Biology meets engineering.</h2><p>Explore how engineered materials and systems support cell culture and tissue development.</p><ul className="course-topic-list"><li>Biomaterials</li><li>Bioreactors</li><li>3D bioprinting</li><li>Tissue scaffolds</li></ul></div><img src="/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp" alt="Hands-on laboratory learning relevant to tissue engineering" /></section>
    <section className="molecular-pathways"><div className="molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">UNDERGRADUATE ENGINEERING</span><h2>Your B.Tech study pathway</h2></header><div className="molecular-course-grid"><article><span>AFTER CLASS 12</span><h3>B.Tech Stem Cell &amp; Tissue Engineering</h3><p className="molecular-course-meta">4 years · Full-time</p><ul><li>Class 12 PCM with 50% marks</li><li>JEE not mandatory</li><li>Engineering, biology and practical learning</li></ul><Link href="/enquire/?programme=B.Tech%20Stem%20Cell%20%26%20Tissue%20Engineering">Enquire about B.Tech <span aria-hidden="true">&rarr;</span></Link></article><article><span>YOUR CAMPUS</span><h3>Chandigarh (Mohali)</h3><p>Rayat Bahra University</p><Link href="/campuses/mohali/">Explore campus <span aria-hidden="true">&rarr;</span></Link><Link href="/programs/stem-cell-regenerative-medicine/">Compare with B.Sc. &amp; M.Sc. Stem Cell <span aria-hidden="true">&rarr;</span></Link></article></div></div></section>
    <section className="molecular-benefits molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">CURRICULUM</span><h2>Four years of learning</h2></header><div className="molecular-benefit-grid">{curriculum.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="molecular-careers"><div className="molecular-inner molecular-career-grid"><div><span className="molecular-eyebrow">CAREER DIRECTIONS</span><h2>Explore where engineering can lead.</h2></div><div className="molecular-career-list">{careers.map(role=><p key={role}>{role}</p>)}</div></div></section>
    <section className="molecular-compare molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">ELIGIBILITY</span><h2>Check your entry pathway</h2></header><div className="molecular-table-wrap"><table><thead><tr><th>Requirement</th><th>B.Tech pathway</th></tr></thead><tbody><tr><th>Qualification</th><td>Class 12 with PCM</td></tr><tr><th>Minimum marks</th><td>50% aggregate</td></tr><tr><th>JEE</th><td>Not mandatory</td></tr><tr><th>Duration</th><td>4 years</td></tr><tr><th>Campus</th><td>Rayat Bahra University, Chandigarh (Mohali)</td></tr></tbody></table></div></section>
    <section className="molecular-benefits molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">WHY ITHS</span><h2>Study engineering with a health science focus.</h2></header><div className="molecular-benefit-grid">{benefits.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="molecular-faq"><div className="molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">YOUR QUESTIONS</span><h2>B.Tech course FAQs</h2></header><div className="molecular-faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="molecular-cta"><div className="molecular-inner"><h2>Start your engineering journey.</h2><p>Discuss course details, eligibility and fees with admissions.</p><div><Link href="/apply/">Apply now <span aria-hidden="true">&rarr;</span></Link><Link href="/enquire/">Ask admissions</Link></div></div></section>
    <section className="molecular-related molecular-inner"><h2>Explore more courses</h2><div><Link href="/programs/">All health science courses <span aria-hidden="true">&rarr;</span></Link><Link href="/programs/stem-cell-regenerative-medicine/">Stem Cell &amp; Regenerative Medicine <span aria-hidden="true">&rarr;</span></Link></div></section>
  </div>;
}

