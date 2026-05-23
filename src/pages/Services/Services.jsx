import React from "react";
import { ProcessSection } from "../../components/sections/ProcessSection/ProcessSection";
import { CTABanner } from "../../components/sections/CTABanner/CTABanner";
import { Reveal } from "@/components/sections/Reveal/Reveal";
import ServicesDetail from "./ServiceDetail";
import WhyChooseUs from "../../components/sections/WhyChooseUs/WhyChooseUs";
import { StatsCounter } from "../../components/sections/StatsCounter/StatsCounter";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import FAQSection from "../../components/sections/FAQSection/FAQSection";
import styles from "./Services.module.css";
import TeamCraftImg from "../../assets/AboutUS2.png";

function ServicesPage() {
  React.useEffect(() => {
    document.title = "Services — Lumen & Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Strategy, social, paid media, branding, web and SEO. Six disciplines under one roof."
      );
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
     <section className={`position-relative overflow-hidden ${styles.heroSection}`}>
      <div className="container">
        <div className="row align-items-center gy-5"> 
          {/* تم إضافة align-items-center لضبط المحاذاة عمودياً، و gy-5 للمسافات في الشاشات الصغيرة */}
          
          {/* الجانب الأيمن: المحتوى النصي */}
          <div className="col-lg-6">
            <Reveal>
              <p className={`mb-3 text-uppercase ${styles.eyebrow}`}>What we do</p>
              <h1 className={`display-1 fw-normal ${styles.fontDisplay}`}>
                Full-service.
                <br />
                Senior craft.
              </h1>
              <p className="mt-4 text-muted fs-5 max-w-600">
                Six disciplines, one team. We bring strategy and execution under the same roof — so
                the work is connected, the speed is real, and the results are measurable.
              </p>
            </Reveal>
          </div>

          {/* الجانب الأيسر: الصورة الجديدة */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className={styles.cardimgs}>
              <img 
                src={TeamCraftImg} 
                alt="Senior craft team working together on strategy and execution" 
                className={styles.aboutImg} 
              />
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* All 14 Services */}
      <ServicesDetail />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Stats / Social Proof */}
      <StatsCounter />

      {/* How We Work */}
      <ProcessSection />

      {/* Client Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQSection />

      {/* Call To Action */}
      <CTABanner />
    </>
  );
}

export default ServicesPage;