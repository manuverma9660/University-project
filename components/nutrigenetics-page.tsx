import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";

const features = [
  ["Gene-based nutrition", "Explore how genetic variation can influence nutrition and dietary response."],
  ["Personalised planning", "Learn principles used to shape nutrition plans around individual needs."],
  ["Prevention and wellness", "Study the role of nutrition in long-term health and prevention."],
  ["Research methods", "Build a foundation in nutrigenetics research and interpretation."],
];

const careers = ["Nutrigenetics counsellor", "Personalised nutrition consultant", "Nutrition and wellness specialist", "Research assistant or scientist", "Supplement industry specialist", "Academic and health educator"];

const benefits = [
  ["Specialist subject", "Study the relationship between genetic variation, diet, and health."],
  ["Practical learning", "Build subject knowledge through applied learning and research methods."],
  ["University pathway", "ITHS lists programmes delivered with university partners; confirm the campus and awarding university."],
  ["Research focus", "Explore current questions in genetics, nutrition, and personalised health."],
  ["Career guidance", "Discuss further study and career pathways with the academic and admissions teams."],
  ["Merit-based entry", "The reference page says NEET is not required; confirm current entry rules with admissions."],
];

const faqs = [
  ["What is Nutrigenetics?", "Nutrigenetics studies how genetic differences can affect a person's response to nutrients and diet. It supports research into more personalised approaches to nutrition."],
  ["Is this course available in India?", "ITHS lists B.Sc. and M.Sc. pathways in Nutrigenetics and Personalised Nutrition. Confirm the current intake, campus, and awarding university directly with admissions."],
  ["What is the eligibility?", "The reference page lists 12th with PCB for B.Sc. and a relevant bachelor's degree for M.Sc. Marks and accepted subjects can change, so check the latest requirements with ITHS."],
  ["Is NEET required?", "The reference page states that NEET is not required. Confirm the current admission process with ITHS."],
  ["What is the difference between nutrigenetics and nutrigenomics?", "Nutrigenetics focuses on how genetic variation affects responses to food. Nutrigenomics studies how nutrients and diet can influence gene expression."],
  ["What careers can this subject lead to?", "Possible areas include nutrition counselling, wellness, research, education, and the food or supplement industry. Roles depend on your qualification, experience, and applicable professional requirements."],
];

export function NutrigeneticsPage() {
  return <div className="molecular-page nutrigenetics-page">
    <section className="molecular-hero">
      <div className="molecular-inner molecular-hero-grid">
        <div className="molecular-hero-copy">
          <p className="molecular-kicker">A SPECIALISED COURSE AT ITHS</p>
          <h1>Nutrigenetics &amp; Personalised Nutrition</h1>
          <h2>Understand your genes. <em>Personalise nutrition.</em></h2>
          <p>Explore how genetic variation and nutrition interact, and how research in this field can inform more individual approaches to health.</p>
          <div className="molecular-hero-actions"><Link href="/apply/">Apply now <span aria-hidden="true">→</span></Link><a href="tel:+917696614978">Call 76966 14978</a></div>
          <small>B.Sc. after 12th · M.Sc. after a relevant bachelor’s degree</small>
        </div>
        <div className="molecular-form-wrap"><EnquiryForm compact courseOptions={["BSc Nutrigenetics and Personalized Nutrition", "MSc Nutrigenetics and Personalized Nutrition", "PhD Nutrigenetics and Personalized Nutrition", "PG Diploma Nutrigenetics and Personalized Nutrition"]} /></div>
      </div>
    </section>

    <section className="molecular-overview molecular-inner">
      <div><span className="molecular-eyebrow">ABOUT THE COURSE</span><h2>Nutrition shaped around individual biology</h2>
        <p>Nutrigenetics explores how differences in our genes may influence the way we respond to nutrients and dietary patterns. It brings genetics, nutrition, and health research together.</p>
        <p>ITHS describes its Nutrigenetics and Personalised Nutrition course as a specialist academic pathway. Students can ask admissions about the current B.Sc. and M.Sc. options, campus, and university partner.</p>
        <ul className="nutrigenetics-feature-list">{features.map(([title]) => <li key={title}>{title}</li>)}</ul>
      </div>
      <img src="/nutrigenetics.webp" alt="Nutrigenetics and personalised nutrition study" />
    </section>

    <section className="molecular-pathways"><div className="molecular-inner">
      <header className="molecular-heading"><span className="molecular-eyebrow">STUDY PATHWAYS</span><h2>Choose your course pathway</h2><p>Find the option that matches your academic background.</p></header>
      <div className="molecular-course-grid">
        <article><span>UNDERGRADUATE · AFTER 12TH</span><h3>B.Sc. Nutrigenetics</h3><p className="molecular-course-meta">3 years · duration listed on reference page</p><ul><li>12th with PCB, as listed</li><li>Foundations in genetics and nutrition</li><li>Explore personalised nutrition research</li><li>Ask admissions about current eligibility and campus</li></ul><Link href="/enquire/">Ask about B.Sc. <span>→</span></Link></article>
        <article><span>POSTGRADUATE · AFTER GRADUATION</span><h3>M.Sc. Nutrigenetics &amp; Personalised Nutrition</h3><p className="molecular-course-meta">2 years · duration listed on reference page</p><ul><li>Relevant bachelor’s degree, as listed</li><li>Advanced study in genetics and nutrition</li><li>Research-led learning</li><li>Confirm accepted degrees with admissions</li></ul><Link href="/enquire/">Ask about M.Sc. <span>→</span></Link></article>
      </div>
    </div></section>

    <section className="molecular-compare molecular-inner">
      <header className="molecular-heading"><span className="molecular-eyebrow">ELIGIBILITY</span><h2>Compare the entry pathways</h2><p>Requirements shown on the reference page; confirm current criteria with ITHS.</p></header>
      <div className="molecular-table-wrap"><table><thead><tr><th>Programme</th><th>Education listed</th><th>Duration listed</th><th>Entrance exam</th></tr></thead><tbody>
        <tr><th>B.Sc.</th><td>12th with PCB</td><td>3 years</td><td>NEET not required, per reference</td></tr>
        <tr><th>M.Sc.</th><td>Relevant bachelor’s degree</td><td>2 years</td><td>NEET not required, per reference</td></tr>
      </tbody></table></div>
      <p className="clinical-eligibility-note">Accepted subjects, minimum marks, and campus availability may vary. Verify the current details with admissions before applying.</p>
    </section>

    <section className="molecular-fit"><div className="molecular-inner">
      <header className="molecular-heading"><span className="molecular-eyebrow">A GROWING FIELD</span><h2>Why personalised nutrition?</h2><p>Research is bringing genetics and nutrition closer to everyday health questions.</p></header>
      <div className="molecular-fit-grid">{[["Individual variation", "People can respond differently to the same foods and nutrients."], ["Preventive health", "Personalised approaches may help inform prevention and wellness research."], ["New research tools", "Genetic testing is expanding research into diet and individual health." ]].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="molecular-careers"><div className="molecular-inner molecular-career-grid"><div><span className="molecular-eyebrow">CAREER PATHWAYS</span><h2>Where can this field lead?</h2><p>Graduates may explore nutrition, wellness, research, education, and industry roles. Specific job eligibility depends on qualifications, experience, and professional rules.</p></div><div className="molecular-career-list">{careers.map(career => <p key={career}>{career}</p>)}</div></div></section>

    <section className="molecular-benefits molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">WHY ITHS</span><h2>Study Nutrigenetics at ITHS</h2></header><div className="molecular-benefit-grid">{benefits.map(([title, text]) => <article key={title}><span aria-hidden="true">✦</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="molecular-faq"><div className="molecular-inner"><header className="molecular-heading"><span className="molecular-eyebrow">QUESTIONS</span><h2>Nutrigenetics FAQs</h2></header><div className="molecular-faq-list">{faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="molecular-cta"><div className="molecular-inner"><span className="molecular-eyebrow">YOUR NEXT STEP</span><h2>Explore a future in personalised nutrition.</h2><p>Ask ITHS admissions about current courses, entry requirements, and campus availability.</p><div><Link href="/enquire/">Enquire about admissions <span>→</span></Link><a href="tel:+917696614978">Call 76966 14978</a></div></div></section>

    <section className="molecular-related molecular-inner"><h2>Explore related pages</h2><div><Link href="/academics/">All departments <span>↗</span></Link><Link href="/programmes/">All programmes <span>↗</span></Link><Link href="/campuses/mohali/">Mohali campus <span>↗</span></Link><Link href="/admissions/eligibility/">Admissions eligibility <span>↗</span></Link></div></section>
  </div>;
}
