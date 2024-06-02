import React, { useState } from 'react';
import Backdrop from './Backdrop';
import IconsMenuClose from './IconsMenuClose';
import { motion } from 'framer-motion';

const MobileMenu = ({ handleOpen }) => {
   return (
      <Backdrop onClick={handleOpen}>
         <motion.section 
         initial={{ x: '300px' }}
         animate={{ x: '0px'}}
         exit={{ x: '300px' }}
         transition={{
           duration: .3,
         }}
         onClick={(e) => e.stopPropagation()} 
         className='mobile-menu'>
            <IconsMenuClose onClick={handleOpen} />
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
         </motion.section>
      </Backdrop>
   );
};

export default MobileMenu;
