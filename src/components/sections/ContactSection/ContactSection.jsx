import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/sections/Reveal/Reveal";
import { SITE } from "@/lib/site";
import styles from "./ContactSection.module.css";

export function ContactSection({ sent, onSubmit }) {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className="row g-5">
          {/* نموذج الإدخال (Form) */}
          <div className="col-12 col-md-6">
            <Reveal>
              <form onSubmit={onSubmit} className="d-flex flex-column gap-4">
                <Field label="Name" id="name" />
                <Field label="Email" id="email" type="email" />
                <Field label="Company" id="company" />
                
                <div>
                  <label htmlFor="msg" className={`form-label text-uppercase ${styles.label}`}>
                    Project details
                  </label>
                  <textarea
                    id="msg"
                    required
                    rows={6}
                    className={`form-control ${styles.inputControl}`}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className={`btn rounded-pill d-inline-flex align-items-center gap-3 text-white border-0 ${styles.btnGold}`}
                  >
                    {sent ? (
                      "Thanks — we'll be in touch"
                    ) : (
                      <>
                        Send message <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>

          {/* بيانات الاتصال المباشرة والخريطة */}
          <div className="col-12 col-md-6">
            <Reveal delay={0.1}>
              <div className="d-flex flex-column gap-5">
                <div>
                  <p className={`text-uppercase mb-3 ${styles.label}`}>Direct</p>
                  <ul className="list-unstyled d-flex flex-column gap-3">
                    <li className="d-flex align-items-center gap-3 text-light">
                      <Mail size={16} className={styles.iconColor} />
                      <a href={`mailto:${SITE.email}`} className={`text-decoration-none ${styles.infoLink}`}>
                        {SITE.email}
                      </a>
                    </li>
                    <li className="d-flex align-items-center gap-3 text-light">
                      <Phone size={16} className={styles.iconColor} />
                      <a href={`tel:${SITE.phone}`} className={`text-decoration-none ${styles.infoLink}`}>
                        {SITE.phone}
                      </a>
                    </li>
                    <li className="d-flex align-items-start gap-3 text-light">
                      <MapPin size={16} className={`mt-1 ${styles.iconColor}`} />
                      <span className="opacity-90">{SITE.address}</span>
                    </li>
                  </ul>
                </div>

                {/* خريطة جوجل إطار خارجي */}
                <div className={`overflow-hidden rounded-4 border ${styles.mapWrapper}`}>
                  <iframe
                    title="Studio location"
                    src="https://maps.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="320"
                    loading="lazy"
                    className={styles.mapIframe}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text" }) {
  return (
    <div>
      <label htmlFor={id} className={`form-label text-uppercase ${styles.label}`}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className={`form-control ${styles.inputControl}`}
      />
    </div>
  );
}