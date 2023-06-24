import React, { useState, useEffect } from "react";
import { isNumeric, checkAuth } from "../../utils";
import { Link, useAsyncValue } from "react-router-dom";
import logo from "../../images/logos/logo 2 degradê+texto Horizontal.svg";
import "./Cadastro.css";

function Cadastro() {
  const initialValues = {
    nome: "",
    cpf: "",
    data_nasc: "",
    telefone: "",
    email: "",
    senha: "",
    senhaC: "",
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  };

  const [address, setAdress] = useState(null);
  const checkCEP = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);

    if(cep.length === 8) {
      
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const receivedAddress = await response.json();

      setAdress(receivedAddress);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  };

  return (
    <div className="register-page-container">
      <div className="register-header">
        <div className="register-logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>

        <div className="register-title">
          <h1>Cadastre-se</h1>

          <button className="back-button">
            <Link to="/">Voltar</Link>
          </button>
        </div>
      </div>

      <main className="register-page-main">
       
        <form onSubmit={handleSubmit} className="register-form-container">
          <fieldset className="personal-info-data">
            <legend>Dados Pessoa Física</legend>

            <div className="input-box">
              <label htmlFor="fullname">Nome completo:</label>
              <input
                name="nome"
                id="fullname"
                type="text"
                placeholder="Digite seu nome completo:"
              />
            </div>

            <div className="input-box">
              <label htmlFor="cpf">Digite seu cpf:</label>
              <input
                name="cpf"
                id="cpf"
                type="text"
                placeholder="Digite seu cpf:"
                maxLength={11}
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="birth">Data de nascimento:</label>
              <input required name="data_nasc" id="birth" type="date" />
            </div>
            <div className="input-box">
              <label htmlFor="cellphone">Celular:</label>
              <input
                name="telefone"
                id="cellphone"
                type="tel"
                required
                placeholder="Telefone fixo ou celular: *com DDD*"
                maxLength="11"
              />
            </div>

            <div className="input-box">
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                id="email"
                type="email"
                autoComplete="on"
                required
                placeholder="Digite seu email"
              />
            </div>

            <div className="input-box">
              <label htmlFor="password">Senha:</label>
              <input
                name="senha"
                id="password"
                type="password"
                autoComplete="on"
                required
                placeholder="Defina uma senha:"
              />
            </div>

            <div className="input-box">
              <label htmlFor="senhaC">Confirmação de senha:</label>
              <input
                name="senhaC"
                id="passwordC"
                type="password"
                autoComplete="on"
                required
                placeholder="Confirme sua senha"
              />
            </div>
          </fieldset>

          <fieldset className="adress-data">
            <legend>Endereço</legend>
            <div className="input-box">
              <label htmlFor="cep">CEP:</label>
              <input
                id="cep"
                type="text"
                name="cep"
                required
                onBlur={checkCEP}
                placeholder="Digite seu CEP:"
                maxLength={8}
              />
            </div>
            <div className="input-box">
              <label htmlFor="street">Rua:</label>
              <input required disabled  value={ address ? address.logradouro : ""} id="street" type="text" name="rua" />
            </div>
            <div className="input-box">
              <label htmlFor="number">Número:</label>
              <input
                id="number"
                type="number"
                name="numero"
                required
                placeholder="Digite o número:"
              />
            </div>
            <div className="input-box">
              <label htmlFor="more">Complemento:</label>
              <input
                id="more"
                type="text"
                name="complemento"
                placeholder="Digite o complemento:"
              />
            </div>
            <div className="input-box">
              <label htmlFor="bairro">Bairro:</label>
              <input required disabled value={ address ? address.bairro : ""} id="bairro" type="text" name="bairro" />
            </div>
            <div className="input-box">
              <label htmlFor="city">Cidade:</label>
              <input  required disabled value={ address ? address.localidade : ""} id="city" type="text" name="cidade" />
            </div>
            <div className="input-box">
              <label htmlFor="state">Estado:</label>
              <input required disabled id="state" value={ address ? address.uf : ""} type="text" name="estado" />
            </div>
          </fieldset>

          <button className="submit-register" type="submit">
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}

export default Cadastro;
