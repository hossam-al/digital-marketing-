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
          <div className="row justify-content-center">
            <div className="col-lg-10">
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