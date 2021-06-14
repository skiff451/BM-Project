import Image from "next/image";
import React from "react";
import BlockWrapper from "../../BlockWrapper";
import ProductDesignFeatureItem from "./ProductDesignFeatureItem";

import styles from "./ProductDesignFeatures.module.scss";

interface IProductDesignFeatureProps {
  featuresData: IDesignFeature[];
}

function ProductDesignFeatures({ featuresData }: IProductDesignFeatureProps) {
  const designFeatures = featuresData.map((item) => {
    return (
      <div className={styles.item} key={item.id}>
        <ProductDesignFeatureItem
          title={item.featureName}
          description={item.featureDescription}
        />
      </div>
    );
  });

  return (
    <div className={styles["wrapper"]}>
      <div className={styles.container}>
        <div className={styles["features-wrapper"]}>
          <h2 className={styles["feature-title"]}>Характерные особенности</h2>
          <div className={styles.features}>{designFeatures}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDesignFeatures;
