import ProductItem from "../../components/ProductItem";
import styles from "./ProductsInCategory.module.scss";

interface IProductsInCategoryProps {
  data: IProduct[];
}

function ProductsInCategory({ data }: IProductsInCategoryProps) {
  const products = data?.map(({ id, imgsSrcArr, altText, name, link }) => {
    return (
      <div className={styles.item}>
        <ProductItem
          key={id}
          imgSrc={imgsSrcArr[0]}
          altText={altText}
          name={name}
          link={link}
        />
      </div>
    );
  });

  return <div className={styles["products-wrapper"]}>{products}</div>;
}

export default ProductsInCategory;
