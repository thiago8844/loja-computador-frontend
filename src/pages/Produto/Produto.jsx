//Módulos
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import cdn from "../../services/cdn";
//componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ImageSlider from "./ImageSlider";
import ImageContainer from "./MainImage";
import ProductInfo from "./ProductInfo";
import LoremDesc from "./LoremDesc";

//CSS
import "./Produto.css";

import imagemTeste from "../../images/produtoteste.jpg";
import { act } from "react-dom/test-utils";

function Produto(props) {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [activeImage, setActiveImage] = useState("");

  const loadProducts = async () => {
    try {
      const response = await api.get(`produto/${id}`);
      setProduct(response.data);
      setActiveImage(product.Imagem[0].caminho);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();

  }, []);

  if (product) {
    return (
      <>
        <Header />
        <main className="main-container">
          <div className="product-container">
            <h1 className="product-name">{product.nome}</h1>

            <div className="product-area">
              <ImageSlider>
              {product.Imagem.map((img, i) => {
                  return (
                    <img src={`${cdn}${img.caminho}`} alt="imagem produto" key={i}/>
                  )
                })}
              </ImageSlider>
              <ImageContainer>
                <img src={`${cdn}${activeImage}`} alt="imagem em destaque" />
              </ImageContainer>

              <ProductInfo price={product.preco}/>
            </div>
          </div>

          <section className="container-description">
            <h3>Descrição</h3>
            <div className="description">
              {props.desc ? props.desc : <LoremDesc />}
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

}

export default Produto;
