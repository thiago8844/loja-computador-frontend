import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Pagina404.css";

function Pagina404() {
  return (
    <>
      <Header />
      <div className="pag404">
        <h2>
          Lamentamos, nenhum produto encontrado com esse critério de pesquisa
        </h2>
        <p>Tente novamente com outro termo para busca...</p>
      </div>
      <Footer />
    </>
  );
}

export default Pagina404;
