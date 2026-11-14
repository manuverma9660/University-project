import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";

const courseFeatures = [
  { icon: "MO", title: "Molecular Oncology", text: "Study cancer at genetic and molecular level." },
  { icon: "LAB", title: "Research Training", text: "Build familiarity with laboratory methods." },
  { icon: "Rx", title: "Drug Development", text: "Explore cancer therapeutics and drug discovery." },
  { icon: "TX", title: "Targeted Therapy", text: "Learn about immunotherapy and precision medicine." },
];

const careerRoles = [
  ["R", "Cancer Research Scientist", "Research labs and institutions"],
  ["D", "Drug Development Scientist", "Pharmaceutical and biotech research"],
  ["CR", "Clinical Research Associate", "Hospital research departments"],
  ["M", "Molecular Researcher", "Genetics and cancer research"],
  ["A", "Academic / Professor", "Universities and colleges"],
  ["L", "Laboratory Scientist", "Research and diagnostic laboratories"],
];

const careerSteps = [
  ["01", "12th Science", "PCB background"],
  ["02", "B.Sc. Cancer Biology", "3-year foundation"],
  ["03", "M.Sc. Cancer Biology", "2-year advanced study"],
  ["04", "Research experience", "Internship or project work"],
  ["05", "Career or Ph.D.", "Choose your next step"],
];

const reasons = [
  ["🔬", "Research labs", "Practical learning in a research-focused setting."],
  ["🎓", "University partner", "Study in association with Rayat Bahra University."],
  ["🧬", "Cancer research", "Explore tumor biology, cancer genetics, and oncology research."],
  ["🤝", "Industry connections", "Learn about research across pharmaceutical and biotechnology settings."],
  ["💼", "Career guidance", "Get guidance as you explore relevant career pathways."],
  ["🎓", "Further study", "Build a foundation for advanced study and doctoral research."],
];

const faqs = [
  ["What is a Cancer Biology course?", "Cancer Biology studies how cancer develops and progresses at the molecular and cellular level. The subject includes tumor biology, cancer genetics, and research methods."],
  ["Which programmes are listed?", "ITHS lists B.Sc. Cancer Biology (3 years) and M.Sc. Cancer Biology (2 years). Confirm current campus availability with admissions."],
  ["What is the eligibility for B.Sc.?", "The reference page lists 10+2 with PCB and 50% aggregate. Confirm current programme-specific eligibility with admissions."],
  ["What is the eligibility for M.Sc.?", "The reference page lists B.Sc. Life Sciences and 50% aggregate, and also names MBBS, BDS, and BAMS as eligible backgrounds. Check current accepted degrees with admissions."],
  ["Is NEET required?", "The reference page says NEET is not required for Cancer Biology. Confirm the current admission process with ITHS."],
  ["How is Cancer Biology different from Oncology?", "Cancer Biology focuses on research into how cancer develops. Oncology is the clinical medical specialty focused on treating patients."],
];

export function CancerBiologyPage() {
  return <div className="cancer-course-page">
    <section className="molecular-hero cancer-course-hero">
      <div className="molecular-inner molecular-hero-grid">
        <div className="molecular-hero-copy">
          <p className="molecular-kicker">LEADING CANCER RESEARCH PROGRAM</p>
          <h1>Cancer Biology Course</h1>
          <h2>Oncology &amp; <em>Research Scientist</em></h2>
          <p>Explore cancer biology through study of oncology, tumor biology, and research science. ITHS lists B.Sc. and M.Sc. pathways.</p>
          <div className="molecular-hero-actions"><Link href="/apply/">Apply now <span aria-hidden="true">→</span></Link><a href="tel:+917696614978">Call 76966 14978</a></div>
        </div>
        <div className="molecular-form-wrap"><EnquiryForm compact campaign courseOptions={["BSc Cancer Biology", "MSc Cancer Biology"]} /></div>
      </div>
    </section>
    <section className="cancer-course-overview">
      <div className="cancer-course-overview-copy">
        <span className="cancer-course-label">ABOUT COURSE</span>
        <h2>What is Cancer <em>Biology Course?</em></h2>
        <p><strong>Cancer biology</strong> is a specialised science programme that studies how cancer develops, grows, and spreads at the molecular and cellular level. Students learn tumor biology, cancer genetics, research methods, and therapeutic strategies. Unlike clinical oncology, Cancer Biology focuses on research science.</p>
        <p>ITHS lists B.Sc. (3 years after 12th) and M.Sc. (2 years after graduation) pathways. Graduates can explore research roles in pharmaceutical, biotechnology, academic, and research settings.</p>
        <div className="cancer-course-feature-grid">{courseFeatures.map(feature => <article key={feature.title}>
          <span aria-hidden="true">{feature.icon}</span><div><h3>{feature.title}</h3><p>{feature.text}</p></div>
        </article>)}</div>
      </div>
      <img src="/cancer-biology.webp" alt="Cancer biology and molecular oncology research" />
    </section>

    <section className="cancer-course-programmes">
      <div className="cancer-course-inner">
        <header className="cancer-course-section-heading">
          <span className="cancer-course-label">OUR PROGRAMMES</span>
          <h2>Choose Your <em>Cancer Biology Programme</em></h2>
          <p>B.Sc. for 12th pass students; M.Sc. for graduates.</p>
        </header>
        <div className="cancer-programme-grid">
          <article className="cancer-programme-card">
            <span className="cancer-programme-level">Undergraduate</span>
            <h3>B.Sc. Cancer Biology</h3>
            <p className="cancer-programme-meta">3 years <b>·</b> Full-time <b>·</b> After 12th</p>
            <ul><li>10+2 with PCB; 50% aggregate listed</li><li>Research science foundation</li><li>Laboratory learning</li><li>Pathway to postgraduate study</li></ul>
            <Link href="/enquire/">Ask about B.Sc. <span aria-hidden="true">→</span></Link>
          </article>
          <article className="cancer-programme-card cancer-programme-card-featured">
            <span className="cancer-programme-level">Postgraduate</span>
            <h3>M.Sc. Cancer Biology</h3>
            <p className="cancer-programme-meta">2 years <b>·</b> Full-time <b>·</b> After graduation</p>
            <ul><li>B.Sc. Life Sciences listed</li><li>Other eligible backgrounds may apply</li><li>Advanced cancer research</li><li>Dissertation project</li></ul>
            <Link href="/enquire/">Ask about M.Sc. <span aria-hidden="true">→</span></Link>
          </article>
        </div>
      </div>
    </section>

    <section className="cancer-course-careers">
      <div className="cancer-course-inner">
        <header className="cancer-course-section-heading">
          <span className="cancer-course-label">CAREER</span>
          <h2>Career Roles After <em>Cancer Biology</em></h2>
          <p>Explore research and laboratory career areas.</p>
        </header>
        <div className="cancer-career-grid">{careerRoles.map(([icon, title, text]) => <article key={title}><span aria-hidden="true">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="cancer-course-path">
      <div className="cancer-course-inner">
        <header className="cancer-course-section-heading">
          <span className="cancer-course-label">CAREER PATH</span>
          <h2>How to Become a Cancer <em>Research Scientist</em></h2>
          <p>A possible study path from school to cancer research.</p>
        </header>
        <ol className="cancer-path-steps">{careerSteps.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
        <p className="cancer-path-note">Course choice, research experience, and career steps vary by student.</p>
        <Link className="button button-primary" href="/apply/">Apply online <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <section className="cancer-course-eligibility">
      <div className="cancer-course-inner">
        <header className="cancer-course-section-heading">
          <span className="cancer-course-label">ELIGIBILITY</span>
          <h2>Cancer Biology <em>Eligibility</em></h2>
          <p>Check the current admission requirements with the university.</p>
        </header>
        <div className="cancer-eligibility-grid">
          <article><h3>B.Sc. Cancer Biology</h3><p className="cancer-programme-meta">3 years <b>·</b> After 12th</p><dl><div><dt>Education</dt><dd>10+2 with PCB</dd></div><div><dt>Minimum marks listed</dt><dd>50% aggregate</dd></div><div><dt>NEET</dt><dd>Not required, per reference page</dd></div></dl></article>
          <article><h3>M.Sc. Cancer Biology</h3><p className="cancer-programme-meta">2 years <b>·</b> After graduation</p><dl><div><dt>Education listed</dt><dd>B.Sc. Life Sciences</dd></div><div><dt>Minimum marks listed</dt><dd>50% aggregate</dd></div><div><dt>Other backgrounds</dt><dd>Confirm with admissions</dd></div></dl></article>
        </div>
        <p className="cancer-eligibility-note">Admission requirements can change. Confirm accepted subjects, degree backgrounds, and marks with ITHS before applying.</p>
      </div>
    </section>

    <section className="cancer-course-why">
      <div className="cancer-course-inner">
        <header className="cancer-course-section-heading">
          <span className="cancer-course-label">WHY ITHS</span>
          <h2>Why Choose ITHS for <em>Cancer Biology</em></h2>
          <p>Explore research-focused learning and academic support.</p>
        </header>
        <div className="cancer-why-grid">{reasons.map(([icon, title, text]) => <article key={title}><span aria-hidden="true">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section className="cancer-course-faq">
      <div className="cancer-course-inner">
        <header className="cancer-course-section-heading">
          <span className="cancer-course-label">FAQ</span>
          <h2>Cancer Biology <em>Questions</em></h2>
        </header>
        <div className="cancer-faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </div>
    </section>

    <section className="cancer-course-cta">
      <div className="cancer-course-inner">
        <h2>Start Your Cancer Biology Journey</h2>
        <p>Explore the programme and ask admissions about the next steps.</p>
        <div><Link className="button" href="/apply/">Apply now <span aria-hidden="true">→</span></Link><a className="button" href="tel:+917696614978">Call admissions</a></div>
      </div>
    </section>

    <section className="page-related cancer-course-related">
      <div className="cancer-course-inner">
        <h2>Explore related pages</h2>
        <div className="related-links">
          <Link href="/academics/cancer-biology/">Cancer Biology department <span aria-hidden="true">&#8599;</span></Link>
          <Link href="/programmes/">All programmes <span aria-hidden="true">&#8599;</span></Link>
          <Link href="/campuses/mohali/">Chandigarh (Mohali) campus <span aria-hidden="true">&#8599;</span></Link>
          <Link href="/admissions/eligibility/">Admissions eligibility <span aria-hidden="true">&#8599;</span></Link>
        </div>
      </div>
    </section>
  </div>;
}
