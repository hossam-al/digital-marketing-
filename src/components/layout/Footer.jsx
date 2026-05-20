import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-5">
            <p className={styles.headline}>
              Let's build something <span>unforgettable</span>.
            </p>
            <a href="/contact" className={`${styles.btnStart} mt-3`}>
              Start a project →
            </a>
          </div>

          <div className="col-12 col-md-7">
            <div className="row g-4">
              <div className="col-4">
                <p className={styles.colLabel}>Studio</p>
                <ul className={styles.links}>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/blog">Blog</a></li>
                </ul>
              </div>
              <div className="col-4">
                <p className={styles.colLabel}>Contact</p>
                <ul className={styles.links}>
                  <li><a href="mailto:hello@studio.agency">hello@studio.agency</a></li>
                  <li><a href="tel:+14155550142">+1 (415) 555-0142</a></li>
                  <li className={styles.muted}>Studio 4, 21 Foundry Lane, SF</li>
                </ul>
              </div>
              <div className="col-4">
                <p className={styles.colLabel}>Follow</p>
                <ul className={styles.links}>
                  <li><a href="#" className={styles.socialLink}>📷 Instagram</a></li>
                  <li><a href="#" className={styles.socialLink}>💼 LinkedIn</a></li>
                  <li><a href="#" className={styles.socialLink}>🐦 Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.bottom} row`}>
          <div className="col d-flex justify-content-between flex-wrap gap-2">
            <span className={styles.bottomText}>© 2026 THE STUDIO. All rights reserved.</span>
            <span className={styles.bottomText}>Crafted with care · San Francisco</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;