import { SiteIcon } from "@/components/site-icon";
import Image from "next/image";
import Link from "next/link";
import { departments, universityPartners } from "@/lib/site-content";
import { labPhotos } from "@/lib/lab-photos";
import styles from "./about-info-pages.module.css";

const labAreas = [
  { title: "Laboratory Equipment", text: "A closer look at microscopes, instruments and the practical bench environment at ITHS.", photo: labPhotos.equipment, href: "/academics/" },
  { title: "Learning through Microscopy", text: "Students work with microscopes, observe samples and record their learning together.", photo: labPhotos.microscopy, href: "/academics/clinical-embryology-art/" },
  { title: "Laminar Airflow Workstation", text: "A view of practical work with a pipette at the laboratory's laminar airflow workstation.", photo: labPhotos.airflow, href: "/academics/stem-cell-regenerative-medicine/" },
  { title: "Inside the Teaching Laboratory", text: "Explore the benches, equipment and shared spaces used for hands-on laboratory learning.", photo: labPhotos.teachingLab, href: "/academics/" },
  { title: "Pipetting Practice", text: "Building familiarity with micropipettes and sample handling through practical laboratory study.", photo: labPhotos.pipetting, href: "/academics/molecular-medicine/" },
  { title: "Nutrition & Sample Study", text: "Bringing classroom learning to the laboratory through close observation of biological samples.", photo: labPhotos.nutrition, href: "/academics/nutrigenetics-personalised-nutrition/" },
];

function DetailHero({ eyebrow, title, text, image, alt }: { eyebrow: string; title: string; text: string; image: string; alt: string }) {
  return <section className={styles.hero}><div className={styles.heroImage}><Image src={image} alt={alt} fill priority sizes="(max-width: 760px) 100vw, 50vw" /></div><div className={styles.heroCopy}><p className={styles.eyebrow}>{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>;
}

export function AboutLabsPage() {
  return <main id="main-content" className={styles.page}>
    <DetailHero eyebrow="Explore ITHS laboratories" title="Learning beyond the classroom" text="Take a closer look at the specialist health science fields and practical learning experiences at ITHS. Laboratory facilities and access vary by campus and programme." image={labPhotos.teachingLab.src} alt={labPhotos.teachingLab.alt} />
    <section className={styles.section}><div className={styles.container}><header className={styles.sectionHead}><p className={styles.eyebrow}>Lab gallery</p><h2>Explore our learning areas</h2><p>Step inside ITHS laboratories through photographs of our learning spaces, practical equipment and students at work.</p></header><div className={styles.labGrid}>{labAreas.map(lab=><article className={styles.labCard} key={lab.title}><Link href={lab.href} className={styles.labImage}><Image src={lab.photo.src} alt={lab.photo.alt} style={{ objectPosition: lab.photo.position }} fill sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw" /></Link><div><p className={styles.cardLabel}>ITHS lab learning</p><h3><Link href={lab.href}>{lab.title}</Link></h3><p>{lab.text}</p><Link className={styles.textLink} href={lab.href}>Explore subject <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link></div></article>)}</div></div></section>
    <section className={styles.noteSection}><div className={styles.container}><div><p className={styles.eyebrow}>Plan a campus visit</p><h2>See what is available for your course.</h2><p>Facilities, equipment and practical access can differ between campuses and programmes. Contact admissions to confirm current details for your preferred study option.</p></div><Link className={styles.button} href="/contact/">Ask about lab facilities <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link></div></section>
  </main>;
}

export function AboutFacultyPage() {
  return <main id="main-content" className={styles.page}>
    <DetailHero eyebrow="ITHS academic community" title="Faculty & subject expertise" text="ITHS brings together specialist health science teaching across laboratory, translational and clinical subject areas. Explore the academic departments and their study pathways." image="/iths-learning-02.webp" alt="Students learning collaboratively at ITHS" />
    <section className={styles.section}><div className={styles.container}><header className={styles.sectionHead}><p className={styles.eyebrow}>Academic departments</p><h2>Expertise across health science</h2><p>Browse each department to explore its programmes and learning focus.</p></header><div className={styles.departmentGrid}>{departments.map((department,index)=><Link href={department.href} className={styles.departmentCard} key={department.href}><span>0{index+1}</span><h3>{department.shortTitle}</h3><p>{department.description}</p><b>View department <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></b></Link>)}</div><p className={styles.disclosure}>Faculty appointments and biographies are published when current details have been confirmed by ITHS.</p></div></section>
  </main>;
}

export function AboutAwardsPage() {
  return <main id="main-content" className={styles.page}>
    <DetailHero eyebrow="Recognition & academic milestones" title="Building specialist health science education" text="ITHS highlights its work in specialist teaching, practical learning and research alongside university partners. Recognition and awards should always be checked against the issuing organisation and the relevant programme." image="/images/about-iths-biomedical.webp" alt="Biomedical science and health research" />
    <section className={styles.section}><div className={styles.container}><header className={styles.sectionHead}><p className={styles.eyebrow}>Our areas of work</p><h2>Milestones in specialist learning</h2><p>ITHS focuses on emerging areas of health science through academic programmes, laboratory learning and research activity.</p></header><div className={styles.milestoneGrid}><article><span>01</span><h3>Specialist programmes</h3><p>Study pathways span clinical embryology, cancer biology, nutrigenetics, stem cell science, molecular medicine and neuroscience.</p></article><article><span>02</span><h3>Research activity</h3><p>ITHS describes faculty research, patents and publications as part of its academic work. Ask for current supporting records and details.</p></article><article><span>03</span><h3>University collaboration</h3><p>Programmes are associated with university partners. The awarding university and recognition status depend on the specific course and campus.</p></article></div><div className={styles.disclosurePanel}><strong>Checking an award or recognition?</strong><p>Request the issuing body, award year, scope and supporting documentation. For programme approval or degree recognition, confirm the exact programme and campus with admissions.</p><Link className={styles.textLink} href="/about/approvals-and-recognition/">View approvals and recognition <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link></div></div></section>
  </main>;
}

export function AboutApprovalsPage() {
  return <main id="main-content" className={styles.page}>
    <DetailHero eyebrow="University collaborations" title="Approvals & recognition" text="ITHS programmes are delivered in association with university partners. Check the awarding university and current approval details for your specific course and campus before applying." image="/images/campuses/chandigarh-mohali.jpg" alt="University campus associated with ITHS programmes" />
    <section className={styles.section}><div className={styles.container}><header className={styles.sectionHead}><p className={styles.eyebrow}>Partner universities</p><h2>Confirm the right campus and awarding body</h2><p>ITHS lists the following university partners across its campus network. Programme availability differs by location.</p></header><div className={styles.partnerGrid}>{universityPartners.map(partner=><article key={partner.name}><div><Image src={partner.logo.replace("https://www.translationalhealthscience.in/wp-content/uploads/2026/03/1.png", "/home/partner-rbu.png").replace("https://www.translationalhealthscience.in/wp-content/uploads/2026/03/2.png", "/home/partner-bahra.png").replace("https://www.translationalhealthscience.in/wp-content/uploads/2026/03/3.png", "/home/partner-rbpu.png").replace("https://www.translationalhealthscience.in/wp-content/uploads/2026/03/4.png", "/home/partner-scope.png")} alt={`${partner.name} logo`} width={240} height={90} /></div><h3>{partner.name}</h3><p>{partner.city}</p></article>)}</div><div className={styles.disclosurePanel}><strong>Before you apply</strong><p>Ask admissions to confirm the awarding university, current programme approval, campus availability and the relevant official documentation for your chosen course.</p><Link className={styles.button} href="/contact/">Contact admissions <span aria-hidden="true"><SiteIcon name="arrowRight" /></span></Link></div></div></section>
  </main>;
}
