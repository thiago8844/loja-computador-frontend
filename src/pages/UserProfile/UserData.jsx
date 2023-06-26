import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { checkAuth, formatCPF, formatPhoneNumber, validateUserData } from "../../utils";

import "./UserData.css";
import editIcon from "../../images/icons/editIcon.svg";
import { Link } from "react-router-dom";

function UserData() {
  const { user_id, authenticated, token } = checkAuth();
  const [userData, setUserData] = useState(null);
  const [locked, setLocked] = useState(true);
  const [errors, setErrors] = useState(null);

  const loadUserData = async () => {
    const response = await api.get("/dadosusuario", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    setUserData(response.data);
  };

  const changeUserData = () => {
    setLocked(false);

  };

  //Lida com as mudanças no formulário atualizando userData state
  const changeHandler = (e) => {
    let { name, value } = e.target;

    if(name === "cpf" || name === "telefone") value = value.replace(/\D/g, '');


    setUserData((prevData) => {
      prevData[name] = value;

      return { ...prevData };
    });
    console.log(name, value);
  };

  //Envia os novos dados de usuário
  const sendNewUserData = async (e) => {

    const resultado = validateUserData(userData);
    console.log(resultado);
    if(!resultado.result) {
      console.log("erros demais");
      setErrors(resultado.errors);
      return
    }

    setErrors(null);

    const response = await api.post("/editardadosusuario", userData, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      setLocked(true);
      loadUserData();
    } else {
      setLocked(true)
      //location.reload();
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  if (userData) {
    return (
      <div className="user-data-container">
        <h1>Dados da Conta</h1>
        <ul className={`user-profile-errors ${errors ? "show":""}`}>
          {errors ? errors.map((e, i) => <li key={i}>{e}</li> ): <></>}
        </ul>
        <div className="user-data">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="user-page-input-box">
              <label htmlFor="nome">Nome usuário:</label>
              <input
                name="nome"
                onChange={changeHandler}
                disabled={locked ? true : false}
                value={userData.nome}
                type="text"
              />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Email:</label>
              <input
                name="email"
                onChange={changeHandler}
                disabled={locked ? true : false}
                value={userData.email}
                type="text"
              />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Data de Nascimento:</label>
              <input
                name="data_nasc"
                onChange={changeHandler}
                disabled={locked ? true : false}
                value={userData.data_nasc}
                type="date"
              />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">CPF:</label>
              <input
                name="cpf"
                onChange={changeHandler}
                disabled={locked ? true : false}
                value={locked ? formatCPF(userData.cpf) : userData.cpf}
                type="text"
                maxLength={11}
              />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Celular:</label>
              <input
                name="telefone"
                onChange={changeHandler}
                disabled={locked ? true : false}
                value={locked ? formatPhoneNumber(userData.telefone) : userData.telefone}
                type="text"
                maxLength={11}
              />
            </div>

            <button
              onClick={locked ? changeUserData : sendNewUserData}
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

export default UserData;
