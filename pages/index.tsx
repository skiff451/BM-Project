import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Promo from "../components/Promo";
import Category from "../components/Category";
import WhyUs from "../components/WhyUs";
import ConsultForm from "../components/ConsultForm";
import PopularProducts from "../components/PopularProducts";
import CallButton from "../components/CallButton";

import data from "../pages/api/data.json";
import CustomHead from "../components/CustomHead";

interface IHomeProps {
  categories: ICategory[];
}

export default function Home({ categories }: IHomeProps) {
  return (
    <>
      <CustomHead />
      <MainLayout>
        <Promo />
        <WhyUs />
        <Category categoriesData={categories} />
        <ConsultForm imgSrc="/assets/consult-form-imgs/consult_1.png" />
        {/* <PopularProducts /> */}
        <CallButton tel="+380667528540" />
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
