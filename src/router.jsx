import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
//Paginas
import Home from "./pages/Home/index";
import Produto from "./pages/Produto/Produto";
import Login from "./pages/Login/Login";
import CreateProduct from "./pages/AdmPage/CreateProduct";
import Carrinho from "./pages/Carrinho/Carrinho";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        //Rotas públicas
        <Route exact path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Produto/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/carrinho" element={<Carrinho/>}/>
        //Rotas privadas
        <Route element={<PrivateRoutes/>}>
          <Route path="/criarproduto" element={<CreateProduct/>}/>
        </Route>
        {/* <PrivateRoute path="/criarproduto" element={<CreateProduct/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
