import styles from "./ServicesGrid.module.css";
import vid1 from "@/assets/VID1.mp4";
import vid2 from "@/assets/0516(4).mp4";
import vid3 from "@/assets/VID2.mp4";
import { Flame, ChartLine, BarChart3, Rocket } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className={styles.howWeWork}>
      <div className={styles.container}>
        <div className={styles.contentHowWeWork}>
          <div className={styles.titleSection}>
            <Flame size={18} />
            <span>How We Work</span>
          </div>

          <h2>
            Marketing That
            <br />
            Drives Revenue
          </h2>

          <p>
            We turn marketing into measurable growth through data-driven strategies and optimized
            funnels.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {/* Card 1 */}
          <div className={styles.featureCard}>
            <div className={styles.cardTop}>
              <div className={styles.iconBox}>
                <ChartLine size={22} />
              </div>

              <h3>
                Sales-First
                <br />
                Approach
              </h3>

              <div className={styles.line}></div>

              <p>
                We prioritize real revenue and profitability over vanity metrics like impressions or
                likes.
              </p>
            </div>

            <div className={styles.videoWrapper}>
              <video src={vid1} autoPlay muted loop playsInline className={styles.cardVideo} />
              <div className={styles.videoOverlay}></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.featureCard}>
            <div className={styles.cardTop}>
              <div className={styles.iconBox}>
                <BarChart3 size={22} />
              </div>

              <h3>
                Data-Driven
                <br />
                Decisions
              </h3>

              <div className={styles.line}></div>

              <p>All strategies rely on performance data and conversions.</p>
            </div>

            <div className={styles.videoWrapper}>
              <video src={vid2} autoPlay muted loop playsInline className={`${styles.cardVideo} ${styles.globeVideo}`} />
              <div className={styles.videoOverlay}></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.featureCard}>
            <div className={styles.cardTop}>
              <div className={styles.iconBox}>
                <Rocket size={22} />
              </div>

              <h3>
                Fast Execution
                <br />& Optimization
              </h3>

              <div className={styles.line}></div>

              <p>Campaigns launch fast and are continuously optimized.</p>
            </div>

            <div className={styles.videoWrapper}>
              <video src={vid3} autoPlay muted loop playsInline className={styles.cardVideo} />
              <div className={styles.videoOverlay}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
