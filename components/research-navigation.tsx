import Link from "next/link";
import { isResearchPageAvailable, researchSections } from "@/lib/research";
import { navigationPublication } from "@/lib/site-map";
import styles from "./research.module.css";

export function ResearchNavigation({ close }: { close: () => void }) {
  return <div className={`header-mega-links ${styles.menuColumns}`}>
    {["Research & innovation", "People & partnerships"].map(group => <div className="mega-column" key={group}>
      <p>{group}</p>
      {researchSections.filter(section => section.group === group).map(section => isResearchPageAvailable(section.href, navigationPublication)
        ? <Link href={section.href} key={section.href} onClick={close}>{section.title}</Link>
        : <div key={section.href} className={styles.pendingMenuItem} aria-disabled="true"><span>{section.title}</span><small>Coming soon</small></div>)}
    </div>)}
  </div>;
}
