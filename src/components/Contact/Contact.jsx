import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import emailjs from "@emailjs/browser";


function Contact() {
    const items=[
        {
            desc:"Call me ",
            info:"+963983396174",
            icon:<FaPhoneAlt />
        },
         {
            desc:"Email me ",
            info:"gone.3nasar@gmail.com",
            icon:<AiOutlineMail />
        },
         {
            desc:"Address",
            info:"Hama/Syria",
            icon:<IoLocationSharp />
        },
    ]
    const[name ,setName]=useState("")
    const[email ,setEmail]=useState("")
    const[phone ,setPhone]=useState("")
    const[message ,setMessage]=useState("")

    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dy5kzn1",
        "template_dll9g4w",
        e.target,
        "OuZF4ejNyMzaUbMDT"
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error); 
        alert("Failed to send message");
      });
  };
//    const handleSubmit=async(e)=>{
//     e.preventDefault();
//     await fetch("/api/send",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify( {name,email,phone,message})
//     })
//     alert("Message sent successfully")

//     console.log(name,email,phone,message)
//    }
  return (
    <div id='contact' className='text-center mt-[100px] pb-[50PX] '>
      <div className=''>
        <span className='text-[20px] font-medium text-primary '>contact</span>
        <h2 className='font-semibold md:text-[40px] '>Let’s Discuss Your <span className='text-primary'>Project</span></h2>
      </div>
      <div className='flex justify-center mt-[30px] flex-col gap-10 md:flex-row md:justify-around lg:justify-center '>
        <div className='flex flex-col items-center md:w-1/3 md:gap-10 lg:w-1/3 '>
            {items?.map((item,index)=>{
                return <div key={index} className='flex items-center  md:justify-center gap-5 '><div className='text-white bg-primary rounded-[2px] w-[20px] h-[20px] p-[2px] 
                md:rounded-[8px]
                 md:w-[40px] 
                 md:h-[40px] 
                 md:p-[10px]'>
                    {item.icon}</div> <div><span className='text-[#92929D] md:text-[20px]'>{item.desc}</span> <p>{item.info}</p> </div> </div>
            })}
        </div>
      
      <form onSubmit={sendEmail} className='md:w-2/3  flex flex-col items-center lg:w-1/2 '>
        <div className='flex flex-col sm:flex-row gap-[10px] mb-[20px] md:w-3/4  '>
            <input className='border-solid border border-[#BEC0BF] md:w-[300px] md:p-[5px]  lg:p-[10px] lg:w-1/2' type="text" placeholder='full name' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input className='border-solid border border-[#BEC0BF] md:p-[5px] lg:p-[10px] lg:w-1/2' type="email" placeholder='your email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col lg:w-3/4'>
            <input className='border-solid border border-[#BEC0BF] mb-[20px]  md:p-[5px] lg:p-[10px] ' type="tel" placeholder='Phone Number' value={phone} name="phone" onChange={(e)=>setPhone(e.target.value)} />
            <textarea className='border-solid border border-[#BEC0BF] p-[10px]  md:p-[10px]' rows={6}cols={1} name="message" id="" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Message'></textarea>
        </div>
        <input type='submit'value="Send Message" className='text-white bg-primary p-[5px] rounded-[5px] text-[10px] cursor-pointer md:text-[20px]'/>
        
      </form>
      </div>

    </div>
  )
}

export default Contact
