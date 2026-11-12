import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";

const embryologyBenefits = [
  ["Practical IVF training", "Learn laboratory methods used in assisted reproductive technology."],
  ["Clinical exposure", "The reference page describes internships at partner fertility centres."],
  ["Research experience", "Build knowledge in reproductive science and embryology research."],
  ["Career guidance", "Explore pathways across fertility centres, research, and further study."],
  ["University partners", "Confirm the current awarding university for your programme and campus."],
  ["Merit-based entry", "The reference page lists admission without NEET or an entrance exam."],
];

const embryologyFaqs = [
  ["How do I become a clinical embryologist?", "The reference pathway is 12th with PCB followed by B.Sc. Clinical Embryology, or a relevant bachelor's degree followed by M.Sc. Confirm current subject and marks requirements with admissions."],
  ["What is the eligibility for the courses?", "The reference page lists 12th PCB with 50%+ for B.Sc. and B.Sc. Life Sciences with 50%+ for M.Sc. It also names MBBS, BDS, and BAMS backgrounds for M.Sc.; confirm accepted qualifications with ITHS."],
  ["Is NEET required?", "The reference page says NEET and an entrance exam are not required. Confirm the current admission process with ITHS."],
  ["What does a Clinical Embryology course cover?", "The reference curriculum mentions IVF, ICSI, embryo culture, cryopreservation, and assisted reproductive technology."],
  ["Which campuses offer the programme?", "The reference page lists Chandigarh, Hoshiarpur, Shimla, and Bhopal. Ask admissions which programme and campus combinations are currently available."],
];

export function ClinicalEmbryologyPage() {
  return <div className="molecular-page clinical-embryology-page">
    <section className="molecular-hero">
      <div className="molecular-inner molecular-hero-grid">
        <div className="molecular-hero-copy">
          <p className="molecular-kicker">ADMISSIONS OPEN · 2026–27</p>
          <h1>ART &amp; Clinical Embryology</h1>
          <h2>Become a <em>Professional Embryologist</em></h2>
          <p>Build skills for reproductive science with study pathways in clinical embryology and hands-on IVF laboratory learning.</p>
          <div className="molecular-hero-actions"><Link href="/apply/">Apply now <span aria-hidden="true">→</span></Link><a href="tel:+917696614978">Call 76966 14978</a></div>
          <small>B.Sc. after 12th · M.Sc. after graduation · PG Diploma · Ph.D.</small>
        </div>
        <div className="molecular-form-wrap"><EnquiryForm compact courseOptions={["BSc ART and Clinical Embryology", "MSc ART and Clinical Embryology", "PhD ART and Clinical Embryology", "PG Diploma ART & Clinical Embryology"]} /></div>
      </div>
    </section>

    <section className="molecular-overview molecular-inner">
      <div><span className="molecular-eyebrow">ABOUT THE COURSE</span><h2>What is Clinical Embryology?</h2>
        <p>Clinical Embryology is the science of assisted reproduction. Embryologists work in IVF laboratories and support procedures such as ICSI, embryo culture, and cryopreservation.</p>
        <p>ITHS lists undergraduate, postgraduate, diploma, and doctoral pathways. Practical training and campus availability depend on the programme; confirm current details with admissions.</p>
        <ul className="clinical-overview-points"><li>B.Sc. after 12th</li><li>M.Sc. after a relevant bachelor’s degree</li><li>Ph.D. research pathway</li><li>PG Diploma option</li></ul>
      </div>
      <img src="/clinical-embryology.webp" alt="Clinical embryology and assisted reproduction laboratory" />
    </section>

    <section className="molecular-pathways">
      <div className="molecular-inner">
        <header className="molecular-heading"><span className="molecular-eyebrow">STUDY PATHWAYS</span><h2>Choose your Embryology programme</h2><p>Review the programme level that matches your academic background.</p></header>
        <div className="molecular-course-grid clinical-course-grid">
          <article><span>UNDERGRADUATE · AFTER 12TH</span><h3>B.Sc. (Hons./Research)</h3><p className="molecular-course-meta">ART &amp; Clinical Embryology · 3 or 4 years, as listed</p><ul><li>12th PCB; 50%+ listed</li><li>Introduction to reproductive science</li><li>Practical laboratory learning</li><li>NEET not required, per reference</li></ul><Link href="/enquire/">Ask about B.Sc. <span>→</span></Link></article>
          <article><span>POSTGRADUATE · AFTER GRADUATION</span><h3>M.Sc. Clinical Embryology</h3><p className="molecular-course-meta">2 years · Full-time</p><ul><li>B.Sc. Life Sciences; 50%+ listed</li><li>Advanced embryology and ART</li><li>Research and clinical exposure</li><li>Salary and placement vary by role</li></ul><Link href="/enquire/">Ask about M.Sc. <span>→</span></Link></article>
          <article><span>DIPLOMA · AFTER GRADUATION</span><h3>PG Diploma</h3><p className="molecular-course-meta">1 year, as listed</p><ul><li>Graduates in relevant fields</li><li>Reference page lists B.Sc., MBBS, BDS, and BAMS</li><li>Specialised assisted reproduction training</li></ul><Link href="/enquire/">Ask about PG Diploma <span>→</span></Link></article>
          <article><span>DOCTORAL · RESEARCH</span><h3>Ph.D. Clinical Embryology</h3><p className="molecular-course-meta">3–5 years, as listed</p><ul><li>Research-focused study</li><li>Advanced reproductive science</li><li>Confirm current entry requirements with ITHS</li></ul><Link href="/enquire/">Ask about Ph.D. <span>→</span></Link></article>
        </div>
      </div>
    </section>

    <section className="clinical-salary">
      <div className="molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">CAREER &amp; SALARY</span><h2>Embryology career pathways</h2><p>Salary figures are indicative figures published on the reference page; actual outcomes vary.</p></header><div className="clinical-salary-grid"><article><strong>₹4–6 LPA</strong><span>Fresher · 0–1 year</span></article><article><strong>₹8–12 LPA</strong><span>Mid-level · 3–5 years</span></article><article><strong>₹15–25 LPA</strong><span>Senior · 8+ years</span></article><article><strong>$40–80K</strong><span>International roles, as listed</span></article></div></div>
    </section>

    <section className="molecular-compare molecular-inner">
      <header className="molecular-heading"><span className="molecular-eyebrow">ELIGIBILITY</span><h2>Check the entry pathway</h2></header>
      <div className="molecular-table-wrap"><table><thead><tr><th>Programme</th><th>Education listed</th><th>Duration listed</th><th>Entrance exam</th></tr></thead><tbody>
        <tr><th>B.Sc.</th><td>12th with PCB, 50%+</td><td>3–4 years</td><td>Not required, per reference</td></tr><tr><th>M.Sc.</th><td>B.Sc. Life Sciences, 50%+</td><td>2 years</td><td>Not required, per reference</td></tr><tr><th>PG Diploma</th><td>Relevant bachelor’s degree</td><td>1 year</td><td>Confirm with admissions</td></tr><tr><th>Ph.D.</th><td>Master’s degree; confirm criteria</td><td>3–5 years</td><td>Confirm with admissions</td></tr>
      </tbody></table></div>
      <p className="clinical-eligibility-note">Requirements can change. Verify accepted subjects, marks, duration, and campus with ITHS before applying.</p>
    </section>

    <section className="molecular-benefits molecular-inner">
      <header className="molecular-heading"><span className="molecular-eyebrow">WHY ITHS</span><h2>Study ART &amp; Clinical Embryology at ITHS</h2></header>
      <div className="molecular-benefit-grid">{embryologyBenefits.map(([title, text]) => <article key={title}><span aria-hidden="true">✦</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="clinical-campuses"><div className="molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">CAMPUS OPTIONS</span><h2>Explore ITHS campuses</h2><p>The source page lists these locations; ask which programme is available at each campus.</p></header><div className="clinical-campus-links"><Link href="/campuses/mohali/">Chandigarh (Mohali) <span>↗</span></Link><Link href="/campuses/hoshiarpur/">Hoshiarpur <span>↗</span></Link><Link href="/campuses/shimla-hills/">Shimla Hills <span>↗</span></Link><Link href="/campuses/bhopal/">Bhopal <span>↗</span></Link></div></div></section>

    <section className="molecular-faq"><div className="molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">QUESTIONS</span><h2>Clinical Embryology FAQs</h2></header><div className="molecular-faq-list">{embryologyFaqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="molecular-cta"><div className="molecular-inner"><span className="molecular-eyebrow">YOUR NEXT STEP</span><h2>Start your Clinical Embryology journey</h2><p>Ask admissions to confirm current eligibility, campus options, and application details.</p><div><Link href="/enquire/">Enquire about admissions <span>→</span></Link><a href="tel:+917696614978">Call 76966 14978</a></div></div></section>

    <section className="molecular-related molecular-inner"><h2>Explore related pages</h2><div><Link href="/academics/">All departments <span>↗</span></Link><Link href="/programmes/">All programmes <span>↗</span></Link><Link href="/campuses/">All campuses <span>↗</span></Link><Link href="/admissions/eligibility/">Admissions eligibility <span>↗</span></Link></div></section>
  </div>;
}
