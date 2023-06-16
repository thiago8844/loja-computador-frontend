import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Paginas
import Home from "./pages/Home/index";
import Produto from "./pages/Produto/Produto";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/produto/:id" element={<Produto/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
