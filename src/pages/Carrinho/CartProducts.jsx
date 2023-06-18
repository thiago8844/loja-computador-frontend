import React from "react";

import CartItemCard from "./CartItemCard";

import "./CartProducts.css"

function CartProducts() {
  
  
  
  return (
    <div className="cart-products">
      <div className="cart-header">
        <ul className="header-details">
          <li className="product-header">Produto</li>
          <li className="amount-header">Qntd</li>
          <li className="price-header">Preço</li>
          <li></li>
        </ul>
      </div>

      <div className="customer-products">
        <CartItemCard/>
        <CartItemCard/>
        <CartItemCard/>
      </div>


    </div>
  );
}

export default CartProducts;
