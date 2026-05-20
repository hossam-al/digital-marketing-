import styles from "./WhyChooseUs.module.css";

import {
  Award,
  Settings2,
  Handshake,
  Sparkles
} from "lucide-react";

const ITEMS = [
  {
    icon: Award,
    title: "Exceptional Experience",
    description:
      "We combine strategy, creativity, and performance to deliver marketing solutions that exceed expectations and drive measurable growth.",
  },

  {
    icon: Settings2,
    title: "Tailored Solutions",
    description:
      "Every brand is unique — our strategies are customized to match your goals, market, and audience for maximum impact.",
  },

  {
    icon: Handshake,
    title: "Continuous Support",
    description:
      "We stay by your side every step of the way, providing dedicated support and proactive communication to ensure lasting success.",
  },
];

export default function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.header}>

          <div className={styles.badge}>
            <Sparkles size={16} />
            <span>Why Choose Us</span>
          </div>

          <h2 className={styles.heading}>
            Partner With A Measurable Success Team
          </h2>

          <p className={styles.subheading}>
            Choosing Aero Marketing means working with a performance driven
            agency that transforms marketing into real, trackable growth through
            strategy, creativity, and execution.
          </p>

        </div>

        <div className={styles.grid}>
          {ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={styles.card}
              >
                <div className={styles.iconWrap}>
                  <Icon size={24} />
                </div>

                <h3 className={styles.cardTitle}>
                  {item.title}
                </h3>

                <div className={styles.underline} />

                <p className={styles.cardDesc}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}