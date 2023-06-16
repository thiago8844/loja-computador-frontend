import React from 'react'

import "./MainImage.css";

function MainImage(props) {
  return (
    <div className='image-container'>
      {props.children}
    </div>
  )
}

export default MainImage