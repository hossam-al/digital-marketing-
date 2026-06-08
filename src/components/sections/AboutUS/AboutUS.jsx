import { useEffect, useRef, useState } from "react";
import { Fingerprint } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./AboutUS.module.css";

import about from "@/assets/About.png";
import ButtonMain from "../../layout/buttonMain"; // تأكد من صحة مسار استيراد الزرار حسب ترتيب فولدراتك

const METRICS = [
  { number: "8+", label: "Years of Experience" },
  { number: "26.250.000 SAR", label: "SAR in Trackable Sales" },
  { number: "12×–16×", label: "ROAS Across Industries" },
];

export function AboutUs() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [metricsVisible, setMetricsVisible] = useState(false);

  useEffect(() => {
    const observers = [];

    if (textRef.current) {
      const textObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            textObs.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      textObs.observe(textRef.current);
      observers.push(textObs);
    }

    if (sectionRef.current) {
      const metObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setMetricsVisible(true);
            metObs.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      metObs.observe(sectionRef.current);
      observers.push(metObs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Ambient glow */}
      <div className={styles.glow} />

      <div className={styles.container}>
        {/* Section Badge */}
        <div className={styles.badge}>
          <Fingerprint size={23} className={styles.badgeIcon} />
          <span>WHO WE ARE</span>
        </div>

        {/* Main content: left text + right image */}
        <div className={styles.contentGrid}>
          {/* Left */}
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>
              Performance-Driven
              <br />
              <span className={styles.headingAccent}>Marketing Partner</span>
            </h2>

            <p
              className={`${styles.body} ${revealed ? styles.revealIn : styles.revealHidden}`}
              ref={textRef}
            >
              The Ego Studio is a creative graphic design agency specializing in
              branding & visual identity, social media design, and company
              profiles. We believe in the power of visual storytelling — we
              don't just design, we build brands that connect with your audience
              and achieve your goals.
            </p>
            <ButtonMain />
          </div>
          <div className={styles.gridBg} />
          <div className={styles.aurora} />
          {/* Right image */}
          <div className={styles.rightCol}>
            <div className={styles.imageWrap}>
              <img src={about} alt="Ego Studio Team" className={styles.image} />
              {/* Decorative ring */}
              <div className={styles.imageRing} />
              <div className={styles.glow2} />
            </div>
          </div>
        </div>

        {/* Metrics Box */}
      </div>
    </section>
  );
}
