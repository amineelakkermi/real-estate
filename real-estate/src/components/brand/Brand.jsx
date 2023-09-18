import React from 'react'
import { prologis , tower , equinix , realty  } from '../../assets'

const Brand = () => {
  return (
    <div className='w-full flex lg:flex-row flex-col lg:gap-[250px] gap-[30px] mt-5  items-center'>
      <img src={prologis} alt="prologis" className='w-[130px] h-[130px] object-contain' />
      <img src={tower} alt="tower" className='w-[130px] h-[130px] object-contain' />
      <img src={equinix} alt="equinix" className='w-[130px] h-[130px] object-contain' />
      <img src={realty} alt="realty" className='w-[130px] h-[130px] object-contain' />

    </div>
      )
}

export default Brand