import Image from "next/image";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import styles from "./ProductSlider.module.scss";

interface IProductSliderProps {
  imgSrcArr: string[];
}

function ProductSlider({ imgSrcArr }: IProductSliderProps) {
  console.log(imgSrcArr);
  const slides = imgSrcArr.map((item, index) => {
    return (
      <Slide key={index} className="slide" index={0}>
        <Image src={item} width={630} height={470} />
      </Slide>
    );
  });

  return (
    <div className={styles.slider}>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1.5}
        totalSlides={imgSrcArr.length}
        // isPlaying
        interval={4500}
        infinite
        visibleSlides={1}
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

export default ProductSlider;
