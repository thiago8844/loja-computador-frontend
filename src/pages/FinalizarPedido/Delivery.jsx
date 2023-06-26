import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { checkAuth, validateUserAddress } from "../../utils";
import "./Delivery.css";
import { Link } from "react-router-dom";

function Delivery({setOrderAddress}) {
  const [address, setAddress] = useState();
  const [locked, setLocked] = useState(true);
  const {token } = checkAuth();
  const [errors, setErrors] = useState([]);

  //Carrega o endereço do usuário
  const loadAddress = async () => {
    const response = await api.get("/endereco", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    setAddress(response.data);
  };

  const saveNewAddress = () => {
    
    const resultado = validateUserAddress(address);

    if(!resultado.result) {
      setErrors(resultado.errors);
      return;
    }
    
    setErrors([]);
    setLocked(true);
  }

  //Lida com as mudanças do formulário
  const changeHandler = (e) => {
    let { name, value } = e.target;

    if (name === "cep") {
      value = value.replace(/\D/g, "");
    }

    setAddress((prevData) => {
      prevData[name] = value;

      return { ...prevData };
    });
  };

  useEffect(() => {
    loadAddress();

  }, []) 

  useEffect(() => {
    setOrderAddress(address);
  }, [address]);

  if(address) {
    return (
      <div className="delivery-container finish-purchase-page-container">
        <div className="delivery-address">
          <h2>Endereço de entrega</h2>
          <ul className={`delivery-address-errors ${errors.length > 0 ? "show" : ""}`}>
            {errors.map((e, i) => <li key={i}>{e}</li>)}
          </ul>

          <form>
            <div className="finish-product-input-box">
              <label htmlFor="cep">CEP:</label>
              <input maxLength={8} onChange={changeHandler} value={address.cep} disabled={locked ? true : false} name="cep" type="text" />
            </div>
            <div className="finish-product-input-box">
              <label htmlFor="rua">Rua:</label>
              <input onChange={changeHandler} value={address.rua}  disabled={locked ? true : false} name="rua" type="text" />
            </div>
            <div className="finish-product-input-box">
              <label htmlFor="numero">Número:</label>
              <input
                disabled={locked ? true : false}
                name="numero"
                type="number"
                onChange={changeHandler} value={address.numero}
              />
            </div>
            <div className="finish-product-input-box">
              <label htmlFor="complemento">Complemento:</label>
              <input
                disabled={locked ? true : false}
                name="complemento"
                type="text"
                onChange={changeHandler} value={address.complemento}
              />
            </div>
            <div className="finish-product-input-box">
              <label htmlFor="bairro">Bairro:</label>
              <input onChange={changeHandler} value={address.bairro} disabled={locked ? true : false} name="bairro" type="text" />
            </div>
            <div className="finish-product-input-box">
              <label htmlFor="cidade">Cidade:</label>
              <input onChange={changeHandler} value={address.cidade} disabled={locked ? true : false} name="cidade" type="text" />
            </div>
            <div className="finish-product-input-box">
              <label htmlFor="estado">Estado:</label>
              <input onChange={changeHandler} value={address.estado} disabled={locked ? true : false} name="estado" type="text" />
            </div>
          </form>
  
          <button onClick={locked ? () => setLocked(false) :  saveNewAddress} className="delivery-address-btn">{locked ? "EDITAR" : "SALVAR"}</button>
        </div>
      </div>
    );
  }

}

export default Delivery;
