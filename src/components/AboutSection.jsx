import React from 'react'
import imgSkills from '/images/Group.png'

import Skills from './Skills'

function AboutSection() {
  return (
    <section id='about-me' className='md:flex justify-between mx-20 md:my-50  gap-64 md:mx-70 '>

        <img src={imgSkills} alt="imgSkills" />
       

        <div className='md:w-580 w-full'>
            <h1 className='font-semibold md:text-4xl text-3xl mt-50 mb-12 '>About Me</h1>
            <p className='py-50  w-full text-lg  md:text-2xl   leading-relaxed  word-spacing-[10px]'>I am a
             <span className='text-[#7a16a8] font-black px-10'>Front-end Developer</span> 
             specialized in<span  className='text-[#7a16a8] px-2'> React.js</span> and 
             <span  className='text-[#7a16a8] px-2'> Next.js</span>, dedicated to turning complex ideas into user-friendly websites. <pre></pre> I focus on creating seamless digital experiences with clean code and modern styling...</p>
            {/* <Skills/> */}
        </div>
    </section>
  )
}

export default AboutSection