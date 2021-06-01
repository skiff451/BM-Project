import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./ProductCategory.module.scss";

interface ProductCategoryProps {
  title: string;
  path: string;
  imgSrc: string;
}

export default function ProductCategory({
  title,
  path,
  imgSrc,
}: ProductCategoryProps) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Link href={path}>
      <a className={styles.item} href={path}>
        <div className={styles.card}>
         
            <Image
              src={imgSrc}
              alt="laser-cutting-machine"
              width={800}
              height={500}
            />
          

          <div className={styles["title-wrapper"]}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.more}>Подробнее...</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
