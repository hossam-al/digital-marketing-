import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/sections/Reveal/Reveal";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import styles from "./Contact.module.css";
import ContactImg from "../../assets/Contact-us.png";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const { t } = useTranslation();

  React.useEffect(() => {
    document.title = t("contactPage.meta.title");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t("contactPage.meta.description"));
    }
  }, [t]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className={`position-relative overflow-hidden ${styles.heroSection}`}>
        <div className="container">
          <div className="row justify-content-center p-5">
            <div className="col-lg-6">
              <Reveal>
                <p className={`mb-3 text-uppercase ${styles.eyebrow}`}>
                  {t("contactPage.hero.badge")}
                </p>
                <h1 className={`display-1 fw-normal ${styles.fontDisplay}`}>
                  {t("contactPage.hero.title")}
                  <br />
                  {t("contactPage.hero.titleSecondLine")}
                </h1>
                <p className="mt-4 text-muted fs-5 max-w-500">
                  {t("contactPage.hero.description")}
                </p>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <img src={ContactImg} alt={t("contactPage.hero.imageAlt")} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <ContactSection sent={sent} onSubmit={onSubmit} />
    </>
  );
}

export default ContactPage;
