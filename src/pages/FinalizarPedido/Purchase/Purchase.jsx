import React from "react";
import cdn from "../../../services/cdn";
import "./Purchase.css";

function Purchase({ orderItems, total, finishPurchase }) {
  const formattedTotal = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="purchase-checkout-container finish-purchase-page-container">
      <h2>Finalizar Pedido</h2>
      <ul className="purchase-data">
        <li className="sub-info">
          <span>SUBTOTAL:</span>
          <span id="sub-total">{formattedTotal}</span>
        </li>
        <li className="sub-info">
          <span>FRETE:</span>
          <span>R$ 0,00</span>
        </li>
        <li className="total-box">
          <span>TOTAL:</span>
          <span id="total-purchase">{formattedTotal}</span>
        </li>
      </ul>

      <button onClick={finishPurchase} className="finish-order-btn">FINALIZAR COMPRA</button>

      <div className="order-items-container">
        <h4>ITENS DO PEDIDO</h4>
        <ul className="order-items">
          {orderItems.map((item, index) => {
            return (
              <li key={index}>
                <img src={`${cdn}${item.imagem_principal}`} alt="" />
                <div className="item-info">
                  <p>{item.nome}</p>
                  <p className="item-sub-info">QTD: {item.quantidade}</p>
                  <p className="item-sub-info">
                    PRECO:{" "}
                    {Number(item.preco).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Purchase;
