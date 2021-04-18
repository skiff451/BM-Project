import {
  CarouselProvider,
  Dot,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
export default function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={150}
      totalSlides={3}
      isPlaying={true}
      interval={1500}
      infinite={true}
      visibleSlides={1}
    >
      <ButtonBack>
        <span>back</span>
      </ButtonBack>
      <Slider>
        <Slide className="slide" index={0}>
          <h1>Hello</h1>
        </Slide>
        <Slide className="slide" index={1}>
          <h1>My</h1>
        </Slide>
        <Slide className="slide" index={2}>
          <h1>World</h1>
        </Slide>
      </Slider>
      <ButtonNext>
        <span>next</span>
      </ButtonNext>
      <Dot slide={0}></Dot>
      <Dot slide={1}></Dot>
      <Dot slide={2}></Dot>
    </CarouselProvider>
  );
}
