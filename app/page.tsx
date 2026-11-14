import Link from "next/link";
import Image from "next/image";
import { HomeEnquiryForm } from "@/components/home-enquiry-form";
import { HomeProgrammes } from "@/components/home-programmes";
import { campuses, departments, leadership } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";
import { AdmissionsTimeline } from "@/components/admissions-timeline";
import { CampusLifeSlideshow, campusLifeSlideGroups } from "@/components/campus-life-slideshow";
import { btechCourseHref, courseCatalogue } from "@/lib/course-catalogue";
import { PartnerUniversitiesCarousel } from "@/components/partner-universities-carousel";

const faqs = [
  ["What does a partner university collaboration mean?", "ITHS runs programmes in collaboration with partner universities. The university associated with your programme awards the degree or diploma. Ask admissions to confirm the awarding university for your chosen programme and campus."],
  ["Which programmes can I study at ITHS?", "Explore undergraduate, postgraduate, postgraduate diploma and doctoral pathways across six health science departments. The programme finder above shows the pathways listed in our catalogue."],
  ["How do I find out about eligibility and fees?", "Choose your programme and speak with an admissions counsellor about entry requirements, tuition fees and other charges for your preferred campus."],
  ["What is ITHS-SET?", "ITHS-SET is a scholarship test for students applying to ITHS programmes. Visit the ITHS-SET page or contact admissions for the current schedule, eligibility and award terms."],
  ["Is there hostel accommodation?", "Accommodation arrangements depend on the partner university campus. Contact admissions to check availability, facilities and hostel fees before applying."],
  ["How do I apply?", "Start by exploring a programme and checking its entry requirements. Use the Apply page or contact an admissions counsellor for help with the application and required documents."],
];

const notices = [
  { title: "Nutrition Matters 2026: exploring genes, nutrition and health", category: "Campus life", date: "2026-09-07", day: "07", month: "Sep 2026", dateLabel: "Event", href: "/events/" },
  { title: "Teachers’ Day 2026: a celebration planned by students", category: "Campus life", date: "2026-09-03", day: "03", month: "Sep 2026", dateLabel: "Event", href: "/iths-teachers-day-2026-celebration/" },
  { title: "Orientation & Induction Programme: welcoming our new batch", category: "Campus update", date: "2026-08-17", day: "17", month: "Aug 2026", dateLabel: "Published", href: "/orientation-cum-induction-programme-2026-iths/" },
];

function SectionHead({ eyebrow, title, description, href, link = "Explore more" }: { eyebrow: string; title: string; description?: string; href?: string; link?: string }) {
  return <div className="home-section-head"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>{href && <Link className="text-link" href={href}>{link} <span aria-hidden="true">&rarr;</span></Link>}</div>;
}

export default function HomePage() {
  const programmeCount = departments.reduce((total, item) => total + item.programmes.length, 0);
  return <main id="main-content" className="reference-home">
    <section className="home-intro">
      <Image className="home-hero-photo" src="/home/health-science-hero.webp" alt="" fill priority sizes="100vw" />
      <div className="container home-intro-grid">
        <div className="home-intro-copy"><span className="home-admissions-pill"><span /> Admissions enquiries open</span><h1>University of<br />Translational<br />Health Science<span className="home-title-dot">.</span></h1><p className="home-intro-lede">Where laboratory science<br />meets a healthier tomorrow.</p><p>Explore specialised health science programmes, from B.Sc to PhD, with practical learning and partner university collaborations.</p><div className="home-button-row"><Link className="button button-red" href="/apply/">Apply now <span aria-hidden="true">&rarr;</span></Link><Link className="button button-outline-light" href="/iths-set/">ITHS-SET 2027</Link></div><div className="home-hero-footnote"><span aria-hidden="true">01 /</span> Learn in the classroom. Discover at the bench.</div></div>
        <HomeEnquiryForm />
      </div>
    </section>
    <section className="home-facts" aria-label="Study at ITHS"><div className="container home-facts-inner"><h2>Programmes from<br />B.Sc to PhD</h2><div><strong>{departments.length}</strong><span>Departments</span></div><div><strong>{programmeCount}</strong><span>Programme pathways</span></div><div><strong>{campuses.length}</strong><span>Partner campuses</span></div><Link href="#home-enquiry">Request a call back <span aria-hidden="true">&rarr;</span></Link></div></section>
    <aside className="home-notices" aria-label="Latest notices"><div className="container home-notices-inner">
      <div className="home-notices-heading"><span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m4 9 14-5v16L4 15V9Zm4 8 2 5H6l-2-7m16-6 2-1m-2 7 2 1" /></svg></span><strong>Notices</strong><small>News &amp; campus updates</small></div>
      <ul className="home-notices-list">{notices.map(notice => <li key={notice.href}>
        <Link className="home-notice-link" href={notice.href}>
          <time className="home-notice-date" dateTime={notice.date}><b>{notice.day}</b><span>{notice.month}</span><small>{notice.dateLabel}</small></time>
          <div className="home-notice-copy"><span>{notice.category}</span><h3>{notice.title}</h3></div>
          <span className="home-notice-arrow" aria-hidden="true">&rarr;</span>
        </Link>
      </li>)}</ul>
    </div></aside>

    <section className="home-section home-about" id="about" aria-labelledby="home-about-title">
      <Image className="home-about-background" src="/images/about-iths-dna-research.webp" alt="" fill sizes="100vw" />
      <div className="container home-about-grid">
        <div className="home-about-copy">
          <p className="eyebrow">About ITHS</p>
          <h2 id="home-about-title">Where laboratory science<br />meets health care</h2>
          <p>Understand how embryos develop, how cancer grows, how genes shape the body's response to food, and how stem cells and the nervous system work.</p>
          <p>ITHS connects classroom study with laboratory learning across six specialist departments. Find a study pathway that brings your curiosity closer to the questions shaping health care.</p>
          <div className="home-button-row">
            <Link className="home-about-cta" href="/about/">About ITHS <span aria-hidden="true">&rarr;</span></Link>
            <Link className="home-about-secondary" href="/partnerships/university-partners">How degrees are awarded <span aria-hidden="true">{"\u2197"}</span></Link>
          </div>
        </div>
        <aside className="home-about-glass" aria-label="About ITHS and degree awards">
          <span className="home-about-card-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="m3 12 13-7 13 7-13 7-13-7Z" /><path d="M9 16v8c5 4 9 4 14 0v-8m6-4v11" /></svg></span>
          <p className="home-about-card-kicker">A practical approach to health science</p>
          <h3>Learn. Discover.<br />Transform.</h3>
          <div className="home-degree-note">ITHS is a university. Degrees and diplomas are awarded by the partner university associated with each programme.</div>
        </aside>
      </div>
    </section>

    <section className="home-section home-partners" id="partners"><div className="container"><div className="home-centered-heading"><p className="eyebrow">How degrees are awarded</p><h2>Our partner universities</h2><p>Specialist teaching at ITHS, in collaboration with a partner university that awards your qualification.</p></div><PartnerUniversitiesCarousel /><Link className="text-link home-centered-link" href="/partnerships/university-partners/">All partnerships <span aria-hidden="true">&rarr;</span></Link></div></section>

    <section className="home-section" id="departments"><div className="container"><SectionHead eyebrow="Academics" title="Departments and programmes" description="Find your direction in health science, from your first degree to advanced study." href="/academics/" link="All departments" /><HomeProgrammes /></div></section>
    <section className="home-scholarship" id="iths-set"><div className="container home-scholarship-grid"><div><p className="eyebrow">Scholarships</p><h2>ITHS<span>-</span>SET 2027</h2><p>A scholarship test for students exploring their next step in health science.</p><div className="home-button-row"><Link className="button button-red" href="/iths-set/#register">Explore ITHS-SET <span aria-hidden="true">&rarr;</span></Link><Link className="button button-outline-light" href="/admissions/scholarships-iths-set/">Know more</Link></div></div><div className="home-scholarship-details"><article><span aria-hidden="true">01</span><h3>Find your pathway</h3><p>Explore programmes that fit your interests and qualifications.</p></article><article><span aria-hidden="true">02</span><h3>Explore support</h3><p>Ask about scholarship eligibility, dates and award terms.</p></article></div></div></section>

    <section className="home-section" id="campuses"><div className="container"><SectionHead eyebrow="Campuses" title="Your next chapter starts here" description="Explore our partner university locations and find a campus for your studies." href="/campuses/" link="All campuses" /><div className="home-campus-grid">{campuses.map(campus => { const partner = { "/campuses/mohali/": { image: "/home/partner-rbu.png" }, "/campuses/hoshiarpur/": { image: "/home/partner-rbpu.png" }, "/campuses/shimla-hills/": { image: "/home/partner-bahra.png" }, "/campuses/bhopal/": { image: "/home/partner-scope.png" } }[campus.href]!; const campusImage = { "/campuses/hoshiarpur/": "/images/campuses/hoshiarpur.jpg", "/campuses/bhopal/": "/images/campuses/bhopal.jpg", "/campuses/mohali/": "/images/campuses/chandigarh-mohali.jpg", "/campuses/shimla-hills/": "/images/campuses/shimla-hills.jpg" }[campus.href]!; const title = campus.title.replace(/\s*\([^)]*\)/g, ""); return <Link className="home-campus-card" href={campus.href} key={campus.href}><div className="home-campus-visual"><Image className="home-campus-photo" src={campusImage} alt={`${title} campus`} fill sizes="(max-width: 480px) calc(100vw - 36px), (max-width: 1024px) 45vw, 25vw" /><div className="home-campus-logo"><Image src={partner.image} alt={`${campus.partner} logo`} width={190} height={82} /></div></div><div className="home-campus-details"><div><p className="eyebrow">{campus.location}</p><h3>{title}</h3></div><div className="home-campus-partner-box"><p>In collaboration with</p><strong>{campus.partner}</strong></div><span className="text-link">View campus <span aria-hidden="true">&rarr;</span></span></div></Link>; })}</div></div></section>

    <section className="home-section home-labs" id="labs"><div className="container"><SectionHead eyebrow="Courses" title="Explore specialist health science" description="Discover your course, study pathways and the science behind your next step." href="/programs/" link="All courses" /><div className="home-lab-grid">{courseCatalogue.filter(course => course.href !== btechCourseHref).map(item => <Link href={item.href} className="home-lab-card" key={item.href}><Image className="home-lab-photo" src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /><div className="home-lab-overlay"><h3>{item.title}</h3><p>{item.description}</p><span className="home-lab-link-text">Explore course <span aria-hidden="true">&rarr;</span></span></div></Link>)}</div></div></section>

    <section className="home-section"><div className="container"><SectionHead eyebrow="Leadership" title="People guiding ITHS" href="/about/leadership/" link="Meet our leadership" /><div className="home-leadership-grid">{leadership.map(person => <article className="home-leader" key={person.href}><div className="home-leader-photo"><Image src={person.title === "Director" ? "/home/director.webp" : "/home/founder.png"} alt={person.name} fill sizes="(max-width: 760px) 35vw, 180px" /></div><div><h3>{person.name}</h3><span>{person.badge}</span><p>{person.title === "Director" ? "Connecting specialist health science education with practical laboratory learning." : "Bringing a focus on genetics, nutrition and personalised health to the ITHS community."}</p><Link className="text-link" href={person.href}>Read message <span aria-hidden="true">&rarr;</span></Link></div></article>)}</div></div></section>
    <section className="home-section home-research" id="research" aria-labelledby="home-research-title"><div className="container home-research-wrap"><div className="home-research-header"><p className="eyebrow">RESEARCH &amp; DISCOVERY</p><h2 id="home-research-title">Transforming Health Through <span>Research &amp; Innovation</span></h2><p>Discover innovative research, scientific exploration, and new opportunities in health sciences at ITHS.</p><Link className="text-link" href="/research/">Explore Research at ITHS <span aria-hidden="true">&rarr;</span></Link></div><div className="home-research-chips">{[
      { number: "01", title: "Research and Development", href: "/research/research-and-development/", desc: "Explore research directions and laboratory learning." },
      { number: "02", title: "ITHS Research Club", href: "/research/research-club/", desc: "Research interests and participation for UG and PG students." },
      { number: "03", title: "Publications and Patents", href: "/research/publications/", desc: "Explore scientific publications and intellectual property." }
    ].map(item => <Link href={item.href} className="home-research-chip" key={item.href}><span className="home-research-chip-num" aria-hidden="true">{item.number}</span><h3>{item.title}</h3><p>{item.desc}</p></Link>)}</div></div></section>

    <section className="home-section" id="admissions"><div className="container"><SectionHead eyebrow="Admissions" title="Your path to ITHS" description="Start with a conversation. Explore your options with an admissions counsellor." href="/admissions/how-to-apply/" link="How to apply" /><AdmissionsTimeline /></div></section>
    <section className="home-section home-careers" id="careers" aria-labelledby="careers-heading"><div className="container home-careers-grid"><div className="home-careers-intro"><p className="eyebrow">Professional Pathways</p><h2 id="careers-heading">Where Laboratory Science Meets <span>Career Impact</span></h2><p>Bridge laboratory bench science with real clinical diagnostics and health applications. Our graduates step into high-demand roles across IVF clinics, precision medicine laboratories, and biomedical institutes.</p></div><div className="home-career-marquee" aria-label="Explore health science career pathways"><div className="home-career-track">{[
      { title: "Clinical Embryology & ART", href: "/academics/clinical-embryology-art/", role: "IVF Specialist & Senior Embryologist", image: "/clinical-embryology.webp" },
      { title: "Cancer Biology Research", href: "/academics/cancer-biology/", role: "Oncology Researcher & Clinical Analyst", image: "/cancer-biology.webp" },
      { title: "Personalised Nutrition", href: "/academics/nutrigenetics-personalised-nutrition/", role: "Nutrigeneticist & Dietary Scientist", image: "/nutrigenetics.webp" },
      { title: "Stem Cell Science", href: "/academics/stem-cell-regenerative-medicine/", role: "Regenerative Medicine Specialist", image: "/stem-cell.webp" },
      { title: "Molecular Diagnostics", href: "/academics/molecular-medicine/", role: "Molecular Geneticist & Lab Consultant", image: "/images/about-iths-dna-research.webp" },
      { title: "Neuroscience Research", href: "/academics/neuroscience/", role: "Neurobiologist & Clinical Researcher", image: "/images/about-iths-biomedical.webp" }
    ].map((item, index) => <Link href={item.href} className="home-career-card" key={`${item.title}-${index}`}><Image src={item.image} alt="" fill sizes="(max-width: 760px) 82vw, 390px" className="home-career-image" /><span className="home-career-shade" aria-hidden="true" /><div className="home-career-content"><h3>{item.title}</h3><p>{item.role}</p></div></Link>)}{[
      { title: "Clinical Embryology & ART", href: "/academics/clinical-embryology-art/", role: "IVF Specialist & Senior Embryologist", image: "/clinical-embryology.webp" },
      { title: "Cancer Biology Research", href: "/academics/cancer-biology/", role: "Oncology Researcher & Clinical Analyst", image: "/cancer-biology.webp" },
      { title: "Personalised Nutrition", href: "/academics/nutrigenetics-personalised-nutrition/", role: "Nutrigeneticist & Dietary Scientist", image: "/nutrigenetics.webp" },
      { title: "Stem Cell Science", href: "/academics/stem-cell-regenerative-medicine/", role: "Regenerative Medicine Specialist", image: "/stem-cell.webp" },
      { title: "Molecular Diagnostics", href: "/academics/molecular-medicine/", role: "Molecular Geneticist & Lab Consultant", image: "/images/about-iths-dna-research.webp" },
      { title: "Neuroscience Research", href: "/academics/neuroscience/", role: "Neurobiologist & Clinical Researcher", image: "/images/about-iths-biomedical.webp" }
    ].map((item, index) => <Link href={item.href} className="home-career-card" key={`loop-${item.title}-${index}`} tabIndex={-1} aria-hidden="true"><Image src={item.image} alt="" fill sizes="(max-width: 760px) 82vw, 390px" className="home-career-image" /><span className="home-career-shade" aria-hidden="true" /><div className="home-career-content"><h3>{item.title}</h3><p>{item.role}</p></div></Link>)}</div></div><div className="home-careers-actions"><Link className="button button-primary" href="/placed-students/">Explore placement support <span aria-hidden="true">&rarr;</span></Link><Link className="text-link" href="/academics/">All departments <span aria-hidden="true">&rarr;</span></Link></div></div></section>

    <section className="home-section home-life" aria-labelledby="home-life-title"><div className="container home-life-mosaic"><article className="home-life-tile home-life-intro-tile"><p className="eyebrow">Campus life</p><h2 id="home-life-title">Life at <span>ITHS</span></h2><p>Learning together, sharing ideas and discovering a community.</p><Link className="home-life-tile-link" href="/events/">ITHS events <span aria-hidden="true">&rarr;</span></Link></article><Link href="/events/" className="home-life-tile home-life-feature"><CampusLifeSlideshow slides={campusLifeSlideGroups.featured} direction="left" startDelayMs={0} /><span className="home-life-caption"><small>Campus event</small><strong>Life and learning at ITHS</strong><span>Explore moments from our campus community.</span></span></Link><Link href="/iths-teachers-day-2026-celebration/" className="home-life-tile home-life-photo home-life-teachers"><CampusLifeSlideshow slides={campusLifeSlideGroups.community} direction="down" startDelayMs={1200} /><span className="home-life-photo-label">Campus community</span></Link><Link href="/campuses/" className="home-life-tile home-life-photo home-life-students"><CampusLifeSlideshow slides={campusLifeSlideGroups.studentLearning} direction="up" startDelayMs={2400} /><span className="home-life-photo-label">Student learning</span></Link><Link href="/events/" className="home-life-tile home-life-photo home-life-learning"><CampusLifeSlideshow slides={campusLifeSlideGroups.learning} direction="right" startDelayMs={3600} /><span className="home-life-photo-label">Science in action</span></Link></div></section>
    <section className="home-section"><div className="container"><SectionHead eyebrow="Explore your options" title="A little guidance goes a long way" description="Useful starting points for students and families planning their next step." href="/blog/" link="Explore the blog" /><div className="home-guide-grid">{[{ image: "/cancer-biology.webp", category: "Choosing a course", title: "Explore health science after 10+2", href: "/admissions/courses-after-12th/" }, { image: "/clinical-embryology.webp", category: "Your study pathway", title: "Discover clinical embryology & ART", href: "/academics/clinical-embryology-art/" }, { image: "/iths-learning-02.webp", category: "Understanding your degree", title: "Get to know our university partners", href: "/partnerships/university-partners/" }].map(item => <Link href={item.href} className="home-guide-card" key={item.title}><div className="home-guide-visual"><Image className="home-guide-photo" src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /></div><div><p className="eyebrow">{item.category}</p><h3>{item.title}</h3><span className="text-link">Read more <span aria-hidden="true">&rarr;</span></span></div></Link>)}</div></div></section>

    <section className="home-section home-faq" id="faqs"><div className="container home-faq-grid"><div><p className="eyebrow">FAQs</p><h2>Questions students<br />and parents ask</h2><p>Need a little more clarity? <Link href="/faqs/">Explore our FAQs</Link> or speak with admissions.</p><a className="text-link" href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}>{siteConfig.admissionsPhone}</a></div><div className="home-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="home-final-cta"><div className="container"><div><p className="eyebrow">Your future in health science</p><h2>Let's find your next step.</h2><p>Ask about programmes, eligibility, campuses and fee details. Start a conversation with an admissions counsellor.</p><div className="home-button-row"><Link className="button button-red" href="#home-enquiry">Enquire now</Link><Link className="button button-outline-light" href="/apply/">Apply online</Link><a className="button button-outline-light" href="https://wa.me/917696614978" target="_blank" rel="noreferrer">WhatsApp us</a></div></div><div className="home-cta-mark" aria-hidden="true"><span>Learn.</span><span>Discover.</span><span>Transform.</span></div></div></section>
    <Link className="home-floating-enquire" href="#home-enquiry"><span>Enquire now</span></Link>
  </main>;
}
