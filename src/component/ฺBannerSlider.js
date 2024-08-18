// BannerSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.css';

const BannerSlider = () => {
  const CustomNextArrow = (props) => (
    <div {...props} className="custom-next-arrow">
      <img
        src="https://img5.pic.in.th/file/secure-sv1/Pngtreeround-arrow-icon_4437979.png"
        alt="Next"
        className="Slider-next-banner"
      />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-prev-arrow">
      <img
        src="https://img2.pic.in.th/pic/Pngtreeround-arrow-icon_4437979.png"
        alt="Prev"
        className="Slider-prev-banner"
      />
    </div>
  );

  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
      },
    },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://pbs.twimg.com/media/E-6JSWcVkAAKXEN?format=jpg&name=large"
          alt="Banner 1"
          className="slider-image"
        />
      </div>
      <div>
        <img
          src="https://pbs.twimg.com/media/FPvYdy2aMAEoyKe.jpg:small"
          alt="Banner 2"
          className="slider-image"
        />
      </div>
      <div>
        <img
          src="https://pbs.twimg.com/media/FkQ1dMvaYAULsoh.jpg"
          alt="Banner 3"
          className="slider-image"
        />
      </div>
      <div>
        <img
          src="https://pbs.twimg.com/media/Fj8CIsXVEAAgcRD.jpg"
          alt="Banner 4"
          className="slider-image"
        />
      </div>
      <div>
        <img
          src="https://memaffx.carrd.co/assets/images/gallery03/08f6a6b7.jpg?v=03671a7f"
          alt="Banner 5"
          className="slider-image"
        />
      </div>
      {/* เพิ่มรูปภาพเพิ่มเติมตามต้องการ */}
    </Slider>
  );
};

export default BannerSlider;
