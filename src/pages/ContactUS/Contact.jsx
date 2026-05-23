import React, { useState } from "react";
import { Reveal } from "@/components/sections/Reveal/Reveal";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import styles from "./Contact.module.css";
import { Building2 } from "lucide-react";
import ContactImg from "../../assets/Contact-us.png";

function ContactPage() {
  const [sent, setSent] = useState(false);

  React.useEffect(() => {
    document.title = "Contact — Lumen & Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Tell us about your project. We typically reply within one business day."
      );
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // ربط مستقبلي مع قاعدة البيانات الخلفية أو Laravel
    setSent(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className={`position-relative overflow-hidden ${styles.heroSection}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <Reveal>
                <p className={`mb-3 text-uppercase ${styles.eyebrow}`}>Get in touch</p>
                <h1 className={`display-1 fw-normal ${styles.fontDisplay}`}>
                  Let's talk
                  <br />
                  about your brand.
                </h1>
                <p className="mt-4 text-muted fs-5 max-w-500">
                  Tell us a little about what you're working on. We typically reply within one business
                  day.
                </p>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <img src={ContactImg} alt="Contact" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* قسم الفورم والمعلومات */}
      <ContactSection sent={sent} onSubmit={onSubmit} />
    </>
  );
}

export default ContactPage;