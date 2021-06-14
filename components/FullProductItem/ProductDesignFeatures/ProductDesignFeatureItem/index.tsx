import classNames from "classnames";
import { useState } from "react";
import styles from "./ProductDesignFeatureItem.module.scss";

interface ProductDesignFeatureItemProps {
  title: string;
  description: string;
}

function ProductDesignFeatureItem({
  title,
  description,
}: ProductDesignFeatureItemProps) {
  const [flip, setFlip] = useState(false);

  const innerClass = classNames(styles.inner, { [styles.flip]: flip });

  return (
    <div
      className={styles.card}
      onClick={() => {
        setFlip(!flip);
      }}
    >
      <div className={innerClass}>
        <div className={styles.front}>
          <span className={styles.dash} />
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.back}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDesignFeatureItem;
