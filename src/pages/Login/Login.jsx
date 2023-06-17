import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";
import Cookies from "universal-cookie";

import logoTexto from "../../images/logos/logo 2 mobile+texto.svg";
import "./Login.css";

function Login() {
  
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const submitLoginHandler = async (e) => {
    e.preventDefault();

    const auth = {
      email: email,
      senha: senha,
    };

    try {
      const response = await api.post("login", auth);
      const token = response.data.token
      const decoded = jwt(token);
      console.log(decoded)
      cookies.set("auth", token, {expires: new Date(decoded.exp * 1000)});

     navigate('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container-geral">
      <div className="container-login">
        <button className="home-button">
          <Link to="/">
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
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Voltar
          </Link>
        </button>

        <Link to="/" className="site-logo">
          <img src={logoTexto} alt="" />
        </Link>

        <div className="formLogin" id="formLogin">
          <form onSubmit={submitLoginHandler}>
            <div className="formHeader">
              <div className="title">
                <h1>Login</h1>
              </div>
            </div>

            <div className="inputs">
              <div className="inputbox">
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Digite seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="true"
                />
              </div>
              <div className="inputbox">
                <label htmlFor="password">Senha:</label>
                <input
                  name="senha"
                  id="password"
                  type="password"
                  value={senha}
                  placeholder="Digite sua senha"
                  onChange={(e) => setSenha(e.target.value)}
                  autoComplete="true"
                />
              </div>
            </div>

            <div className="signupClick">
              <p>
                Não é cadastrado ? <a href="/cadastro">Clique Aqui.</a>
              </p>
            </div>

            <div className="loginButton">
              <button type="submit" id="loginButton">
                Entrar
              </button>
            </div>
            <div className="msg"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
