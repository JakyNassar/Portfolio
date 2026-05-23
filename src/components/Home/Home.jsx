 import React from 'react'
import { Outlet } from 'react-router'
 
 function Home() {
    
   return (
    <div className=' home h-[600PX] pt-[70PX] '>
     <div className=' flex flex-col-reverse items-center md:flex md:flex-row justify-around  mt-[1%] lg:justify-around md:flex md:justify-around mt-[50px]'>
       <div className='md:max-w-1/2 w-[60%] pt-10 md:pt-[20PX] md:pl-[50px]'>
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
          md:mt-0
          w-[60%]
          sm:w-[50%]
          md:w-[40%]
          lg:w-[30%]
        ">
        <img className='  md:w-full   relative z-10' src="/Portfolio/jaky.png" alt="" />

       </div>
     </div>
    
    <hr className="border-t-2 border-dashed border-gray-400 my-10" />

     </div>

   )
 }
 
 export default Home