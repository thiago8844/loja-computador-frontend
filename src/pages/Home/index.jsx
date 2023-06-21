//Módulos
import React, { useEffect, useState } from "react";
import api from "../../services/api";
//Componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BannerSlider from "./BannerSlider/BannerSlider.jsx";
import HomeSession from "./HomeSession/HomeSession";
import DepartmentSession from "./DepartmentSession/DepartmentSession";
import CardProduto from "../../components/CardProduto/CardProduto";
//Imagens
import clockIcon from "../../images/icons/clock.svg";
import lightningIcon from "../../images/icons/lightning.svg";

import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await api.get("todosprodutos");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <main>
        <BannerSlider />
        <div className="home-container">
          <HomeSession title="ofertas do momento" icon={clockIcon}>
            {products.map((prod, i) => (
              <CardProduto page={"home"} product={prod} key={i} />
            ))}
          </HomeSession>

          <HomeSession title="mais vendidos" icon={lightningIcon}>
            {products.map((prod, i) => (
              <CardProduto  page={"home"} product={prod} key={i} />
            ))}
          </HomeSession>
          <DepartmentSession />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
