import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";

import "swiper/swiper-bundle.min.css";
import "./slider.scss";
import "./swiper.scss";

import imageLight from "./img/Alice.webp";
import imageDark from "./img/Alice_dark.webp";

const Slider = ({ modalIsActive, setModalIsActive, setSelectedImg }) => {
  const imgList = [imageLight, imageDark, imageLight, imageDark, imageLight, imageDark];
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      console.log("swiper init");
      const swiper = new Swiper(swiperRef.current, {
        slidesPerView: 1,
        speed: 600,
        navigation: {
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        },
        pagination: {
          el: paginationRef.current,
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });

      return () => {
        swiper.destroy();
      };
    }
  }, []);

  const imgHandleClick = (img) => {
    !modalIsActive && setModalIsActive(true);
    setSelectedImg(img);
  };

  return (
    <div className="slider__container">
      <div className="swiper swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          {imgList.map((img, i) => (
            <div key={i} className="swiper-slide">
              <div className="slider__item _ibg" onClick={() => imgHandleClick(img)}>
                <img className="slider__img" src={img} alt="фотография" />
              </div>
            </div>
          ))}
        </div>
        <div ref={paginationRef} className="swiper-pagination"></div>
        <div ref={nextButtonRef} className="swiper-button-next"></div>
        <div ref={prevButtonRef} className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export { Slider };
