import React from 'react'
//Componentes
import MenuItem from './MenuItem'
//CSS
import "./Menu.css"
//Dados
import { menuStruct } from './MenuStruct'


function Menu() {
  
  return (

      <ul className='menu'>
        {menuStruct.map((item, index) => {
          const depthLevel = 0;

          return (
            <MenuItem item={item} key={index} depthLevel={depthLevel}/>
          );
        })}
      </ul>

  )
}

export default Menu