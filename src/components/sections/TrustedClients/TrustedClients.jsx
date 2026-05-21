import styles from "./TrustedClients.module.css";

const CLIENTS = [
  "NEBRAS 360",
  "NURTURE",
  "IPPO CHILD FOOT",
  "BELT & ROAD",
  "PANDA HOST",
  "AL SHAMAL",
  "GROWTH POINT",
  "ALHADF TRAVEL",
  "ORCA TRAVEL",
  "WAFDA",
  "WIQAM"
];

export function TrustedClients() {
  // تكرار المصفوفة لضمان استمرار الشريط المتحرك بدون تقطيع أو فراغات بصرياً
  const row = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className={styles.trustedSection}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {row.map((c, i) => (
            <span key={i} className={styles.clientName}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}