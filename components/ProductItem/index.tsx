import Image from "next/image";
import styles from "./ProductItem.module.scss";
interface ProductItemProps {
  imgName: string;
  altText: string;
  name: string;
  link?: string;
}

export default function ProductItem({
  imgName,
  altText,
  name: productName,
}: ProductItemProps) {
  return (
    <div className={styles.item}>
      <Image
        src={`/assets/products-imgs/${imgName}`}
        alt={altText}
        width={298}
        height={214}
        layout="responsive"
      />
      <div className={styles.wrapper}>
        <p className={styles["product-name"]}>{productName}</p>
        <span className={styles.details}>Подробнее...</span>
      </div>
    </div>
  );
}
