 import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import {  FaLinkedinIn } from 'react-icons/fa'
import { TiSocialFacebook } from 'react-icons/ti'
import { Link } from 'react-router'
 
 function Footer() {
    const items=[
        {
            icon: <TiSocialFacebook />,
            path:"https://www.facebook.com/share/1UbRJCxhEg/?mibextid=qi2Omg"
        },{
            icon: <FaLinkedinIn />,
            path:"www.linkedin.com/in/jaky-nassar-a079b6241"
        },{
            icon: <AiOutlineInstagram />,
            path:"https://www.instagram.com/jakyenassar?igsh=NjF4MzV4dmZ5dHow"
        }
    ]
   return (
     <div className=' flex flex-col items-center p-[10PX] gap-[20px] border-t-2  border-[#BEC0BF] sm:p-[30PX]
      sm:flex-row
      sm:justify-between
       lg:justify-around '>

       <div className='text-normal text-[#1D2130]'>

        <p>@ 2024. All Rights Reserved</p>
       </div>
       <div>
        <p className='text-normal text-[#1D2130]'>Develpoment by Jaky</p>
       </div>
       <div className='flex justify-around gap-[10px] '>
        {items?.map((item,index)=>(
            <Link key={index} to={item.path} className='bg-primary rounded-full p-[5px] text-white '>{item.icon} </Link>
        ))}
       </div>
     </div>
   )
 }
 
 export default Footer
 
