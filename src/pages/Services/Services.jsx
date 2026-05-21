import React from "react";
import  ServicesGrid  from "../../components/sections/ServicesGrid/ServicesGrid";  
import { ProcessSection } from "../../components/sections/ProcessSection/ProcessSection";
import { CTABanner } from "../../components/sections/CTABanner/CTABanner";
import { Reveal } from "@/components/sections/Reveal/Reveal";
  import ServicesDetail from "./ServiceDetail";
import styles from "./Services.module.css";

function ServicesPage() {
  // إدارة الـ Meta Tags متوافقة مع الأنظمة العادية
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
      <ServicesGrid />
      <ServicesDetail />
      <ProcessSection />
      <CTABanner />
    </>
  );
}

export default ServicesPage;