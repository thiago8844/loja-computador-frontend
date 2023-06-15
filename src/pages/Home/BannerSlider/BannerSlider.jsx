import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import SliderButtonPrev from "./SliderButtonPrev";
import SliderButtonNext from "./SliderButtonNext";
import "swiper/css";

import "./BannerSlider.css";

import imagemBanner1 from "../../../images/slider/1920x360 (1).jpg";
import imagemBanner2 from "../../../images/slider/1920x360 (4).jpg";
import imagemBanner3 from "../../../images/slider/1920x360.jpg";

function BannerSlider() {

  const swiper = useSwiper();


  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={500}
      >
        <SwiperSlide>
          <img src={imagemBanner1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={imagemBanner2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={imagemBanner3} alt="" />
        </SwiperSlide>
        <SliderButtonPrev/>
        <SliderButtonNext/>
      </Swiper>      
    </div>
  );
}

export default BannerSlider;
