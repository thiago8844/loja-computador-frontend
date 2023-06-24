import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { checkAuth } from "../../utils";

import "./UserData.css";

function UserData() {
  const { user_id, authenticated, token } = checkAuth();
  const [userData, setUserData] = useState(null);
  const [locked, setLocked] = useState(true);

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

  useEffect(() => {
    loadUserData();
  }, []);

  if (userData) {

    return (
      <div className="user-data-container">
        <h1>Dados da Conta</h1>
        <div className="user-data">
          <form action="">
            <div className="user-page-input-box">
              <label htmlFor="nome">Nome usuário:</label>
              <input name="nome" type="text" />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Email:</label>
              <input name="email" type="text" />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Data de Nascimento:</label>
              <input name="data_nac" type="date" />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">CPF:</label>
              <input name="cpf" type="text" />
            </div>
            <div className="user-page-input-box">
              <label htmlFor="nome">Celular:</label>
              <input name="celular" type="text" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserData;
