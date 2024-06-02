import React, { useState } from 'react';
import Logo from './Logo';
import IconMenu from './IconMenu';

const Header = ({handleOpen}) => {
   return (
      <header className='header'>
         <Logo />
         <IconMenu onClick={handleOpen}/>
         <ul className='header__links'>
            <li className='header__links__item'>
               <a href='#'>Home</a>
            </li>
            <li className='header__links__item'>
               <a href='#'>New</a>
            </li>
            <li className='header__links__item'>
               <a href='#'>Popular</a>
            </li>
            <li className='header__links__item'>
               <a href='#'>Trending</a>
            </li>
            <li className='header__links__item'>
               <a href='#'>Categories</a>
            </li>
         </ul>
      </header>
   );
};

export default Header;
