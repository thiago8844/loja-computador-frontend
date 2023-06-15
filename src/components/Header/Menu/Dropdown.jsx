import React from 'react'
import MenuItem from './MenuItem';
import "./Dropdown.css"


function Dropdown({subMenu, dropdown, depthLevel}) {

  depthLevel = depthLevel + 1;
  
  const dropdownClass = depthLevel > 1 ? "__2" : "";

  
  return (
    <ul className={`sub-menu${dropdownClass} ${dropdown ? "open" : ''} `}>
      {subMenu.map((item, index) => {
        return (
          <MenuItem item={item} key={index} depthLevel={depthLevel}/>
        );
      })}
    </ul>
  )
}

export default Dropdown;