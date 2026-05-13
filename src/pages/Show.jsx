import React from 'react'
import { LuCircleArrowOutUpRight } from 'react-icons/lu'
import { Link, useParams } from 'react-router'
import Slider from '../components/Slider/Slider'

function Show() {
     const items=[
        {
            id:1,
            date:"24/3/2024",
            image:"/countries.png",
            details:"This project is about countries and details of each country, which can be accessed by searching using the search button.",
            desc:"countries details",
            tools:"Html,Css,Js",
            btn:"GitHub Repo",
          gitHubUrl:"https://github.com/JakyNassar/Countries.git"

        },
          {
            id:2,
            date:"24/3/2025",
            image:"/travel.png",
            details:"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
            desc:"travel website ",
            tools:"Html,Css",
            btn:"GitHub Repo",
             gitHubUrl:"https://github.com/JakyNassar/Travel-Website.git"

        },
          {
            id:3,
            date:"2/3/2025",
            image:"/gender.png",
            details:"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
            tools:"Html,Css,Js",
             desc:"Expect the gender",
            btn:"GitHub Repo",
             gitHubUrl:"https://github.com/JakyNassar/Gender.git"

        },
          {
            id:4,
            date:"20/3/2022",
            image:"/exams.png",
            desc:"exam",
            tools:"Html,Css,Js",
            details:"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
            btn:"GitHub Repo",
             gitHubUrl:"https://github.com/JakyNassar/Quiz-App.git"

        },
          {
            id:5,
            date:"04/10/2022",
            image:"/roll.png",
            desc:"roll the dice",
            details:"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
            tools:"Html,Css,Js",
            btn:"GitHub Repo",
            gitHubUrl:"https://github.com/JakyNassar/Roll-the-dice.git"

        },
          {
            id:6,
            date:"20/1/2026",
            image:"/trippy.png",
            desc:"trippy",
            details:"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
            tools:"Html,Css,Js,react",
            btn:"GitHub Repo",
             gitHubUrl:"https://jakynassar.github.io/trippy/"

        }
    ]
    const params=useParams()
    const id=params.id
    //  const item=items.find((el)=>el.id === Number(id))
         const filteredItems=items?.filter(el=>el.id!==Number(id))

   
   
  return (
    <div className='minh-[600px] pt-[70px]'>
      
    {items?.filter(el=>el.id === Number(id)).map((item,index)=>(
        <div className='flex flex-col p-[50px] md:flex-row md:gap-10 '> 
            <div className='w-full mb-[20px] md:w-1/2 md:flex'> 
                <img className='w-full rounded-[5PX] ' src={item.image}/>
            </div>
            <div className='md:w-1/2'>
            <div className='flex justify-between items-center mb-[20px]  w-full '> 
                <div className=''> 
                    <h2 className='text-[20px] uppercase font-bold md:text-[30px]'>{item.desc}</h2>
                   <p className='text-[gray]'>{item.date}</p>
                </div>
               <Link to={item.gitHubUrl}> <LuCircleArrowOutUpRight className='text-primary cursor-pointer text-2xl' /></Link>
             </div>

             <div className='mb-[20px]'> 
                <p className='mb-[30px]'>{item.details}</p>
                <p className='font-semibold'>Basic Languages:<span className='font-normal'> {item.tools}</span></p>
             </div>
             <Link to={item.gitHubUrl} className='bg-primary text-white p-[8px] rounded-[8px] text-[15px] cursor-pointer '> {item.btn}</Link>
            </div>

        </div>
    ))}
   <Slider filteredItems={filteredItems}/>
    </div>
  )
}

export default Show
