import React from 'react'
import { hero } from '../../assets'
import './hero.css'
import CountUp from 'react-countup';
import styles from '../../style';
import { layout } from '../../style';
import { motion } from 'framer-motion';
import { staggerContainer , textVariant } from '../../utils/motion';

const Hero = () => {
  return (
    <section
    className={`bg flex lg:flex-row flex-col  px-12 md:py-0 py-6 items-center`}>
    <div className={`flex-1  flex-col `}
    
    >
    <div className=' relative'>
    <div className='circle absolute right-[55%] -top-[5%] bg-[#C5BC4B] h-[64px] w-[64px] rounded-[99px]' />
    <h1
    variants={textVariant(1.1)}
    className='title md:text-[65px] text-[50px]  font-bold leading-[75px] '>Discover <br className='md:flex hidden' />
    Most Suitable
    <br className='md:flex hidden' /> {''} 
    Property</h1>
    </div>
   
    <p className='max-w-[470px] mt-5 text-[18px] leading-[30px] tracking-[0.5px] text-[#999]'>Find a variety of properties that suit you very easilty
    Forget all difficulties in finding a residence for you</p>
    
    <div className='search-bar'>
    <input type="text" className='text-[#000]' />
    <button className='button'>Search</button>
    </div>

    <div className='flex flex-row gap-6 mt-10'>
      <div className='flex flex-col'>
       <span className='text-[30px] font-medium'>
       <CountUp start={88000} end={90000} duration={4}/>
       <span className='text-[#C5A74B]'>+</span>
      </span>
      <span className='text-[#999]'>
        Premium Product
      </span>  
      </div>
    
      <div className='flex flex-col'>
       <span className='text-[30px] font-medium'>
       <CountUp start={1974} end={2000} duration={4}/>
       <span className='text-[#C5A74B]'>+</span>
      </span>
      <span className='text-[#999]'>
        Awards Winning
      </span>  
      </div>

      <div className='flex flex-col'>
       <span className='text-[30px] font-medium'>
       <CountUp start={0} end={28} duration={4}/>
       <span className='text-[#C5A74B]'>+</span>

      </span>
      <span className='text-[#999]'>
        Awards Winning
      </span>  
      </div>
     
     
    </div>
 
    </div>
    <div className={`flex-1 flex mt-10`}>
      <div className='img-container md:w-[480px] w-[400px] h-[560px]  md:mx-12 mx-4  '>
      <img src={hero} alt="hero" className='md:w-[100%]  h-[100%] relative z-[5] ' />
      </div>
    </div>
   </section>
  )
}

export default Hero