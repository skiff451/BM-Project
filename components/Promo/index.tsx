import PromoCarousel from "../PromoCarousel";

import styles from "./Promo.module.scss";

export default function Promo() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <PromoCarousel />
      </div>
    </div>
  );
}
