import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Paginas
import Home from "./pages/Home/index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          exact
          path="/"
          element={<Home/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
