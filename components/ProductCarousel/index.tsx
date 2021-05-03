import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { useEffect, useState } from "react";

import ProductItem from "../ProductItem";

import styles from "./ProductCarousel.module.scss";

interface ProductCarouselProps {
  products: {
    id: number;
    name: string;
    img: string;
    altText: string;
    link?: string;
  }[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [slidesNum, setSlidesNum] = useState(getSlidesNumber());

  function getSlidesNumber() {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 718) {
        return 1;
      }
      if (window.innerWidth < 985) {
        return 2;
      }
      if (window.innerWidth < 1300) {
        return 3;
      }
    }
    return 4;
  }

  function SlidesNumberChecker() {
    console.log(slidesNum);
    console.log("get ", getSlidesNumber());
    setSlidesNum(getSlidesNumber());
  }

  if (typeof window !== "undefined") {
    useEffect(() => {
      window.addEventListener(`resize`, SlidesNumberChecker);
      return () => {
        window.removeEventListener(`resize`, SlidesNumberChecker);
      };
    });
  }

  const slides = products.map((item) => {
    return (
      <Slide key={item.id} className="slide" index={0}>
        <ProductItem imgName={item.img} name={item.name} altText="" />
      </Slide>
    );
  });

  return (
    <div className={styles["global-wrapper"]}>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1.5}
        totalSlides={products.length}
        isPlaying
        interval={4500}
        infinite
        visibleSlides={slidesNum}
        touchEnabled
      >
        <Slider
          className={styles.slider}
          classNameTrayWrap={styles["tray-wrap"]}
        >
          {slides}
        </Slider>

        <ButtonNext className={styles["left-btn"]}>
          <img src="/assets/slider-arrows/left-dark.svg" alt="left" />
        </ButtonNext>

        <ButtonBack className={styles["right-btn"]}>
          <img src="/assets/slider-arrows/right-dark.svg" alt="right" />
        </ButtonBack>
      </CarouselProvider>
    </div>
  );
}
