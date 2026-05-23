import { FiMail, FiGlobe } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logoFooter.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* LEFT SIDE */}
          <div className="col-lg-5">
            <div className="mb-4">
              <img
                src={logo}
                alt="THE EGO STUDIO"
                className={styles.logo}
              />
            </div>

            <p className={styles.headline}>
              We build digital experiences people remember —
              <span> and brands grow from.</span>
            </p>

            <a href="/contact" className={styles.btnStart}>
              Start Your Project →
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7">
            <div className="row g-4">
              {/* STUDIO */}
              <div className="col-md-4">
                <p className={styles.colLabel}>Studio</p>
                <ul className={styles.links}>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </div>

              {/* CONTACT */}
              <div className="col-md-4">
                <p className={styles.colLabel}>Contact</p>
                <ul className={styles.links}>
                  <li>
                    <a href="mailto:info@theegostudio.com">
                      <div className={styles.iconBox}>
                        <FiMail size={16} />
                      </div>
                      info@theegostudio.com
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=201010747926"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className={styles.iconBox}>
                        <FaWhatsapp size={16} />
                      </div>
                      WhatsApp Chat
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://theegostudio.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className={styles.iconBox}>
                        <FiGlobe size={16} />
                      </div>
                      theegostudio.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* SOCIAL */}
              <div className="col-md-4">
                <p className={styles.colLabel}>Follow</p>
                <ul className={styles.links}>
                  <li>
                    <a
                      href="https://instagram.com/the.egostudio"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialLink}
                    >
                      <div className={styles.iconBox}>
                        <FaInstagram size={16} />
                      </div>
                      Instagram
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://x.com/the_egostudio"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialLink}
                    >
                      <div className={styles.iconBox}>
                        <FaXTwitter size={16} />
                      </div>
                      X / Twitter
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://tiktok.com/@the.egostudio"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialLink}
                    >
                      <div className={styles.iconBox}>
                        <FaTiktok size={16} />
                      </div>
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={`${styles.bottom} row`}>
          <div className="col d-flex justify-content-between flex-wrap gap-3">
            <span className={styles.bottomText}>
              © 2026 THE EGO STUDIO. All rights reserved.
            </span>
            <span className={styles.bottomText}>
              Crafted with care · Strategic Growth Systems
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;