import Category from "../components/Category";
import ConsultForm from "../components/ConsultForm";
import MainLayout from "../components/MainLayout";

import data from "../pages/api/data.json";

interface IProductsProps {
  categories: ICategory[];
}

function Products({ categories }: IProductsProps) {
  return (
    <MainLayout>
      <Category categoriesData={categories} />
      <ConsultForm imgSrc="/assets/consult-form-imgs/consult_1.png" />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const categories = data.category.map((item) => {
    if (item.enable) {
      return {
        id: item.id,
        name: item.name,
        imgSrc: item.imgSrc,
        path: item.path,
        description: item.description,
      };
    }
  });

  return {
    props: { categories },
  };
}

export default Products;
