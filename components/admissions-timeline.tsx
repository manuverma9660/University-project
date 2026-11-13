"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./admissions-timeline.module.css";

const steps = [
  {
    stepNumber: 1,
    title: "Enquire",
    description: "Tell us what you are interested in and ask your first questions.",
  },
  {
    stepNumber: 2,
    title: "Choose a programme",
    description: "Discuss programmes, eligibility, campus options and fee details.",
  },
  {
    stepNumber: 3,
    title: "Prepare your application",
    description: "Check the application requirements and gather your documents.",
  },
  {
    stepNumber: 4,
    title: "Plan your next step",
    description: "Confirm the next steps with admissions and your partner university.",
  },
] as const;

// Fallback percentages if DOM elements have not been measured yet:
// Step 1 active: fills from Step 1 to Step 2 (33.33%)
// Step 2 active: extends from Step 2 to Step 3 (66.67%)
// Step 3 active: extends from Step 3 to Step 4 (88%)
// Step 4 active: complete the progress line (100%)
const fallbackPercentages = [33.333, 66.666, 88.0, 100.0];

interface LineGeometry {
  top: number;
  height: number;
  left: number;
  progressHeights: number[];
}

export function AdmissionsTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [lineGeometry, setLineGeometry] = useState<LineGeometry | null>(null);

  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const circleRefs = useRef<Array<HTMLDivElement | null>>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const activeStepRef = useRef(0);
  activeStepRef.current = activeStep;

  // Measure exact pixel geometry of circles inside timeline container
  const updateGeometry = useCallback(() => {
    const timelineEl = timelineRef.current;
    const circles = circleRefs.current;
    if (!timelineEl || !circles[0] || !circles[1] || !circles[2] || !circles[3]) return;

    const timelineRect = timelineEl.getBoundingClientRect();
    const c0Rect = circles[0].getBoundingClientRect();
    const c1Rect = circles[1].getBoundingClientRect();
    const c2Rect = circles[2].getBoundingClientRect();
    const c3Rect = circles[3].getBoundingClientRect();

    const y0 = c0Rect.top - timelineRect.top + c0Rect.height / 2;
    const y1 = c1Rect.top - timelineRect.top + c1Rect.height / 2;
    const y2 = c2Rect.top - timelineRect.top + c2Rect.height / 2;
    const y3 = c3Rect.top - timelineRect.top + c3Rect.height / 2;

    const totalHeight = y3 - y0;
    const left = c0Rect.left - timelineRect.left + c0Rect.width / 2 - 1.5;

    setLineGeometry({
      top: y0,
      height: totalHeight,
      left: left,
      progressHeights: [
        y1 - y0,              // Step 1 active: fills from Step 1 to Step 2
        y2 - y0,              // Step 2 active: extends from Step 2 to Step 3
        y3 - y0 - (c3Rect.height / 2), // Step 3 active: extends from Step 3 towards Step 4
        totalHeight,          // Step 4 active: completes the progress line (100%)
      ],
    });
  }, []);

  // Smooth scroll & select when user clicks a step
  const handleStepClick = useCallback((index: number) => {
    setActiveStep(index);
    const targetElement = stepRefs.current[index];
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const desiredY = window.innerHeight * 0.38;
      const scrollOffset = rect.top + window.scrollY - desiredY;
      window.scrollTo({
        top: Math.max(0, scrollOffset),
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number | null = null;

    // Detect which step is closest to the focal reading line in the viewport
    const evaluateActiveStep = () => {
      const focalY = window.innerHeight * 0.40;
      let bestIndex = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((element, index) => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - focalY);

        if (distance < minDistance) {
          minDistance = distance;
          bestIndex = index;
        }
      });

      // Avoid unnecessary re-renders: only update state when index changes
      if (bestIndex !== activeStepRef.current) {
        setActiveStep(bestIndex);
      }
    };

    const handleScrollOrResize = () => {
      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(() => {
          evaluateActiveStep();
          updateGeometry();
          animationFrameId = null;
        });
      }
    };

    // IntersectionObserver to observe steps crossing view bounds
    const observer = new IntersectionObserver(
      () => {
        handleScrollOrResize();
      },
      {
        rootMargin: "-12% 0px -20% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });

    // Initial evaluation and measurement
    evaluateActiveStep();
    updateGeometry();

    // Re-check geometry after fonts and layouts settle
    const settleTimer = setTimeout(updateGeometry, 250);

    return () => {
      observer.disconnect();
      clearTimeout(settleTimer);
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [updateGeometry]);

  const progressHeightStyle = lineGeometry
    ? `${lineGeometry.progressHeights[activeStep]}px`
    : `${fallbackPercentages[activeStep]}%`;

  return (
    <div className={styles.admissionsWrapper}>
      <div className={styles.layout}>
        {/* LEFT SIDE: Scroll-based Interactive Timeline */}
        <div
          ref={timelineRef}
          className={styles.timeline}
          role="region"
          aria-label="Admissions timeline steps"
        >
          {/* Vertical progress line connecting circles */}
          <div
            className={styles.track}
            style={
              lineGeometry
                ? {
                    top: `${lineGeometry.top}px`,
                    height: `${lineGeometry.height}px`,
                    left: `${lineGeometry.left}px`,
                  }
                : {
                    top: "46px",
                    bottom: "44px",
                    left: "34.5px",
                  }
            }
            aria-hidden="true"
          >
            <span
              className={styles.progressLine}
              style={{ height: progressHeightStyle }}
            />
          </div>

          {/* 4 Admissions Steps */}
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <div
                key={step.title}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`${styles.stepCard} ${isActive ? styles.active : ""}`}
                onClick={() => handleStepClick(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleStepClick(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-current={isActive ? "step" : undefined}
                aria-label={`Step ${step.stepNumber}: ${step.title}`}
              >
                <div
                  ref={(el) => {
                    circleRefs.current[index] = el;
                  }}
                  className={styles.numberCircle}
                  aria-hidden="true"
                >
                  {step.stepNumber}
                </div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE: Premium Education-Themed Illustration */}
        <aside
          className={styles.illustrationCard}
          aria-label="Education and graduation illustration"
        >
          {/* Ambient soft glow */}
          <div className={styles.ambientGlow} aria-hidden="true" />

          {/* Responsive SVG Illustration Canvas */}
          <svg
            className={styles.svgCanvas}
            viewBox="0 0 520 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Graduation cap, stacked books, and education badges"
          >
            <defs>
              {/* Soft Drop Shadow Filters */}
              <filter id="softCardShadow" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#142447" floodOpacity="0.1" />
              </filter>
              <filter id="capShadow" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#142447" floodOpacity="0.18" />
              </filter>
              <filter id="bookShadow" x="-8%" y="-8%" width="120%" height="130%">
                <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#142447" floodOpacity="0.14" />
              </filter>

              {/* Gradients */}
              <linearGradient id="capTopGrad" x1="140" y1="105" x2="380" y2="105" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#182d56" />
                <stop offset="50%" stopColor="#142447" />
                <stop offset="100%" stopColor="#1a3464" />
              </linearGradient>

              <linearGradient id="redBookGrad" x1="150" y1="262" x2="370" y2="294" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E31E24" />
                <stop offset="100%" stopColor="#c51319" />
              </linearGradient>

              <linearGradient id="blueBookGrad" x1="135" y1="298" x2="385" y2="332" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2575a7" />
                <stop offset="50%" stopColor="#1F658F" />
                <stop offset="100%" stopColor="#164d6e" />
              </linearGradient>

              <linearGradient id="navyBookGrad" x1="120" y1="336" x2="400" y2="374" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1c3563" />
                <stop offset="50%" stopColor="#142447" />
                <stop offset="100%" stopColor="#0d182e" />
              </linearGradient>

              <radialGradient id="ringRadialGlow" cx="260" cy="200" r="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c5e0fc" stopOpacity="0.4" />
                <stop offset="65%" stopColor="#d8ebfd" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#eaf4ff" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background Radial Glow */}
            <circle cx="260" cy="200" r="180" fill="url(#ringRadialGlow)" />

            {/* Concentric Circular Rings */}
            <g className={styles.rotatingRing}>
              {/* Outer Dashed Orbital Ring */}
              <circle
                cx="260"
                cy="200"
                r="170"
                stroke="#78b9e0"
                strokeWidth="1.2"
                strokeDasharray="6 8"
                strokeOpacity="0.55"
              />
            </g>
            {/* Middle Solid Soft Blue Ring */}
            <circle
              cx="260"
              cy="200"
              r="125"
              stroke="#9cc5ea"
              strokeWidth="1"
              strokeOpacity="0.45"
            />
            {/* Inner Ring */}
            <circle
              cx="260"
              cy="200"
              r="80"
              stroke="#bcdcf7"
              strokeWidth="1"
              strokeOpacity="0.35"
            />

            {/* Floating Sparkle Stars */}
            <g className={styles.pulseStarRed}>
              <path
                d="M 155 85 Q 155 93 163 93 Q 155 93 155 101 Q 155 93 147 93 Q 155 93 155 85 Z"
                fill="#E31E24"
              />
            </g>
            <g className={styles.pulseStarBlue}>
              <path
                d="M 395 75 Q 395 82 402 82 Q 395 82 395 89 Q 395 82 388 82 Q 395 82 395 75 Z"
                fill="#38bdf8"
              />
            </g>
            <g className={styles.pulseStarRed}>
              <path
                d="M 410 320 Q 410 326 416 326 Q 410 326 410 332 Q 410 326 404 326 Q 410 326 410 320 Z"
                fill="#E31E24"
                opacity="0.8"
              />
            </g>
            <g className={styles.pulseStarBlue}>
              <path
                d="M 120 330 Q 120 336 126 336 Q 120 336 120 342 Q 120 336 114 336 Q 120 336 120 330 Z"
                fill="#38bdf8"
                opacity="0.8"
              />
            </g>

            {/* Education Badge 1: 🔬 Microscope / Lab Science (Top Left) */}
            <g className={styles.floatingIcon1}>
              <circle cx="102" cy="140" r="24" fill="#ffffff" filter="url(#softCardShadow)" stroke="#e1ecf8" strokeWidth="1" />
              {/* Microscope vector icon */}
              <path
                d="M 102 127 L 102 135 M 98 135 L 106 135 M 106 133 L 111 143 M 97 148 L 107 148 M 94 153 L 110 153 M 96 148 C 96 142 101 138 105 138"
                stroke="#142447"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="102" cy="130" r="1.5" fill="#E31E24" />
            </g>

            {/* Education Badge 2: 📜 Diploma Scroll (Top Right) */}
            <g className={styles.floatingIcon2}>
              <circle cx="418" cy="125" r="23" fill="#ffffff" filter="url(#softCardShadow)" stroke="#e1ecf8" strokeWidth="1" />
              {/* Rolled Diploma Scroll icon */}
              <rect x="408" y="116" width="20" height="18" rx="2" fill="#f8fafc" stroke="#142447" strokeWidth="1.6" />
              <path d="M 412 121 L 424 121 M 412 125 L 422 125 M 412 129 L 420 129" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
              <rect x="415" y="115" width="6" height="20" rx="1.5" fill="#E31E24" />
            </g>

            {/* Education Badge 3: 🧬 DNA / Molecular Health Science (Bottom Left) */}
            <g className={styles.floatingIcon3}>
              <circle cx="92" cy="275" r="22" fill="#ffffff" filter="url(#softCardShadow)" stroke="#e1ecf8" strokeWidth="1" />
              {/* DNA helix lines */}
              <path
                d="M 85 267 C 92 272 92 278 99 283 M 99 267 C 92 272 92 278 85 283"
                stroke="#1F658F"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M 88 270 L 96 270 M 87 275 L 97 275 M 88 280 L 96 280" stroke="#E31E24" strokeWidth="1.4" strokeLinecap="round" />
            </g>

            {/* Education Badge 4: ⭐ Academic Star Award (Bottom Right) */}
            <g className={styles.floatingIcon4}>
              <circle cx="425" cy="265" r="22" fill="#ffffff" filter="url(#softCardShadow)" stroke="#e1ecf8" strokeWidth="1" />
              {/* Star Badge */}
              <polygon
                points="425,255 427.5,261.5 434,262 429,266.5 430.5,273 425,269.5 419.5,273 421,266.5 416,262 422.5,261.5"
                fill="#f59e0b"
                stroke="#d97706"
                strokeWidth="0.8"
              />
            </g>

            {/* Graduation Cap (Mortarboard) - Isometric 3D */}
            <g className={styles.floatingCap} filter="url(#capShadow)">
              {/* Cap Skull Under-base */}
              <path
                d="M 210 134 C 210 134 210 166 260 166 C 310 166 310 134 310 134 Z"
                fill="#0d182e"
              />
              <path
                d="M 220 142 C 220 156 240 160 260 160 C 280 160 300 156 300 142"
                stroke="#1f3b70"
                strokeWidth="2"
                fill="none"
              />

              {/* Diamond Cap Top (Mortarboard) */}
              <polygon
                points="260,68 375,104 260,140 145,104"
                fill="url(#capTopGrad)"
              />
              {/* 3D Beveled Edges */}
              <polygon
                points="145,104 260,140 260,146 145,110"
                fill="#0f1d38"
              />
              <polygon
                points="375,104 260,140 260,146 375,110"
                fill="#1f3c73"
              />

              {/* Central Metallic Button */}
              <circle cx="260" cy="104" r="6" fill="#f59e0b" />
              <circle cx="260" cy="104" r="3" fill="#fbbf24" />

              {/* Red Tassel Cord */}
              <path
                d="M 260 104 C 315 110 345 130 350 168"
                stroke="#E31E24"
                strokeWidth="2.8"
                fill="none"
                strokeLinecap="round"
              />
              {/* Tassel Fringe Drop */}
              <rect x="347" y="168" width="6" height="24" rx="2" fill="#E31E24" />
              <rect x="346" y="168" width="8" height="4" rx="1" fill="#f59e0b" />
            </g>

            {/* Stacked Hardcover Books */}
            <g transform="rotate(-3, 260, 320)">
              {/* Drop Shadow Underneath Stack */}
              <ellipse cx="260" cy="386" rx="146" ry="12" fill="#142447" fillOpacity="0.12" />

              {/* BOOK 3 (Bottom): Midnight Navy Book */}
              <g filter="url(#bookShadow)">
                <rect x="126" y="338" width="268" height="36" rx="7" fill="url(#navyBookGrad)" />
                {/* White / Cream Pages Edge */}
                <rect x="340" y="342" width="50" height="28" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
                {/* Page Texture Lines */}
                <line x1="344" y1="349" x2="386" y2="349" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="344" y1="356" x2="386" y2="356" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="344" y1="363" x2="386" y2="363" stroke="#e2e8f0" strokeWidth="1" />
                {/* Spine Ridges */}
                <line x1="146" y1="340" x2="146" y2="372" stroke="#254378" strokeWidth="2" />
                <line x1="152" y1="340" x2="152" y2="372" stroke="#0d182e" strokeWidth="1.5" />
              </g>

              {/* BOOK 2 (Middle): Academic Slate Teal Book */}
              <g filter="url(#bookShadow)">
                <rect x="140" y="302" width="248" height="34" rx="6" fill="url(#blueBookGrad)" />
                {/* White / Cream Pages Edge */}
                <rect x="336" y="306" width="48" height="26" rx="2" fill="#fcfbf7" stroke="#cbd5e1" strokeWidth="0.8" />
                <line x1="340" y1="313" x2="380" y2="313" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="340" y1="320" x2="380" y2="320" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="340" y1="327" x2="380" y2="327" stroke="#e2e8f0" strokeWidth="1" />
                {/* Dual Gold Foil Bands on Spine */}
                <rect x="156" y="303" width="5" height="32" fill="#f59e0b" rx="1" />
                <rect x="165" y="303" width="5" height="32" fill="#f59e0b" rx="1" />
              </g>

              {/* BOOK 1 (Top): ITHS Red Hardcover Book */}
              <g filter="url(#bookShadow)">
                <rect x="156" y="266" width="224" height="34" rx="6" fill="url(#redBookGrad)" />
                {/* Pages Edge */}
                <rect x="328" y="270" width="48" height="26" rx="2" fill="#fffdfa" stroke="#fca5a5" strokeWidth="0.8" />
                <line x1="332" y1="277" x2="372" y2="277" stroke="#fee2e2" strokeWidth="1" />
                <line x1="332" y1="284" x2="372" y2="284" stroke="#fee2e2" strokeWidth="1" />
                <line x1="332" y1="291" x2="372" y2="291" stroke="#fee2e2" strokeWidth="1" />
                {/* Gold Spine Accent */}
                <line x1="174" y1="267" x2="174" y2="299" stroke="#fcd34d" strokeWidth="2.5" />
                {/* Red Bookmark Ribbon draping out */}
                <path
                  d="M 285 298 C 290 318 275 328 280 348 L 290 348 C 285 330 300 320 295 298 Z"
                  fill="#990b10"
                />
              </g>
            </g>
          </svg>

          {/* Bottom Caption */}
          <div className={styles.illustrationFooter}>
            <p className={styles.caption}>From first enquiry to a confident next step.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
