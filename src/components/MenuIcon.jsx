import React, { useState } from 'react'
import IconMenu from './IconMenu'
import IconsMenuClose from './IconsMenuClose'

const MenuIcon = ({onclick}) => {

    const [isOpen, setIsOpen] = useState(true)

    const changeIcon = () =>{
        setIsOpen((open) => !open)
    }

  return (
    <div className='icon-menu' onClick={() => { onclick(); changeIcon(); }}>
        { isOpen ? <IconMenu/> : <IconsMenuClose/>}
    </div>
  )
}

export default MenuIcon