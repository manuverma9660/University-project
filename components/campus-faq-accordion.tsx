"use client";

import { useState } from "react";
import { SiteIcon } from "@/components/site-icon";
import styles from "./campuses-page.module.css";

export function CampusFaqAccordion({ questions }: { questions: string[][] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return <div className={styles.faqs} role="region" aria-label="Campus frequently asked questions">
    {questions.map(([question, answer], index) => {
      const isOpen = openIndex === index;
      return <section className={`${styles.faqItem}${isOpen ? ` ${styles.faqItemOpen}` : ""}`} key={question}>
        <h3 className={styles.faqHeading}>
          <button className={styles.faqQuestion} type="button" id={`campus-faq-question-${index}`} aria-expanded={isOpen} aria-controls={`campus-faq-answer-${index}`} onClick={() => setOpenIndex(current => current === index ? null : index)}>
            <span>{question}</span>
            <span className={styles.faqToggle} aria-hidden="true"><SiteIcon name="plus" /></span>
          </button>
        </h3>
        <div className={styles.faqAnswer} id={`campus-faq-answer-${index}`} role="region" aria-labelledby={`campus-faq-question-${index}`} aria-hidden={!isOpen} inert={!isOpen}>
          <div className={styles.faqAnswerInner}><p>{answer}</p></div>
        </div>
      </section>;
    })}
  </div>;
}
