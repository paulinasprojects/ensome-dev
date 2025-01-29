import Slider from 'react-slick';
import { historySections } from '@/lib/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HistoryCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    ]
  };

  return (
    <div className='history-carousel'>
      <Slider
        {...settings}
      >
        {historySections.map((section) => (
          <div key={section.id} className="carousel-slide">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HistoryCarousel