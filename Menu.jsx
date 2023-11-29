import React from 'react'
import '../styles/menu.sass'

export const Menu = () => {
  return (
    <nav className='menu' id='menu'>
        <div className='menuLogo' id='menuLogo'>logo</div>
        <div className='menuItems' id='menuItem'>
            <li className='menuItemsitem' id='menuItemsitem'>Personas</li>
            <li className='menuItemsitem' id='menuItemsitem'>estado</li>
            <li className='menuItemsitem' id='menuItemsitem'>país</li>
            <li className='menuItemsitem' id='menuItemsitem'>contacto</li>
        </div>
    </nav>
  )
}