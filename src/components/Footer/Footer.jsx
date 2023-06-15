import React from "react";
//Imagens
import iconeFacebook from "../../images/icons/logo redes sociais/download (3).svg";
import iconeInsta from "../../images/icons/logo redes sociais/download (4).svg";
import iconeTwitter from "../../images/icons/logo redes sociais/download (5).svg";
import iconeYT from "../../images/icons/logo redes sociais/download (6).svg";
import whiteArrow from "../../images/icons/whiteArrow.svg";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="parte1">
        <div class="itens-footer-p1">
          <ul>
            <span class="titulo">INSTITUCIONAL</span>
            <li>
              <img src={whiteArrow} />
              <a href="">Quem somos</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Termos e Condições de Venda</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Política de Troca e Devoluções</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Política de Segurança e Privacidade</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Política de Cookies</a>
            </li>
          </ul>

          <ul>
            <span class="titulo">DÚVIDAS</span>
            <li>
              <img src={whiteArrow} />
              <a href="">Como comprar</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Prazos e entregas</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Formas de Pagamento</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Programa de Parceiros</a>
            </li>
          </ul>

          <ul>
            <span class="titulo">CLIENTE</span>
            <li>
              <img src={whiteArrow} />
              <a href="">Minha conta</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Termos e Condições de Venda</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Meus pedidos</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Meus tickets</a>
            </li>
          </ul>

          <ul>
            <span class="titulo">AJUDA</span>
            <li>
              <img src={whiteArrow} />
              <a href="">Video Tutoriais</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Manuseio do Produto</a>
            </li>
            <li>
              <img src={whiteArrow} />
              <a href="">Fale Conosco</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="parte2">
        <p>REDES SOCIAIS</p>
        <div class="redesocial-container">
          <img src={iconeFacebook} alt="" />
          <img src={iconeInsta} alt="" />
          <img src={iconeTwitter} alt="" />
          <img src={iconeYT} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
