import React from 'react';

const TopThreeItems = ({ img, number, title, text }) => {
   return (
      <article className='top-three__article'>
         <figure className='top-three__article__img'>
            <img src={img} />
         </figure>
         <div className='group'>
            <span className='top-three__number'>{number}</span>
            <h4 className='top-three__title'>{title}</h4>
            <p className='top-three__text'>{text}</p>
         </div>
      </article>
   );
};

export default TopThreeItems;
