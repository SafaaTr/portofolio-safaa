import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import imgback from '/images/Bottom.png'
function CreativeWorksSection() {
    const contentCreative =(
        {
            paragraph:"Try me out, risk free!",
            content:"If you’re not happy with the design after the first draft, I’ll refund your deposit,",
            spanText:"no questions asked",
            contentButton:"Contact"
        }
    )
  return (
    <section style={{backgroundImage:`url(${imgback})`}} className=' md:mx-70 mx-20 md:bg-cover flex  h-375 items-center md:w-1182  '>
        <div className='md:mx-136 mx-70   md:flex justify-between items-center'>
            <div className='md:w-589'>
            <h1 className='text-white md:text-5xl text-3xl font-semibold'>{contentCreative.paragraph}</h1>
            <p className='md:w-395 text-white mt-9'>{contentCreative.content}<span className='font-semibold text-white'>{contentCreative.spanText}</span></p>
            </div>
            
            <button className='w-155 mt-20 bg-[#0C96E2] h-50 rounded-lg text-white inline  md:ml-50'><a href="#contact" className=' flex  justify-center items-center'>{contentCreative.contentButton} <FaArrowRight size={24} className={`pl-10 `}  /> </a>  </button>
        </div>
        
    </section>
  )
}

export default CreativeWorksSection