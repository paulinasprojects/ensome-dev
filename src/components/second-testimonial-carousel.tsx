import Slider from "react-slick";
import { TestimonialsData } from "@/lib/data";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';;
import SecondTestimonialCard from "./second-testimonial-card";

const SecondTestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ],
  };

  return (
    <div className="second-testimonial-carousel">
      <Slider {...settings}>
        {TestimonialsData.map((data) => (
          <div className="second-testimonial-carousel-slide" key={data.id}>
            <SecondTestimonialCard
              image={data.image}
              name={data.name}
              position={data.position}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SecondTestimonialCarousel;