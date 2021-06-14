import styles from "./ProductQualities.module.scss";
import ProductQualitiesItem from "./ProductQualitiesItem";
interface ProductQualitiesProps {
  qualitiesData: string[];
}

function ProductQualities({ qualitiesData }: ProductQualitiesProps) {
  const qualities = qualitiesData.map((item, index) => {
    return <ProductQualitiesItem key={index} number={index} quality={item} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{qualities}</div>
    </div>
  );
}

export default ProductQualities;
