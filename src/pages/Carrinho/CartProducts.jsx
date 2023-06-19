import React, { useState, useEffect } from "react";
import { checkAuth } from "../../utils";
import api from "../../services/api";
import CartItemCard from "./CartItemCard";

import "./CartProducts.css";

function CartProducts() {
  const [cartItems, setCartItems] = useState([]);
  const { user_id, authenticated, token } = checkAuth();


  const loadUserCart = async () => {
    try {
      const response = await api.get(`produtos-usuario/${user_id}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      setCartItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const clearUserCart = async () => {
    try {
      const response = await api.delete(`limparcarrinho/${user_id}`, {
        headers: {
          Authorization: token,
        },
      });

      loadUserCart();
      console.log(response);
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    if (user_id) loadUserCart();
  }, []);

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
          return <CartItemCard key={i} item={item} />;
        })}
      </div>

      {cartItems.length > 0 ? (
        <button onClick={user_id ? clearUserCart : ""} className="clear-cart-btn">Limpar Carrinho</button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CartProducts;
