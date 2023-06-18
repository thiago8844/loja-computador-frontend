import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./AddProductModal.css";

function AddProductModal({show, fechaModal}) {
  
  show ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  console.log("Pica");
  return (
    <>
      <div className={`modal-add-produto ${show ? "aberto" : "fechado"}`}>
        <svg onClick={fechaModal} viewBox="0 0 24 24" fill="currentColor" className="fecha-show">
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <h3>
          Produto Adicionado com sucesso
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </h3>
        <div className="flex-botoes">
          <button className="continuar-comprando"><Link onClick={fechaModal} to="/">Continuar Comprando</Link></button>
          <Link onClick={fechaModal} to="/carrinho">
            <button className="botao-carrinho-modal">Ir para o carrinho</button>
          </Link>
        </div>
      </div>
      <div className={`overlay ${show ?  "" : "fechado"}`}></div>
    </>
  );
}

export default AddProductModal;
