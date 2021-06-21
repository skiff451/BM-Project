import { useState } from "react";
import BlockWrapper from "../BlockWrapper";
import styles from "./ProductSpecifications.module.scss";
import SpecificationTitles from "./SpecificationTitles";
import SpecificationTable from "./SpecificationTable";

interface ProductSpecificationsProps {
  specificationsData: IMachineSpecification[];
}

function ProductSpecifications({
  specificationsData,
}: ProductSpecificationsProps) {
  const [specificationItem, getSpecificationItem] =
    useState<IMachineSpecification>();

  return (
    <BlockWrapper title="Технические характеристики ">
      <SpecificationTitles
        specificationsData={specificationsData}
        getCurrentSpecification={(currentSpecification) => {
          getSpecificationItem(currentSpecification);
        }}
      />

      <SpecificationTable
        tableData={
          specificationItem ? specificationItem.specifications : [["", ""]]
        }
      />
      <p className={styles.description}>{specificationItem?.description}</p>
    </BlockWrapper>
  );
}

export default ProductSpecifications;
