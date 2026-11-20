import Link from "next/link";
import styles from "./home-admissions-process.module.css";

const steps = [
  { title: "Register & Apply", description: "Fill the online application form with your details", icon: "apply" },
  { title: "Submit Documents", description: "Upload required academic documents", icon: "documents" },
  { title: "Counselling", description: "Get personalized guidance from our team", icon: "counselling" },
  { title: "Confirm Admission", description: "Pay fees and secure your seat", icon: "graduate" },
] as const;

function StepIcon({ type }: { type: typeof steps[number]["icon"] }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === "apply" && <><path d="M18 5H7a2 2 0 0 0-2 2v20h17v-9M11 11h5M11 16h3M11 22h5" /><path d="m17 17 9-9 3 3-9 9-5 2 2-5ZM24 10l3 3" /></>}
    {type === "documents" && <><path d="M19 4H8a2 2 0 0 0-2 2v23h20V11L19 4Z" /><path d="M19 4v7h7M11 16h10M11 20h10M11 24h6" /></>}
    {type === "counselling" && <><path d="M5 17v-3a11 11 0 0 1 22 0v3" /><rect x="3" y="15" width="6" height="11" rx="2" /><rect x="23" y="15" width="6" height="11" rx="2" /><path d="M26 26v2H17" /><rect x="13" y="26" width="6" height="4" rx="2" /></>}
    {type === "graduate" && <><path d="m2 12 14-7 14 7-14 7-14-7ZM7 15v8c6 4 12 4 18 0v-8M29 13v10" /><path d="M27 27h4l-2-4-2 4Z" /></>}
  </svg>;
}

export function HomeAdmissionsProcess() {
  return <>
    <header className={styles.heading}>
      <p className={styles.badge}>ADMISSION PROCESS</p>
      <h2 id="home-admissions-title">Your Journey to <span className={styles.titleAccent}>ITHS Starts Here</span></h2>
      <p className={styles.intro}>Simple 4-step admission process</p>
    </header>
    <div className={styles.journey}>
      <svg className={styles.path} viewBox="0 0 1200 128" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path d="M8 24C75 24 100 64 150 64S300 144 450 64 600-16 750 64 900 144 1050 64 1140 24 1192 24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" />
        <circle cx="8" cy="24" r="3.5" fill="currentColor" />
        <path d="m1185 20 9 4-9 4Z" fill="currentColor" />
      </svg>
      <ol className={styles.steps}>
        {steps.map((step, index) => <li className={styles.step} key={step.icon}>
          <span className={styles.icon}><StepIcon type={step.icon} /></span>
          <p className={styles.number}>Step {index + 1}</p>
          <h3>{step.title}</h3>
          <p className={styles.description}>{step.description}</p>
        </li>)}
      </ol>
    </div>
    <div className={styles.action}><Link href="/apply/" className="button button-red">START YOUR APPLICATION <span aria-hidden="true">&rarr;</span></Link></div>
  </>;
}
