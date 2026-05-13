import React from 'react'

function About() {
  return (
    <div>
    <div className='flex flex-col items-center sm:flex-row  sm:justify-around sm:mt-[50px] '>
     <div className='w-1/2 sm:w-2/5 md:pt-5 '>
      <img className='w-full ' src="/about.png" alt="" />
     </div>
    <div className=' w-3/4 sm:w-2/5 text-center justify-between '>
      <h2 className='text-[40px] font-semibold mb-1'>About Me</h2>
      <p className='text-[15px] font-normal mb-[10px]'>I don't just build websites; I craft digital experiences that live at the intersection of design and logic. As a Front-End Developer, I bridge the gap between complex backend systems and the end user, ensuring every pixel is in its place and every interaction feels intuitive. My mission is to turn creative concepts into high-performance, responsive reality.</p>
     <div className='flex flex-col '>
       <label htmlFor="">Html5</label>
       <input type="range" className='sm:h-[25px]'  />
     </div>
       <div className='flex flex-col '>
       <label htmlFor="">Css3</label>
       <input type="range" className='sm:h-[25px]' />
     </div>
       <div className='flex flex-col'>
       <label htmlFor="">JavaScript</label>
       <input type="range"  className='sm:h-[25px] ' />
     </div>
      <div className='flex flex-col'>
       <label htmlFor="">React</label>
       <input type="range"  className='sm:h-[25px]' />
     </div>
     <div className='flex flex-col'>
       <label htmlFor="">Tailwind</label>
       <input type="range"  className='sm:h-[25px]' />
     </div>
     <div className='flex flex-col'>
       <label htmlFor="">Bootstrap</label>
       <input type="range"  className='sm:h-[25px]' />
     </div>
     </div>

    </div>
      <hr className="border-t-2 border-dashed border-gray-400 my-10" />
</div>
  )
}

export default About
