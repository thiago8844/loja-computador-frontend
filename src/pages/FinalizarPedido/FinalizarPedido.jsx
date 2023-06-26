import React, {useState, useEffect} from "react";
import api from "../../services/api";
import { checkAuth } from "../../utils";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Delivery from "./Delivery";
import Payment from "./Payment/Payment";
import Purchase from "./Purchase/Purchase";

import "./FinalizarPedido.css";

function FinalizarPedido() {
  const [orderAddress, setOrderAddress] = useState(null);
  const [total, setTotal] = useState(0);
  const [orderItems, setProducts] = useState([]);
  
  const { user_id, authenticated, token } = checkAuth();

  //Finaliza a compra, manda o request com o pedido para o servidor
  const finishPurchase = () => {
    const order = {
      orderAddress,
    }
    console.log(order)
    try {
      
    } catch (error) {
      
    }
  }

  //Puxa os items do carrinho
  const loadOrderItems = async () => {
    try {
      const response = await api.get(`produtos-usuario`, {
        headers: {
          Authorization: token,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Calcula o valor total
  const totalPrice = () => {
     let totalPrice = 0;
     for(let p of orderItems) {
      console.log(p)
      totalPrice += Number(p.preco) * p.quantidade;
     }
     
     console.log(totalPrice)
     setTotal(totalPrice);
  }
  
  //Carrega os produtos ao inciar a página
  useEffect(() => {
    loadOrderItems();
  }, []);

  //Chama o cálculo sempre que o state orderItems muda
  useEffect(() => {
    totalPrice();
  },[orderItems])


  return (
    <>
      <Header/>
      <div className="finish-purchase">
        <Delivery setOrderAddress={setOrderAddress}/>
        <Payment/>
        <Purchase finishPurchase={finishPurchase} orderItems={orderItems} total={total}/>
        <fieldset className="delivery-type finish-purchase-page-container">
          <legend>Tipo Entrega</legend>
          <input name="entrega" defaultChecked={true} type="radio" />
          <label htmlFor="entrega"> Entrega Econômica <span className="gratis">Gratis</span></label>
        </fieldset>
      </div>
      <Footer/>
    </>
  );
}

export default FinalizarPedido;
