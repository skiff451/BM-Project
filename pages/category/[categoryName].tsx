import BlockWrapper from "../../components/BlockWrapper";
import CallButton from "../../components/CallButton";
import CatalogButton from "../../components/CatalogButton";
import ConsultForm from "../../components/ConsultForm";
import DynamicNavigation from "../../components/DynamicNavigation";
import MainLayout from "../../components/MainLayout";
import ProductsInCategory from "../../components/ProductsInCategory";
import data from "../api/data.json";
import styles from "./Category.module.scss";

interface ICategoryProps {
  products: IProduct[];
  dynamicRouts: string[];
  title: string;
}

export default function Category({
  products,
  title,
  dynamicRouts,
}: ICategoryProps) {
  return (
    <MainLayout>
      <DynamicNavigation routs={dynamicRouts} />
      <BlockWrapper title={title}>
        <ProductsInCategory data={products} />
        <div className={styles["button-wrapper"]}>
          <CatalogButton link="/" buttonName="Смотреть полный каталог" />
        </div>
      </BlockWrapper>
      <div className={styles["consult-wrapper"]}>
        <ConsultForm imgSrc="/assets/consult-form-imgs/consult_2.png" />
      </div>
    </MainLayout>
  );
}

export function getStaticPaths() {
  const paths = data.category.map(({ categoryName }) => ({
    params: {
      categoryName,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const category = data.category.filter(
    (item) => item.categoryName === context.params.categoryName
  )[0];

  return {
    props: {
      products: category.products,
      title: category.name,
      dynamicRouts: [data.name, category.name],
    },
  };
}
