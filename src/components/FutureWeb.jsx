import React from 'react';
import webDesktop from '../assets/images/image-web-3-desktop.jpg';
import webMobile from '../assets/images/image-web-3-mobile.jpg';

const FutureWeb = () => {
   return (
      <section className='future-web'>
         <picture className='future-web__banner'>
            <source media='(max-width: 620px)' srcSet={webMobile} />
            <img src={webDesktop} alt='' />
         </picture>
         <h1 className='future-web__title'>The Bright Future of Web 3.0?</h1>
         <div className='future-web__block'>
            <p className='future-web__text'>
               We dive into the next evolution of the web that claims to put the
               power of the platforms back into the hands of the people. But is
               it really fulfilling its promise?
            </p>
            <a className='btn' href=''>
               Read more
            </a>
         </div>
      </section>
   );
};

export default FutureWeb;
