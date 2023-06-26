import React from "react";

import "./Payment.css";
import pixIcon from "../../../images/icons/pix-icon.svg";
import boletoIcon from "../../../images/icons/icons8-boleto-48.png";

function Payment() {
  return (
    <div className="payment-container finish-purchase-page-container">
      <h2>Pagamento</h2>

      <div className="payment-options">
        <div className="pay-option">
          <input type="radio" defaultChecked={true} name="pagamento" />
          <label htmlFor="pix">
            {" "}
            <img src={pixIcon} /> Pix
          </label>
        </div>
        <div className="pay-option">
          <input type="radio" name="pagamento" />
          <label htmlFor="boleto">
            {" "}
            <img src={boletoIcon} /> Boleto
          </label>
        </div>
        <div className="pay-option">
          <input type="radio" name="pagamento" />
          <label htmlFor="boleto">
            {" "}
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
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
            Cartão
          </label>
        </div>
      </div>
    </div>
  );
}

export default Payment;
