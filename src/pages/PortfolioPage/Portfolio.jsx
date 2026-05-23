import React from "react";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase/PortfolioShowcase";
import { CTABanner } from "@/components/sections/CTABanner/CTABanner";
import { Reveal } from "@/components/sections/Reveal/Reveal";
import CaseStudies from "@/components/sections/CaseStudies/CaseStudies";
import { StatsCounter } from "@/components/sections/StatsCounter/StatsCounter";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import imgportfolio from "../../assets/Protofilo.png";
import styles from "./Portfolio.module.css";

function PortfolioPage() {
  React.useEffect(() => {
    // 1. تحديث عنوان المتصفح ليعكس اسم وكالتكم الحقيقي
    document.title = "Portfolio — THE EGO STUDIO"; 
    
    // 2. تحديث وصف الـ Meta لرفع كفاءة الـ SEO بناءً على ملف الخدمات
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore how EGO STUDIO builds integrated growth systems, strategic corporate profiles, and performance-driven campaigns for premium businesses."
      );
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={`position-relative overflow-hidden ${styles.heroSection}`}>
        <div className="container">
          {/* تم إضافة d-flex و align-items-center لضمان محاذاة النص مع الصورة رأسياً بشكل مثالي */}
          <div className="row align-items-center g-5">
            
            {/* الجهة اليسرى: المحتوى النصي التسويقي الفخم */}
            <div className="col-12 col-lg-6">
              <Reveal>
                <p className={`mb-3 text-uppercase ${styles.eyebrow}`}>Selected work</p>
                <h1 className={`display-1 fw-normal ${styles.fontDisplay}`} style={{ lineHeight: 1.1 }}>
                  Case studies
                  <br />& growth.
                </h1>
                
                <p className="mt-4 text-muted fs-5" style={{ maxWidth: 520, lineHeight: 1.6 }}>
                  Real businesses, trackable outcomes. Every layer here turns raw commercial 
                  metrics into a practical system designed for structural expansion.
                </p>
              </Reveal>
            </div>

            {/* الجهة اليمنى: عرض الصورة الاحترافية مع تأثير الـ Glow والمحاذاة */}
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <Reveal>
                <div className={styles.imageWrapper} style={{ position: "relative" }}>
                  <img 
                    src={imgportfolio} 
                    alt="EGO STUDIO Portfolio Analytics" 
                    className="img-fluid"
                    style={{ 
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                  />
                  {/* تأثير هالة أزرق ناعم خلف الصورة لربطها بإضاءة الـ Footer والـ Hero */}
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(circle, rgba(43,110,194,0.15) 0%, transparent 80%)",
                      pointerEvents: "none",
                      zIndex: -1
                    }} 
                  />
                </div>
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