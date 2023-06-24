import React, { useState, useEffect } from "react";
import {
  useLocation,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import api from "../../services/api";
//Componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FilterProducts from "./FilterProducts/FilterProducts";
import ProductsOrdenation from "./ProductsOrdenation";
import FlexProducts from "../../components/FlexProducts/FlexProducts";
import CardProduto from "../../components/CardProduto/CardProduto";
//CSS
import "./Produtos.css";

function Produtos() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  const loadDepartmentProducts = async (dep, subdep) => {
    try {
      const response = await api.get(
        `/departamento/${dep}${subdep ? "/" + subdep : ""}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      if ((error.response.status = 404)) {
        navigate("/404", { replace: true });
      }
    }
  };

  const loadSearchProducts = async (keywords) => {
    try {
      const response = await api.get(`/busca?keywords=${keywords}`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      if ((error.response.status = 404)) {
        navigate("/404", { replace: true });
      }
    }
  };

  useEffect(() => {
    //Busca
    if (location.pathname.includes("/busca")) {
      const keywords = searchParams.get("keywords");
      loadSearchProducts(keywords);
    }
    // /Departamento
    else if (location.pathname.includes("/departamento")) {
      const { dep, subdep } = params;
      loadDepartmentProducts(dep, subdep);
    }
  }, [location]);

  return (
    <>
      <Header />

      <main className="products-page-container">
        <FilterProducts />
        <ProductsOrdenation productsAmount={products.length} />

        <div className="products-area">
          <FlexProducts page={"produtos"}>
            {products.map((prod, i) => (
              <CardProduto page={"produtos"} product={prod} key={i} />
            ))}
          </FlexProducts>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Produtos;
