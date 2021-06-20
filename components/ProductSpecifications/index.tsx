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
  const [specification, getSpecification] = useState([
    ["", ""], // default case to create table before get data
  ]);

  return (
    <BlockWrapper title="Технические характеристики ">
      <SpecificationTitles
        specificationsData={specificationsData}
        getCurrentSpecification={(currentSpecification) => {
          getSpecification(currentSpecification);
        }}
      />
      <SpecificationTable tableData={specification} />
    </BlockWrapper>
  );
}

export default ProductSpecifications;
