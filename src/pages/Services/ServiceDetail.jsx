import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { CTABanner } from "@/components/sections/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./ServiceDetail.module.css";

function ServiceDetail() {
  const { slug } = useParams();
  
  // جلب بيانات الخدمة بناءً على الـ slug من الرابط
  const service = SERVICES.find((s) => s.slug === slug);

  // تحديث الـ Meta Tags عند تحميل الخدمة بنجاح
  React.useEffect(() => {
    if (service) {
      document.title = `${service.title} — Lumen & Co.`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", service.long);
      }
    }
  }, [service]);

  // في حال كانت الخدمة غير موجودة (404)
  if (!service) {
    return (
      <div className="d-flex min-vh-screen align-items-center justify-content-center px-3 bg-dark text-white">
        <div className="text-center">
          <h1 className={`display-4 mb-4 ${styles.fontDisplay}`}>Service not found</h1>
          <Link to="/services" className="text-decoration-none text-warning">
            &larr; All services
          </Link>
        </div>
      </div>
    );
  }

  const deliverables = [
    "Discovery workshops & audits",
    "Strategy + measurement framework",
    "Creative concepts & production",
    "Launch, optimisation & reporting",
    "Quarterly business review",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={`position-relative overflow-hidden ${styles.heroSection}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <Reveal>
                <Link
                  to="/services"
                  className={`mb-4 d-inline-flex align-items-center gap-2 text-decoration-none text-uppercase ${styles.backLink}`}
                >
                  <ArrowLeft className="h-3 w-3" /> All services
                </Link>
                <h1 className={`display-1 fw-normal ${styles.fontDisplay}`}>
                  {service.title}
                </h1>
                <p className="mt-4 text-muted fs-5 max-w-600">{service.long}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Left side: Deliverables */}
            <div className="col-md-6">
              <Reveal>
                <h2 className={`display-5 mb-4 fw-normal ${styles.fontDisplay}`}>What's included</h2>
                <ul className="list-unstyled mt-4 d-flex flex-column gap-3">
                  {deliverables.map((d) => (
                    <li key={d} className="d-flex align-items-start gap-3 text-white-50">
                      <span className={`d-grid place-items-center rounded-circle flex-shrink-0 ${styles.checkCircle}`}>
                        <Check size={12} className="text-black fw-bold" />
                      </span>
                      <span className="fs-6 text-light">{d}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right side: Engagement Card */}
            <div className="col-md-6 col-lg-5 offset-lg-1">
              <Reveal delay={0.15}>
                <div className={`p-4 p-md-5 ${styles.engagementCard}`}>
                  <p className={`text-uppercase ${styles.cardEyebrow}`}>Engagement</p>
                  <p className={`h2 my-3 fw-normal ${styles.fontDisplay}`}>From 6 weeks</p>
                  <p className="text-muted small lh-base">
                    Engagements typically run on a quarterly cadence with retainer or project-based
                    pricing. We'll scope the right model on our first call.
                  </p>
                  <Link
                    to="/contact"
                    className={`btn w-full rounded-pill d-inline-flex align-items-center justify-content-center text-decoration-none ${styles.btnGold}`}
                  >
                    Book a consultation
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

export default ServiceDetail;