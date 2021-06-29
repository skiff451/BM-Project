import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Dot,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Button from "../../Button";
import PromoContent from "./PromoContent";

import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./PromoCarousel.module.scss";

interface CarouselProps {
  openModal: Dispatch<SetStateAction<boolean>>;
}

export default function Carousel({ openModal }: CarouselProps) {
  return (
    <CarouselProvider
      naturalSlideWidth={1440}
      naturalSlideHeight={676}
      totalSlides={5}
      isPlaying
      interval={4500}
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
            height={1000}
            layout="responsive"
            placeholder="blur"
            blurDataURL="/assets/promo-carousel-imgs/Background_1.png"
          />
          <PromoContent>
            <h1 className={styles.title}>Станки лазерной резки</h1>
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
            height={1000}
            layout="responsive"
            placeholder="blur"
            blurDataURL="/assets/promo-carousel-imgs/Background_2.png"
          />
          <PromoContent>
            <h1 className={styles.title}>Станки плазменой резки </h1>
            <h2 className={styles.description}>
              Мы предлагаем качественную технику собсвенного производства с
              доставкой по Украине
            </h2>
          </PromoContent>
        </Slide>
        <Slide className="slide" index={2}>
          <Image
            src="/assets/promo-carousel-imgs/Background_3.png"
            alt=""
            width={1440}
            height={1000}
            layout="responsive"
            placeholder="blur"
            blurDataURL="/assets/promo-carousel-imgs/Background_3.png"
          />
          <PromoContent>
            <h1 className={styles.title}>Станки мультигазовой резки </h1>
            <h2 className={styles.description}>
              Непревзойденное качество реза в комбинации со скоростью реза
              относительно других методов резки
            </h2>
          </PromoContent>
        </Slide>
        <Slide className="slide" index={2}>
          <Image
            src="/assets/promo-carousel-imgs/Background_4.png"
            alt=""
            width={1440}
            height={1000}
            layout="responsive"
            placeholder="blur"
            blurDataURL="/assets/promo-carousel-imgs/Background_4.png"
          />
          <PromoContent>
            <h1 className={styles.title}>Станки фрезерные </h1>
            <h2 className={styles.description}>
              Мы предлагаем качественную технику собсвенного производства с
              доставкой по Украине
            </h2>
          </PromoContent>
        </Slide>
        <Slide className="slide" index={2}>
          <Image
            src="/assets/promo-carousel-imgs/Background_5.png"
            alt=""
            width={1440}
            height={1000}
            layout="responsive"
            placeholder="blur"
            blurDataURL="/assets/promo-carousel-imgs/Background_5.png"
          />
          <PromoContent>
            <h1 className={styles.title}>Преса гибочные </h1>
            <h2 className={styles.description}>
              Мы предлагаем качественную технику собсвенного производства с
              доставкой по Украине
            </h2>
          </PromoContent>
        </Slide>
      </Slider>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles["bullets-wrapper"]}>
            <Dot slide={0} className={styles.bullet} />
            <Dot slide={1} className={styles.bullet} />
            <Dot slide={2} className={styles.bullet} />
            <Dot slide={3} className={styles.bullet} />
            <Dot slide={4} className={styles.bullet} />
          </div>

          <ButtonBack className={styles["left-btn"]}>
            <img src="/assets/slider-arrows/left.svg" alt="l" />
          </ButtonBack>

          <ButtonNext className={styles["right-btn"]}>
            <img src="/assets/slider-arrows/right.svg" alt="r" />
          </ButtonNext>
          <div className={styles.order}>
            <Button
              responsive={true}
              onClick={() => {
                openModal(true);
              }}
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </CarouselProvider>
  );
}
