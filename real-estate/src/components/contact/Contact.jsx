import React from 'react'
import { contact } from '../../assets'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  return (
  <section id='contact' className='flex lg:flex-row flex-col mt-10'>
    <div className='flex-1 flex flex-col '>
    <span className='text-[orange] font-semibold text-[30px]'>Our Contact Us</span>
    <h2 className='text-primary font-bold text-[35px] mt-3'>Easy to contact us</h2>
    <span className='text-[#999] text-[18px] mt-5 max-w-[470px] leading-[30px] '>
    We always ready to help by providijng the best services for you.
    We beleive a good blace to live can make your life better
    </span>
    
    <div className='flex flex-row gap-x-5 flex-wrap'>
    <div className='contact-container flex flex-col mt-10 rounded-[5px] py-5 px-4 w-[250px] gap-6'>
    <div className='flex flex-row gap-6 items-center'>
    <div className='contact-container-bg flex justify-center items-center w-[40px] h-[40px] rounded-[4px]'>
    <MdCall size={20} className='text-[blue]'/>
    </div>
    <div className='flex flex-col '>
    <span className='text-primary text-[18px] font-medium'>Call</span>
    <span className='text-[#999]'>021 123 145 14</span>
    </div>
    </div>
    <button className='text-button font-medium contact-container-bg rounded-[4px] p-2'>Call Now</button>
    </div>
    <div className='contact-container flex flex-col mt-10 rounded-[5px] py-5 px-4 w-[250px] gap-6'>
    <div className='flex flex-row gap-6 items-center'>
    <div className='contact-container-bg flex justify-center items-center w-[40px] h-[40px] rounded-[4px]'>
    <MdCall size={20} className='text-[blue]'/>
    </div>
    <div className='flex flex-col '>
    <span className='text-primary text-[18px] font-medium'>Call</span>
    <span className='text-[#999]'>021 123 145 14</span>
    </div>
    </div>
    <button className='text-button font-medium contact-container-bg rounded-[4px] p-2'>Call Now</button>
    </div>
    <div className='contact-container flex flex-col mt-10 rounded-[5px] py-5 px-4 w-[250px] gap-6'>
    <div className='flex flex-row gap-6 items-center'>
    <div className='contact-container-bg flex justify-center items-center w-[40px] h-[40px] rounded-[4px]'>
    <MdCall size={20} className='text-[blue]'/>
    </div>
    <div className='flex flex-col '>
    <span className='text-primary text-[18px] font-medium'>Call</span>
    <span className='text-[#999]'>021 123 145 14</span>
    </div>
    </div>
    <button className='text-button font-medium contact-container-bg rounded-[4px] p-2'>Call Now</button>
    </div>
    <div className='contact-container flex flex-col mt-10 rounded-[5px] py-5 px-4 w-[250px] gap-6'>
    <div className='flex flex-row gap-6 items-center'>
    <div className='contact-container-bg flex justify-center items-center w-[40px] h-[40px] rounded-[4px]'>
    <MdCall size={20} className='text-[blue]'/>
    </div>
    <div className='flex flex-col '>
    <span className='text-primary text-[18px] font-medium'>Call</span>
    <span className='text-[#999]'>021 123 145 14</span>
    </div>
    </div>
    <button className='text-button font-medium contact-container-bg rounded-[4px] p-2'>Call Now</button>
    </div>
    
    </div>
    </div>
    <div className={`flex-1 flex mt-10 justify-center items-center`}>
      <div className='img-container w-[480px] h-[560px]  md:mx-12 mx-4  '>
      <img src={contact} alt="contact" className='md:w-[100%]  h-[100%] relative z-[5] ' />
      </div>
    </div>
  </section>
  )
}

export default Contact