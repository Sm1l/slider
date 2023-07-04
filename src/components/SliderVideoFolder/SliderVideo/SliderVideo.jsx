import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { motion } from "framer-motion";
import {} from "swiper/element/bundle";

import { animationSlider } from "./animationSlider";

import "swiper/swiper-bundle.min.css";
import "./slider.scss";
import "./swiper.scss";

const SliderVideo = ({ videoList }) => {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
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
        //*test
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },

        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // },
        breakpoints: {
          640: {
            // slidesPerView: 2,
            // spaceBetween: 20,
          },
          1024: {
            // slidesPerView: 3,
            // spaceBetween: 30,
          },
        },
      });

      return () => {
        swiper.destroy();
      };
    }
  }, []);

  return (
    <motion.div
      className="slidervideo__container"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      variants={animationSlider}
    >
      <div className="swiper swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          {videoList.map((video, i) => (
            <div key={i} className="swiper-slide">
              <div className="slidervideo__item">
                <iframe
                  className="slidervideo__iframe"
                  src={video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <div ref={paginationRef} className="swiper-pagination"></div>
        <div ref={nextButtonRef} className="swiper-button-next"></div>
        <div ref={prevButtonRef} className="swiper-button-prev"></div>
      </div>
    </motion.div>
  );
};

export { SliderVideo };
