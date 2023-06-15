import React from "react";
import { useSwiper } from "swiper/react";

function SliderButtonPrev() {
  const swiper = useSwiper();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="prev-slide"
      onClick={() => swiper.slidePrev()}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export default SliderButtonPrev;
