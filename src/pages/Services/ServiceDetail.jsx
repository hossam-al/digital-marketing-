import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart2, Target, Megaphone, PenTool, MousePointerClick, Share2, Map, MessageCircle, FileText, Rocket, Briefcase, Search, ChevronDown } from "lucide-react";
import  styles from "./ServiceDetail.module.css";


// ─── All 14 EGO STUDIO Services ────────────────────────────────────────────
export const ALL_SERVICES = [
  {
    number: "01",
    slug: "marketing-strategy",
    title: "Marketing Strategy",
    titleAr: "استراتيجية التسويق",
    short: "We define the overall marketing direction so your team knows what to say, who to speak to, where to appear, and how to turn visibility into real opportunities.",
    long: "We define the overall marketing direction for your business: reviewing current brand status, mapping target audiences, building core messaging, and recommending the right channels. This service turns random marketing reactions into a structured, measurable system aligned with your commercial objectives.",
    icon: TrendingUp,
    features: [
      "Current business & brand situation review",
      "Marketing & commercial objective definition",
      "Target audience & priority segment mapping",
      "Core messaging and content direction",
      "Channel recommendations based on business type",
    ],
    when: ["Launching a new business or service", "Content and ads exist without clear direction", "Entering a new market, city, or audience segment"],
    category: "strategy",
  },
  {
    number: "02",
    slug: "business-development",
    title: "Business Development & Growth",
    titleAr: "تطوير المشاريع والنمو",
    short: "We help businesses identify growth opportunities, improve service presentation, and build commercial paths that make marketing directly serve business objectives.",
    long: "We analyze your service or product model, identify expansion opportunities, and develop how you present your packages and commercial offers. The goal is to align marketing directly with sales and operational objectives — improving what you offer and how you offer it, not just how you promote it.",
    icon: Briefcase,
    features: [
      "Service or product model analysis",
      "Growth and improvement opportunity identification",
      "Service and package presentation development",
      "Commercial messaging and offer improvement",
      "Alignment between marketing, sales, and operations",
    ],
    when: ["Services are strong but poorly presented", "Business wants higher client value or better lead quality", "Packages or sales paths need development"],
    category: "strategy",
  },
  {
    number: "03",
    slug: "market-analysis",
    title: "Market & Competitor Analysis",
    titleAr: "تحليل السوق والمنافسين",
    short: "We analyze the market and competitors to find opportunities, threats, messaging gaps, and ways to build real brand differentiation.",
    long: "We conduct a structured analysis of your direct and indirect competitors — reviewing their service presentation, pricing signals, messaging, and positioning. We map market strengths and weaknesses, identify gaps the brand can use, and extract concrete angles for content and advertising.",
    icon: Search,
    features: [
      "Direct and indirect competitor review",
      "Analysis of service presentation, pricing, and messaging",
      "Market strengths and weaknesses identification",
      "Gap definition for brand differentiation",
      "Content and ad angle extraction from analysis",
    ],
    when: ["Before launching major campaigns", "Before building a new website or portfolio", "When entering a new sector or city"],
    category: "strategy",
  },
  {
    number: "04",
    slug: "brand-positioning",
    title: "Brand Positioning & Messaging",
    titleAr: "التموضع والرسائل التسويقية",
    short: "We define how your brand should be perceived and what core message makes it different and persuasive among competitors.",
    long: "We develop a clear positioning statement, define your core and secondary messages, and shape a tone of voice that fits your audience and market. We turn your features into customer-relevant benefits and craft marketing promises that are credible and compelling — without empty claims.",
    icon: Target,
    features: [
      "Clear positioning statement development",
      "Core and secondary message definition",
      "Suitable tone of voice development",
      "Marketing promise writing without exaggeration",
      "Turning features into customer-relevant benefits",
    ],
    when: ["Brand message is unclear or generic", "Content looks similar to competitors", "Before building website content or ad campaigns"],
    category: "strategy",
  },
  {
    number: "05",
    slug: "content-strategy",
    title: "Content Strategy",
    titleAr: "استراتيجية المحتوى",
    short: "We turn content from regular posting into a marketing tool that supports awareness, trust, sales, and retargeting.",
    long: "We build a structured content strategy: defining content pillars, separating educational from sales and conversion content, mapping content angles to customer stages, and connecting content to your campaigns and conversion paths. Every post serves a purpose.",
    icon: PenTool,
    features: [
      "Content pillar definition",
      "Separation of educational, sales, and conversion content",
      "Content angles based on customer stages",
      "Platform-specific content direction",
      "Connection between content, campaigns, and conversion paths",
    ],
    when: ["Many posts with no clear impact", "Content must support both sales and trust", "Preparing for a launch or rebuilding digital presence"],
    category: "content",
  },
  {
    number: "06",
    slug: "content-writing",
    title: "Content Writing & Creative Direction",
    titleAr: "كتابة المحتوى والتوجيه الإبداعي",
    short: "We write and direct content so it is clear, persuasive, connected to customer behavior, and suitable for the service or product.",
    long: "We write social media captions, video and reels scripts, and develop strong hooks that stop the scroll. We also provide creative direction — guiding visuals based on the message, not just aesthetics. The result is content that aligns copy, design, and advertising into a single consistent voice.",
    icon: Megaphone,
    features: [
      "Social media caption writing",
      "Video and reels script writing",
      "Strong hook development",
      "Post and campaign idea generation",
      "Creative direction based on message",
    ],
    when: ["Designs are good but messaging is weak", "Stronger ad content is needed", "Building a multi-service or offer-based campaign"],
    category: "content",
  },
  {
    number: "07",
    slug: "meta-ads",
    title: "Meta Ads Management",
    titleAr: "إدارة إعلانات Meta",
    short: "We manage Meta campaigns as a complete performance system covering objective, audience, creative, message, budget, and ongoing optimization.",
    long: "We run Meta advertising as a structured system — selecting the right campaign objective, building campaign structure by business stage, managing all campaign types, and setting up retargeting and custom audiences. We monitor performance closely and optimize based on real data, not assumptions.",
    icon: BarChart2,
    features: [
      "Right campaign objective selection",
      "Campaign structure based on business stage",
      "Awareness, Traffic, Leads & Conversion campaigns",
      "Retargeting and custom audience setup",
      "Performance monitoring and continuous optimization",
    ],
    when: ["Launching a service or offer", "Business needs messages, bookings, or leads", "Campaigns are running but result quality is weak"],
    category: "advertising",
  },
  {
    number: "08",
    slug: "campaign-optimization",
    title: "Campaign Planning & Optimization",
    titleAr: "تخطيط الحملات والتحسين",
    short: "We plan campaigns before launch and optimize after launch through performance reading, message testing, and audience improvement.",
    long: "We define campaign logic, test different angles and messages, and read key metrics (CTR, CPM, CPC, cost per result) to identify weaknesses in creative, audience, or offer. Every optimization is a clear decision based on actual data, turning your campaigns from a trial run into a learning system.",
    icon: MousePointerClick,
    features: [
      "Campaign logic and structure definition",
      "Angle and message testing",
      "CTR, CPM, CPC and quality metric reading",
      "Creative, audience, and offer weakness identification",
      "Clear optimization decision making",
    ],
    when: ["After the first campaign running period", "When cost per result increases", "Many results but few actual sales or bookings"],
    category: "advertising",
  },
  {
    number: "09",
    slug: "social-media",
    title: "Social Media Management",
    titleAr: "إدارة السوشيال ميديا",
    short: "We organize your brand's social media presence so the page builds trust, explains your service, and drives the right customers to reach out.",
    long: "We optimize your bio, CTA, highlights, and profile structure, then manage content scheduling and publishing. We monitor message consistency and suggest improvements to the user experience inside the profile — turning your social page from a display window into an active conversion support point.",
    icon: Share2,
    features: [
      "Bio and CTA optimization",
      "Highlights and profile structure organization",
      "Content scheduling and publishing",
      "Message consistency monitoring",
      "User experience improvement suggestions",
    ],
    when: ["Launching or restructuring a social page", "Content is good but page is not organized", "Social media is a key conversion point"],
    category: "content",
  },
  {
    number: "10",
    slug: "customer-journey",
    title: "Customer Journey & Conversion Paths",
    titleAr: "رحلة العميل ومسارات التحويل",
    short: "We design the path customers take from first exposure to inquiry, booking, or purchase — ensuring every message supports a clear next step.",
    long: "We map current touchpoints, define customer stages from awareness to decision, and recommend landing paths or WhatsApp flows that reduce confusion and increase conversion quality. Every CTA, qualification question, and message is designed to move the right customer forward.",
    icon: Map,
    features: [
      "Current touchpoint analysis",
      "Customer stage mapping from awareness to decision",
      "Landing path or WhatsApp path recommendations",
      "Message separation by customer or service type",
      "CTA and qualification question improvement",
    ],
    when: ["Visits or messages without conversion", "Different customer types and services exist", "Lead or booking quality needs improvement"],
    category: "strategy",
  },
  {
    number: "11",
    slug: "whatsapp-sales",
    title: "WhatsApp & Sales Communication",
    titleAr: "دعم واتساب والتواصل البيعي",
    short: "We improve the start of customer conversations and build qualification flows that help your team understand needs, reduce hesitation, and close faster.",
    long: "We write professional welcome messages, build short qualification question flows, and develop reply frameworks for common objections. We align replies with service type and guide conversations toward a booking, meeting, or clear purchase request — giving your sales team a consistent, effective communication system.",
    icon: MessageCircle,
    features: [
      "Professional welcome message writing",
      "Short qualification question setup",
      "Common objection reply development",
      "Reply alignment with service or offer type",
      "Conversation direction toward booking or meeting",
    ],
    when: ["Many messages but few sales", "Team replies differ from person to person", "Customers need qualification before a call or visit"],
    category: "advertising",
  },
  {
    number: "12",
    slug: "reporting",
    title: "Reporting & Performance Review",
    titleAr: "التقارير ومراجعة الأداء",
    short: "We provide reports that don't just display numbers — they translate performance into insights, recommendations, and actionable decisions.",
    long: "We deliver monthly or bi-weekly performance reports covering content results, campaign data, and lead quality — not just raw numbers. We identify reasons for improvement or weakness and provide clear recommendations for the next stage, turning data into a decision-making tool for your management team.",
    icon: FileText,
    features: [
      "Monthly or bi-weekly reports",
      "Content and campaign performance review",
      "Result quality analysis, not just volume",
      "Improvement and weakness reason identification",
      "Optimization recommendations for next stage",
    ],
    when: ["Campaigns or content are running continuously", "Spend and results need evaluation", "Plan should develop based on real data"],
    category: "strategy",
  },
  {
    number: "13",
    slug: "launch-systems",
    title: "Launch & Growth Systems",
    titleAr: "أنظمة الإطلاق والنمو",
    short: "We prepare launch or relaunch systems for businesses, services, and apps — from awareness and data collection to conversion and scaling.",
    long: "We prepare your launch messaging, plan pre-launch, launch, and post-launch content, and build a phased campaign structure (Awareness → Traffic → Conversion). We develop launch offers when needed and analyze early results to improve the next stage — turning your launch into the foundation for continuous growth.",
    icon: Rocket,
    features: [
      "Launch message preparation",
      "Pre-launch, launch, and post-launch content planning",
      "Phased awareness, traffic, and conversion campaigns",
      "Launch offer development when needed",
      "Result analysis and next-stage improvement",
    ],
    when: ["Launching an app, service, or new branch", "Reintroducing a brand to the market", "Awareness must be built before gradual conversion"],
    category: "advertising",
  },
  {
    number: "14",
    slug: "portfolio-support",
    title: "Portfolio & Case Presentation",
    titleAr: "تحويل الأعمال إلى Portfolio",
    short: "We turn your previous work into marketing material that proves experience, builds trust, and helps new clients understand your quality before reaching out.",
    long: "We organize your previous projects by type, write simplified case studies, develop Before/After or highlight content, and craft professional descriptions of delivered services. The goal is to turn your portfolio from a gallery into a sales tool — one that communicates results, not just aesthetics.",
    icon: Briefcase,
    features: [
      "Previous project organization by type",
      "Simplified case study writing",
      "Before/After and project highlight content",
      "Professional delivered service descriptions",
      "Portfolio as a sales tool, not a gallery",
    ],
    when: ["Strong previous work not used in marketing", "Preparing a new website or portfolio", "Targeting higher-quality or higher-budget clients"],
    category: "content",
  },
];

const CATEGORY_LABELS = {
  strategy: "Strategy",
  content: "Content",
  advertising: "Paid & Performance",
};

const CATEGORY_COLORS = {
  strategy: "var(--color-background-info)",
  content: "var(--color-background-success)",
  advertising: "var(--color-background-warning)",
};

const CATEGORY_TEXT = {
  strategy: "var(--color-text-info)",
  content: "var(--color-text-success)",
  advertising: "var(--color-text-warning)",
};

// ─── Service Card ──────────────────────────────────────────────────────────
function ServiceCard({
  service,
  open,
  onToggle,
}) {
  const Icon = service.icon;

  return (
    <div
      className={`${styles.card} ${
        open ? styles.cardOpen : ""
      }`}
    >
      <div
        className={styles.cardHeader}
        onClick={onToggle}
      >
        <div className={styles.cardTop}>

          <span className={styles.number}>
            {service.number}
          </span>

          <span
            className={styles.badge}
            style={{
              background:
                CATEGORY_COLORS[
                  service.category
                ],

              color:
                CATEGORY_TEXT[
                  service.category
                ],
            }}
          >
            {
              CATEGORY_LABELS[
                service.category
              ]
            }
          </span>

        </div>

        <div className={styles.cardIcon}>
          <Icon
            size={22}
            strokeWidth={1.5}
          />
        </div>

        <h3 className={styles.cardTitle}>
          {service.title}
        </h3>

        <p className={styles.cardShort}>
          {service.short}
        </p>

        <div className={styles.expandBtn}>
          <ChevronDown
            size={16}
            style={{
              transform: open
                ? "rotate(180deg)"
                : "rotate(0deg)",

              transition:
                "transform .25s ease",
            }}
          />
        </div>

      </div>

      {open && (

        <div className={styles.cardBody}>

          <div
            className={styles.divider}
          />

          <ul
            className={
              styles.featureList
            }
          >

            {service.features.map(
              item => (

              <li
                key={item}
                className={
                  styles.featureItem
                }
              >

                <span
                  className={
                    styles.featureDot
                  }
                />

                {item}

              </li>

            ))}

          </ul>

          <p
            className={
              styles.whenLabel
            }
          >
            When you need this
          </p>

          <ul
            className={
              styles.whenList
            }
          >

            {service.when.map(
              item => (

              <li
                key={item}
                className={
                  styles.whenItem
                }
              >
                {item}
              </li>

            ))}

          </ul>

          <Link
            to={`/services/${service.slug}`}
            className={styles.cta}
          >

            Full details

            <ArrowRight
              size={14}
            />

          </Link>

        </div>

      )}

    </div>
  );
}

/* ───────────────── MAIN ───────────────── */

export default function ServicesGrid() {

  const [filter,setFilter] =
    useState("all");

  const [
    openedCard,
    setOpenedCard
  ] = useState(null);

  const filtered =

    filter === "all"

      ? ALL_SERVICES

      : ALL_SERVICES.filter(
          service =>
            service.category
            ===
            filter
        );

  return (

    <section
      className={styles.section}
    >

      <div className="container">

        {/* Filters */}

        <div
          className={styles.filters}
        >

          {[
            "all",
            "strategy",
            "content",
            "advertising"
          ].map(cat => (

            <button

              key={cat}

              className={`
                ${styles.filterBtn}

                ${
                  filter === cat

                  ? styles.filterActive

                  : ""
                }
              `}

              onClick={() => {

                setFilter(cat);

                setOpenedCard(
                  null
                );

              }}

            >

              {
                cat === "all"

                ? "All Services"

                : cat ===
                  "advertising"

                ? "Paid & Performance"

                : cat
                    .charAt(0)
                    .toUpperCase()

                  +

                  cat.slice(1)
              }

            </button>

          ))}

        </div>

        {/* Cards */}

        <div
          className={styles.grid}
        >

          {filtered.map(
            service => (

            <ServiceCard

              key={service.slug}

              service={service}

              open={
                openedCard
                ===
                service.slug
              }

              onToggle={() => {

                setOpenedCard(

                  openedCard
                  ===
                  service.slug

                  ? null

                  : service.slug

                );

              }}

            />

          ))}

        </div>

      </div>

    </section>

  );

}