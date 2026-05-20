import styles from "./OurClients.module.css";

import { Building2 } from "lucide-react";

import logo1 from "@/assets/loooo1.webp";
import logo2 from "@/assets/loooo2.webp";
import logo3 from "@/assets/loooo3.webp";
import logo4 from "@/assets/loooo4.webp";
import logo5 from "@/assets/loooo5.webp";

const logoSources = [logo1, logo2, logo3, logo4, logo5];

const LOGO_COUNT = 20;

const LOGOS = Array.from({ length: LOGO_COUNT }, (_, i) => ({
  src: logoSources[i % logoSources.length],
  alt: `Client Logo ${i + 1}`,
}));

function MarqueeRow({ reverse = false }) {
  return (
    <div className={styles.marqueeContainer}>
      <div
        className={`${styles.marquee}
        ${reverse ? styles.reverse : ""}`}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.marqueeContent}>
            {LOGOS.map((logo, i) => (
              <div key={i} className={styles.logoWrap}>
                <img src={logo.src} alt={logo.alt} className={styles.logo} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OurClients() {
  return (
    <section id="our-clients" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Building2 size={16} />
            <span>Our Clients</span>
          </div>

          <h2 className={styles.heading}>
            Brands That{" "}
            <span className={styles.highlight}>Believein Our Work</span>
          </h2>

          <p className={styles.subheading}>
            At Aero Marketing, every client is a partner in success, driven by
            trust and real results.
          </p>
        </div>

        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
