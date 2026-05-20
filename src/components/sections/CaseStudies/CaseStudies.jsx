import { Trophy, ArrowRight } from "lucide-react"; // استيراد الأيقونات السينمائية المناسبة للمحتوى
import styles from "./CaseStudies.module.css";
import video from "@/assets/V1.mp4";
import logo1 from "@/assets/loooo1.webp";
import logo2 from "@/assets/loooo2.webp";
import logo3 from "@/assets/loooo3.webp";
import logo4 from "@/assets/loooo4.webp";
import logo5 from "@/assets/loooo5.webp";

const CASES = [
  {
    id: 1,
    company: "PACKGO",
    logo: logo1,
    description:
      "We built PackGo's acquisition system from scratch, surpassing 2,500,000 SAR in sales within 6 months with exceptional campaign performance.",
    before: { label: "Ad Spend", value: "< 15% of Total Sales" },
    after: { label: "Total Sales", value: "2,500,000+ SAR" },
    metrics: [
      { value: "15x – 18x", label: "ROAS" },
      { value: "6 Months", label: "Growth Period" },
      { value: "High-Intent", label: "Traffic Quality" },
    ],
  },
  {
    id: 2,
    company: "SHAHY",
    logo: logo5,
    description:
      "Restored revenue growth for Tabuk's 7-branch fast food chain with scalable performance campaigns and efficient ad spend.",
    before: { label: "Revenue Before", value: "SAR 700,000" },
    after: { label: "Revenue After", value: "SAR 1,200,000+" },
    metrics: [
      { value: "12x – 18x", label: "ROAS" },
      { value: "3 Months", label: "Growth Period" },
      { value: "+60% / branch", label: "Daily Order Volume" },
    ],
  },
  {
    id: 3,
    company: "LEATHER MATE",
    logo: logo2,
    description:
      "We tripled revenue in under 90 days using precise targeting, high-intent creatives, and a performance-driven strategy.",
    before: { label: "Before", value: "110,000 SAR/mo" },
    after: { label: "After", value: "350,000+ SAR/mo" },
    metrics: [
      { value: "8x – 16x", label: "ROAS" },
      { value: "90 Days", label: "Growth Period" },
      { value: "< 20,000 SAR", label: "Ad Spend / Month" },
    ],
  },
  {
    id: 4,
    company: "AQUA COOL",
    logo: logo4,
    description:
      "We built Aqua Cool's sales funnel from scratch, reaching 170,000+ SAR/month in 3 months with industry-leading ROAS.",
    before: { label: "Ad Spend", value: "≈ 12–17K SAR/mo" },
    after: { label: "Online Sales", value: "170,000+ SAR/mo" },
    metrics: [
      { value: "8x – 12x", label: "ROAS" },
      { value: "< 14%", label: "Ad Spend %" },
      { value: "3 Months", label: "Growth Period" },
    ],
  },
  {
    id: 5,
    company: "SAMA ACADEMY",
    logo: logo3,
    description:
      "We built SAMA Academy's revenue engine from scratch, reaching 150,000 SAR/month in 3 months with a lean ad budget.",
    before: { label: "Ad Spend", value: "≈ 8–10K SAR/mo" },
    after: { label: "Revenue", value: "150,000+ SAR/mo" },
    metrics: [
      { value: "8x – 10x", label: "ROAS" },
      { value: "< 13%", label: "Ad Spend %" },
      { value: "3 Months", label: "Growth Period" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className={styles.section}>
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.badge}>
            {/* الأيقونة الدائرية المحدثة للأزرق المطور #295f99 عبر الـ CSS */}
            <i>
              <Trophy size={14} />
            </i>
            <span>Case Studies</span>
          </div>
          <h2 className={styles.heading}>Real Results, Real Success</h2>
          <p className={styles.subheading}>
            Explore how our performance-driven strategies helped brands increase
            revenue, generate qualified leads, and scale their digital growth.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className={styles.grid}>

          {/* sticky video */}
          <div className={styles.videoCol}>
            <div className={styles.videoWrap}>
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              />
              <div className={styles.videoGlow} />
            </div>
          </div>

          {/* cards */}
          <div className={styles.cardsCol}>
            {CASES.map((c) => (
              <article key={c.id} className={styles.card}>

                {/* left: text */}
                <div className={styles.cardText}>
                  <div className={styles.companyHeader}>
                    <h3 className={styles.companyName}>{c.company}</h3>
                    <img
                      src={c.logo}
                      alt={`${c.company} logo`}
                      className={styles.logo}
                    />
                  </div>

                  <span className={styles.pill}>Performance Case Study</span>

                  <p className={styles.desc}>{c.description}</p>

                  {/* before / after comparison funnel */}
                  <div className={styles.comparison}>
                    <div className={styles.compBefore}>
                      <span className={styles.compLabel}>{c.before.label}</span>
                      <span className={styles.compValue}>{c.before.value}</span>
                    </div>
                    
                    {/* السهم الحركي الدائري المطور للأزرق والنبض الجمالي */}
                    <div className={styles.arrow}>
                      <ArrowRight size={18} />
                    </div>
                    
                    <div className={styles.compAfter}>
                      <span className={styles.compLabel}>{c.after.label}</span>
                      <span className={styles.compValue}>{c.after.value}</span>
                    </div>
                  </div>
                </div>

                {/* right: metrics */}
                <div className={styles.cardMetrics}>
                  {c.metrics.map((m) => (
                    <div key={m.label} className={styles.metric}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>

              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}