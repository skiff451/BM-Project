import BlockWrapper from "../BlockWrapper";
import ProductItem from "../ProductItem";
import ProductCarousel from "../ProductCarousel/"
export default function PopularProducts() {
  return (
    <BlockWrapper title="Популярные товары">
      {/* <ProductItem
        imgName="product_1.png"
        name="Оптоволоконный станок лазерной резки металла RJ-3015 1500W"
        altText=""
      /> */}
      <ProductCarousel/>
    </BlockWrapper>
  );
}
