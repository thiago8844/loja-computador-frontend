import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { checkAuth, validateUserAddress, formatCEP } from "../../utils";
import "./Address.css";
import editIcon from "../../images/icons/editIcon.svg";



function Address() {
  const { user_id, authenticated, token } = checkAuth();
  const [Address, setAddress] = useState(null);
  const [locked, setLocked] = useState(true);
  const [errors, setErrors] = useState(null);

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



  //Libera pra edição de endereco
  const changeAddressData = () => {
    setLocked(false);
  };
  //Envia o novo endereco para o server
  const sendNewAddressData = async () => {
    // const resultado = validateUserData(Address);
    // console.log(resultado);
    // if(!resultado.result) {
    //   console.log("erros demais");
    //   setErrors(resultado.errors);
    //   return
    // }

    setErrors(null);

    const response = await api.post("/editarendereco", Address, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    //Caso a requisição tenha sucesso
    if (response.status === 200) {
      setLocked(true);
      loadAddress();
    } else {
      setLocked(true)
      //location.reload();
    }
  };
  //Lida com as mudanças do formulário
  const changeHandler = (e) => {
    let { name, value } = e.target;

    if(name === "cep") {
      value = value.replace(/\D/g, '');
    }

    setAddress((prevData) => {
      prevData[name] = value;

      return { ...prevData };
    });

  };
  //Carrega os dados pelo cep
  const checkCEP = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);

    if(cep.length === 8) {
      
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const receivedAddress = await response.json();

      console.log(receivedAddress);

      setAddress(prevAddress => {
        prevAddress.rua =  receivedAddress.logradouro;
        prevAddress.bairro =  receivedAddress.bairro;
        prevAddress.cidade =  receivedAddress.localidade;
        prevAddress.estado =  receivedAddress.uf;

        return {...prevAddress};
      });
    }
  }

  useEffect(() => {
    loadAddress();
  }, []);

  if (Address) {
    return (
      <div className="address-container">
        <h1>Endereço</h1>
        <ul className={`user-profile-errors ${errors ? "show" : ""}`}>
          {errors ? errors.map((e) => <li>{e}</li>) : <></>}
        </ul>
        <div className="address-data">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="user-page-input-box">
              <label htmlFor="nome">CEP</label>
              <input
                name="cep"
                onChange={changeHandler}
                disabled={locked ? true : false}
                onBlur={checkCEP}
                value={locked ? formatCEP(Address.cep) : Address.cep}
                maxLength={8}
                type="text"
              />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Rua:</label>
              <input
                name="rua"
                onChange={changeHandler}
                disabled
                value={Address.rua}
                type="text"
              />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Número:</label>
              <input
                name="numero"
                onChange={changeHandler}
                disabled={locked ? true : false}
                value={Address.numero}
                type="number"
              />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Complemento:</label>
              <input
                name="complemento"
                onChange={changeHandler}
                disabled={locked ? true : false}
                value={Address.complemento}
                type="text"
              />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Bairro:</label>
              <input
                name="bairro"
                onChange={changeHandler}
                disabled
                value={Address.bairro}
                type="text"
              />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Cidade:</label>
              <input
                name="cidade"
                onChange={changeHandler}
                disabled
                value={Address.cidade}
                type="text"
              />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Estado:</label>
              <input
                name="estado"
                onChange={changeHandler}
                disabled
                value={Address.estado}
                type="text"
              />
            </div>

            <button
              onClick={locked ? changeAddressData : sendNewAddressData}
              className="form-button"
            >
              {locked ? (
                <>
                  <img src={editIcon} />
                  Alterar
                </>
              ) : (
                "Salvar"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Address;
