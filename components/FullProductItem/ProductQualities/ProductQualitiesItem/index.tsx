import styles from "./ProductQualitiesItem.module.scss";

interface ProductQualitiesItemProps {
  number: number;
  quality: string;
}

function ProductQualitiesItem({ number, quality }: ProductQualitiesItemProps) {
  const num = `0${number+1}`;
  return (
    <div className={styles.wrapper}>
      <span className={styles.number}>{num}</span>
      <span className={styles.quality}>{quality}</span>
    </div>
  );
}

export default ProductQualitiesItem;
