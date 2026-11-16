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
import { ResearchPatentSlider } from "@/components/research-patent-slider";
import { HomeFaqAccordion } from "@/components/home-faq-accordion";

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

const whyPoints = [
  {
    number: "01",
    title: "Focused disciplines",
    description: "Study specialised areas of health science through dedicated departments and career-aligned curriculum.",
    highlight: "6 health science departments",
    image: "/clinical-embryology.webp",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8" /><path d="M3 22h18" /><path d="m14 2 6 6-4 4-6-6 4-4Z" /><path d="m9 7-5 5 4 4 5-5" /></svg>,
  },
  {
    number: "02",
    title: "Research perspective",
    description: "Learn in a community actively connected to scientific publications, innovation and patent discoveries.",
    highlight: "8+ patents & research club",
    image: "/images/about-iths-dna-research.webp",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8a3 3 0 0 0-3 3" /></svg>,
  },
  {
    number: "03",
    title: "Practical learning",
    description: "Learn at the laboratory bench with hands-on exposure, modern diagnostics, and clinical equipment.",
    highlight: "Hands-on bench training",
    image: "/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31M14 9.3V2M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" /></svg>,
  },
  {
    number: "04",
    title: "Guidance throughout",
    description: "Get dedicated counselling on programme pathways, university recognition, eligibility and admissions.",
    highlight: "1-on-1 counsellor support",
    image: "/iths-learning-02.webp",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  },
];

function SectionHead({ eyebrow, title, description, href, link = "Explore more" }: { eyebrow: string; title: React.ReactNode; description?: string; href?: string; link?: string }) {
  return <div className="home-section-head"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>{href && <Link className="text-link" href={href}>{link} <span aria-hidden="true">&rarr;</span></Link>}</div>;
}

export default function HomePage() {
  const programmeCount = departments.reduce((total, item) => total + item.programmes.length, 0);
  return <main id="main-content" className="reference-home">
    <section className="home-intro">
      <Image className="home-hero-photo" src="/home/health-science-hero.webp" alt="" fill priority sizes="100vw" />
      <div className="container home-intro-grid">
        <div className="home-intro-copy"><span className="home-admissions-pill"><span /> Admissions enquiries open</span><h1>Institute of<br />Translational<br />Health Science<span className="home-title-dot">.</span></h1><p className="home-intro-lede">Where laboratory science<br />meets a healthier tomorrow.</p><p>Explore specialised health science programmes, from B.Sc to PhD, with practical learning and partner university collaborations.</p><div className="home-button-row"><Link className="button button-red" href="/apply/">Apply now <span aria-hidden="true">&rarr;</span></Link><Link className="button button-outline-light" href="/iths-set/">ITHS-SET 2027</Link></div><div className="home-hero-footnote"><span aria-hidden="true">01 /</span> Learn in the classroom. Discover at the bench.</div></div>
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
    <section className="home-scholarship" id="iths-set" aria-labelledby="home-scholarship-title">
      <div className="container home-scholarship-grid">
        <div className="home-scholarship-copy">
          <p className="home-scholarship-badge">Scholarship Entrance Test</p>
          <h2 id="home-scholarship-title">Win a Scholarship<span>Before You Even Join.</span></h2>
          <p className="home-scholarship-intro">Free entrance test for all ITHS programs. Top scorers get fee waivers up to 100% &mdash; before paying a single rupee.</p>
          <dl className="home-scholarship-stats">
            <div><dt>Free</dt><dd>Registration</dd></div>
            <div><dt>30 min</dt><dd>Duration</dd></div>
            <div><dt>100%</dt><dd>Max Waiver</dd></div>
            <div><dt>All</dt><dd>Programs</dd></div>
          </dl>
          <div className="home-button-row">
            <Link className="button home-scholarship-register" href="/iths-set/">Register for ITHSSET <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
        <div className="home-scholarship-visual">
          <Image className="home-scholarship-photo" src="/home/ithsset.png" alt="ITHS-SET scholarship test logo with a graduation cap" fill sizes="(max-width: 1080px) 100vw, 48vw" />
        </div>
      </div>
    </section>

    <section className="home-section" id="campuses"><div className="container"><SectionHead eyebrow="Campuses" title="Your next chapter starts here" description="Explore our partner university locations and find a campus for your studies." href="/campuses/" link="All campuses" /><div className="home-campus-grid">{campuses.map(campus => { const partner = { "/campuses/mohali/": { image: "/home/partner-rbu.png" }, "/campuses/hoshiarpur/": { image: "/home/partner-rbpu.png" }, "/campuses/shimla-hills/": { image: "/home/partner-bahra.png" }, "/campuses/bhopal/": { image: "/home/partner-scope.png" } }[campus.href]!; const campusImage = { "/campuses/hoshiarpur/": "/images/campuses/hoshiarpur.jpg", "/campuses/bhopal/": "/images/campuses/bhopal.jpg", "/campuses/mohali/": "/images/campuses/chandigarh-mohali.jpg", "/campuses/shimla-hills/": "/images/campuses/shimla-hills.jpg" }[campus.href]!; const title = campus.title.replace(/\s*\([^)]*\)/g, ""); return <Link className="home-campus-card" href={campus.href} key={campus.href}><div className="home-campus-visual"><Image className="home-campus-photo" src={campusImage} alt={`${title} campus`} fill sizes="(max-width: 480px) calc(100vw - 36px), (max-width: 1024px) 45vw, 25vw" /><div className="home-campus-logo"><Image src={partner.image} alt={`${campus.partner} logo`} width={190} height={82} /></div></div><div className="home-campus-details"><div><p className="eyebrow">{campus.location}</p><h3>{title}</h3></div><div className="home-campus-partner-box"><p>In collaboration with</p><strong>{campus.partner}</strong></div><span className="text-link">View campus <span aria-hidden="true">&rarr;</span></span></div></Link>; })}</div></div></section>

    <section className="home-section home-labs" id="labs"><div className="container"><SectionHead eyebrow="Courses" title="Explore specialist health science" description="Discover your course, study pathways and the science behind your next step." href="/programs/" link="All courses" /><div className="home-lab-grid">{courseCatalogue.filter(course => course.href !== btechCourseHref).map(item => <Link href={item.href} className="home-lab-card" key={item.href}><Image className="home-lab-photo" src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /><div className="home-lab-overlay"><h3>{item.title}</h3><p>{item.description}</p><span className="home-lab-link-text">Explore course <span aria-hidden="true">&rarr;</span></span></div></Link>)}</div></div></section>

    <section className="home-section"><div className="container"><SectionHead eyebrow="Leadership" title="People guiding ITHS" href="/about/leadership/" link="Meet our leadership" /><div className="home-leadership-grid">{leadership.map(person => <article className="home-leader" key={person.href}><div className="home-leader-photo"><Image src={person.title === "Director" ? "/home/director.webp" : "/home/founder.png"} alt={person.name} fill sizes="(max-width: 760px) 35vw, 180px" /></div><div><h3>{person.name}</h3><span>{person.badge}</span><p>{person.title === "Director" ? "Connecting specialist health science education with practical laboratory learning." : "Bringing a focus on genetics, nutrition and personalised health to the ITHS community."}</p><Link className="text-link" href={person.href}>Read message <span aria-hidden="true">&rarr;</span></Link></div></article>)}</div></div></section>
    <section className="home-section home-research" id="research" aria-labelledby="home-research-title">
      <div className="container home-research-wrap">
        <ResearchPatentSlider />
        <div className="home-research-content">
          <div className="home-research-header"><p className="eyebrow">Research &amp; discovery</p><h2 id="home-research-title">Where curiosity<br />becomes <span>discovery.</span></h2><p>Explore the ideas behind ITHS research, discover scientific publications and view the patent documents that bring its innovations into focus.</p></div>
          <div className="home-research-chips">{[
      { icon: <><path d="m9 3 5 3-4 7-5-3 4-7Z" /><path d="m8 2 7 4M5 10l-1 2 3 2 1-2M14 9a6 6 0 0 1-1 12H4m4-5H3m6 0v5" /></>, title: "Research and Development", href: "/research/research-and-development/", desc: "Explore research directions and laboratory learning." },
      { icon: <><circle cx="12" cy="7" r="3" /><path d="M6 21v-2a6 6 0 0 1 12 0v2M19 4a3 3 0 0 1 0 6m2 11v-2a6 6 0 0 0-3-5M5 4a3 3 0 0 0 0 6m-2 11v-2a6 6 0 0 1 3-5" /></>, title: "ITHS Research Club", href: "/research/research-club/", desc: "Research interests and participation for UG and PG students." },
      { icon: <><path d="M13 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10l-7-7Z" /><path d="M13 3v7h7M8 14h8m-8 3h5" /></>, title: "Publications and Patents", href: "/research/publications/", desc: "Explore scientific publications and intellectual property." }
    ].map(item => <Link href={item.href} className="home-research-chip" key={item.href}><span className="home-research-chip-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" focusable="false">{item.icon}</svg></span><div className="home-research-chip-copy"><h3>{item.title}</h3><p>{item.desc}</p></div><span className="home-research-chip-arrow" aria-hidden="true">&#8599;</span></Link>)}</div>
          <Link className="home-research-cta" href="/research/">Explore all research <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </section>

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
    <section className="home-section home-guidance" id="guidance" aria-labelledby="home-guidance-title">
      <div className="container">
        <div className="home-section-head"><div><p className="eyebrow">Explore your options</p><h2 id="home-guidance-title">Your questions. A clearer next step.</h2><p>Explore courses, understand your degree and find a pathway that fits your interests.</p></div><Link className="text-link" href="/blog/">Explore the blog <span aria-hidden="true">&rarr;</span></Link></div>
        <div className="home-guide-grid">
          <Link href="/admissions/courses-after-12th/" className="home-guide-card home-guide-featured">
            <div className="home-guide-visual"><Image className="home-guide-photo" src="/home/campus-life-picked/Clinical-Embryology-Certification-Course-Students-Chandigarh.webp" alt="ITHS students holding their course certificates on campus" fill sizes="(max-width: 900px) 100vw, 50vw" /><span className="home-guide-image-tag">Your next chapter</span></div>
            <div className="home-guide-copy"><p className="eyebrow">Choosing a course</p><h3>Finished Class 12?<br />Find your direction in health science.</h3><p className="home-guide-description">Compare study pathways, explore your interests and check what you need to get started.</p><span className="home-guide-action">Explore courses after 10+2 <span aria-hidden="true">&rarr;</span></span></div>
          </Link>
          <Link href="/academics/clinical-embryology-art/" className="home-guide-card home-guide-compact">
            <div className="home-guide-visual"><Image className="home-guide-photo home-guide-embryology" src="/clinical-embryology.webp" alt="Clinical embryology laboratory equipment and practical training" fill sizes="(max-width: 480px) 40vw, (max-width: 900px) 35vw, 22vw" /></div>
            <div className="home-guide-copy"><p className="eyebrow">Your study pathway</p><h3>Curious about clinical embryology &amp; ART?</h3><p className="home-guide-description">Get to know the subject, study options and laboratory learning.</p><span className="home-guide-action">Discover the pathway <span aria-hidden="true">&rarr;</span></span></div>
          </Link>
          <Link href="/partnerships/university-partners/" className="home-guide-card home-guide-compact">
            <div className="home-guide-visual"><Image className="home-guide-photo" src="/images/campuses/chandigarh-mohali.jpg" alt="Rayat Bahra University campus, an ITHS university partner" fill sizes="(max-width: 480px) 40vw, (max-width: 900px) 35vw, 22vw" /></div>
            <div className="home-guide-copy"><p className="eyebrow">Understanding your degree</p><h3>Who awards your degree?</h3><p className="home-guide-description">Meet the partner universities connected with your ITHS programme.</p><span className="home-guide-action">Meet our university partners <span aria-hidden="true">&rarr;</span></span></div>
          </Link>
        </div>
      </div>
    </section>

    <section className="home-section home-why" id="why" aria-labelledby="home-why-title">
      <div className="container">
        <SectionHead eyebrow="Why ITHS" title={<>Curiosity with a <span className="text-accent">purpose.</span></>} description="A practical approach to health science connecting classroom study, research and clinical skills." href="/about/" link="Discover ITHS" />
        <div className="home-why-grid">
          {whyPoints.map((item, index) => (
            <article className={`home-why-card home-why-card-${index + 1}`} key={item.title}>
              <div className="home-why-media">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 560px) 100vw, (max-width: 1080px) 50vw, 25vw" className="home-why-image" />
                <div className="home-why-media-fade" />
                <div className="home-why-top">
                  <span className="home-why-icon" aria-hidden="true">{item.icon}</span>
                </div>
              </div>
              <div className="home-why-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="home-why-highlight">
                  <span className="home-why-sparkle" aria-hidden="true">✦</span>
                  <span>{item.highlight}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="home-section home-faq" id="faqs" aria-labelledby="home-faq-title">
      <div className="container">
        <header className="home-faq-heading"><p className="eyebrow">Good to know</p><h2 id="home-faq-title">A few questions. <span>Clear answers.</span></h2><p>Find quick answers about programmes, admissions and campus life.</p></header>
        <div className="home-faq-grid">
          <div>
            <HomeFaqAccordion faqs={faqs} />
            <Link className="home-faq-all" href="/faqs/">View all FAQs <span aria-hidden="true">&rarr;</span></Link>
          </div>
          <aside className="home-faq-help" aria-labelledby="home-faq-help-title">
            <span className="home-faq-help-icon" aria-hidden="true"><svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 16v-3a9 9 0 0 1 18 0v3M5 14H3v7h5v-7H5Zm18 0h2v7h-5v-7h3Zm0 7v2a2 2 0 0 1-2 2h-5" /><path d="M12 25h4" /></svg></span>
            <p className="home-faq-help-kicker">A little personal guidance</p>
            <h3 id="home-faq-help-title">Still have<br /> a question?</h3>
            <p className="home-faq-help-copy">Talk to our admissions team about your next step. We can help you explore courses, eligibility and campus options.</p>
            <a className="home-faq-call" href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}>Call admissions <span aria-hidden="true">&rarr;</span></a>
            <div className="home-faq-help-footer"><span>Prefer to write?</span><Link href="/enquire/">Send an enquiry <span aria-hidden="true">&rarr;</span></Link></div>
          </aside>
        </div>
      </div>
    </section>
    <section className="home-final-cta" aria-labelledby="home-final-cta-title">
      <svg className="home-final-cta-pattern" viewBox="0 0 240 440" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M45-20C45 60 195 50 195 130S45 200 45 280s150 70 150 160M195-20c0 80-150 70-150 150s150 70 150 150S45 350 45 440" /><path d="M54 15h132M76 40h88M105 65h30M105 90h30M76 115h88M50 140h140M62 165h116M89 190h62M112 215h16M89 240h62M62 265h116M50 290h140M76 315h88M105 340h30M105 365h30M76 390h88M54 415h132" /></svg>
      <div className="container home-final-cta-inner">
        <p className="eyebrow">Your future in health science</p>
        <h2 id="home-final-cta-title">Ready to take your next step?</h2>
        <p className="home-final-cta-intro">Find the right programme and get guidance from our admissions team.</p>
        <div className="home-button-row"><Link className="button button-red" href="/apply/">Apply online <span aria-hidden="true">&rarr;</span></Link><a className="button button-outline-light" href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}>Talk to admissions</a></div>
        <a className="home-final-whatsapp" href="https://wa.me/917696614978" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a9 9 0 0 1-13.3 7.9L3 21l1.6-4.7A9 9 0 1 1 21 11.5Z" /><path d="m8.5 7.5 1.5 3-1 1a7 7 0 0 0 3 3l1-1 3 1.5c-.5 2-2 2-3 1.5a10 10 0 0 1-6-6c-.5-1-.5-2.5 1.5-3Z" /></svg><span>Prefer a quick chat? <strong>WhatsApp us</strong></span><span aria-hidden="true">&rarr;</span></a>
      </div>
    </section>
    <Link className="home-floating-enquire" href="#home-enquiry"><span>Enquire now</span></Link>
  </main>;
}
