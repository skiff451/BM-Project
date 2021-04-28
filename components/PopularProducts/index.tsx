import BlockWrapper from "../BlockWrapper";
import CatalogButton from "../CatalogButton";
import ProductCarousel from "../ProductCarousel/";

const list = [
  {
    id: 1,
    name: "Оптоволоконный станок лазерной резки металла RJ-3015 1500W",
    img: "product_1.png",
    altText: "",
  },
  {
    id: 2,
    name: "Оптоволоконный станок лазерной резки металла RJ-3015 1500W",
    img: "product_2.png",
    altText: "",
  },
  {
    id: 3,
    name: "Оптоволоконный станок лазерной резки металла RJ-3015 1500W",
    img: "product_3.png",
    altText: "",
  },
  {
    id: 4,
    name: "Оптоволоконный станок лазерной резки металла RJ-3015 1500W",
    img: "product_4.png",
    altText: "",
  },
  {
    id: 5,
    name: "Оптоволоконный станок лазерной резки металла RJ-3015 1500W",
    img: "product_1.png",
    altText: "",
  },
  {
    id: 6,
    name: "Оптоволоконный станок лазерной резки металла RJ-3015 1500W",
    img: "product_2.png",
    altText: "",
  },
  {
    id: 7,
    name: "Оптоволоконный станок лазерной резки металла RJ-3015 1500W",
    img: "product_3.png",
    altText: "",
  },
  {
    id: 8,
    name: "Оптоволоконный станок лазерной резки металла RJ-3015 1500W",
    img: "product_4.png",
    altText: "",
  },
];

export default function PopularProducts() {
  return (
    <BlockWrapper title="Популярные товары">
      <ProductCarousel products={list} />
      <div className="btn-wrapper">
        <CatalogButton
          link="/product-catalog"
          buttonName="Смотреть польный каталог"
        />
      </div>
      <style jsx>{`.btn-wrapper{
        margin: 30px 0 100px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        `}</style>
    </BlockWrapper>
  );
}
