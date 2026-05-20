import { PROCESS } from "@/lib/content";
import { Reveal, SectionHeading } from "../Reveal/Reveal";
import styles from "./ProcessSection.module.css";

export function ProcessSection() {
  return (
    <section className={`position-relative ${styles.processSection}`}>
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A process built
              <br />
              on momentum.
            </>
          }
        />
        
        <div className="position-relative mt-5 pt-3">
          {/* Horizontal divider line visible only on desktop */}
          <div className={`position-absolute start-0 end-0 d-none d-md-block ${styles.dividerLine}`} />
          
          <div className="row g-4">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="col-12 col-md-6 col-lg-3">
                <Reveal delay={i * 0.1}>
                  <div className="position-relative">
                    <div className={`d-grid place-items-center rounded-circle border font-display ${styles.stepCircle}`}>
                      {p.step}
                    </div>
                    <h3 className={`mt-4 fw-normal h4 ${styles.fontDisplay}`}>{p.title}</h3>
                    <p className="mt-2 text-muted small">{p.desc}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}