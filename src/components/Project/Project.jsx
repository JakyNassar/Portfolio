import React, { useState } from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { LuCircleArrowOutUpRight } from 'react-icons/lu'
import './Project.css'
import { Link, useParams } from 'react-router'

function Project() {
    const items=[
        {
            id:1,
            image:"/Portfolio/countries.png",
            desc:"countries details",
            tools:"Html,Css,Js",
        },
          {
            id:2,
            image:"/Portfolio/travel.png",
            desc:"travel website ",
            tools:"Html,Css",
        },
          {
            id:3,
            image:"/Portfolio/gender.png",
            desc:"Expect the gender",
            tools:"Html,Css,Js",
        },
          {
            id:4,
            image:"/Portfolio/exams.png",
            desc:"exam",
            tools:"Html,Css,JS",
        },
          {
            id:5,
            image:"/Portfolio/roll.png",
            desc:"roll the dice",
            tools:"Html,Css,Js",
        },
          {
            id:6,
            image:"/Portfolio/trippy.png",
            desc:"trippy",
            tools:"Html,Css,Js,react",
        }
    ]
 const [fullImage,setFullImage]=useState(null)
    
    
  return (
    <div className='mt-[100px] lg:p-[30px]'>
        <div className='flex flex-col p-[10px] lg:mb-[30px] lg:flex-row lg:justify-between lg:items-center '>
            <div className='p-[20px] '>
              <p className='text-primary sm:text-[30px]'>Portfolio</p>
              <h2 className='font-medium sm:text-[35px]'>My Creative Works Latest <span className='text-primary'> Projects</span></h2>
            </div>
        
            <div className='ml-[15px] lg:pr-[20px] '>
              <Link to="https://github.com/JakyNassar" className='bg-primary cursor-pointer text-white rounded-2xl p-[5px] text-[10px] sm:text-[15px] lg:p-[10px]'>View Github </Link>
           </div>
       </div>
      <div className='flex flex-col items-center gap-[50PX] sm:flex-row sm:flex-wrap justify-around  '>
      {items?.map((item,index)=>(
        
        <div key={index} className='flex flex-col items-center gap-[20px] sm:w-1/3 lg:w-1/4  '> 
        
          <div className='card'>
             <div className='w-3/4 sm:w-full overflow-hidden relative '> 
               <img id='image' className='w-full  rounded-[8px] ' src={item.image} alt='image is not found'/>
            </div>
           <div className='overlay cursor-pointer'>
            <BsArrowsFullscreen  onClick={()=>{
              
                setFullImage(item.image)
                
            }} />
            <Link to={`/show/${item.id}`}> 
                   <LuCircleArrowOutUpRight  className=' cursor-pointer'/>   
                </Link>
            
             </div>
          </div>
            <div className='flex items-center w-full  justify-around '>
               <div>
                <h3 className='font-bold text-[15px] uppercase md:text-[20px] '>{item.desc}</h3>
                <p>{item.tools}</p> 
                </div>
                <Link to={`/show/${item.id}`}> 
                   <LuCircleArrowOutUpRight  className='text-primary cursor-pointer'/>   
                </Link>
             </div>
             {
                fullImage &&(
                    <div className='overlay1' onClick={()=>setFullImage(null)}>
                          <img src={fullImage}
                      className='full-image'
                      
                      
                      />
                    </div>
                )
             }
        </div>
      ))}
      
      </div>
    </div>
  )
}

export default Project

