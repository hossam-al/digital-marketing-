import { FiMail, FiGlobe } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logoFooter.png";
import styles from "./Footer.module.css";

function Footer() {
  const { t } = useTranslation();

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
              {t("footer.description")} <br />
              <span>{t("footer.descriptionHighlight")}</span>
            </p>

            <a href="/contact" className={styles.btnStart}>
              {t("footer.startProject")} →
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7">
            <div className="row g-4">
              {/* STUDIO */}
              <div className="col-md-4">
                <p className={styles.colLabel}>{t("footer.quickLinks")}</p>
                <ul className={styles.links}>
                  <li>
                    <a href="/about">{t("footer.links.about")}</a>
                  </li>
                  <li>
                    <a href="/services">{t("footer.links.services")}</a>
                  </li>
                  <li>
                    <a href="/portfolio">{t("footer.links.portfolio")}</a>
                  </li>
                  <li>
                    <a href="/blog">{t("footer.links.blog")}</a>
                  </li>
                </ul>
              </div>

              {/* CONTACT */}
              <div className="col-md-4">
                <p className={styles.colLabel}>{t("footer.contact")}</p>
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
                      {t("footer.whatsappChat")}
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
                <p className={styles.colLabel}>{t("footer.follow")}</p>
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
              {t("footer.copyright")}
            </span>
            <span className={styles.bottomText}>
              {t("footer.crafted")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
