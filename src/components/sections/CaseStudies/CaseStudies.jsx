import { Trophy, ArrowRight } from "lucide-react"; // استيراد الأيقونات السينمائية المناسبة للمحتوى
import { Link } from "react-router-dom"; // استيراد الـ Link للتنقل بسلاسة لصفحة البورتفوليو الكلي
import styles from "./CaseStudies.module.css";
import video from "@/assets/V1.mp4";
import logo1 from "@/assets/loooo1.webp";
import logo2 from "@/assets/loooo2.webp";
import logo3 from "@/assets/loooo3.webp";
import logo4 from "@/assets/loooo4.webp";
import logo5 from "@/assets/loooo5.webp"; // يمكنك استخدام اللوجو المتوفر للشركة الخامسة

const CASES = [
  {
    id: 1,
    company: "INTEGRATED GROWTH SYSTEM",
    logo: logo1,
    description:
      "We engineered an integrated acquisition funnel across various commercial sectors, driving massive volume and capturing extensive business growth data.",
    before: { label: "Ad Optimization", value: "Data-Driven Funnels" },
    after: { label: "Trackable Sales", value: "13,700,000+ SAR" },
    metrics: [
      { value: "12x – 16x", label: "Avg. ROAS Uplift" },
      { value: "Multi-Sector", label: "System Scalability" },
      { value: "High-Intent", label: "Lead Quality" },
    ],
  },
  {
    id: 2,
    company: "NIBRAS 360",
    logo: logo2, 
    description:
      "Developed a precise visual identity and structured a cohesive brand positioning statement, transforming their market presence into a distinct communication system.",
    before: { label: "Brand Presence", value: "Fragmented Identity" },
    after: { label: "Visual System", value: "100% Cohesive Guide" },
    metrics: [
      { value: "Unified", label: "Tone of Voice" },
      { value: "Premium", label: "Market Positioning" },
      { value: "Structured", label: "Core Messaging" },
    ],
  },
  {
    id: 3,
    company: "BELT & ROAD TRADING",
    logo: logo3,
    description:
      "Transformed raw business metrics and data into a highly persuasive 12-page company profile, turning their past delivered work into an active corporate sales tool.",
    before: { label: "Corporate Presence", value: "Generic Description" },
    after: { label: "Company Profile", value: "12-Page Sales Tool" },
    metrics: [
      { value: "Professional", label: "Service Copywriting" },
      { value: "Targeted", label: "B2B Credibility" },
      { value: "Print & Digital", label: "Ready Files" },
    ],
  },
  {
    id: 4,
    company: "PANDA HOST",
    logo: logo4,
    description:
      "Re-engineered their advertising funnels on Meta, transforming traditional random budget spending into a continuous digital learning and optimization system.",
    before: { label: "Campaign Testing", value: "Random Ad Spending" },
    after: { label: "Funnel Conversion", value: "Continuous Learning" },
    metrics: [
      { value: "Optimized", label: "Cost Per Lead" },
      { value: "Full-Funnel", label: "Meta Ad Setup" },
      { value: "Actionable", label: "Performance Data" },
    ],
  },
  {
    id: 5,
    company: "AL ASWAR AL SAMEDA CO.",
    logo: logo5, // كارت فخم مخصص لقطاع الإنشاءات والمقاولات من ملفاتك الحقيقية
    description:
      "Structured a high-end corporate identity and comprehensive profiling for a premium 7-branch fast-food chain and large infrastructure projects in Tabuk.",
    before: { label: "Visual System", value: "Standard Outlines" },
    after: { label: "Corporate Trust", value: "7-Branch Scale" },
    metrics: [
      { value: "Tabuk Sector", label: "Infrastructure" },
      { value: "Premium", label: "B2B Positioning" },
      { value: "100% Cohesive", label: "Brand Presence" },
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

            {/* ── الزر الموحد في الشاشة مضاف بـ Style داخلي مباشر دون تغيير الـ CSS القديم ── */}
           <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "flex-start" }}>
  <Link 
    to="/portfolio" 
    className="btn rounded-pill px-4 py-2 text-uppercase fw-semibold" 
    style={{ 
      letterSpacing: "0.08em", 
      fontSize: "0.85rem",
      color: "#ffffff",
      background: "linear-gradient(135deg, #2b6ec2 0%, #174b91 50%, #0d2954 100%)", /* مأخوذ من --secondary */
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 15px rgba(41, 95, 153, 0.2)",
      transition: "all 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "linear-gradient(135deg, #428bf2 0%, #2062ba 50%, #11366b 100%)"; /* مأخوذ من --secondaryHover */
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(41, 95, 153, 0.4)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "linear-gradient(135deg, #2b6ec2 0%, #174b91 50%, #0d2954 100%)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 15px rgba(41, 95, 153, 0.2)";
    }}
  >
    See All Work
  </Link>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}