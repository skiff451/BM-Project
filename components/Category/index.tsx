import Image from "next/image";
import BlockWrapper from "../../components/BlockWrapper";
import ProductCategoryItem from "../../components/ProductCategoryItem";

import styles from "./Category.module.scss";

export default function Category() {
  const CategoryImgPath = "/assets/product-category-img/";
  // ``
  return (
    <section className={styles["category-wrapper"]}>
      <BlockWrapper title="Наша продукция">
        <div className={styles["flex-wrapp"]}>
          <ProductCategoryItem
            title="Станки лазерной резки"
            path="category/1"
            imgSrc={`${CategoryImgPath}laser-cutting-machine.png`}
          />

          <ProductCategoryItem
            title="Станки мультигазовой резки"
            path="multigas-cutting-machines"
            imgSrc={`${CategoryImgPath}multigas-cutting-machine.png`}
          />

          <ProductCategoryItem
            title="Станки плазменной резки"
            path="plasma-cutting-machines"
            imgSrc={`${CategoryImgPath}plasma-cutting-machine.png`}
          />

          <ProductCategoryItem
            title="Преса гибочные"
            path="bending-presses"
            imgSrc={`${CategoryImgPath}bending-presses.png`}
          />

          <ProductCategoryItem
            title="Станки фрезерные"
            path="milling-machines"
            imgSrc={`${CategoryImgPath}milling-machines.png`}
          />
        </div>
      </BlockWrapper>
    </section>
  );
}
