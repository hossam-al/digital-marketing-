import styles from "./TrustedClients.module.css";

const CLIENTS = [
  "NORTHSTAR",
  "ARGAN",
  "HELIOS",
  "BELVET",
  "FOUNDRY",
  "SERNUM",
  "ATELIER",
  "MARÉE",
  "OBSIDIAN",
  "VOXEL",
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