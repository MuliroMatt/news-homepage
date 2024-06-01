import React from 'react';

const New = () => {
   return (
      <section className='new'>
         <h2 className='new__title'>New</h2>
         <article className='new__article'>
            <h3 className='new__article__title'>Hydrogen VS Electric Cars</h3>
            <p className='new__article__text'>
               Will hydrogen-fueled cars ever catch up to EVs?
            </p>
         </article>
         <hr />
         <article className='new__article'>
            <h3 className='new__article__title'>
               The Downsides of AI Artistry
            </h3>
            <p className='new__article__text'>
               What are the possible adverse effects of on-demand AI image
               generation?
            </p>
         </article>
         <hr />
         <article className='new__article'>
            <h3 className='new__article__title'>Is VC Funding Drying Up?</h3>
            <p className='new__article__text'>
               Private funding by VC firms is down 50% YOY. We take a look at
               what that means.
            </p>
         </article>
      </section>
   );
};

export default New;
