import React, { useState, useEffect } from "react";
import { isNumeric, checkAuth } from "../../utils";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { validateUserData, validateUserAddress } from "../../utils";
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

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);

  //Preenche o cep através da api viacep
  const checkCEP = async (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);

    if (cep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const receivedAddress = await response.json();

      setFormValues((prev) => {
        prev["rua"] = receivedAddress.logradouro;
        prev["bairro"] = receivedAddress.bairro;
        prev["cidade"] = receivedAddress.localidade;
        prev["estado"] = receivedAddress.uf;

        return { ...prev };
      });
    }
  };

  //Lida com mudanças no formulário
  const changeHandler = (e) => {
    let { name, value } = e.target;

    if (name === "cpf" || name === "telefone") value = value.replace(/\D/g, "");

    setFormValues((prevData) => {
      prevData[name] = value;

      return { ...prevData };
    });
  };

  //Envia os dados
  const handleSubmit = async (e) => {
    e.preventDefault();

    const addressResult = validateUserAddress(formValues);
    const userResult = validateUserData(formValues);

    //Erros frontend

    if (!userResult.result && !addressResult.result) {
      setErrors([...userResult.errors, ...addressResult.errors]);
      return;
    }



    //Erros backend
    setErrors([]);
    return
    const resultado = await api.post("/cadastro", formValues);

    console.log(resultado)

    console.log(e.target.value);
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
        <ul className={`register-errors ${errors.length > 0 ? "show" : ""}`}>
          {errors.map((error, i) => {
            return <li key={i}>{error}</li>;
          })}
        </ul>
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
                onChange={changeHandler}
                value={formValues.nome}
              />
            </div>

            <div className="input-box">
              <label htmlFor="cpf">Digite seu CPF:</label>
              <input
                name="cpf"
                id="cpf"
                type="text"
                placeholder="Digite seu CPF:"
                maxLength={11}
                onChange={changeHandler}
                value={formValues.cpf}
              />
            </div>
            <div className="input-box">
              <label htmlFor="birth">Data de nascimento:</label>
              <input name="data_nasc" id="birth" type="date" />
            </div>
            <div className="input-box">
              <label htmlFor="cellphone">Celular:</label>
              <input
                name="telefone"
                type="tel"
                placeholder="Telefone fixo ou celular: *com DDD*"
                maxLength="11"
                onChange={changeHandler}
                value={formValues.telefone}
              />
            </div>

            <div className="input-box">
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                id="email"
                type="email"
                autoComplete="on"
                onChange={changeHandler}
                value={formValues.email}
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
                placeholder="Defina uma senha:"
                onChange={changeHandler}
                value={formValues.senha}
              />
            </div>

            <div className="input-box">
              <label htmlFor="senhaC">Confirmação de senha:</label>
              <input
                name="senhaC"
                id="passwordC"
                type="password"
                autoComplete="on"
                placeholder="Confirme sua senha"
                onChange={changeHandler}
                value={formValues.senhaC}
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
                onBlur={checkCEP}
                placeholder="Digite seu CEP:"
                onChange={changeHandler}
                value={formValues.cep}
                maxLength={8}
              />
            </div>
            <div className="input-box">
              <label htmlFor="street">Rua:</label>
              <input
                disabled
                id="street"
                type="text"
                name="rua"
                onChange={changeHandler}
                value={formValues.rua}
              />
            </div>
            <div className="input-box">
              <label htmlFor="number">Número:</label>
              <input
                id="number"
                type="number"
                name="numero"
                placeholder="Digite o número:"
                onChange={changeHandler}
                value={formValues.numero}
              />
            </div>
            <div className="input-box">
              <label htmlFor="more">Complemento:</label>
              <input
                id="more"
                type="text"
                name="complemento"
                placeholder="Digite o complemento:"
                onChange={changeHandler}
                value={formValues.complemento}
              />
            </div>
            <div className="input-box">
              <label htmlFor="bairro">Bairro:</label>
              <input
                disabled
                value={formValues.bairro}
                onChange={changeHandler}
                id="bairro"
                type="text"
                name="bairro"
              />
            </div>
            <div className="input-box">
              <label htmlFor="city">Cidade:</label>
              <input
                disabled
                value={formValues.cidade}
                onChange={changeHandler}
                id="city"
                type="text"
                name="cidade"
              />
            </div>
            <div className="input-box">
              <label htmlFor="state">Estado:</label>
              <input
                disabled
                id="state"
                value={formValues.estado}
                onChange={changeHandler}
                type="text"
                name="estado"
              />
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
