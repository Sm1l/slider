import React, { useEffect } from "react";
import { register } from "swiper/element/bundle";

import "./slider.scss";
import "./swiper.scss";
import "./custom.scss";

import imageLight from "./img/Alice.webp";
import imageDark from "./img/Alice_dark.webp";

register();

const SliderTest = () => {
  const photos = [imageLight, imageDark, imageLight, imageDark, imageLight, imageDark];

  //swiper element
  const swiperEl = document.querySelector("swiper-container");
  console.log(swiperEl);

  const swiperParams = {
    slidesPerView: 1,
    speed: 600,
    slidesPerGroup: 1,
    navigation: true,
    pagination: {
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      // disableOnInteraction: true,
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
        spaceBetween: 35,
      },
    },
  };

  useEffect(() => {
    if (swiperEl) {
      // assign all parameters to Swiper element
      Object.assign(swiperEl, swiperParams);
      // and now initialize it
      swiperEl.initialize();
    }
  }, [swiperEl]);

  return (
    <div className="slider__container">
      <swiper-container init="false" class="swiper">
        {photos.map((photo, i) => {
          return (
            <swiper-slide key={i}>
              <div className="slider__item _ibg" onClick={() => console.log("sliderphoto click")}>
                <img className="slider__img" src={photo} alt="фотография" />
              </div>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
};

export { SliderTest };
