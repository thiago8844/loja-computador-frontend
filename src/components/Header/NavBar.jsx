import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie/cjs/Cookies";
import jwt from "jwt-decode";
//CSS
import "./NavBar.css";

//Imagens
import logoPrincipal from "../../images/logos/logo 2 degradê+texto Horizontal.svg";
import logoMobile from "../../images/logos/Logo sozinha.svg";
import userLogo from "../../images/icons/user.svg";

function NavBar() {
  const cookies = new Cookies();
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState("");

  const logOut = () => {
    cookies.remove("auth");
    setUserName("");
    setAuth(false);
  };

  useEffect(() => {
    const token = cookies.get("auth");
    if (token) {
      const { name } = jwt(token);
      setUserName(name);
      setAuth(true);
    }
  }, []);


  return (
    <nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="hamburguer-mobile"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <Link to="/" className="container-mobile">
        <img src={logoMobile} alt="" className="logo-mobile-texto" />
      </Link>

      <Link to="/" className="logo-container">
        <img className="logo" src={logoPrincipal} alt="" />
      </Link>

      <div className="barra-pesquisa">
        <form action="/busca" method="GET">
          <input
            type="text"
            placeholder="Digite o que você procura"
            name="keywords"
            autoComplete="off"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icone-pesquisa"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
      </div>

      <div className="user-mensagem">
        <img src={userLogo} alt="user logo" className="user icon-nav" />

        {auth ? (
          <p>
            <span>
              Olá, <strong id="user-name">{userName}</strong>
            </span>
            <br />
            <Link to="/minha-conta">Minha Conta</Link> |{" "}
            <Link to="" onClick={logOut}>
              Sair
            </Link>
          </p>
        ) : (
          <p>
            <Link to="/cadastro" className="strong">
              Cadastre-se
            </Link>
            <br />
            ou{" "}
            <Link to="/login" className="strong">
              faça Login
            </Link>
          </p>
        )}
      </div>

      <div className="opcoes-nav">
        <Link to="#" className="link-desejos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="desejos icon-nav"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </Link>

        <Link to="/carrinho" className="link-carrinho">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="carrinho icon-nav"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
