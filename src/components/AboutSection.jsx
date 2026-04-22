import React from 'react'
import imgSkills from '/images/Group.png'

import Skills from './Skills'

function AboutSection() {
  return (
    <section id='about-me' className='md:flex justify-between mx-20 md:my-50  gap-64 md:mx-70 '>

        <img src={imgSkills} alt="imgSkills" />
       

        <div className='md:w-598'>
            <h1 className='font-semibold md:text-4xl text-3xl mt-50 mb-12 '>About Me</h1>
            <p className='pb-50  md:w-485  tracking-[3%] '>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
            <Skills/>
        </div>
    </section>
  )
}

export default AboutSection