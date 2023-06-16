import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ImageSlider from "./ImageSlider";
import ImageContainer from "./MainImage";
import ProductInfo from "./ProductInfo";
import LoremDesc from "./LoremDesc";
import "./Produto.css";

import imagemTeste from "../../images/produtoteste.jpg";


function Produto(props) {
  const { id } = useParams();

  return (
    <>
      <Header />
      <main className="main-container">
        <div className="product-container">
          <h1 className="product-name">Teste</h1>

          <div className="product-area">
            <ImageSlider>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </ImageSlider>
            <ImageContainer>
              <img src="" alt="" />
            </ImageContainer>

            <ProductInfo/>
          </div>
        </div>

        <section className="container-description">
          <h3>Descrição</h3>
          <div className="description">
            {props.desc ? props.desc : <LoremDesc/>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Produto;
