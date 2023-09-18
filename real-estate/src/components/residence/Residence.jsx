import React from 'react'
import './residence.css'
import { Swiper , SwiperSlide , useSwiper } from 'swiper/react'
import "swiper/css"
import data from '../../slider'
import { sliderSettings } from '../../utils/common'


const Residence = () => {
  return (
    <section id='residence'>
  
   <div className='relative flex flex-col'>
   <div className='flex flex-col my-5 gap-5 relative'>
    <span className='text-[orange] text-[32px] font-bold'>Best Choises</span>
    <span className='text-primary text-[35px] font-bold'>Popular Residencies</span>
    </div>
   
   
 
  <Swiper {...sliderSettings} className='w-full mt-5 flex  justify-center items-center ' >

<SliderButtons />

  {
    data.map((card , i) => (
      <SwiperSlide key={i}>
        <div className='cardContent flex flex-col gap-3 '>
          <img src={card.image} alt="house" className='w-[100%]' />
          <div className='cardContentPrice flex flex-row'>
          <span className='text-[orange] font-medium text-[20px]'>$ {''}
          <span className='text-[#999] font-medium text-[20px]'>{card.price}</span> 
          </span>
         
          </div>
          <div className='cardContentDetail flex flex-col gap-3'>
          <span className='text-[#1f3e72] font-bold text-[26px]'>{card.name}</span>
          <span className='text-[#999]'>{card.detail}</span>
          </div>
         
     </div>
      </SwiperSlide>
    ))
  }
  </Swiper>
   </div>



    
 
  
   
    </section>
  )
}

export default Residence;

const SliderButtons = () => {
  const swiper = useSwiper();
  return(
    <div className='r-buttons'>
    <button onClick={() => swiper.slidePrev()} >&lt;</button>
    <button onClick={() => swiper.slideNext()} >&gt;</button>
    </div>
  )
}