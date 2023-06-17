import React from "react";
import "./ProductInfo.css";

function ProductInfo({ price }) {
  const formatedPrice = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="product-info">
      <ul className="about-product">
        <li>
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
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          Novo
        </li>
        <li>
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          12 meses de garantia
        </li>
      </ul>
      <div className="price-box">
        <div className="raw-price">
          <span id="product-price">
            {formatedPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span id="ou"> ou </span>
        </div>
        <h4>
          <span id="">12X</span> de
          <span id="divided-price">
            {" "}
            {((price * 1.15) / 12).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}{" "}
          </span>
        </h4>
      </div>

      <button className="btn-add-cart">
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        COMPRAR
      </button>
      <form method="" id="calculo-cep" className="form-frete-price">
        <label htmlFor="cep" className="shipping-calculation__form__label">
          Informe o seu CEP:
        </label>
        <input
          type="tel"
          name="cep"
          id="cep"
          data-auto-id="76"
          className="texto-form-cep"
          placeholder="Cep de entrega"
          required=""
          autoComplete="off"
        />

        <button type="submit" className="submit_calculo-cep">
          Calcule
        </button>
      </form>
    </div>
  );
}

export default ProductInfo;
