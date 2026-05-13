import React from 'react'
import './EducationDetails.css'
function EducationDetails({title,desc}) {
  return (
    <div className=''>
      <h3 className='md:text-2xl md:mb-[20px] font-medium'>{title}</h3>
      <p className='text-[#98A2B3] font-normal'>{desc}</p>
    </div>
  )
}

export default EducationDetails
