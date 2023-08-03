import React from 'react';
import CouinterDown from '../components/home/counterDown/CouinterDown';
import Information from '../components/home/information/Information';
import Merque from '../components/home/merque/Merque';
import Slider from '../components/home/slider/Slider';

const Home = () => {
  return (
    <div className='p-6 '>
      {/* slider  */}
   
       <Slider   />
       <Merque />
       <Information />
       <section className='bg-hero-bg'>
       <CouinterDown />

       </section>

     
 
     
    
     


    </div>
  )
}

export default Home