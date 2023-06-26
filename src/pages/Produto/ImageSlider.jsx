import React from "react";

import "./ImageSlider.css";

function ImageSlider(props) {
  return (
    <div className="image-slider">
      <div className="container-imagens">{props.children}</div>
    </div>
  );
}

export default ImageSlider;
