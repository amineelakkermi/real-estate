import React from 'react'
import './start.css'

const GetStarted = () => {
  return (
    <section id='start' className='start flex flex-col justify-center items-center mt-[100px] p-10 rounded-[10px]'>
     <h2 className='text-[35px] font-bold tracking-[1px]'>Get Started With Homyz</h2>
     <span className='leading-[32px] text-[17px] tracking-[0.4px] max-w-[470px] text-center my-5'>Subscribe and find super attractive price quotes from us.
     Find your residence soon</span>
     <button className='start-button py-2 px-6 rounded-[10px] mt-2'>Get Started</button>
    </section>
  )
}

export default GetStarted