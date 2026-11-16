import Image from "next/image";
import { IthsSetRegistrationForm } from "./iths-set-registration-form";
import styles from "./iths-set-page.module.css";

export function IthsSetLandingPage() {
  return <main id="main-content" className={styles.page}>
    <div className={styles.layout}>
      <div className={styles.poster}>
        <Image src="/admissions/iths-set-scholarship.webp" alt="ITHS-SET scholarships worth up to 90%. Registrations open." fill priority sizes="(max-width: 900px) 100vw, 65vw" />
      </div>
      <section id="register" className={styles.registration} aria-labelledby="iths-set-heading">
        <h1 id="iths-set-heading">Honouring the <span>brightest</span> and the most <span>deserving</span></h1>
        <div className={styles.headingRule} aria-hidden="true" />
        <IthsSetRegistrationForm />
      </section>
    </div>
  </main>;
}
