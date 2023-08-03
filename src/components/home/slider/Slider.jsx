import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { slides } from "../../../data/dumyData";


const  Slider = () => {



  return (
    <> 
   
    <Swiper
   
   modules={[Navigation, Pagination, A11y, Autoplay]}
   slidesPerView={1}
   autoplay={{delay: 3000}}
   navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
     
  >
    {slides.map((slide) => (
      <SwiperSlide key={slide.image}>
        <img className=" w-full" src={slide.image} alt={slide.title}/>
      </SwiperSlide>
    ))}
    </Swiper>

 
   
   
   </>
  );
}

export default Slider