import { useState } from "react";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive digital marketing services including SEO, social media marketing, content creation, web development, and brand strategy. Our team creates customized solutions tailored to your specific business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks, while ongoing marketing campaigns are managed on monthly retainer basis. We provide detailed timelines during consultation.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "Our data-driven approach combined with creative excellence sets us apart. We focus on measurable results, transparent communication, and building long-term partnerships rather than just delivering services.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely! We work with businesses of all sizes, from startups to enterprises. We offer scalable solutions that grow with your business and provide flexible pricing options to accommodate different budgets.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We use comprehensive analytics to track KPIs including conversion rates, traffic growth, engagement metrics, and ROI. We provide regular reports and adjust strategies based on performance data.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing models including project-based fees, monthly retainers, and performance-based pricing. During our initial consultation, we'll recommend the best approach for your budget and goals.",
  },
  {
    question: "Can you help with existing marketing?",
    answer:
      "Yes! We can audit your current marketing efforts and optimize existing campaigns. Many clients come to us for improvement of their current strategies, and we excel at enhancing what's already working.",
  },
  {
    question: "How do we get started?",
    answer:
      "Getting started is easy! Contact us for a free consultation where we'll discuss your goals, challenges, and how we can help. From there, we'll create a customized proposal and timeline for your project.",
  },
];

/* ─── Icons ──────────────────────────────────────────────────── */
const ChevronIcon = () => (
  <svg
    className={styles.chevron}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const QuestionMarkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="oklch(0.15 0.01 60)"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
  </svg>
);

/* ─── FAQ Item ────────────────────────────────────────────────── */
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div
    className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
    onClick={onClick}
  >
    <div className={styles.question}>
      <h4 className={styles.questionText}>{question}</h4>
      <ChevronIcon />
    </div>

    <div className={styles.answer}>
      <p className={styles.answerText}>{answer}</p>
    </div>
  </div>
);

/* ─── FAQ Section ─────────────────────────────────────────────── */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>

          {/* Left: Info */}
          <div className={styles.info}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>
                <QuestionMarkIcon />
              </div>
              <span className={styles.badgeText}>FAQ</span>
            </div>

            <h2 className={styles.title}>
              Frequently Asked Questions
            </h2>

            <p className={styles.description}>
              Find answers to common questions about our services and how we can
              help your business grow.
            </p>

            <div className={styles.accentLine} />
          </div>

          {/* Right: FAQ Items */}
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => toggle(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
