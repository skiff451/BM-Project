import React, { useState } from "react";
import CallButton from "../../../components/CallButton";
import CatalogButton from "../../../components/CatalogButton";
import ConsultForm from "../../../components/ConsultForm";
import CustomHead from "../../../components/CustomHead";
import DynamicNavigation from "../../../components/DynamicNavigation";
import MainLayout from "../../../components/MainLayout";

import ProductSlider from "../../../components/FullProductItem/ProductSlider";
import ProductDescription from "../../../components/FullProductItem/ProductDescription";

import data from "../../api/laser-cutting-machine/products.json";

import styles from "./FullProductData.module.scss";
import ContactFormModal from "../../../components/ContactFormModal";
import ProductDesignFeatures from "../../../components/FullProductItem/ProductDesignFeatures";

interface IProductProps {
  dynamicRouts: string[];
  data: IFullProductData;
}

function Product({ dynamicRouts, data }: IProductProps) {
  const { id, name, imgsSrcArr, altText, fullProductData } = data;

  const {
    fullName,
    productDescription,
    designFeatures,
    qualities,
    laserMachineSpecifications,
  } = fullProductData;

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <CustomHead />
      <MainLayout>
        <DynamicNavigation routs={dynamicRouts} />
        <div className={styles.container}>
          <div className={styles["product-description-wrapper"]}>
            <ProductSlider imgSrcArr={imgsSrcArr} />
            <ProductDescription
              title={fullName}
              description={productDescription}
              openModal={setOpenModal}
            />
            <ContactFormModal open={openModal} setOpen={setOpenModal} />
          </div>
        </div>
        <ProductDesignFeatures featuresData={designFeatures} />
        <ConsultForm imgSrc="/assets/consult-form-imgs/consult_2.png" />
        <CallButton tel="+380667528540" />
      </MainLayout>
    </>
  );
}

export default Product;

export function getStaticPaths() {
  const paths = data.items.map(({ id }) => ({
    params: {
      categoryName: data.categoryName,
      id: id.toString(),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const productData = data.items.filter(
    (product) => product.id === context.params.id
  )[0];

  return {
    props: {
      data: { ...productData },
      dynamicRouts: [data.rootName, data.name, productData.name],
    },
  };
}
