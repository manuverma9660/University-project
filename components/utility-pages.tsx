import { SiteIcon } from "@/components/site-icon";
import Image from "next/image";
import Link from "next/link";
import { AnimatedVisual } from "@/components/animated-visual";
import articles from "@/lib/news-articles.json";
import styles from "./utility-pages.module.css";

const campusGallery = [
  ["/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp", "Students gaining hands-on laboratory exposure", "Learning in the lab"],
  ["/images/notices/New-Batch-at-ITHS-2026.webp", "New students meeting the ITHS community", "A warm campus welcome"],
  ["/images/notices/Teachers-day-Celebration-3-1024x771.webp", "Students celebrating Teachers’ Day at ITHS", "Celebrations together"],
  ["/home/nutrition-event.webp", "Students and faculty at a nutrition event", "Ideas, shared"],
];

export function CampusLifePage() {
  return <main id="main-content" className={styles.page}><PageHero label="Learning, community & discovery" title="Life at ITHS" description="Life at ITHS goes beyond classrooms and labs. Explore hands-on learning, campus gatherings and the people who make our community." /><section className={`${styles.container} ${styles.section}`}>
    <div className={styles.campusIntro}><div><p className={styles.eyebrow}>A glimpse of campus</p><h2>Learn together. Grow together.</h2><p>From laboratory exposure to student events, campus life brings learning and community together. Here are a few moments from across ITHS.</p><Link className={styles.button} href="/campuses/">Explore our campuses <span aria-hidden="true">&rarr;</span></Link></div><div className={styles.campusFeature}><Image src="/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp" alt="Students taking part in a laboratory exposure session" fill priority sizes="(max-width: 760px) 100vw, 50vw" /></div></div>
    <h2 className={styles.galleryTitle}>Moments at ITHS</h2><div className={styles.gallery}>{campusGallery.map(([src,alt,title])=><figure key={src}><div><Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><figcaption>{title}</figcaption></figure>)}</div>
    <div className={styles.help}><div><h2>Come see where learning happens.</h2><p>Explore campus locations and ask about the programmes available at each one.</p></div><Link className={styles.button} href="/contact/">Talk to admissions <span aria-hidden="true">&rarr;</span></Link></div>
  </section></main>;
}

export function WellnessStudioPage() {
  return <main id="main-content" className={styles.page}>
    <section className={styles.wellnessHero}>
      <AnimatedVisual className="animated-visual--wellness" />
      <div className={styles.wellnessHeroShade} />
      <div className={styles.wellnessHeroContent}>
        <p className={styles.eyebrow}>Life at ITHS · Wellbeing</p>
        <h1>Make room to pause, reset and reconnect.</h1>
        <p>A thoughtful student experience includes space for wellbeing alongside study. Explore simple ways to build balance into campus life.</p>
        <Link className={styles.button} href="/campus-life/">Explore life at ITHS <span aria-hidden="true">→</span></Link>
      </div>
      <span className={styles.wellnessHeroTag}>A calmer campus starts with small moments</span>
    </section>
    <section className={`${styles.container} ${styles.wellnessSection}`}>
      <header className={styles.wellnessHeading}><p className={styles.eyebrow}>Wellness Studio</p><h2>Wellbeing can be part of the everyday.</h2><p>Use this space to explore mindful breaks, healthy routines and community support. Ask ITHS for current studio access, activities and session timings.</p></header>
      <div className={styles.wellnessCards}>
        <article><span className={styles.wellnessIcon} aria-hidden="true"><SiteIcon name="leaf" /></span><p>01 · RESET</p><h3>Take a mindful pause</h3><p>Make room in a busy day to slow down, breathe and return to study with a clearer head.</p></article>
        <article><span className={styles.wellnessIcon} aria-hidden="true">↗</span><p>02 · ROUTINE</p><h3>Build healthy study rhythms</h3><p>Balance focused learning with movement, rest, hydration and time away from screens.</p></article>
        <article><span className={styles.wellnessIcon} aria-hidden="true"><SiteIcon name="heart" /></span><p>03 · COMMUNITY</p><h3>Stay connected</h3><p>Small conversations and shared campus moments can help students feel part of a supportive community.</p></article>
      </div>
      <div className={styles.wellnessFeature}>
        <div className={styles.wellnessFeatureImage}><Image src="/images/notices/Teachers-day-2026-1024x768.webp" alt="ITHS students and teachers gathered together on campus" fill sizes="(max-width:760px) 100vw, 45vw" /></div>
        <div><p className={styles.eyebrow}>A community that cares</p><h2>Wellbeing grows when people feel welcome.</h2><p>Campus events and supportive relationships create opportunities to connect beyond the classroom. See what is happening across the ITHS community.</p><Link className={styles.inlineLink} href="/events/">Explore ITHS events <span aria-hidden="true">→</span></Link></div>
      </div>
      <div className={styles.wellnessNote}><div><p className={styles.eyebrow}>Need current information?</p><h2>Ask about studio access and support.</h2><p>Activities, availability and student support arrangements may vary. Contact ITHS for the current Wellness Studio details.</p></div><Link className={styles.button} href="/contact/">Contact ITHS <span aria-hidden="true">→</span></Link></div>
    </section>
  </main>;
}

const questions = [
  ["Which courses can I study at ITHS?", "Explore Clinical Embryology & ART, Cancer Biology, Nutrigenetics & Personalised Nutrition, Stem Cell & Regenerative Medicine, Molecular Medicine, Neuroscience and B.Tech Stem Cell & Tissue Engineering. Study levels differ by course."],
  ["How do I check my eligibility?", "Open the relevant course page to review its listed entry requirements. Contact admissions with your qualification, subjects and marks to confirm eligibility for your chosen intake."],
  ["Which university awards the qualification?", "ITHS programmes are delivered in collaboration with partner universities. Confirm the awarding university for your specific course and campus with admissions."],
  ["Where are the campuses?", "Explore campus information for Chandigarh (Mohali), Hoshiarpur, Shimla Hills and Bhopal. Course availability differs by location."],
  ["How can I get the current fee details?", "Ask admissions for the fee structure for your programme and campus, including any additional charges, accommodation costs and payment terms."],
  ["What is ITHS-SET?", "ITHS-SET is a scholarship test for applicants. Check the scholarship page or contact admissions for current dates, eligibility and award conditions."],
  ["Is hostel accommodation available?", "Accommodation arrangements depend on the partner campus. Ask about current availability, facilities and fees before making your plans."],
  ["How do I apply or enquire?", "Use the Enquire or Apply links on this website, or contact the admissions team directly for guidance on your course and the required documents."],
];

function PageHero({label,title,description}:{label:string;title:string;description:string}) {
  return <section className={styles.hero}><div className={styles.heroShade} /><AnimatedVisual /><div className={styles.container}><p className={styles.eyebrow}>{label}</p><h1>{title}</h1><p>{description}</p></div></section>;
}

export function FaqPage() {
  return <main id="main-content" className={styles.page}><PageHero label="Your questions, answered" title="Frequently Asked Questions" description="Useful information about courses, admissions, campuses and your next step at ITHS." /><section className={`${styles.container} ${styles.section}`} aria-label="Admissions questions"><div className={styles.faqFeature}><div className={styles.faqImage}><Image src="/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp" alt="ITHS students learning in a laboratory" fill sizes="(max-width: 760px) 100vw, 36vw" /></div><div><p className={styles.eyebrow}>A good place to start</p><h2>Planning your next step?</h2><p>Explore the answers below, then contact admissions for details about your course and campus.</p><Link className={styles.inlineLink} href="/programmes/">Browse programmes <span aria-hidden="true">&rarr;</span></Link></div></div><div className={styles.faqList}>{questions.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div><div className={styles.help}><div><h2>Still have a question?</h2><p>Talk to the admissions team about your course and campus.</p></div><Link className={styles.button} href="/contact/">Contact ITHS <span aria-hidden="true">&rarr;</span></Link></div></section></main>;
}

export function BlogPage() {
  const posts = [
    {article:articles.teachersDay,href:"/iths-teachers-day-2026-celebration/",image:"/images/notices/Teachers-day-Celebration-3-1024x771.webp",text:"Students and teachers came together for an afternoon of performances, activities and appreciation."},
    {article:articles.orientation,href:"/orientation-cum-induction-programme-2026-iths/",image:"/images/notices/New-Batch-at-ITHS-2026.webp",text:"A look at the induction programme, campus introductions and laboratory exposure for the new batch."},
    {article:{date:"2026-09-01",dateLabel:"Campus story",title:"Learning through laboratory exposure"},href:"/events/",image:"/images/notices/Laboratory-Exposure-Session-ITHS-1024x683.webp",text:"Students get a closer look at practical learning and the laboratory spaces that support health science education."},
    {article:{date:"2026-09-07",dateLabel:"Campus story",title:"Nutrition Matters: ideas that connect"},href:"/events/",image:"/home/nutrition-event.webp",text:"A campus gathering explored the connections between genes, nutrition and health."},
  ];
  return <main id="main-content" className={styles.page}><PageHero label="Stories from our community" title="ITHS Blog" description="Explore campus stories, student experiences and moments from the ITHS academic community." /><section className={`${styles.container} ${styles.section}`} aria-labelledby="blog-stories-title"><h2 id="blog-stories-title">Latest stories</h2><div className={styles.posts}>{posts.map(post=><article className={styles.post} key={post.article.title}><div className={styles.postImage}><Image src={post.image} alt="Students and faculty at an ITHS campus event" fill sizes="(max-width: 760px) 90vw, 45vw" /></div><div className={styles.postBody}><time dateTime={post.article.date}>{post.article.dateLabel}</time><h3><Link href={post.href}>{post.article.title}</Link></h3><p>{post.text}</p><Link className={styles.inlineLink} href={post.href}>Read story <span aria-hidden="true">&rarr;</span></Link></div></article>)}</div><div className={styles.help}><div><h2>Discover life at ITHS.</h2><p>Explore more academic events and campus activities.</p></div><Link className={styles.button} href="/events/">Explore events <span aria-hidden="true">&rarr;</span></Link></div></section></main>;
}

export function WorkAtIthsPage() {
  return <main id="main-content" className={styles.page}><PageHero label="Teach. Discover. Support." title="Work at ITHS" description="Explore how your experience could contribute to health science education, research and the student community." /><section className={`${styles.container} ${styles.section}`} aria-labelledby="work-areas-title"><div className={styles.workFeature}><Image src="/iths-learning-02.webp" alt="ITHS academic learning and collaboration" fill sizes="(max-width: 760px) 100vw, 50vw" /><div><p className={styles.eyebrow}>Join the community</p><h2>Bring your expertise to health science education.</h2><p>ITHS welcomes conversations with people who care about teaching, research and student support.</p></div></div><h2 id="work-areas-title">Find your area of interest.</h2><p className={styles.intro}>Contact ITHS to ask about current vacancies, role requirements and the application process.</p><div className={styles.workGrid}>{[["Teaching & academic guidance","Share your subject expertise and interest in helping students learn."],["Research & laboratory work","Tell us about your scientific interests, practical experience and research background."],["Student & campus support","Explore how your experience in academic operations or student services could contribute."]].map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><div className={styles.application}><h2>Start a conversation.</h2><p>Include your area of interest, qualifications and relevant experience when asking about opportunities. The ITHS team can confirm current openings and how to share an application.</p><Link className={styles.button} href="/contact/?topic=careers">Enquire about opportunities <span aria-hidden="true">&rarr;</span></Link></div></section></main>;
}

