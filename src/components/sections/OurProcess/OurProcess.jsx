import { useEffect, useRef, useState } from "react";
import styles from "./OurProcess.module.css";

const TOTAL_FRAMES = 297;
const FRAME_BASE = "/frames/ezgif-frame-";

const STEPS = [
  {
    number: "1",
    title: "Discovery & Research",
    description:
      "We start by understanding your business, goals, and audience. This step ensures that every decision we make is data-driven and aligned with your vision.",
    startFrame: 1,
    endFrame: 50,
  },
  {
    number: "2",
    title: "Planning & Strategy",
    description:
      "Our team develops a clear roadmap and strategy tailored to your needs, defining milestones, timelines, and key deliverables.",
    startFrame: 51,
    endFrame: 100,
  },
  {
    number: "3",
    title: "Design & Development",
    description:
      "Creative ideas come to life through our design and development phase. We focus on user experience, functionality, and aesthetics.",
    startFrame: 101,
    endFrame: 150,
  },
  {
    number: "4",
    title: "Testing & Quality Assurance",
    description:
      "Every project undergoes rigorous testing to guarantee flawless performance and high-quality results.",
    startFrame: 151,
    endFrame: 199,
  },
  {
    number: "5",
    title: "Launch & Optimization",
    description:
      "We launch your project with confidence and continuously monitor, analyze, and optimize to achieve the best outcomes.",
    startFrame: 200,
    endFrame: 248,
  },
  {
    number: "6",
    title: "Support & Growth",
    description:
      "Post-launch, we provide ongoing support and insights to help your business grow and adapt to changing needs.",
    startFrame: 249,
    endFrame: 297,
  },
];

function pad(n) {
  return String(n).padStart(3, "0");
}

export default function OurProcess() {
  const sectionRef = useRef(null);
  const frameRef = useRef(1);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Preload frames
  useEffect(() => {
    let done = 0;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = img.onerror = () => {
        done++;
        if (done === TOTAL_FRAMES) setLoaded(true);
      };
      img.src = `${FRAME_BASE}${pad(i)}.png`;
    }
  }, []);

  // Scroll → frame
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const PX_PER_FRAME = 5;
    const SCROLL_HEIGHT = TOTAL_FRAMES * PX_PER_FRAME;

    const onScroll = () => {
      const top = section.getBoundingClientRect().top;
      const scrolled = -top;
      const progress = Math.max(0, Math.min(1, scrolled / SCROLL_HEIGHT));
      const frame = Math.max(
        1,
        Math.min(TOTAL_FRAMES, Math.round(progress * (TOTAL_FRAMES - 1)) + 1),
      );

      if (frame !== frameRef.current) {
        frameRef.current = frame;
        setCurrentFrame(frame);
        const idx = STEPS.findIndex(
          (s) => frame >= s.startFrame && frame <= s.endFrame,
        );
        if (idx !== -1) setActiveStep(idx);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollHeight = TOTAL_FRAMES * 6;

  return (
    <section
      id="our-process"
      className={styles.section}
      ref={sectionRef}
      style={{ height: `calc(100vh + ${scrollHeight}px)` }}
    >
      <div className={styles.sticky}>
        <div className={styles.fadeTop} />
        <div className={styles.fadeBottom} />

        {!loaded && (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <span>Loading...</span>
          </div>
        )}

        <img
          src={`${FRAME_BASE}${pad(currentFrame)}.png`}
          alt="Our Process"
          className={styles.frame}
          style={{ opacity: loaded ? 1 : 0 }}
        />

        {/* progress dots */}
        <div className={styles.dots}>
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${i === activeStep ? styles.dotActive : ""} ${i < activeStep ? styles.dotDone : ""}`}
            />
          ))}
        </div>

        {/* step card */}
        <div className={styles.content}>
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`${styles.step} ${i === activeStep ? styles.stepActive : ""}`}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>
                {step.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span>{step.title.split(" ").slice(-1)}</span>
              </h3>
              <div className={styles.underline} />
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>

        {activeStep === 0 && loaded && (
          <div className={styles.scrollHint}>
            <span>Scroll to explore</span>
            <i className="fas fa-chevron-down" />
          </div>
        )}
      </div>
    </section>
  );
}
