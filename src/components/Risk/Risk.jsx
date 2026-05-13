import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router'

const Risk = () => {
  return (
    <div className='flex justify-center z-0'>
    <div className='flex relative  justify-around items-center bg-primary md:w-[70%]  lg:p-[60px] md:p-[20px] md:rounded-[32PX] sm:w-[70%] sm:p-[30px] p-[20PX] rounded-[32PX] 
      before:absolute 
      before:w-full
       before:h-full
  before:bg-[#583FBC]
  before:content-[""]
  before:top-[1%]
   before:left-[1%]
  before:rounded-[32px]
  before:rotate-2
  before:z-0 '>
      <div className='w-2/3 relative z-10'>
        <h2 className='font-semibold md:text-[48px] text-white text-[20px]' >Try me out, risk free!</h2>
        <p className=' text-[10px] md:text-[20px] md:font-normal text-white'>If you’re not happy with the design after the first draft,
          I’ll refund your deposit, no questions asked</p>
      </div>
      <div className='md:w-1/5 z-10 text-white md:justify-around  md:items-center cursor-pointer rounded-[6px] bg-primary flex '>
        <a href="#contact" className='flex justify-around items-center cursor-pointer md:p-[5px] '> Contact <FaArrowRight /></a>
      </div>
   
    </div>
    </div>
    
  )
}

export default Risk
