import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";

import ScrollToTop from "./utils/ScrollToTop";

//Paginas
import Home from "./pages/Home/index";
import Produto from "./pages/Produto/Produto";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import CreateProduct from "./pages/AdmPage/CreateProduct";
import Carrinho from "./pages/Carrinho/Carrinho";
import FinalizarPedido from "./pages/FinalizarPedido/FinalizarPedido";
import Produtos from "./pages/Produtos/Produtos";
import Pagina404 from "./pages/Pagina404/Pagina404";
import UserProfile from "./pages/UserProfile/UserProfile";


function Router() {

  
  return (
    <BrowserRouter>
        <ScrollToTop/>
      <Routes>
        //Rotas públicas
        <Route exact path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Produto/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/carrinho" element={<Carrinho/>}/>
        <Route path="/departamento/:dep" element={<Produtos/>}/>
        <Route path="/departamento/:dep/:subdep" element={<Produtos/>}/>
        <Route path="/busca" element={<Produtos/>}/> 
        <Route path="/cadastro" element={<Cadastro/>}/> 
        <Route path="*" element={<Pagina404/>}/>
        <Route path="/404" element={<Pagina404/>}/>
        //Rotas privadas
        <Route element={<PrivateRoutes/>}>
          <Route path="/criarproduto" element={<CreateProduct/>}/>
          <Route path="/finalizar-pedido" element={<FinalizarPedido/>}/>
          <Route exact path="/minha-conta" element={<UserProfile/>}/>
          <Route path="/minha-conta/:secao" element={<UserProfile/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
