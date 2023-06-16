import React from "react";
import FlexProducts from "../../../components/FlexProducts/FlexProducts";
import CardProduto from "../../../components/CardProduto/CardProduto";

import "./HomeSession.css";

function HomeSession(props) {
  return (
    <div className="home-session">
      <div className="session-header">
        <img src={props.icon} />
        <h1>{props.title}</h1>
      </div>
      <div className="session-content">
        <FlexProducts>
          {props.children}
        </FlexProducts>
      </div>
    </div>
  );
}

export default HomeSession;
