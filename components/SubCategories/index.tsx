import { useRouter } from "next/router";
import React from "react";
import BlockWrapper from "../BlockWrapper";
import ProductCategoryItem from "../ProductCategoryItem";

import styles from "./SubCategories.module.scss";

export default function SubCategories() {
  const router = useRouter();
  const { categoryName } = router.query;
  const CategoryImgPath = `/assets/product-subcategory/${categoryName}/`;

  console.log("ID", categoryName);
  console.log("router", router);

  return (
    <BlockWrapper title="Станки лазерной резки">
      <div className={styles["flex-wrap"]}>
        <div className={styles["subcategory-item"]}>
          <ProductCategoryItem
            title="Станки оснащенные волоконным лазером"
            path="category/1"
            imgSrc={`${CategoryImgPath}sub_1.png`}
          />
        </div>
        <div className={styles["subcategory-item"]}>
          <ProductCategoryItem
            title="Станки лазерной резки"
            path="category/1"
            imgSrc={`${CategoryImgPath}sub_1.png`}
          />
        </div>
        <div className={styles["subcategory-item"]}>
          <ProductCategoryItem
            title="Станки лазерной резки"
            path="category/1"
            imgSrc={`${CategoryImgPath}sub_1.png`}
          />
        </div>
        <div className={styles["subcategory-item"]}>
          <ProductCategoryItem
            title="Станки лазерной резки"
            path="category/1"
            imgSrc={`${CategoryImgPath}sub_1.png`}
          />
        </div>
        <div className={styles["subcategory-item"]}>
          <ProductCategoryItem
            title="Станки лазерной резки"
            path="category/1"
            imgSrc={`${CategoryImgPath}sub_1.png`}
          />
        </div>
      </div>
    </BlockWrapper>
  );
}
