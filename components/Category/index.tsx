import { useEffect, useState } from "react";
import BlockWrapper from "../../components/BlockWrapper";
import ProductCategoryItem from "../../components/ProductCategoryItem";

import styles from "./Category.module.scss";

export default function Category() {
  const [data, setData] = useState<ICategory[]>();
  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data.category));
  }, []);
  const categoryItems = data?.map((item) => {
    if (item.enable) {
      return (
        <ProductCategoryItem
          title={item.name}
          path={item.path}
          imgSrc={item.imgSrc}
          key={item.id}
        />
      );
    }
  });

  return (
    <section className={styles["category-wrapper"]}>
      <BlockWrapper title="Наша продукция">
        <div className={styles["flex-wrapp"]}>{categoryItems}</div>
      </BlockWrapper>
    </section>
  );
}
