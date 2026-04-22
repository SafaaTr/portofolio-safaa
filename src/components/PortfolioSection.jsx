import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import {Link} from 'react-router-dom'
import Card from './Card'

function PortfolioSection() {
  return (
   <section className='md:mx-70 mx-20 mt-94'>
       
        <div className='md:flex  gap-10 justify-between items-center'>
            <div>
                <p className=' text-[#0c96e2] font-medium '>Portfolio</p>
                <h1 className='font-semibold md:text-4xl text-2xl  mt-8'>My Creative Works Latest <span className='text-[#0c96e2]'><Link to="/projects">Project</Link> </span> </h1>
            </div>
            <button  className='w-200 h-50 text-white bg-[#0C96E2] rounded-lg' > 
                <a href="https://github.com/SafaaTr" className='flex justify-center items-center'>
                    View Github 
                    <MdArrowOutward size={30} className={`pl-10`}/>
                </a>
             </button>
        </div>
        <Card/>
        
   </section>
  )
}

export default PortfolioSection