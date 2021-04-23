import Head from "next/head";
import Image from "next/image";

import MainLayout from "../components/MainLayout";
import Promo from "../components/Promo";
import BlockWrapper from "../components/BlockWrapper";
import ProductCategoryItem from "../components/ProductCategoryItem";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const CategoryImgPath = "/assets/product-category-img/";

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <MainLayout>
          <Promo />
          <div className={styles["category-wrapper"]}>
            <BlockWrapper title="Наша продукция">
              <div className={styles["flex-wrapp"]}>
                <ProductCategoryItem
                  title="Станки лазерной резки"
                  path="laser-cutting-machine"
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
          </div>
        </MainLayout>
      </div>
    </>
  );
}
