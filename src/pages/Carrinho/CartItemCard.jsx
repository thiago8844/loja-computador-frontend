import React from "react";
import { Link } from "react-router-dom";
import cdn from "../../services/cdn";
import "./CartItemCard.css";


function CartItemCard({ item, unique, editUserProductAmount, removeUserItem }) {
  
  const preco = Number(item.preco).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });



  return (
    <div className={`cart-item-card ${unique ? "unique" : ""}`}>
      <div className="img-desc-container">
        <Link className="img-cont" to={`/produto/${item.id_produto}`}>
          <img src={`${cdn}${item.imagem_principal}`} alt="" />
        </Link>
        <div className="cart-item-description-container">
          <Link
            to={`/produto/${item.id_produto}`}
            className="cart-item-description"
          >
            {item.nome}
          </Link>
        </div>
      </div>

      <div className="item-amount">
        <span onClick={() => editUserProductAmount("subtract", item.id_produto, unique)} className="less">-</span>
        <span className="value">{item.quantidade}</span>
        <span onClick={() => editUserProductAmount("add", item.id_produto, unique)} className="more">+</span>
      </div>

      <div className="cart-item-price">
        <span>{preco}</span>
      </div>

      <svg
        onClick={() => removeUserItem(item.id_produto)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="remove-item"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </div>
  );
}

export default CartItemCard;
