import { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

import { Link } from "react-router-dom"; // استيراد الـ Link للتنقل بين الصفحات
import styles from "./ScrollSection.module.css";
import work1 from "@/assets/SE1.png";
import work3 from "@/assets/SE3.png";
import work4 from "@/assets/SE4.png";
import work5 from "@/assets/SE5.png";
import work6 from "@/assets/SE6.png";
import work2 from "@/assets/Services2.png"; 

// ─── Data (6 Core Main Panels for Home Page) ──────────────────────────
const SERVICES = [
  {
    number: "1",
    title: "Marketing Growth",
    accent: "Strategy",
    subtitle: "Brand Positioning & Market Analysis",
    description:
      "We define the overall marketing direction, analyze market gaps, and craft core messaging matrices to turn your business presence into a measurable acquisition system.",
    features: [
      "Market Competitor Analysis",
      "Brand Positioning Statements",
      "Channel Recommendations",
    ],
    image: work1,
    imageAlt: "Marketing Growth Strategy",
    panelClass: styles.panel1,
  },
  {
    number: "2",
    title: "Content Strategy ",
    accent: "Creative Direction",
    subtitle: "Persuasive Copywriting & Storytelling",
    description:
      "We turn content from regular posting into a strategic tool serving awareness, trust, and sales through structured content pillars and engaging hooks.",
    features: [
      "Content Pillars Definition",
      "Video & Reels Scripting",
      "Social Media Copywriting",
    ],
    image: work2,
    imageAlt: "Content Strategy Copywriting",
    panelClass: styles.panel2,
  },
  {
    number: "3",
    title: "Meta Ads  Campaign",
    accent: "Optimization",
    subtitle: "Performance Media Buying",
    description:
      "We manage paid advertising as a performance system. Testing creative angles, monitoring core metrics, and optimizing budgets to turn ad spend into clear commercial growth.",
    features: [
      "Targeted Lead Generation",
      "Retargeting & Custom Audiences",
      "Performance Data Analysis",
    ],
    image: work3,
    imageAlt: "Meta Paid Advertising",
    panelClass: styles.panel3,
  },
  {
    number: "4",
    title: "Conversion Paths ",
    accent: "Customer Journeys",
    subtitle: "Optimizing Touchpoints & Funnels",
    description:
      "We map the exact path customers take from first exposure directly to inquiry, building tailored landing and interaction paths to reduce customer confusion.",
    features: [
      "Touchpoint Analysis",
      "Landing Path Engineering",
      "Qualification Flow Tuning",
    ],
    image: work6,
    imageAlt: "Customer Journey Mapping",
    panelClass: styles.panel5,
  },
  {
    number: "5",
    title: "WhatsApp  Sales",
    accent: "Communication",
    subtitle: "Lead Qualification & Closing Support",
    description:
      "We structure early client chat conversations. Crafting professional welcome setups and objection reply frameworks to help sales teams communicate uniformly and close fast.",
    features: [
      "Welcome Flow Automation",
      "Objection Reply Frameworks",
      "Unified Team Communication",
    ],
    image: work4,
    imageAlt: "WhatsApp Sales Support",
    panelClass: styles.panel4,
  },
  {
    number: "6",
    title: "Web Dev Interface",
    accent: "UI/UX",
    subtitle: "High-Converting Digital Products",
    description:
      "We design and engineer speed-optimized, responsive web interfaces and landing pages. Built specifically to handle campaign traffic and convert interest into real opportunities.",
    features: [
      "UI/UX Interface Design",
      "Responsive Web Development",
      "Funnels & Form Integrations",
    ],
    image: work1,
    imageAlt: "Web Development  UI/UX",
    panelClass: styles.panel1,
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
            top: `${i * 20}px`,
          }}
        >
          <div className={styles.inner}>
            {/* ── Left: text content ── */}
            <div className={styles.content}>
          <h1 className={styles.title}>
  <span className={styles.serviceNumber}>{service.number}</span>
  {service.title}
  <br />
  <span className={styles.ampersand}>&</span>{" "}
  <span className={styles.titleAccent}>{service.accent}</span>
</h1>

              <span className={styles.subtitle}>{service.subtitle}</span>

              <div className={styles.underline} />

              <p className={styles.description}>{service.description}</p>

              <ul className={styles.features}>
                {service.features.map((feat) => (
                  <li key={feat} className={styles.featureItem}>
                    <FaCheckCircle className={styles.checkIcon} size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* زر داخلي في كل كارت يوجه لصفحة الخدمات الكاملة عند الرغبة في التوسع */}
              <div className={styles.ctaContainer}>
                <Link to="/services" className={styles.ctaSecondary}>
                  See services
                </Link>
              </div>
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
