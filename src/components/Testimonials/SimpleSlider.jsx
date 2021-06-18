import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderContent from "./SliderContent";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: dots => (
          <ul style={{position: "static"}}> {dots} </ul>
      ),
  };

  return (
    <Slider {...settings} style={{overflow: "hidden"}}>
      {/* TODO: Create a config object for all testimonials */}
      <SliderContent />
      <SliderContent />
      <SliderContent />
      <SliderContent />
    </Slider>
  );
}

export default SimpleSlider;
