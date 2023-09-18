import React from 'react'

const Footer = () => {
  return (
  <div className='w-full flex lg:flex-row flex-col lg:justify-between justify-center items-center mt-20'>
  <div className='flex flex-col justify-center items-center '>
  <h2 className='text-primary font-bold text-[30px]'>Homyz</h2>
  <p className='text-[#999] mt-5 max-w-[230px] text-center'>Our vision is to make all people the best place to live for them.</p>
  </div>
  <div className='flex flex-col justify-center items-center mt-5'>
  <h2 className='text-primary font-bold text-[30px]'>Information</h2>
  <p className='text-[#999] mt-5 max-w-[230px] text-center'>145 New York, FL 5467, USA</p>
  <ul className='flex flex-row gap-5 mb-10'>
    <li className='text-[#000] font-medium mt-5 text-[20px]'>Property</li>
    <li className='text-[#000] font-medium mt-5 text-[20px]'>Services</li>
    <li className='text-[#000] font-medium mt-5 text-[20px]'>Product</li>
    <li className='text-[#000] font-medium mt-5 text-[20px]'>About Us</li>
  </ul>
  </div>
  </div>
  )
}

export default Footer