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
    title: "Integrated Growth System",
    description:
      "We do not treat marketing as disconnected posts and ads. We build an integrated system from market analysis to conversion paths that serves your commercial objectives.",
  },
  {
    icon: Settings2,
    title: "Measurable Performance",
    description:
      "We manage campaign planning, message testing, and budgets based on real data. Performance is measured by lead quality and revenue generation, not surface numbers.",
  },
  {
    icon: Handshake,
    title: "Continuous Optimization",
    description:
      "Our team stays by your side, delivering detailed performance reviews and actionable insights to turn continuous marketing spending into permanent business growth.",
  },
];

export default function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.header}>

          <div className={styles.badge}>
            {/* ربط لون الأيقونة مباشرة بالمتغيرات المضيئة لتطابق التصميم */}
            <Sparkles size={22} style={{ color: "var(--primary)" }} />
            <span>Why Choose Us</span>
          </div>

          <h2 className={styles.heading}>
            Partner With A Measurable Success Team
          </h2>

          <p className={styles.subheading}>
            Choosing EGO STUDIO means working with a growth partner that transforms 
            marketing into a structured system, driving real and trackable commercial development.
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
                {/* تم توحيد لون الأيقونة الافتراضي ليعمل ديناميكياً مع الـ CSS الحالي */}
                <div className={styles.iconWrap} style={{ color: "#fafafa" }}>
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