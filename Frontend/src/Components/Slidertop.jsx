import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsThreeDots } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";

const Slidertop = ({ images }) => {
  const [autoplay, setAutoplay] = useState(false);

  const settings = {
    infinite: true,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  const handleMouseEnter = () => {
    setAutoplay(true);
  };

  const handleMouseLeave = () => {
    setAutoplay(false);
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div
            key={index}
            className="card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="img">
              <img
                className="position-relative"
                src={item.image}
                alt={`slide-${index}`}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="img-menu position-absolute">
                <ul className="d-flex jost">
                  <li className="me-1">
                    <div className="icon">
                      <BsThreeDots className="blk size chng position-relative" />
                      <div className="icon-name">Select Option</div>
                    </div>
                  </li>
                  <li className="mx-1">
                    <div className="icon">
                      <CiSearch className="blk size chng position-relative" />
                      <div className="icon-name">Quickview</div>
                    </div>
                  </li>
                  <li className="ms-1">
                    <div className="icon">
                      <CiHeart className="blk size chng position-relative" />
                      <div className="icon-name">Add to Wishlist</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slidertop;
