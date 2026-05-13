 import React from 'react'
import { Outlet } from 'react-router'
 
 function Home() {
    
   return (
    <div className=' home h-[600PX] pt-[70PX] '>
     <div className=' flex justify-around  mt-[1%] lg:justify-around md:flex md:justify-between mt-[50px]'>
       <div className='max-w-1/2 pt-20 md:pl-[50px]'>
        <h2 className='font-bold text-[25px] 
        sm:text-[30px]
        md:text-[35px]
        lg:text-[50px]
        '
        ><span className='font-normal'> HEY ! </span> I am Jaky ,Frontend Developer</h2>
        <p className='text-lg font-normal'>Building high-performance, interactive, and responsive web applications with a focus on clean code and great user experience.</p>
         <button onClick={()=>window.open("/Jaky-CV.pdf")} className='text-[#1D2130] bg-[#eee] m-[10px] p-[5px] md:m-[40px] md:p-[10px] md:w-[150px] cursor-pointer'>Download Cv</button>
       </div>
       <div className="
         flex
          relative
          mt-8
          w-[45%]
          sm:w-[40%]
          md:w-[40%]
          lg:w-[30%]
           md:before:content-[''] 
           md:before:absolute
           md:before:w-3/4
           md:before:h-1/2
           md:before:top-[-4%]
           md:before:left-[-5%]
           lg:before:w-3/4
           lg:before:h-3/4
         before:bg-gray-300 
           before:z-0
           before:rounded-full">
        <img className='  md:w-2/3 relative z-10' src="/Portfolio/jaky.png" alt="" />

       </div>
     </div>
    
    <hr className="border-t-2 border-dashed border-gray-400 my-10" />

     </div>

   )
 }
 
 export default Home