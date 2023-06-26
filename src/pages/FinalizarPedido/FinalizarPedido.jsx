import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { checkAuth } from "../../utils";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Delivery from "./Delivery";
import Payment from "./Payment/Payment";
import Purchase from "./Purchase/Purchase";

import "./FinalizarPedido.css";

function FinalizarPedido() {
  const navigate = useNavigate();
  const [orderAddress, setOrderAddress] = useState(null);
  const [orderItems, setProducts] = useState([]);

  const { token } = checkAuth();

  //Finaliza a compra, manda o request com o pedido para o servidor
  const finishPurchase = async () => {
    try {
      const resultado = await api.post("/criarpedido", orderAddress, {
        headers: {
          Authorization: token,
        },
      });


      if(resultado.status === 200) {
        navigate("/minha-conta/pedidos");
      }
      //Ao final redirecionar ele para a página minha-conta/pedidos 
    } catch (error) {
      console.error(error);
    }
  };

  //Puxa os items do carrinho
  const loadOrderItems = async () => {
    try {
      const response = await api.get(`produtos-usuario`, {
        headers: {
          Authorization: token,
        },
      });
      if(response.data.length === 0 ) return navigate("/carrinho", {replace:true});
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  //Carrega os produtos ao inciar a página
  useEffect(() => {
    loadOrderItems();
  }, []);



  return (
    <>
      <Header />
      <div className="finish-purchase">
        <Delivery setOrderAddress={setOrderAddress} />
        <Payment />
        <Purchase
          finishPurchase={finishPurchase}
          orderItems={orderItems}
        />
        <fieldset className="delivery-type finish-purchase-page-container">
          <legend>Tipo Entrega</legend>
          <input name="entrega" defaultChecked={true} type="radio" />
          <label htmlFor="entrega">
            {" "}
            Entrega Econômica <span className="gratis">Gratis</span>
          </label>
        </fieldset>
      </div>
      <Footer />
    </>
  );
}

export default FinalizarPedido;
