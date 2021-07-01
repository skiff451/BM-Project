import MainLayout from "../components/MainLayout";
import Promo from "../components/Promo";
import Category from "../components/Category";
import WhyUs from "../components/WhyUs";
import ConsultForm from "../components/ConsultForm";
import PopularProducts from "../components/PopularProducts";

import data from "../pages/api/data.json";

interface IHomeProps {
  categories: ICategory[];
}

export default function Home({ categories }: IHomeProps) {
  return (
    <>
      <MainLayout>
        <Promo />
        <WhyUs />
        <Category categoriesData={categories} />
        <ConsultForm imgSrc="/assets/consult-form-imgs/consult_1.png" />
        {/* <PopularProducts /> */}
      </MainLayout>
    </>
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
