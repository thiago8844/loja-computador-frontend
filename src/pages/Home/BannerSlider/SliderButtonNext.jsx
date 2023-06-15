import React from 'react'
import { useSwiper } from "swiper/react";


function SliderButtonNext() {
  const swiper = useSwiper();
  
  return (
<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="next-slide"
        onClick={() => swiper.slideNext()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
  )
}

export default SliderButtonNext