import React from "react";
import "./CardProduto.css";

import { Link } from "react-router-dom";

function CardProduto(prop) {
  return (
    <Link className="product-card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="fac-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>

      <img src="" alt="anúncio do produto" className="img-product" />

      <div className="product-info">
        <h3 className="product-name">TESTEEEEEEEEEEEEEE</h3>
        <div className="price-container">
          <span id="price">
            {Number(999999).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CardProduto;