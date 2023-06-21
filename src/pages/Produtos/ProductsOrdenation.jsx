import React from "react";

import "./ProductsOrdenation.css";

function ProductsOrdenation({ productsAmount }) {
  console.log(productsAmount);
  return (
    <div className="header-filtros">
      <span>
        Mostrando <strong id="quantid-produtos">1</strong> à{" "}
        <strong> {productsAmount}</strong> produtos
      </span>
      <div className="filtro-header f1">
        <span className="titulo-filtro">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
          Ordenar Por:
        </span>
        <form>
          <select name="" id="" className="select-ord">
            <option value="maisproc">Mais Procurados</option>
            <option value="menorp">Menor Preço</option>
            <option value="maiorp">Maior Preço</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default ProductsOrdenation;
