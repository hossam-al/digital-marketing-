import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/lib/content";
import { Reveal, SectionHeading } from "@/components/sections/Reveal/Reveal";
import styles from "./PortfolioShowcase.module.css";

export function PortfolioShowcase({ limit }) {
  const [filter, setFilter] = useState("All");

  const items = PORTFOLIO.filter((p) => filter === "All" || p.category === filter).slice(0, limit);

  return (
    <section className={`position-relative ${styles.portfolioSection}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Recent stories
              <br />
              we've helped tell.
            </>
          }
        />

        {/* أزرار الفلترة والـ Categories */}
        <div className="mt-5 d-flex flex-wrap align-items-center justify-content-center gap-2">
          {PORTFOLIO_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`btn rounded-pill text-uppercase ${styles.filterBtn} ${
                filter === c ? styles.activeFilter : ""
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* شبكة الكروت المتجاوبة مع الفلترة والأنيميشن */}
        <motion.div layout className="mt-5 row g-4">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <div key={p.id} className="col-12 col-md-6 col-lg-4">
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                >
                  <Link
                    to="/portfolio"
                    className={`group d-block overflow-hidden rounded-4 text-decoration-none ${styles.portfolioCard}`}
                  >
                    <div className={`position-relative ${styles.imageWrapper}`}>
                      {/* الصورة */}
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className={`w-100 h-100 ${styles.cardImg}`}
                      />
                      
                      {/* التدرج الشفاف فوق الصورة */}
                      <div className={`position-absolute inset-0 ${styles.cardOverlay}`} />
                      
                      {/* محتوى الكارت السفلي */}
                      <div className="position-absolute bottom-0 start-0 end-0 d-flex align-items-end justify-content-between p-4">
                        <div>
                          <p className={`text-uppercase mb-1 ${styles.cardCategory}`}>
                            {p.category}
                          </p>
                          <h3 className={`h4 m-0 fw-normal ${styles.fontDisplay}`}>
                            {p.title}
                          </h3>
                        </div>
                        
                        {/* السهم الدائري */}
                        <div className={`d-grid place-items-center rounded-circle flex-shrink-0 ${styles.arrowCircle}`}>
                          <ArrowUpRight size={20} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* زر "See all work" في حال وجود ليميت */}
        {limit && (
          <Reveal className="mt-5 text-center">
            <Link
              to="/portfolio"
              className={`btn rounded-pill text-uppercase ${styles.seeAllBtn}`}
            >
              See all work <ArrowUpRight className="ms-1" size={16} />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}