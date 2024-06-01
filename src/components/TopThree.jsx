import React from 'react';
import TopThreeItems from './TopThreeItems';
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

const TopThree = () => {
   return (
      <section className='top-three'>
         <TopThreeItems img={img1} number='01' title='Reviving Retro PCs' text='What happens when old PCs are given modern upgrades?'/>
         <TopThreeItems img={img2} number='02' title='Top 10 Laptops of 2022' text='Our best picks for various needs and budgets.'/>
         <TopThreeItems img={img3} number='03' title='The Growth of Gaming' text='How the pandemic has sparked fresh opportunities.'/>
         {/* <div className="shadow"></div> */}
      </section>
   );
};

export default TopThree;
