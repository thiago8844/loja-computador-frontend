import React, { useState, useEffect } from "react";
import "./Orders.css";
import api from "../../../services/api";
import { checkAuth } from "../../../utils";
import OrderCard from "./OrderCard";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { token } = checkAuth();

  

  const loadUserOrders = async () => {
    try {
      const response = await api.get("pedidos", {
        headers: {
          Authorization: token,
        },
      });

      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUserOrders();
  }, []);

  return (
    <div className="user-orders-container">
      <h1>Seus Pedidos</h1>

      <ul className="user-orders">
        
        {orders.map((order, index) => <OrderCard key={index} order={order}/>)}
      </ul>
    </div>
  );
}

export default Orders;
