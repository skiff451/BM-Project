import PromoCarousel from "./PromoCarousel";

import styles from "./Promo.module.scss";

export default function Promo() {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <PromoCarousel />
      </div>
    </div>
  );
}
