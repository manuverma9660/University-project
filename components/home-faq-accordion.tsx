"use client";

import { useState } from "react";

export function HomeFaqAccordion({ faqs }: { faqs: [string, string][] | string[][] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(current => (current === index ? null : index));
  };

  return (
    <div className="home-faq-list" role="region" aria-label="Frequently Asked Questions">
      {faqs.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        return (
          <div key={question} className={`home-faq-item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="home-faq-question"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{question}</span>
              <span className="home-faq-toggle" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4 10h12" />
                  <path className={`home-faq-toggle-vertical${isOpen ? " is-hidden" : ""}`} d="M10 4v12" />
                </svg>
              </span>
            </button>
            <div id={`faq-answer-${index}`} className="home-faq-body" role="region">
              <div className="home-faq-body-inner">
                <p>{answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
