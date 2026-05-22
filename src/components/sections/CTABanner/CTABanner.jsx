import { Link } from "react-router-dom"; // هذا المتوافق مع نظام الـ Routes الجديد في App.jsx
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal/Reveal";
import styles from "./CTABanner.module.css";

export function CTABanner() {
  return (
    <section className={`position-relative overflow-hidden ${styles.ctaSection}`}>
      {/* Background Gradients */}
      <div className={`position-absolute inset-0 pe-none ${styles.bgHero}`} />
      <div className={`position-absolute top-50 start-50 translate-middle rounded-circle pe-none ${styles.glowBlur}`} />
      
      <div className="position-relative container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Reveal>
              <p className={`mb-4 d-inline-flex align-items-center gap-3 text-uppercase ${styles.eyebrow}`}>
                <span className={styles.line} /> Ready when you are
              </p>
              
              <h2 className={`display-2 fw-normal ${styles.fontDisplay}`}>
                Your next chapter <span className={`${styles.gradientGold} fst-italic`}>starts here.</span>
              </h2>
              
              <p className={`mx-auto mt-4   fs-5 max-w-600 ${styles.fontsmall}`}>
                Tell us what you're building. We'll bring strategy, creative and a clear path to growth.
              </p>
              
              <Link
                to="/contact"
                className={`d-inline-flex align-items-center gap-3 rounded-pill border-0 text-decoration-none ${styles.btnGold}`}
              >
                Book your consultation
                <ArrowRight className={`h-5 w-5 ${styles.arrowIcon}`} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}