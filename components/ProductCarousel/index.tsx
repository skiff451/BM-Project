import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

import ProductItem from "../ProductItem";

import styles from "./ProductCarousel.module.scss";

interface ProductCarouselProps {
  products: {
    id: number;
    name: string;
    img: "product_1.png";
    altText: "";
    link?: string;
  }[];
}

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
];

export default function ProductCarousel() {
  return (
    <div className={styles["global-wrapper"]}>
      <CarouselProvider
        naturalSlideWidth={296}
        naturalSlideHeight={357}
        totalSlides={9}
        isPlaying
        interval={4500}
        infinite
        visibleSlides={4}
        touchEnabled
      >
        <Slider className={styles.slider}>

          <Slide className="slide" index={0}>
            <div className={styles["item-wrapper"]}>
              <ProductItem
                imgName="product_1.png"
                name="Оптоволоконный станок лазерной резки металла RJ-3015 1500W"
                altText=""
              />
            </div>
          </Slide>

          <Slide className="slide" index={1}>
            <div className={styles["item-wrapper"]}>
              <ProductItem
                imgName="product_2.png"
                name="Оптоволоконный станок лазерной резки металла RJ-3015 1500W"
                altText=""
              />
            </div>
          </Slide>

          <Slide className="slide" index={2}>
            <div className={styles["item-wrapper"]}>
              <ProductItem
                imgName="product_3.png"
                name="Оптоволоконный станок лазерной резки металла RJ-3015 1500W"
                altText=""
              />
            </div>
          </Slide>

          <Slide className="slide" index={3}>
            <div className={styles["item-wrapper"]}>
              <ProductItem
                imgName="product_4.png"
                name="Оптоволоконный станок лазерной резки металла RJ-3015 1500W"
                altText=""
              />
            </div>
          </Slide>

          <Slide className="slide" index={4}>
            <div className={styles["item-wrapper"]}>
              <ProductItem
                imgName="product_4.png"
                name="Оптоволоконный станок лазерной резки металла RJ-3015 1500W"
                altText=""
              />
            </div>
          </Slide>
          <Slide className="slide" index={5}>
            <div className={styles["item-wrapper"]}>
              <ProductItem
                imgName="product_4.png"
                name="Оптоволоконный станок лазерной резки металла RJ-3015 1500W"
                altText=""
              />
            </div>
          </Slide>
          <Slide className="slide" index={6}>
            <div className={styles["item-wrapper"]}>
              {" "}
              <ProductItem
                imgName="product_4.png"
                name="Оптоволоконный станок лазерной резки металла RJ-3015 1500W"
                altText=""
              />
            </div>
          </Slide>
          <Slide className="slide" index={7}>
            <div className={styles["item-wrapper"]}>
              <ProductItem
                imgName="product_4.png"
                name="Оптоволоконный станок лазерной резки металла RJ-3015 1500W"
                altText=""
              />
            </div>
          </Slide>
          <Slide className="slide" index={8}>
            <div className={styles["item-wrapper"]}>
              <ProductItem
                imgName="product_4.png"
                name="Оптоволоконный станок лазерной резки металла RJ-3015 1500W"
                altText=""
              />
            </div>
          </Slide>
        </Slider>

        {/* <div className={styles["arrow-wrapper"]}> */}
          <ButtonBack className={styles["left-btn"]}>
            <img src="/assets/slider-arrows/left.svg" alt="left" />
          </ButtonBack>

          <ButtonNext className={styles["right-btn"]}>
            <img src="/assets/slider-arrows/right.svg" alt="right" />
          </ButtonNext>
        {/* </div> */}
      </CarouselProvider>
    </div>
  );
}
