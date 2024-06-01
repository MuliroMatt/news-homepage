import React from 'react';
import Header from './components/Header';
import FutureWeb from './components/FutureWeb';
import New from './components/New';
import TopThree from './components/TopThree';
import MobileMenu from './components/MobileMenu';

const App = () => {
   return (
      <div className='content'>
         <Header />
         <main className='main-content'>
            <FutureWeb />
            <New />
            <TopThree />
         </main>
      </div>
   );
};

export default App;
