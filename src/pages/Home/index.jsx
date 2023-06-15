import React from "react";
//Componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BannerSlider from "./BannerSlider/BannerSlider.jsx";
import HomeSession from "./HomeSession/HomeSession";
import DepartmentSession from "./DepartmentSession/DepartmentSession";

import clockIcon from "../../images/icons/clock.svg";
import lightningIcon from "../../images/icons/lightning.svg";

import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <BannerSlider />
        <div className="home-container">
          
          <HomeSession title="ofertas" icon={clockIcon}/>
          <HomeSession title="mais vendidos" icon={lightningIcon}/>
          <DepartmentSession/>



        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
