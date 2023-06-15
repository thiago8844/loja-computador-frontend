//Módulos
import React from "react";

//Componentes
import NavBar from "./NavBar";
import Menu from "./Menu/Menu";
//CSS
import "./Header.css"
//Imagens


function Header() {
  return (
    <header>
      <NavBar/>
      <Menu/>
    </header>
  );
}

export default Header;