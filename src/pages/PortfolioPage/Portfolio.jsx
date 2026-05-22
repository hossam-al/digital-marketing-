import React from "react";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase/PortfolioShowcase";
import { CTABanner } from "@/components/sections/CTABanner/CTABanner";
import { Reveal } from "@/components/sections/Reveal/Reveal";
import CaseStudies from "@/components/sections/CaseStudies/CaseStudies";
import { StatsCounter } from "@/components/sections/StatsCounter/StatsCounter";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import styles from "./Portfolio.module.css";

function PortfolioPage() {
  React.useEffect(() => {
    document.title = "Portfolio — Lumen & Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Selected case studies and brand work from the Lumen & Co. studio."
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
                <p className={`mb-3 text-uppercase ${styles.eyebrow}`}>Selected work</p>
                <h1 className={`display-1 fw-normal ${styles.fontDisplay}`}>
                  Case studies
                  <br />& craft.
                </h1>
                <p className="mt-4 text-muted fs-5" style={{ maxWidth: 560 }}>
                  Real businesses, real results. Every project here started with a clear brief
                  and ended with measurable growth.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioShowcase />

      {/* Numbers that back the work */}
      <StatsCounter />

      {/* Detailed Case Studies */}
      <CaseStudies />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Call To Action */}
      <CTABanner />
    </>
  );
}

export default PortfolioPage;