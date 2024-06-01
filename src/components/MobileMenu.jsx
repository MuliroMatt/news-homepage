import React, {useState} from 'react'
import MenuIcon from './MenuIcon'

const MobileMenu = ({open = ''}) => {

  return (
       <section className={`mobile-menu ${open}`}>
        <ul className='mobile-menu__links'>
            <li className='mobile-menu__links__item'>
               <a href='#'>Home</a>
            </li>
            <li className='mobile-menu__links__item'>
               <a href='#'>New</a>
            </li>
            <li className='mobile-menu__links__item'>
               <a href='#'>Popular</a>
            </li>
            <li className='mobile-menu__links__item'>
               <a href='#'>Trending</a>
            </li>
            <li className='mobile-menu__links__item'>
               <a href='#'>Categories</a>
            </li>
         </ul>
       </section>
  )
}

export default MobileMenu