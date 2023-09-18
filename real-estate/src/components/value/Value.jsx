import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './value.css'
import { value } from '../../assets';
import accordionData from '../../utils/accrodion';

const Value = () => {
  return (
    <section id='value' className='flex lg:flex-row flex-col justify-between items-start mt-10'>
     <div className={`flex-1 flex mt-10 justify-center items-center`}>
      <div className='img-container w-[480px] h-[560px]  md:mx-12 mx-4  '>
      <img src={value} alt="value" className='md:w-[100%]  h-[100%] relative z-[5] ' />      </div>
    </div>

    <div className='flex-1 mt-20 font-semibold text-[30px]'>
    <span className='text-[orange] font-semibold text-[30px]'>Our Value</span>
    <h2 className='text-primary font-bold text-[35px] mt-2'>Value We give to you</h2>
    <span className='text-[#999] text-[16px] mt-2 '>
    We always ready to help by providijng the best services for you.
    We beleive a good blace to live can make your life better
    </span>

    
    <Accordion
    className='accordion mt-[2rem]'
    allowMultipleExpanded={false}
    preExpanded={[0]}
    >
      {
        accordionData.map((item , index) => (
          <AccordionItem className='accordionItem' key={index} uuid={index}>
          <AccordionItemHeading >
            <AccordionItemButton className='flex justify-between items-center p-[1rem] w-full'>
              <div className='accordionButton w-[50px]  rounded-[5px] p-[10px]  text-[18px]'>
               {item.icon}
              </div>
              <span className='text-primary font-bold text-[19px] tracking-[0.1px] '>{item.heading}</span>
              <div>
              <MdOutlineArrowDropDown size={20} color='blue'/>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='accordionPannelText'>
              <span className=' text-[#999] text-[16px] tracking-[0.5px] leading-[10px]'>{item.detail}</span>
            </div>
          </AccordionItemPanel>
          </AccordionItem>
        ))
      }
    
      
    
    </Accordion>
     </div>
    </section>
  )
}

export default Value