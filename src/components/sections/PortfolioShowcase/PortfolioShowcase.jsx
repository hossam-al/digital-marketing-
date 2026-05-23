import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/lib/content";
import { Reveal, SectionHeading } from "@/components/sections/Reveal/Reveal";
import styles from "./PortfolioShowcase.module.css";

// ─── Modal ──────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {/* Image */}
        <div className={styles.modalImg}>
          <img src={project.image} alt={project.title} />
          <div className={styles.modalImgOverlay} />
          <span className={styles.modalCategory}>{project.category}</span>
        </div>

        {/* Content */}
        <div className={styles.modalBody}>
          {/* Meta */}
          <div className={styles.modalMeta}>
            <span className={styles.modalClient}>{project.client}</span>
            <span className={styles.modalYear}>{project.year}</span>
          </div>

          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalDesc}>{project.description}</p>

          <div className={styles.modalDivider} />

          {/* Results */}
          {project.results && (
            <div className={styles.resultsRow}>
              {project.results.map((r) => (
                <div key={r.label} className={styles.resultItem}>
                  <span className={styles.resultValue}>{r.value}</span>
                  <span className={styles.resultLabel}>{r.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className={styles.modalDivider} />

          {/* Services */}
          {project.services && (
            <div>
              <p className={styles.modalLabel}>What we did</p>
              <div className={styles.tags}>
                {project.services.map((s) => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export function PortfolioShowcase({ limit }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const items = PORTFOLIO
    .filter((p) => filter === "All" || p.category === filter)
    .slice(0, limit);

  return (
    <section className={`position-relative ${styles.portfolioSection}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title={<>Recent stories<br />we've helped tell.</>}
        />

        {/* Filters */}
        <div className="mt-5 d-flex flex-wrap align-items-center justify-content-center gap-2">
          {PORTFOLIO_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`btn rounded-pill text-uppercase ${styles.filterBtn} ${filter === c ? styles.activeFilter : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
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
                  <div
                    className={`group d-block overflow-hidden rounded-4 ${styles.portfolioCard}`}
                    onClick={() => setSelected(p)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
                  >
                    <div className={`position-relative ${styles.imageWrapper}`}>
                      <img src={p.image} alt={p.title} loading="lazy" className={`w-100 h-100 ${styles.cardImg}`} />
                      <div className={`position-absolute inset-0 ${styles.cardOverlay}`} />
                      <div className="position-absolute bottom-0 start-0 end-0 d-flex align-items-end justify-content-between p-4">
                        <div>
                          <p className={`text-uppercase mb-1 ${styles.cardCategory}`}>{p.category}</p>
                          <h3 className={`h4 m-0 fw-normal ${styles.fontDisplay}`}>{p.title}</h3>
                        </div>
                        <div className={`d-grid place-items-center rounded-circle flex-shrink-0 ${styles.arrowCircle}`}>
                          <ArrowUpRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See all */}
        {limit && (
          <Reveal className="mt-5 text-center">
            <a href="/portfolio" className={`btn rounded-pill text-uppercase ${styles.seeAllBtn}`}>
              See all work <ArrowUpRight className="ms-1" size={16} />
            </a>
          </Reveal>
        )}
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
