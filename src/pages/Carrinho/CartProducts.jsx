import React, { useState, useEffect } from "react";
import CartItemCard from "./CartItemCard";

import "./CartProducts.css";

function CartProducts({cartItems, clearUserCart, authenticated, editUserProductAmount, removeUserItem}) {
  
  return (
    <div className={`cart-products ${cartItems.length === 0 ? "vazio" : ""}`}>
      <div className="cart-header">
        <ul className="header-details">
          <li className="product-header">Produto</li>
          <li className="amount-header">Qntd</li>
          <li className="price-header">Preço</li>
          <li></li>
        </ul>
      </div>
      {cartItems.length === 0 ? <h2>Carrinho Vazio</h2> : <></>}
      <div className="customer-products">
        {cartItems.map((item, i) => {
          return <CartItemCard unique={item.quantidade === 1 ? true : false} removeUserItem={removeUserItem} editUserProductAmount={editUserProductAmount} key={i} item={item} />;
        })}
      </div>

      {cartItems.length > 0 ? (
        <button onClick={authenticated ? clearUserCart : ""} className="clear-cart-btn">Limpar Carrinho</button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CartProducts;
