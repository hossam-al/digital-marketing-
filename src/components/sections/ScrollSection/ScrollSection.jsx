import { useRef } from "react";
import { CheckCircle2 } from "lucide-react"; // استدعاء الأيقونة الاحترافية والمضيئة
import styles from "./ScrollSection.module.css";
import work1 from "@/assets/SE1.png";
import work2 from "@/assets/SE2.png";
import work3 from "@/assets/SE3.png"; 
import work4 from "@/assets/SE4.png";
import work5 from "@/assets/SE5.png"; 
import work6 from "@/assets/SE6.png"; 

// ─── Data ────────────────────────────────────────────────────
const SERVICES = [
  {
    number: "1",
    title: "Social",
    accent: "Media",
    subtitle: "Strategic Content & Engagement",
    description:
      "Strategic content creation and audience engagement that builds brand authority and drives measurable results across all social platforms.",
    features: ["Content Strategy & Planning", "Community Management", "Performance Analytics"],
    image: work1,
    imageAlt: "Social Media",
    panelClass: styles.panel1,
  },
  {
    number: "2",
    title: "Paid",
    accent: "Advertising",
    subtitle: "High-Performance Ad Campaigns",
    description:
      "Data-driven advertising campaigns that maximize ROAS through precise targeting, compelling creatives, and continuous optimization.",
    features: ["Precision Targeting", "Creative Optimization", "ROAS Maximization"],
    image: work2,
    imageAlt: "Paid Advertising",
    panelClass: styles.panel2,
  },
  {
    number: "3",
    title: "Brand",
    accent: "Identity",
    subtitle: "Professional Logo & Visual Systems",
    description:
      "Complete brand identity development that creates memorable visual systems and establishes strong market positioning.",
    features: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"],
    image: work3, 
    imageAlt: "Brand Identity",
    panelClass: styles.panel3,
  },
  {
    number: "4",
    title: "Creative",
    accent: "Content",
    subtitle: "Eye-Catching Visuals & Creatives",
    description:
      "Compelling visual content and creative assets designed to capture attention, drive engagement, and boost marketing performance.",
    features: ["Visual Design", "Video Production", "Creative Strategy"],
    image: work4,
    imageAlt: "Creative Content",
    panelClass: styles.panel4,
  },
  {
    number: "5",
    title: "Web &",
    accent: "E-Commerce",
    subtitle: "Modern Websites & Online Stores",
    description:
      "High-converting websites and e-commerce platforms built to increase sales, enhance user experience, and drive business growth.",
    features: ["Website Development", "E-Commerce Solutions", "Conversion Optimization"],
    image: work6, 
    imageAlt: "Web & E-Commerce",
    panelClass: styles.panel5,
  },
  {
    number: "6",
    title: "Clear Reporting &",
    accent: "Transparent Results",
    subtitle: "You See Everything",
    description:
      "Weekly and monthly reports showing spend breakdown, ROAS, sales, and performance insights. Full transparency with no hidden numbers.",
    features: ["Weekly Performance Reports", "ROAS & Sales Tracking", "Transparent Analytics"],
    image: work5, 
    imageAlt: "Clear Reporting",
    panelClass: styles.panel6,
  },
];

// ─── Component ───────────────────────────────────────────────
export default function ScrollSection() {
  return (
    <section id="services" className={styles.section}>
      {SERVICES.map((service, i) => (
        <div
          key={service.number}
          className={`${styles.panel} ${service.panelClass}`}
          style={{ 
            zIndex: i + 1,
            top: `${i * 20}px` 
          }}
        >
          <div className={styles.inner}>
            {/* ── Left: text content ── */}
            <div className={styles.content}>
              <h1 className={styles.title}>
                <span className={styles.serviceNumber}>{service.number}</span>
                {service.title}{" "}
                <span className={styles.titleAccent}>{service.accent}</span>
              </h1>

              <span className={styles.subtitle}>{service.subtitle}</span>

              <div className={styles.underline} />

              <p className={styles.description}>{service.description}</p>

              <ul className={styles.features}>
                {service.features.map((feat) => (
                  <li key={feat} className={styles.featureItem}>
                    {/* استبدال وسم الـ <i> بأيقونة الـ Lucide الملوّنة */}
                    <CheckCircle2 className={styles.checkIcon} size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right: image ── */}
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={service.image}
                alt={service.imageAlt}
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}