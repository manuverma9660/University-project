import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";

const fitItems = [
  ["Biology and problem solving", "Understand how the body works at its smallest scale."],
  ["A career in science", "Explore research, diagnostics, biotechnology, or pharmaceutical work."],
  ["A route without NEET", "Choose a merit-based health science pathway instead of clinical medicine."],
];

const benefits = [
  ["UGC-approved university", "Programmes delivered at Rayat Bahra University, Mohali."],
  ["Lab exposure from year one", "Build practical familiarity with molecular and diagnostic methods."],
  ["Research-led faculty", "Learn in a university focused on translational health science."],
  ["Placement support", "Get guidance for industry, research, and further study pathways."],
  ["Merit scholarship", "Ask admissions about current scholarship opportunities."],
  ["Personalised medicine", "Study the science behind modern diagnostics and targeted care."],
];

const faqs = [
  ["What is Molecular Medicine?", "Molecular Medicine studies disease at the level of genes, proteins, and cells, supporting earlier diagnosis and more precise treatment."],
  ["Which course should I choose?", "Choose B.Sc. after 12th with Biology for an undergraduate pathway, or M.Sc. after a relevant bachelor's degree for postgraduate specialisation."],
  ["Is NEET required?", "The reference page says NEET is not required for these programmes. Confirm current admission requirements with ITHS."],
  ["Where are the courses offered?", "The reference page lists Rayat Bahra University, Mohali. Confirm the current campus and awarding university with admissions."],
  ["Can I continue from B.Sc. to M.Sc.?", "The B.Sc. can provide a route toward postgraduate study. Confirm subject and eligibility requirements for the current M.Sc. intake."],
];

export function MolecularMedicinePage() {
  return <div className="molecular-page">
    <section className="molecular-hero">
      <div className="molecular-inner molecular-hero-grid">
        <div className="molecular-hero-copy">
          <p className="molecular-kicker">ADMISSIONS OPEN · 2026–27</p>
          <h1>Molecular Medicine</h1>
          <h2>Decode life. <em>Design cures.</em></h2>
          <p>Study disease at the level of genes, proteins, and cells—the science behind modern diagnosis and precision treatment.</p>
          <div className="molecular-hero-actions"><Link href="/apply/">Apply now <span aria-hidden="true">→</span></Link><a href="tel:+917696614978">Call 76966 14978</a></div>
          <small>Undergraduate B.Sc. after 12th · Postgraduate M.Sc. after graduation</small>
        </div>
        <div className="molecular-form-wrap"><EnquiryForm compact courseOptions={["BSc Molecular Medicine", "MSc Molecular Medicine", "PG Diploma Genetic Counselling"]} /></div>
      </div>
    </section>

    <section className="molecular-overview molecular-inner">
      <div><span className="molecular-eyebrow">THE FIELD</span><h2>What is Molecular Medicine?</h2>
        <p>Molecular Medicine looks at why disease begins inside the body’s genes, proteins, and cells, rather than only at outward symptoms. This understanding supports earlier detection and more precise treatment.</p>
        <p>It brings genetics, cell biology, and translational research together. At ITHS, students can enter after 12th through B.Sc. or specialise after graduation through M.Sc.</p>
      </div>
      <img src="/iths-learning-01.webp" alt="Student learning in a health science laboratory" />
    </section>

    <section className="molecular-pathways">
      <div className="molecular-inner">
        <header className="molecular-heading"><span className="molecular-eyebrow">TWO PATHS, ONE FIELD</span><h2>Choose your course path</h2><p>Pick the pathway that matches your current education.</p></header>
        <div className="molecular-course-grid">
          <article><span>UNDERGRADUATE · AFTER 12TH</span><h3>B.Sc. Molecular Medicine</h3><p className="molecular-course-meta">3 years · 6 semesters · No NEET required</p><ul><li>For students with Biology (PCB)</li><li>Foundations in genetics, biochemistry, and diagnostics</li><li>Laboratory training from the first year</li><li>Pathway to industry roles or postgraduate study</li></ul><Link href="/enquire/">Ask about B.Sc. <span>→</span></Link></article>
          <article><span>POSTGRADUATE · AFTER B.Sc.</span><h3>M.Sc. Molecular Medicine</h3><p className="molecular-course-meta">2 years · 4 semesters + research project</p><ul><li>For graduates in life or biomedical sciences</li><li>Advanced genomics, drug discovery, and disease modelling</li><li>Supervised research dissertation</li><li>Foundation for research careers or a Ph.D.</li></ul><Link href="/enquire/">Ask about M.Sc. <span>→</span></Link></article>
        </div>
      </div>
    </section>

    <section className="molecular-compare molecular-inner">
      <header className="molecular-heading"><span className="molecular-eyebrow">SIDE BY SIDE</span><h2>B.Sc. or M.Sc.—which fits you?</h2></header>
      <div className="molecular-table-wrap"><table><thead><tr><th></th><th>B.Sc. Molecular Medicine</th><th>M.Sc. Molecular Medicine</th></tr></thead><tbody>
        <tr><th>Level</th><td>Undergraduate</td><td>Postgraduate</td></tr><tr><th>Entry</th><td>12th with PCB</td><td>B.Sc. in a relevant field</td></tr><tr><th>Duration</th><td>3 years</td><td>2 years + project</td></tr><tr><th>Focus</th><td>Foundations and lab skills</td><td>Research and specialisation</td></tr><tr><th>Next step</th><td>Entry roles or M.Sc.</td><td>Research roles or Ph.D.</td></tr><tr><th>NEET</th><td>Not required, per reference</td><td>Not required, per reference</td></tr>
      </tbody></table></div>
    </section>

    <section className="molecular-fit">
      <div className="molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">IS THIS FIELD RIGHT FOR YOU?</span><h2>A good fit if you…</h2></header><div className="molecular-fit-grid">{fitItems.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
    </section>

    <section className="molecular-benefits molecular-inner">
      <header className="molecular-heading"><span className="molecular-eyebrow">THE UNIVERSITY</span><h2>Why study at ITHS?</h2></header>
      <div className="molecular-benefit-grid">{benefits.map(([title, text]) => <article key={title}><span aria-hidden="true">✦</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="molecular-careers">
      <div className="molecular-inner molecular-career-grid"><div><span className="molecular-eyebrow">AFTER THE DEGREE</span><h2>Where can Molecular Medicine lead?</h2><p>Both degrees open pathways across diagnostics, research, biotechnology, and pharmaceutical industries. Your qualification and experience shape the roles available to you.</p></div><div className="molecular-career-list"><p>Molecular biologist / lab analyst</p><p>Research assistant or scientist</p><p>Clinical / diagnostic technologist</p><p>Quality control associate</p><p>Genome analyst or clinical research associate</p></div></div>
    </section>

    <section className="molecular-faq"><div className="molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">QUESTIONS</span><h2>Frequently asked questions</h2></header><div className="molecular-faq-list">{faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="molecular-cta"><div className="molecular-inner"><span className="molecular-eyebrow">YOUR NEXT STEP</span><h2>Start with the course that fits you.</h2><p>Ask ITHS admissions about current eligibility, campus, and application details.</p><div><Link href="/enquire/">Enquire about admissions <span>→</span></Link><a href="tel:+917696614978">Call 76966 14978</a></div></div></section>

    <section className="molecular-related molecular-inner"><h2>Explore related pages</h2><div><Link href="/programmes/">All programmes <span>↗</span></Link><Link href="/campuses/mohali/">Mohali campus <span>↗</span></Link><Link href="/admissions/eligibility/">Admissions eligibility <span>↗</span></Link><Link href="/academics/">All departments <span>↗</span></Link></div></section>
  </div>;
}
