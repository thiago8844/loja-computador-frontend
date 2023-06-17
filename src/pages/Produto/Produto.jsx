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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const loadProducts = async () => {
    try {
      const response = await api.get(`produto/${id}`);
      setProduct(response.data);
      //Seta a imagem
      setActiveImage(response.data.Imagem[0].caminho);
      setActiveImageIndex(0);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const changeImage = (i) => {
    const imagens = product.Imagem;
    setActiveImage(imagens[i].caminho);
    setActiveImageIndex(i);
  };

  const nextImage = (i) => {
    const imagesLength = product.Imagem.length - 1;

    if (activeImageIndex === imagesLength) {
      setActiveImage(imagens[0].caminho);
      setActiveImageIndex(0);
    }

    setActiveImageIndex((prev) => prev + 1);
    changeImage();
  };

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
                    <img
                      onClick={(e) => changeImage(i)}
                      src={`${cdn}${img.caminho}`}
                      alt="imagem produto"
                      key={i}
                      className={`${i === activeImageIndex ? "active" : ""}`}
                    />
                  );
                })}
              </ImageSlider>

              <ImageContainer>
                <img src={`${cdn}${activeImage}`} alt="imagem em destaque" />
              </ImageContainer>

              <ProductInfo price={product.preco} />
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
