import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartProducts from "./CartProducts";

import "./Carrinho.css"

function Carrinho() {
  return (
    <>
      <Header />
      <div className="cart-container">
        <CartProducts/>
        
      </div>
      <Footer />
    </>
  );
}

export default Carrinho;
