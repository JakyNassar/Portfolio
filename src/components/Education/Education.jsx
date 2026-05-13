import React from 'react'
import EducationDetails from '../EducationDetails/EducationDetails'
import { FaArrowUp } from 'react-icons/fa'

function Education() {
  function moveUp(){
  const homeSection = document.getElementById("home");
  const navBar=document.getElementById("navbar")

    if(homeSection && navBar){
      const heightNavBar=navBar.offsetHeight
      const top=homeSection.offsetTop - heightNavBar
      window.scrollTo({
      top,
      behavior: "smooth"
    });
    }
      
    
  }
  return (
    <div className=' education md:p-[50px]'>
     
      <div className='text-center mb-10'>
         <p className='text-primary text-[15px] font-medium'>Education and Experience</p>
         <h2 className='text-[25px] font-semibold'>Education & Experience</h2>
      </div>
      <div className="flex flex-col mb-30 gap-10 text-center md:relative md:gap-[60px] md:flex md:flex-row md:flex-wrap md:pt-[30px]  md:justify-around
      md:before:absolute
      md:before:content-[''] 
      md:before:top-0
      md:before:left-[4%]
      md:before:w-[1px]
      md:before:h-[100%]
      md:before:bg-primary
      md:after:absolute
      md:after:content-['']
      md:after right-0
      md:after: top-0 
      md:after:w-[1px]
      md:after:h-[100%]
      md:after:bg-primary
      ">
        <div className='md:w-1/3 sm:text-center' >
          <EducationDetails title="Soft Skills" desc="Problem solving, Attention to detail, Communication, Ability to convert designs into code,Time management "/>
        </div>
        <div className='md:w-1/3'>
         <EducationDetails title="Core Fundamentals" desc="I have a strong foundation in core front-end technologies, including HTML5, CSS3, and JavaScript (ES6+), which allows me to build well-structured, responsive, and interactive web interfaces."/>

       </div>

       <div className='md:w-1/3'>
        <EducationDetails title="Styling & UI Skills" desc="CSS frameworks (Tailwind CSS, Bootstrap) , Creating reusable and maintainable styles , Understanding design systems"/>
       </div>
       <div className='md:w-1/3'>
        <EducationDetails title="API Integration && Version Control" desc="Fetching data from REST APIs , Using tools like Fetch / Axios , Handling asynchronous data , Managing loading/error states , Using Git & GitHub
        "/>
        </div>
        
      </div>
       <hr className="border-t-2 border-dashed border-gray-400 my-10" />
       <button onClick={moveUp } className='flex justify-center  align-middle w-[25px] h-[25PX] rounded-[3px] top-[320%] md:w-[45px] md:h-[45px] md:rounded-[10px] cursor-pointer  bg-primary absolute md:top-[300%] left-[95%] -translate-full'>
          <FaArrowUp className='text-white text-[20px] md:text-[30px] md:mt-[10px]  ' />
       </button>

    </div>
  )
}

export default Education

