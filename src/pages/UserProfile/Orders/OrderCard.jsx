import React, { useState } from "react";
import cdn from "../../../services/cdn";
import "./OrderCard.css";

function OrderCard({ order }) {
  const [open, setOpen] = useState(false);

  const [year, month, day] = order.data.split("-");
  const brasilData = `${day}/${month}/${year}`;

  return (
    <div className={`order-card-container ${open ? "open" : ""}`}>
      <ul className="card-header">
        <li>
          <span>
            <strong>Código do pedido: </strong>
          </span>
          <span> {order.id_pedido}</span>
        </li>
        <li>
          <span>
            <strong>Status: </strong>
          </span>
          <span>{order.status}</span>
        </li>
        <li>
          <span>
            <strong>Data: </strong>
          </span>
          <span>{brasilData}</span>
        </li>
        <li onClick={() => setOpen((prev) => !prev)}>
          <span className="open-order">
            Ver Mais
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
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </li>
      </ul>
      <div className="card-address">
        <h4>Endereço</h4>
        <p>
          Rua {order.rua}, Nº {order.numero},{" "}
        </p>
        <p>
          Bairro: {order.bairro}, CEP {order.cep}
        </p>
        <p>
          Cidade: {order.cidade}, UF: {order.estado}
        </p>
      </div>
      <ul className="card-products">
        {order.products.map((p, index) => {
          return (
            <li key={index}>
              <img src={`${cdn}${p.Produto.imagem_principal}`} alt="" />
              <p>{p.Produto.nome}</p>
              <span>QTD: {p.quantidade}</span>
              <span>
                {Number(p.Produto.preco).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="total-order">
        <span>Total:</span>
        <span>
          {Number(order.valor_total).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
}

export default OrderCard;
