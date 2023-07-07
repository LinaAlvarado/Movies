import Slider from "react-slick";
import PropTypes from "prop-types";

const Carousel = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    /*autoplaySpeed: 500,*/
  };

  return <Slider {...settings}>{children}</Slider>;
};

Carousel.propTypes = {
  children: PropTypes.object.isRequired, // Validación para la prop movie
};

export default Carousel;
