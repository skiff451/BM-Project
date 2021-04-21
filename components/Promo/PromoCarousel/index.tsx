import Image from "next/image";
import {
  CarouselProvider,
  Dot,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import PromoContent from "./PromoContent";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./PromoCarousel.module.scss";

export default function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={1440}
      naturalSlideHeight={676}
      totalSlides={5}
      isPlaying
      interval={2500}
      infinite
      visibleSlides={1}
      touchEnabled
    >
      <Slider className={styles["slide-content"]}>
        <Slide className="slide" index={0}>
          <Image
            src="/assets/promo-carousel-imgs/Background_1.png"
            alt=""
            width={1440}
            height={676}
            layout="responsive"
          />
          <PromoContent>
            <h1 className={styles.title}>Станки лазерной </h1>
            <h2 className={styles.description}> 
              Мы предлагаем качественную технику собсвенного производства с
              доставкой по Украине
            </h2>
          </PromoContent>
        </Slide>
        <Slide className="slide" index={1}>
          <Image
            src="/assets/promo-carousel-imgs/Background_2.png"
            alt=""
            width={1440}
            height={676}
            layout="responsive"
          />
        </Slide>
        <Slide className="slide" index={2}>
          <Image
            src="/assets/promo-carousel-imgs/Background_3.png"
            alt=""
            width={1440}
            height={676}
            layout="responsive"
          />
        </Slide>
        <Slide className="slide" index={2}>
          <Image
            src="/assets/promo-carousel-imgs/Background_4.png"
            alt=""
            width={1440}
            height={676}
            layout="responsive"
          />
        </Slide>
        <Slide className="slide" index={2}>
          <Image
            src="/assets/promo-carousel-imgs/Background_5.png"
            alt=""
            width={1440}
            height={676}
            layout="responsive"
          />
        </Slide>
      </Slider>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles["bullets-wrapper"]}>
            <Dot slide={0} className={styles.bullet}></Dot>
            <Dot slide={1} className={styles.bullet}></Dot>
            <Dot slide={2} className={styles.bullet}></Dot>
            <Dot slide={3} className={styles.bullet}></Dot>
            <Dot slide={4} className={styles.bullet}></Dot>
          </div>

          <ButtonBack className={styles["left-btn"]}>
            <img src="/assets/slider-arrows/left.svg" alt="l" />
          </ButtonBack>

          <ButtonNext className={styles["right-btn"]}>
            <img src="/assets/slider-arrows/right.svg" alt="r" />
          </ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  );
}
