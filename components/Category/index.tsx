import Image from "next/image";
import BlockWrapper from "../../components/BlockWrapper";
import ProductCategoryItem from "../../components/ProductCategoryItem";

import styles from "./Category.module.scss";

export default function Category() {
  const CategoryImgPath = "/assets/product-category-img/";
  
    return (
    <section className={styles["category-wrapper"]}>
      <BlockWrapper title="Наша продукция">
        <div className={styles["flex-wrapp"]}>
          <ProductCategoryItem
            title="Станки лазерной резки"
            path="category/1"
          >
            <Image
              src={`${CategoryImgPath}laser-cutting-machine.png`}
              alt="laser-cutting-machine"
              width={635}
              height={356}
            ></Image>
          </ProductCategoryItem>

          <ProductCategoryItem
            title="Станки мультигазовой резки"
            path="multigas-cutting-machines"
          >
            <Image
              src={`${CategoryImgPath}multigas-cutting-machine.png`}
              alt="laser-cutting-machine"
              width={625}
              height={346}
            ></Image>
          </ProductCategoryItem>

          <ProductCategoryItem
            title="Станки плазменной резки"
            path="plasma-cutting-machines"
            small
          >
            <Image
              src={`${CategoryImgPath}plasma-cutting-machine.png`}
              alt="laser-cutting-machine"
              width={407}
              height={346}
            ></Image>
          </ProductCategoryItem>

          <ProductCategoryItem
            title="Преса гибочные"
            path="bending-presses"
            small
          >
            <Image
              src={`${CategoryImgPath}bending-presses.png`}
              alt="laser-cutting-machine"
              width={407}
              height={346}
            ></Image>
          </ProductCategoryItem>

          <ProductCategoryItem
            title="Станки фрезерные"
            path="milling-machines"
            small
          >
            <Image
              src={`${CategoryImgPath}milling-machines.png`}
              alt="laser-cutting-machine"
              width={407}
              height={346}
            ></Image>
          </ProductCategoryItem>
        </div>
      </BlockWrapper>
    </section>
  );
}
