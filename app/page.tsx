import Link from "next/link";
import Image from "next/image";
import { EnquiryForm } from "@/components/enquiry-form";
import { departments, leadership } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  ["Which programmes does ITHS offer?", "ITHS offers programmes across clinical embryology and ART, cancer biology, nutrigenetics and personalised nutrition, stem cell and regenerative medicine, molecular medicine, and neuroscience. See the Academics menu for programme levels."],
  ["How can I apply?", "Review the admissions information and eligibility criteria, then use the Apply Online page or send an enquiry to the admissions team."],
  ["Where are ITHS programmes available?", "Programme availability varies by campus. Contact admissions for current campus and course details."],
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero-grid-mark" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">{siteConfig.name} · {siteConfig.descriptor}</p>
            <h1>Health science.<br /><span>Human impact.</span></h1>
            <p className="hero-lede">Build your future at the intersection of discovery, clinical practice, and the science of better health.</p>
            <div className="hero-actions"><Link className="button button-red" href="/academics/">Explore departments <span aria-hidden="true">↗</span></Link><Link className="button button-outline-light" href="/admissions/">Admissions 2026–27</Link></div>
          </div>
          <EnquiryForm compact />
        </div>
        <div className="hero-bottom container"><span>Education · Research · Discovery</span><span>01 / 16</span></div>
      </section>

      <section className="facts-strip" aria-label="Key facts">
        <div className="container facts-inner"><div><strong>6</strong><span>Academic departments</span></div><div><strong>2026–27</strong><span>Admissions cycle</span></div><div><strong>B.Sc – PhD</strong><span>Study pathways</span></div><div><strong>4</strong><span>Partner campuses</span></div></div>
      </section>

      <section className="notice-bar" aria-label="Notices"><div className="container notice-inner"><strong>Notices</strong><p><Link href="/events/">Nutrition Matters 2026 brought ITHS and INNR students together in Chandigarh to explore nutrition, genes, and health.</Link></p><span className="content-pending">Campus event</span></div></section>

      <section className="partner-section section-pad"><div className="container partner-inner"><div><p className="eyebrow">Our university partners</p><h2>Learning connected<br />to <em>opportunity.</em></h2></div><div className="partner-names"><span>Rayat Bahra Professional University</span><span>Rayat Bahra University</span><span>Bahra University</span><span>Scope Global Skills University <small>confirmation pending</small></span></div><Link className="text-link" href="/partnerships/university-partners/">View university partners <span>→</span></Link></div></section>

      <section className="about-home section-pad" id="about"><div className="container about-home-grid"><div className="about-visual"><Image className="about-photo" src="/iths-learning-01.webp" alt="Researchers exploring personalised nutrition in a health science lab" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div><p className="eyebrow">About ITHS</p><h2>From scientific insight to <em>healthier futures.</em></h2><p className="body-lead">ITHS brings specialised education and research together across emerging areas of health science.</p><p>Explore our departments, meet our academic community, and find the programme pathway that fits your ambition.</p><Link className="button button-primary" href="/about/">Discover ITHS <span>↗</span></Link></div></div></section>

      <section className="test-section section-pad" id="iths-set"><div className="container test-layout"><div><p className="eyebrow eyebrow-light">Scholarship entrance test · 2026–27</p><h2>Take your first step<br />with <em>ITHS-SET.</em></h2></div><div><p>Take the free ITHS scholarship entrance test. Top scorers may receive a tuition fee waiver of up to 100%, subject to the published award terms.</p><Link className="button button-red" href="/iths-set/">Explore ITHS-SET <span>↗</span></Link></div></div></section>

      <section className="placements-section section-pad"><div className="container placement-layout"><div><p className="eyebrow">Careers and outcomes</p><h2>Support for the<br /><em>next step.</em></h2><p className="body-lead">Explore career guidance and student placement stories shared with written consent.</p><Link className="text-link" href="/placed-students/">Meet placed students <span>→</span></Link></div><div className="placement-feature"><span className="feature-index">CAREER SUPPORT</span><h3>Learning that connects<br />to the world of work.</h3><p>Programme and career support information will be published by ITHS.</p><Link href="/placed-students/">Explore student stories ↗</Link></div></div></section>

      <section className="leadership-section section-pad"><div className="container"><div className="section-head"><div><p className="eyebrow">Leadership</p><h2>Meet the people<br />guiding <em>ITHS.</em></h2></div><Link className="text-link" href="/about/leadership/">View leadership <span>→</span></Link></div><div className="leader-cards">{leadership.map(person => <Link href={person.href} className="leader-card" key={person.name}><span>{person.title.toUpperCase()}</span><strong>{person.name}</strong><small>{person.credentials.slice(0, 2).join(" · ")}</small><p>{person.description}</p></Link>)}<Link href="/about/faculty/" className="leader-card"><span>ACADEMIC COMMUNITY</span><strong>Faculty at ITHS</strong><small>Faculty directory</small><p>Meet the academic community across health science departments.</p></Link></div></div></section>

      <section className="research-section section-pad"><div className="container research-layout"><div><p className="eyebrow">Research and patents</p><h2>Ideas that move<br /><em>health forward.</em></h2><p className="body-lead">Explore research themes, publications, projects, and intellectual property from the ITHS community.</p><Link className="button button-primary" href="/research/">Explore research <span>↗</span></Link></div><div className="research-pending"><span className="content-pending">Research records pending verification</span><p>Research highlights and patent information will appear here when ITHS provides verifiable records.</p><Link href="/research/patents/">Research and patents <span>→</span></Link></div></div></section>

      <section className="life-section section-pad"><div className="container life-layout"><div className="life-photo"><Image src="/iths-learning-02.webp" alt="Student using a microscope in a health science laboratory" fill sizes="(max-width: 760px) 100vw, 50vw" /><span>Life at ITHS</span></div><div><p className="eyebrow">Campus life</p><h2>Find your place<br />in the <em>community.</em></h2><p className="body-lead">Discover events, student activities, wellness, and campus experiences.</p><Link className="text-link" href="/campus-life/">Explore campus life <span>→</span></Link></div></div></section>

      <section className="departments-section section-pad" id="departments"><div className="container"><div className="section-head"><div><p className="eyebrow">Study at ITHS</p><h2>Explore our <em>departments.</em></h2></div><Link className="text-link" href="/academics/">All departments <span>→</span></Link></div><div className="department-grid">{departments.map((department, index) => <Link href={department.href} className="department-card" key={department.href}><span>0{index + 1}</span><h3>{department.title}</h3><p>{department.programmes.join(" · ")}</p><b aria-hidden="true">↗</b></Link>)}</div></div></section>

      <section className="labs-section section-pad"><div className="container labs-layout"><div><p className="eyebrow">Hands-on learning</p><h2>Science is learned<br />by <em>doing.</em></h2><p className="body-lead">Explore laboratory spaces and practical training across ITHS departments.</p><Link className="text-link" href="/about/labs/">Explore teaching labs <span>→</span></Link></div><div className="labs-pending"><span className="content-pending">Laboratories listed in the ITHS prospectus</span><p>Embryology · Andrology · Stem Cell · Nutrigenetics · Molecular Genetics · Pathology · Histology &amp; Immunohistochemistry · Microbiology · Anatomy &amp; Physiology</p><Link href="/about/labs/">View laboratory information <span>→</span></Link></div></div></section>

      <section className="process-section section-pad" id="admissions"><div className="container"><p className="eyebrow">Admissions</p><h2>Your path to ITHS, <em>step by step.</em></h2><div className="process-grid">{[["01", "Explore", "Find a programme and campus that fit your goals."], ["02", "Check eligibility", "Review the entry requirements and important dates."], ["03", "Apply", "Submit your application or contact admissions for guidance."], ["04", "Hear from ITHS", "The admissions team will guide you through the next steps."]].map(step => <article key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div><Link className="button button-primary" href="/admissions/how-to-apply/">How to apply <span>↗</span></Link></div></section>

      <section className="admissions-banner"><div className="container admissions-banner-inner"><div><p className="eyebrow eyebrow-light">Admissions · 2026–27</p><h2>Ready to take<br />the next step?</h2></div><div><p>Find your programme, check eligibility, and get in touch with ITHS admissions.</p><Link className="button button-red" href="/admissions/">Explore admissions <span>↗</span></Link></div></div></section>

      <section className="why-section section-pad"><div className="container"><div className="section-head"><div><p className="eyebrow">Why ITHS</p><h2>Curiosity with a <em>purpose.</em></h2></div></div><div className="why-grid"><article><span>01</span><h3>Focused disciplines</h3><p>Study specialised areas of health science through dedicated departments.</p></article><article><span>02</span><h3>Research perspective</h3><p>Learn in a community connected to questions shaping health and medicine.</p></article><article><span>03</span><h3>Practical learning</h3><p>Explore applied learning and laboratory experiences across programmes.</p></article><article><span>04</span><h3>Guidance throughout</h3><p>Get admissions and programme guidance as you plan your next step.</p></article></div></div></section>

      <section className="faq-section section-pad" id="faqs"><div className="container faq-layout"><div><p className="eyebrow">Need a little help?</p><h2>Frequently asked<br /><em>questions.</em></h2><Link className="text-link" href="/faqs/">All FAQs <span>→</span></Link></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    </main>
  );
}
