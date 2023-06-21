import React from "react";

import { Link } from "react-router-dom";
import logo from "../../images/logos/logo 2 degradê+texto Horizontal.svg";
import "./Cadastro.css";

function Cadastro() {
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
        <form action="" className="register-form-container">
          <fieldset className="personal-info-data">
            <legend>Dados Pessoa Física</legend>

            <div class="input-box">
              <label for="fullname">Nome completo:</label>
              <input
                name="nome"
                id="fullname"
                type="text"
                placeholder="Digite seu nome completo:"
              />
            </div>
            <div class="input-box">
              <label for="cpf">Digite seu cpf:</label>
              <input
                name="cpf"
                id="cpf"
                type="number"
                placeholder="Digite seu cpf:"
                required
              />
            </div>
            <div class="input-box">
              <label for="birth">Data de nascimento:</label>
              <input name="data_nasc" id="birth" type="date" required />
            </div>
            <div class="input-box">
              <label for="cellphone">Celular:</label>
              <input
                name="telefone"
                id="cellphone"
                type="tel"
                placeholder="Telefone fixo ou celular: *com DDD*"
                maxlength="11"
                required
              />
            </div>

            <div class="input-box">
              <label for="email">Email:</label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Digite seu email"
              />
            </div>

            <div class="input-box">
              <label for="password">Senha:</label>
              <input
                name="senha"
                id="password"
                type="password"
                placeholder="Defina uma senha:"
              />
            </div>

            <div class="input-box">
              <label for="passwordC">Confirmação de senha:</label>
              <input
                name="passwordC"
                id="passwordC"
                type="password"
                placeholder="Confirme sua senha"
              />
            </div>
          </fieldset>

          <fieldset className="adress-data">
            <legend>Endereço</legend>
            <div class="input-box">
              <label for="cep">CEP:</label>
              <input
                id="cep"
                type="number"
                name="cep"
                placeholder="Digite seu CEP:"
                required
              />
            </div>
            <div class="input-box">
              <label for="street">Rua:</label>
              <input id="street" type="text" name="rua" required />
            </div>
            <div class="input-box">
              <label for="number">Número:</label>
              <input
                id="number"
                type="number"
                name="numero"
                placeholder="Digite o número:"
                required
              />
            </div>
            <div class="input-box">
              <label for="more">Complemento:</label>
              <input
                id="more"
                type="text"
                name="complemento"
                placeholder="Digite o complemento:"
              />
            </div>
            <div class="input-box">
              <label for="bairro">Bairro:</label>
              <input id="bairro" type="text" name="bairro" required />
            </div>
            <div class="input-box">
              <label for="city">Cidade:</label>
              <input id="city" type="text" name="cidade" required />
            </div>
            <div class="input-box">
              <label for="state">Estado:</label>
              <input id="state" type="text" name="estado" required />
            </div>
          </fieldset>

          <button className="submit-register" type="submit">Cadastrar</button>
        </form>
      </main>
    </div>
  );
}

export default Cadastro;
