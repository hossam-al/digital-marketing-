import React from 'react';
import { Reveal } from "../../components/sections/Reveal/Reveal";
import { StatsCounter } from "../../components/sections/StatsCounter/StatsCounter";
import { ProcessSection } from "../../components/sections/ProcessSection/ProcessSection";
import { CTABanner } from "../../components/sections/CTABanner/CTABanner";
import styles from "./About.module.css";
import { AboutUs } from '../../components/sections/AboutUS/AboutUS';
import ServicesGrid from '../../components/sections/ServicesGrid/ServicesGrid';
 
function AboutPage() {
  // يمكنك استخدام useEffect لتغيير عنوان الصفحة (Meta title) بدلاً من دالة head القديمة
  React.useEffect(() => {
    document.title = "About — Lumen & Co.";
    
    // لتحديث الـ description meta tag
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "We're a senior team of strategists, designers, and growth marketers building brands that move.");
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      {/* <section className={`position-relative overflow-hidden ${styles.heroSection}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <Reveal>
                <p className={`mb-3 text-uppercase ${styles.eyebrow}`}>About the studio</p>
                <h1 className={`display-1 fw-normal ${styles.fontDisplay}`}>
                  We make brands
                  <br />
                  impossible to ignore.
                </h1>
                <p className="mt-4 text-muted fs-5 max-w-600">
                  Founded in 2012, Lumen & Co. is a senior team of strategists, designers and growth
                  marketers who help ambitious companies grow into iconic ones — across every screen,
                  surface and channel.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section> */}

      {/* Story Section */}
      {/* <section className={styles.storySection}>
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-md-5">
              <Reveal>
                <h2 className={`display-5 fw-normal ${styles.fontDisplay}`}>Our story</h2>
              </Reveal>
            </div>
            <div className="col-md-7">
              <Reveal delay={0.1}>
                <div className="text-muted fs-5 lh-base d-flex flex-column gap-3">
                  <p>
                    What started as a two-person creative studio above a coffee shop in the Mission has
                    grown into a 40-strong team of operators across San Francisco, London and Lagos.
                  </p>
                  <p>
                    We've helped 240+ brands launch, relaunch and scale — from venture-backed startups
                    to publicly traded companies — but we've kept the things that made the studio worth
                    founding in the first place: senior craft, no layers, and a refusal to be precious
                    about the work.
                  </p>
                  <p>
                    We believe great marketing is the byproduct of great products and great taste. Our
                    job is to surface both.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section> */}
      <AboutUs />
      <ServicesGrid />
      <StatsCounter />
      <ProcessSection />
      <CTABanner />
    </>
  );
}

export default AboutPage;