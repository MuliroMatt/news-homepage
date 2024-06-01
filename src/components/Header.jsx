import React, { useState } from 'react';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import MobileMenu from './MobileMenu';
import Backdrop from './Backdrop';

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen((open) => !open);
   };

   return (
      <>
         <Backdrop open={isOpen ? 'backdrop--open': ''}>
            <MobileMenu open={isOpen ? 'mobile-menu--open': ''}/>
         </Backdrop>
         <header className='header'>
            <Logo />
            <MenuIcon onclick={toggleMenu}/>
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
      </>
   );
};

export default Header;
