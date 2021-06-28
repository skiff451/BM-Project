import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";

import styles from "./AboutUsSlider.module.scss";

interface SliderData {
  imgSrc: string;
  title: string;
  description: string;
}

interface AboutUsSliderProps {
  slidesData: SliderData[];
}

function AboutUsSlider({ slidesData }: AboutUsSliderProps) {
  const slides = slidesData.map((slide, index) => {
    return (
      <Slide key={index} className="slide" index={index}>
        <div className={styles["slide-wrapper"]}>
          <Image src={slide.imgSrc} width={843} height={458} />
          <div className={styles["text-wrapper"]}>
            <h4>{slide.title}</h4>
            <p>{slide.description}</p>
          </div>
        </div>
      </Slide>
    );
  });

  const dots = slidesData.map((_, index) => {
    return <Dot key={index} slide={index} className={styles.bullet} />;
  });

  return (
    <CarouselProvider
      naturalSlideWidth={2.8}
      naturalSlideHeight={1}
      totalSlides={slidesData.length}
      isPlaying
      interval={4500}
      infinite
      visibleSlides={1}
      touchEnabled
    >
      <div className={styles["global-wrapper"]}>
        <Slider className={styles.slider}>{slides}</Slider>
        <ButtonNext className={styles["left-btn"]}>
          <img src="/assets/slider-arrows/left-dark.svg" alt="left" />
        </ButtonNext>
        <ButtonBack className={styles["right-btn"]}>
          <img src="/assets/slider-arrows/right-dark.svg" alt="right" />
        </ButtonBack>
      </div>
      <div className={styles["dots-wrapper"]}>{dots}</div>
    </CarouselProvider>
  );
}

export default AboutUsSlider;
