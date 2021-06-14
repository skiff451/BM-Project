import React, { Dispatch, SetStateAction } from "react";
import Button from "../../Button";
import styles from "./ProductDescription.module.scss";

interface IProductDescriptionProps {
  title: string;
  description: string;
  openModal: Dispatch<SetStateAction<boolean>>;
}

function ProductDescription({
  title,
  description,
  openModal,
}: IProductDescriptionProps) {
  return (
    <div className={styles.description}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button
        responsive={true}
        onClick={() => {
          openModal(true);
        }}
      >
        Узнать цену
      </Button>
    </div>
  );
}

export default ProductDescription;
