import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Slider.css'
import { BsArrowsFullscreen } from 'react-icons/bs';
import { LuCircleArrowOutUpRight } from 'react-icons/lu';
import { Link } from 'react-router';



function Slider({filteredItems}) {
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
            desc: "Expect the gender",
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
     const [fullImage,setFullImage]=useState(null)
    
   
    const [currentIndex,setCurrentIndex]=useState(0)
    const prevSlide=()=>{
      setCurrentIndex((prev=>prev===0 ?items.length - 1:prev - 1))
    }
    const nextSlide=()=>{
      setCurrentIndex((prev=>prev===items.length - 1 ?0:prev + 1))
    }
  return (
   <div className=''>
    <div className='flex justify-between items-center p-[40px] '>
      <div> 
        <p className='text-primary'>Portfolio</p>
        <h2 className='font-semibold text-[30px]'>The Best <span className='text-primary'> Projects</span></h2>
      </div>
      <div className='flex  gap-[10PX]   '>
        <button className=' border border-primary text-primary rounded-full p-[10px] cursor-pointer'
        onClick={prevSlide}><FaArrowLeft /></button>
        <button className='bg-primary text-white rounded-full p-[10px] cursor-pointer'
        onClick={nextSlide}><FaArrowRight /></button>
      </div>
    </div>
     
    <div className='overflow-hidden w-full relative h-[400px] ' >
      <div className='flex w-full'style={{ transform: `translateX(${-currentIndex * 50}%)` }}>
   {filteredItems?.map((item)=>(
      <div key={item.id} className=' min-w-[90%] flex flex-col text-center p-[50px]  bg-[#f0f0f0] md:min-w-[40%]'>
        <div className='card'> 
              <img  src={item.image} alt="" className='rounded-[10px]' />
             <div className='overlay cursor-pointer'>
                     <BsArrowsFullscreen  onClick={()=>{
                       
                         setFullImage(item.image)
                         
                     }} />
                     <LuCircleArrowOutUpRight   />
                     
           </div>
        </div>
         
          
            <div className='flex items-center sm:w-full  sm:justify-between p-[20PX] '>
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
   </div>
   
 
  )
}

export default Slider
