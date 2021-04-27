
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

import styles from "./PromoCarousel.module.scss";

interface ProductCarouselProps {
  quantity: number;
}

export default function ProductCarousel({ quantity }: ProductCarouselProps) {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={1440}
        naturalSlideHeight={676}
        totalSlides={10}
        isPlaying
        interval={4500}
        infinite
        visibleSlides={4}
        touchEnabled
      >
        <Slider className="">
          <Slide className="slide" index={0}>
            
            
          </Slide>
          
        </Slider>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <ButtonBack className="">
              <img src="/assets/slider-arrows/left.svg" alt="l" />
            </ButtonBack>

            <ButtonNext className="">
              <img src="/assets/slider-arrows/right.svg" alt="r" />
            </ButtonNext>
           
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
}
