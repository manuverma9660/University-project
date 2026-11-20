"use client";

import { SiteIcon, type SiteIconName } from "@/components/site-icon";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import styles from "./site-chatbot.module.css";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  actions?: { label: string; href?: string; onClickAction?: string; isWhatsapp?: boolean; isPhone?: boolean }[];
  showQuickChips?: boolean;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome",
  sender: "bot",
  text: `Hello! Welcome to **Institute of Translational Health Science (ITHS)**.\n\nI am your admissions assistant. You can call or WhatsApp our admissions counselor directly, or choose a topic below to get instant information:`,
  actions: [
    { label: "Call Counselor", href: `tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`, isPhone: true },
    { label: "Chat on WhatsApp", href: `https://wa.me/917696614978?text=Hello%20ITHS%2C%20I%20would%20like%20to%20enquire%20about%20admissions`, isWhatsapp: true },
  ],
  showQuickChips: true,
};

const QUICK_TOPICS: { id: string; label: string; icon: SiteIconName }[] = [
  { id: "admissions", label: "Admissions 2026–27", icon: "graduation" },
  { id: "courses", label: "Health Science Programmes", icon: "book" },
  { id: "scholarships", label: "Scholarships & ITHS-SET", icon: "trophy" },
  { id: "campuses", label: "Campuses & Hostels", icon: "university" },
  { id: "contact", label: "Call & WhatsApp Details", icon: "phone" },
];

function getBotReply(userInput: string): Omit<ChatMessage, "id" | "sender"> {
  const query = userInput.toLowerCase();

  if (query.includes("call") || query.includes("phone") || query.includes("contact") || query.includes("number") || query.includes("whatsapp") || query.includes("wtsp") || query.includes("helpline")) {
    return {
      text: `You can reach our Admissions Team immediately:\n\n• **Helpline:** ${siteConfig.admissionsPhone}\n• **WhatsApp:** +91 76966 14978\n• **Email:** ${siteConfig.admissionsEmail}\n\nOur counselors are available Monday to Saturday to guide you with programme selection and admissions.`,
      actions: [
        { label: "Call Now", href: `tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`, isPhone: true },
        { label: "Open WhatsApp", href: `https://wa.me/917696614978?text=Hello%20ITHS%2C%20I%20would%20like%20to%20enquire%20about%20admissions`, isWhatsapp: true },
        { label: "Enquire Online", href: "/enquire/" },
      ],
      showQuickChips: true,
    };
  }

  if (query.includes("course") || query.includes("programme") || query.includes("program") || query.includes("btech") || query.includes("msc") || query.includes("phd") || query.includes("embryology") || query.includes("cancer") || query.includes("tissue") || query.includes("stem cell")) {
    return {
      text: `ITHS offers specialised undergraduate, postgraduate, and doctoral degrees in translational health sciences, including:\n\n• **B.Tech & M.Tech** in Tissue Engineering & Biotechnology\n• **M.Sc** in Clinical Embryology & Assisted Reproductive Technology\n• **M.Sc** in Cancer Biology & Molecular Oncology\n• **M.Sc** in Molecular Medicine & Neuroscience\n• **Ph.D.** Doctoral research programmes with advanced laboratory access.`,
      actions: [
        { label: "Explore All Programmes", href: "/programmes/" },
        { label: "Course Directory", href: "/academics/" },
        { label: "Apply Online", href: "/apply/" },
      ],
      showQuickChips: true,
    };
  }

  if (query.includes("scholarship") || query.includes("set") || query.includes("fee") || query.includes("discount") || query.includes("exam")) {
    return {
      text: `ITHS awards merit and aptitude scholarships of up to **100% tuition waiver** through the **ITHS-SET (Scholarship & Entrance Test)**.\n\n• Scholarships are available for Undergraduate & Postgraduate applicants.\n• Government scholarship benefits (NSP) are also facilitated for eligible students.`,
      actions: [
        { label: "Register for ITHS-SET", href: "/iths-set/#register" },
        { label: "Scholarship Details", href: "/admissions/scholarships-iths-set/" },
        { label: "Fee Enquiry", href: "/enquire/?topic=fees" },
      ],
      showQuickChips: true,
    };
  }

  if (query.includes("campus") || query.includes("hostel") || query.includes("bhopal") || query.includes("hoshiarpur") || query.includes("mohali") || query.includes("shimla") || query.includes("location") || query.includes("where")) {
    return {
      text: `ITHS has state-of-the-art academic & research campuses equipped with modern research labs, student wellness studios, libraries, and safe residential hostel facilities at:\n\n• **Bhopal Campus** (Scope Global Skills University)\n• **Shimla Hills Campus** (Bahra University, Waknaghat)\n• **Hoshiarpur Campus** (Rayat Bahra Professional University)\n• **Mohali Campus** (Rayat Bahra University)`,
      actions: [
        { label: "View Campuses", href: "/campuses/" },
        { label: "Campus Life", href: "/campus-life/" },
        { label: "Book Campus Tour", href: "/contact/" },
      ],
      showQuickChips: true,
    };
  }

  if (query.includes("admission") || query.includes("apply") || query.includes("date") || query.includes("eligibility") || query.includes("how to apply")) {
    return {
      text: `Admissions for Academic Session **${siteConfig.admissionsCycle}** are currently OPEN!\n\n**Simple 3-step admission process:**\n1. Select your preferred health science programme.\n2. Complete online application or register for ITHS-SET.\n3. Verify documents and confirm your seat with our admissions office.`,
      actions: [
        { label: "Apply Online Now", href: "/apply/" },
        { label: "Check Eligibility", href: "/admissions/eligibility/" },
        { label: "How to Apply Guide", href: "/admissions/how-to-apply/" },
      ],
      showQuickChips: true,
    };
  }

  return {
    text: `Thank you for your message! Our admissions counselors can give you precise details regarding admissions, fee structure, syllabus, and seat availability.\n\nWould you like to connect with a counselor right now?`,
    actions: [
      { label: "Call Admissions", href: `tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`, isPhone: true },
      { label: "Chat on WhatsApp", href: `https://wa.me/917696614978?text=Hello%20ITHS%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(userInput)}`, isWhatsapp: true },
      { label: "Submit Enquiry Form", href: "/enquire/" },
    ],
    showQuickChips: true,
  };
}

export function SiteChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isTyping]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend ?? input).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Simulate smart bot typing delay
    setTimeout(() => {
      const reply = getBotReply(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        ...reply,
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleTopicClick = (topicId: string, label: string) => {
    handleSend(label);
  };

  const handleRestart = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <div className={styles.chatbotWrapper} ref={containerRef}>
      {/* Floating Trigger Button (Shown only when chat is closed) */}
      {!isOpen && (
        <button
          type="button"
          className={styles.triggerButton}
          onClick={() => setIsOpen(true)}
          aria-label="Open admissions chatbot (Call & WhatsApp)"
        >
          <div className={styles.triggerLogoWrap}>
            <Image
              src="/iths-logo.webp"
              alt="ITHS"
              width={34}
              height={19}
              className={styles.triggerLogoImg}
              priority
            />
            <span className={styles.onlinePulse} />
          </div>
          <span className={styles.triggerLabel}>Chat & Call</span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <section className={styles.chatWindow} aria-label="ITHS Admissions Chatbot">
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.avatarWrap}>
                <Image
                  src="/iths-logo.webp"
                  alt="ITHS"
                  width={48}
                  height={27}
                  className={styles.avatarImg}
                  priority
                />
                <span className={styles.statusDot} />
              </div>
              <div className={styles.headerText}>
                <span className={styles.headerTitle}>ITHS Admissions</span>
                <span className={styles.headerSubtitle}>Online • Instant Assistance</span>
              </div>
            </div>
            <div className={styles.headerActions}>
              <button
                type="button"
                className={styles.headerBtn}
                onClick={handleRestart}
                title="Restart chat"
                aria-label="Restart chat"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </button>
              <button
                type="button"
                className={styles.headerBtn}
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Channels Bar (Direct Call & WhatsApp) */}
          <div className={styles.channelsBar}>
            <a
              href={`tel:${siteConfig.admissionsPhone.replaceAll(" ", "")}`}
              className={styles.channelCall}
              title={`Call Admissions: ${siteConfig.admissionsPhone}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span>Call Helpline</span>
            </a>
            <a
              href="https://wa.me/917696614978?text=Hello%20ITHS%2C%20I%20would%20like%20to%20enquire%20about%20admissions"
              target="_blank"
              rel="noreferrer"
              className={styles.channelWhatsapp}
              title="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.16-1.32c1.42.77 3.04 1.22 4.84 1.22 5.52 0 10-4.48 10-10S17.52 2 12 2zm3.8 14.18c-.22.61-1.1.98-1.74 1.05-.44.05-.88.08-2.61-.63-2.07-.86-3.41-2.96-3.52-3.11-.1-.14-.85-1.13-.85-2.16 0-1.03.54-1.54.73-1.74.2-.2.43-.25.58-.25.14 0 .28 0 .4.01.13.01.3.01.44.33.15.35.51 1.25.56 1.34.05.1.08.21.01.34-.06.13-.1.21-.2.32-.1.11-.21.24-.3.32-.1.1-.21.21-.09.42.12.21.53.88 1.15 1.43.79.71 1.46.93 1.67 1.03.21.1.34.09.46-.05.13-.15.54-.63.69-.85.15-.22.3-.18.5-.1.2.08 1.28.6 1.5.71.22.11.37.17.42.27.06.1.06.59-.16 1.2z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Messages Body */}
          <div className={styles.messagesBody}>
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`${styles.messageRow} ${msg.sender === "user" ? styles.messageRowUser : styles.messageRowBot}`}
              >
                {msg.sender === "bot" && (
                  <div className={styles.botSmallAvatar} aria-hidden="true">
                    <Image
                      src="/iths-logo.webp"
                      alt="ITHS"
                      width={24}
                      height={14}
                      className={styles.botSmallAvatarImg}
                    />
                  </div>
                )}
                <div className={`${styles.bubble} ${msg.sender === "user" ? styles.bubbleUser : styles.bubbleBot}`}>
                  {msg.text.split("\n\n").map((para, idx) => (
                    <p key={idx}>
                      {para.split("\n").map((line, lIdx) => (
                        <span key={lIdx}>
                          {line}
                          {lIdx < para.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ))}

                  {/* Actions buttons inside message */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className={styles.msgActionGroup}>
                      {msg.actions.map(action => {
                        const className = action.isWhatsapp
                          ? `${styles.msgActionBtn} ${styles.msgActionBtnWhatsapp}`
                          : action.isPhone
                          ? `${styles.msgActionBtn} ${styles.msgActionBtnPrimary}`
                          : `${styles.msgActionBtn} ${styles.msgActionBtnSecondary}`;

                        if (action.href?.startsWith("tel:") || action.href?.startsWith("https:")) {
                          return (
                            <a
                              key={action.label}
                              href={action.href}
                              target={action.href.startsWith("https:") ? "_blank" : undefined}
                              rel={action.href.startsWith("https:") ? "noreferrer" : undefined}
                              className={className}
                            >
                              <SiteIcon name={action.isPhone ? "phone" : action.isWhatsapp ? "chat" : "external"} />{action.label}
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={action.label}
                            href={action.href ?? "#"}
                            className={className}
                            onClick={() => setIsOpen(false)}
                          >
                            {action.label} <SiteIcon name="arrowRight" />
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {/* Quick option chips if indicated */}
                  {msg.showQuickChips && (
                    <div className={styles.quickChipsContainer}>
                      <span className={styles.chipsLabel}>Quick Questions:</span>
                      <div className={styles.quickChips}>
                        {QUICK_TOPICS.map(topic => (
                          <button
                            key={topic.id}
                            type="button"
                            className={styles.chipBtn}
                            onClick={() => handleTopicClick(topic.id, topic.label)}
                          >
                            <SiteIcon name={topic.icon} />{topic.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.messageRow} ${styles.messageRowBot}`}>
                <div className={styles.botSmallAvatar} aria-hidden="true">
                  <Image
                    src="/iths-logo.webp"
                    alt="ITHS"
                    width={24}
                    height={14}
                    className={styles.botSmallAvatarImg}
                  />
                </div>
                <div className={`${styles.bubble} ${styles.bubbleBot}`}>
                  <div className={styles.typingDots}>
                    <span className={styles.typingDot} />
                    <span className={styles.typingDot} />
                    <span className={styles.typingDot} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form
            className={styles.inputForm}
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              ref={inputRef}
              type="text"
              className={styles.chatInput}
              placeholder="Ask about admissions, courses, fees..."
              value={input}
              onChange={e => setInput(e.target.value)}
              aria-label="Type your message"
            />
            <button
              type="submit"
              className={styles.sendBtn}
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
