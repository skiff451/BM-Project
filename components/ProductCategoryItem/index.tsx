import Link from "next/link";
import styles from "./ProductCategory.module.scss";

interface ProductCategoryProps {
  title: string;
  path: string;
  small?: boolean;
  children: JSX.Element;
}

export default function ProductCategory({
  title,
  path,
  small,
  children,
}: ProductCategoryProps) {
  return (
    <Link href={path}>
      <a >
        <div className={small ? styles["small-card"] : styles["large-card"]}>
          {children}
          <div className={styles["title-wrapper"]}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.more}>Подробнее...</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
