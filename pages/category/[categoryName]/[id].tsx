import React, { useState } from "react";

import CustomHead from "../../../components/CustomHead";
import MainLayout from "../../../components/MainLayout";
import CallButton from "../../../components/CallButton";
import ConsultForm from "../../../components/ConsultForm";
import DynamicNavigation from "../../../components/DynamicNavigation";
import ContactFormModal from "../../../components/ContactFormModal";
import ProductDesignFeatures from "../../../components/FullProductItem/ProductDesignFeatures";
import ProductQualities from "../../../components/FullProductItem/ProductQualities";
import ProductSlider from "../../../components/FullProductItem/ProductSlider";
import ProductDescription from "../../../components/FullProductItem/ProductDescription";
import ProductSpecifications from "../../../components/ProductSpecifications";

import data from "../../api/laser-cutting-machine/products.json";

import styles from "./FullProductData.module.scss";
import CuttingModesTable from "../../../components/CuttingModesTable";

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
    MachineSpecifications,
    CuttingModes,
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
        <ProductQualities qualitiesData={qualities} />
        <ProductSpecifications specificationsData={MachineSpecifications} />
        <CuttingModesTable
          cuttingModesData={CuttingModes.modesData}
          title={CuttingModes.title}
          description={CuttingModes.description}
        />
        <ConsultForm imgSrc="/assets/consult-form-imgs/consult_1.png" />
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
