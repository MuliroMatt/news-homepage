import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import FutureWeb from './components/FutureWeb';
import New from './components/New';
import TopThree from './components/TopThree';
import MobileMenu from './components/MobileMenu';

const App = () => {
   const [isOpen, setIsOpen] = useState(false);

   const open = () => {
      setIsOpen((open) => !open);
   };

   return (
      <div className='content'>
         <AnimatePresence>
            {isOpen && <MobileMenu handleOpen={open} />}
         </AnimatePresence>
         <Header handleOpen={open} />
         <main className='main-content'>
            <FutureWeb />
            <New />
            <TopThree />
         </main>
      </div>
   );
};

export default App;
