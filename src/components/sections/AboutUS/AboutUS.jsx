import { useEffect, useRef, useState } from "react";
import { Fingerprint } from "lucide-react";
import styles from "./AboutUs.module.css";
import about from "@/assets/about.jpg";

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
        { threshold: 0.3 }
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
        { threshold: 0.3 }
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
          <Fingerprint size={16} className={styles.badgeIcon} />
          <span>Who We Are</span>
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

            <p className={styles.body} ref={textRef}>
              <span
                className={revealed ? styles.revealIn : styles.revealHidden}
              >
                Aero Marketing is a performance-driven growth partner with 8+
                years of experience, helping brands across Saudi Arabia and the
                GCC scale through data-driven marketing systems, generating{" "}
              </span>
              <span
                className={`${styles.highlight} ${revealed ? styles.revealIn : styles.revealHidden}`}
                style={{ animationDelay: "0.35s" }}
              >
                26M+
              </span>
              <span
                className={revealed ? styles.revealIn : styles.revealHidden}
                style={{ animationDelay: "0.55s" }}
              >
                {" "}
                SAR in trackable sales and achieving 12×–16× ROAS across
                multiple industries.
              </span>
            </p>
          </div>

          {/* Right image */}
          <div className={styles.rightCol}>
            <div className={styles.imageWrap}>
              <img
                src={about}
                alt="Aero Marketing Team"
                className={styles.image}
              />
              {/* Decorative ring */}
              <div className={styles.imageRing} />
            </div>
          </div>
        </div>

        {/* Metrics Box */}
       
      </div>
    </section>
  );
}