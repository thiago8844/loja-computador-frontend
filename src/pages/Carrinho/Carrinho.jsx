import React, { useState, useEffect } from "react";
import { checkAuth } from "../../utils";
import api from "../../services/api";

//Componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartProducts from "./CartProducts";
import PurchaseDetails from "./PurchaseDetails";

import "./Carrinho.css";

function Carrinho() {
  const [cartItems, setCartItems] = useState([]);

  const { user_id, authenticated, token } = checkAuth();

  const loadUserCart = async () => {
    try {
      const response = await api.get(`produtos-usuario`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      setCartItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const editUserProductAmount = async (action, id_produto, unique) => {
    //Guard Clause
    if (action === "subtract" && unique) return;

    const response = await api.put(
      `editarquantidadecarrinho`,
      {
        action,
        id_produto,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    loadUserCart();
  };

  const removeUserItem = async (id_produto) => {
    const response = await api.delete(`removeritemcarrinho/${id_produto}`, {
      headers: {
        Authorization: token,
      },
    });

    console.log(response);
    loadUserCart();
  };

  const clearUserCart = async () => {
    try {
      const response = await api.delete(`limparcarrinho`, {
        headers: {
          Authorization: token,
        },
      });

      loadUserCart();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (authenticated) loadUserCart();
  }, []);

  return (
    <>
      <Header />
      <div className="cart-container">
        <CartProducts
          removeUserItem={removeUserItem}
          editUserProductAmount={editUserProductAmount}
          cartItems={cartItems}
          clearUserCart={clearUserCart}
          authenticated={authenticated}
        />
        <PurchaseDetails cartItems={cartItems} />
      </div>
      <Footer />
    </>
  );
}

export default Carrinho;
