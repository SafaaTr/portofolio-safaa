import React, { useEffect, useState } from 'react'
import designRight from '/images/Images bg.svg'
import designLeft from '/images/Images bgds.svg'
import { IoMdArrowUp } from "react-icons/io";
import Experience from './Experience'


function EducationSection() {
  const [showButton ,setShowButton]=useState(false)
  useEffect(()=>{
      const handleScroll=()=>{
          const education = document.getElementById("education");
          if (!education) return
          
          const top = education.offsetTop;
          const height = education.offsetHeight
  
          if (window.scrollY >= top && window.scrollY < top +height) {
              setShowButton(true)
              
          }else{
              setShowButton(false)
          }
      }
     
      window.addEventListener("scroll", handleScroll)
      return ()=> window.removeEventListener("scroll", handleScroll)
  },[])
       
    
  return (
    <section id='education' className=' relative md:h-700 h-full '>
        <img src={designRight} alt="" className=' hidden md:inline absolute right-0 top-0' />
        <img src={designLeft} alt="" className=' hidden md:inline absolute left-0 bottom-0 ' />
        
        <div className='md:mx-70 mx-20 mt-20'>
               <p className='text-center text-[#0c96e2] font-medium '>Education and Experience</p>
                <h1 className='font-semibold md:text-4xl text-3xl text-center mt-8'>Education & Experience</h1>
              <Experience/>
                
        </div>
       {
          showButton &&(
            <div className=' relative md:mx-70 hidden md:block'>
               <button className='w-50 h-50 bg-[#0C96E2] rounded-2xl   absolute top-70 right-0 flex justify-center items-center' onClick={()=>window.scrollTo({top :0 ,behavior :"smooth"})}>
                  <a href="" className=' flex justify-center items-center'>
                   {/* <img src={arrow} alt="" className='w-20 h-20 ' /> */}
                   <IoMdArrowUp size={28} color='white'/>
                  </a>
               </button>
            </div>
         
          )
       }
    
    </section>
  )
}

export default EducationSection
