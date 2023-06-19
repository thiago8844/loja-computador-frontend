import React from "react";
import { Link } from "react-router-dom";
import "./PurchaseDetails.css";

function PurchaseDetails({ cartItems }) {
  const total =
    cartItems.length > 0
      ? cartItems.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
      : 0;

  const totalPrice = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const frete = cartItems.length > 0 ? "Gratis" : "-";

  return (
    <div className="purchase-details-container">
      <div className="purchase-info">
        <h1>Resumo</h1>
        <div className="purchase-values">
          <div className="sub-total">
            <span>Sub-total</span>
            <span id="valor-subtotal">{totalPrice}</span>
          </div>

          <div className="frete">
            <span>Frete</span>
            <span id="frete-option"> {frete} </span>
          </div>

          <form action="" className="form-cupom">
            <input
              className="cupom-texto"
              id=""
              type="text"
              name="cupom"
              placeholder="Cupom Desconto"
            />
            <button type="submit" className="cupom-button">
              APLICAR
            </button>
          </form>

          <div className="total-price-container">
            <span>Total</span>
            <span id="total-price">{totalPrice}</span>
          </div>
        </div>
      </div>

      <Link to="/finalizar-pedido">
        <button className="finish-purchase-btn">FINALIZAR COMPRA</button>
      </Link>
    </div>
  );
}

export default PurchaseDetails;
