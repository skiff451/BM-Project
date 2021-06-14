import BlockWrapper from "../BlockWrapper";
import CatalogButton from "../CatalogButton";
import ProductCarousel from "../ProductCarousel/";



export default function PopularProducts() {
  return (
    <BlockWrapper title="Популярные товары">
      {/* Fix This */}
      <ProductCarousel products={[]} />
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
