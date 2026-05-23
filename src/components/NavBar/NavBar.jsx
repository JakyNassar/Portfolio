import React, { useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { RiSunFill } from 'react-icons/ri'
import { Link, NavLink } from 'react-router'
import './NavBar.css'
import { MdOutlineList } from 'react-icons/md'
import { IoCloseSharp } from 'react-icons/io5'

function NavBar({name,items,setMode,darkMode,activeSection}) {
  const[visible,setVisible]=useState(false)
  return (
    <div id='navbar' className='flex justify-around w-full   font-medium fixed lg:h-[80px] lg:items-center '>
    <h1 className='font-semibold text-[30px]  cursor-pointer'>{name}</h1>
    <ul className=' hidden lg:flex gap-10 lg:align-middle text-[16px] sm:hidden'>
      {items?.map((item,index)=>{
        return <li key={index} > <a className={`${activeSection===item.id?"active":""} hover:text-blue-500`} href={`#${item.id}`}
       > {item.link} </a></li>
      })}
    </ul>
    <button className='lg:hidden cursor-pointer text-5xl  ' onClick={()=>setVisible(!visible)}><MdOutlineList /></button>
    {visible&& (
      <>
       <ul className='absolute top-[100%] z-30 w-full text-center bg-[#eee] p-[20px]'>
      {items?.map((item,index)=>{
        return <li key={index} className='hover:bg-gray'> <a className={` ${activeSection===item.id?"active":"" } hover:text-blue-500`} href={`#${item.id}`}
       > {item.link} </a></li>
      })}
    </ul>
    <button className='absolute top-[100%] right-[1%] z-100 cursor-pointer' onClick={()=>setVisible(false)}><IoCloseSharp /></button>
    </>
    )}
    <button className='cursor-pointer' onClick={()=>setMode(!darkMode)}> 
      {darkMode?<RiSunFill />:<FaMoon />}
    </button>
   
    

    </div>
  )
}

export default NavBar
