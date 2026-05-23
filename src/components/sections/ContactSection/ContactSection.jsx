import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/sections/Reveal/Reveal";
import styles from "./ContactSection.module.css";

const contactInfo = {
  email: "info@theegostudio.com",
  phone: "+20 10 2010 7479",
  address: "Cairo, Egypt",
};

export function ContactSection({ sent, onSubmit }) {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className="row g-5">

          {/* Form */}
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

                <button
                  type="submit"
                  className={`btn rounded-pill d-inline-flex align-items-center gap-2 text-white border-0 ${styles.btnGold}`}
                >
                  {sent ? (
                    "Thanks — we'll be in touch"
                  ) : (
                    <>
                      Send message <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            </Reveal>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-6">
            <Reveal delay={0.1}>
              <div className="d-flex flex-column gap-5">

                <div>
                  <p className={`text-uppercase mb-3 ${styles.label}`}>
                    Direct
                  </p>

                  <ul className="list-unstyled d-flex flex-column gap-3">

                    <li className="d-flex align-items-center gap-3 text-light">
                      <Mail size={16} className={styles.iconColor} />
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className={`text-decoration-none ${styles.infoLink}`}
                      >
                        {contactInfo.email}
                      </a>
                    </li>

                    <li className="d-flex align-items-center gap-3 text-light">
                      <Phone size={16} className={styles.iconColor} />
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className={`text-decoration-none ${styles.infoLink}`}
                      >
                        {contactInfo.phone}
                      </a>
                    </li>

                    <li className="d-flex align-items-start gap-3 text-light">
                      <MapPin size={16} className={`mt-1 ${styles.iconColor}`} />
                      <span className="opacity-90">
                        {contactInfo.address}
                      </span>
                    </li>

                  </ul>
                </div>

                {/* Map */}
                <div className={`overflow-hidden rounded-4 border ${styles.mapWrapper}`}>
                  <iframe
                    title="Studio location"
                    src="https://maps.google.com/maps?q=Cairo%2C%20Egypt&t=&z=11&ie=UTF8&iwloc=&output=embed"
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

/* Form Field */
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