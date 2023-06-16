import React from 'react'
import "./FlexProducts.css"


function FlexProducts(props) {
  
  return (
    <div className='flex-products'>
      {props.children}
    </div>
  )
}

export default FlexProducts;