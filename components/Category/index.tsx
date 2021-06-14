import BlockWrapper from "../../components/BlockWrapper";
import ProductCategoryItem from "../../components/ProductCategoryItem";

import styles from "./Category.module.scss";

interface ICategoryProps {
  categoriesData: ICategory[];
}

export default function Category({ categoriesData }: ICategoryProps) {
  const categoryItems = categoriesData?.map((item) => {
    return (
      <ProductCategoryItem
        title={item.name}
        path={item.path}
        imgSrc={item.imgSrc}
        key={item.id}
      />
    );
  });

  return (
    <section className={styles["category-wrapper"]}>
      <BlockWrapper title="Наша продукция">
        <div className={styles["flex-wrapp"]}>{categoryItems}</div>
      </BlockWrapper>
    </section>
  );
}
