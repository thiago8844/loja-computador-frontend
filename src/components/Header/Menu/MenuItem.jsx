import React, { useState} from "react";
import { Link } from "react-router-dom"
//COMPONENTES
import Dropdown from "./Dropdown";
//CSS
import "./MenuItem.css";

function MenuItem({ item, depthLevel }) {
  //State
  const [dropdown, setDropdown] = useState(false);
  //Props
  const { title, key, url } = item;

  const toogleDropdown = (e) => {
    e.preventDefault();
    setDropdown((prev) => !prev);
  };
  
  return (
    <li className={`menu-item ${item.title === "departamentos" ? "dep" : ""}`} key={key} onMouseEnter={toogleDropdown} onMouseLeave={toogleDropdown}>
      {item.subMenu ? (
        <>
          <Link
            to={url ? `/departamento${url}` : ""}
            aria-expanded={dropdown ? "true" : "false"}
          > 
   
            
            {item.icon && depthLevel===0 ? (<img src={item.icon}/>) : ""} 
            {title} 
            {item.icon && depthLevel===1 ? (<img src={item.icon}/>) : ""} 
          </Link>
          
          <Dropdown
            subMenu={item.subMenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <Link to={`/departamento${url}`}>{item.icon && depthLevel===0 ? (<img src={item.icon}/>) : ""} {title}</Link>
      )}
    </li>
  );
}

export default MenuItem;
