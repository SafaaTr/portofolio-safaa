import React from 'react'
// import imgSkills from '/images/Group.png'



function AboutSection() {
  return (
    <section id='about-me' className=' mx-20  mt-70 md:mb-50 md:mt-79 md:mx-20 flex flex-col items-center justify-center'>

       
       <div className=' '>
       <div className='w-full  max-w-4xl flex flex-col items-center justify-center text-center  bg-indigo-100 shadow-2xl transition-transform duration-300 hover:scale-110  cursor-pointer  rounded-2xl'>
            <h1 className='font-semibold md:text-4xl text-3xl mt-50 mb-5 text-center '>About Me</h1>
            <p className='py-50 px-36  w-full text-lg  md:text-2xl   leading-relaxed  word-spacing-[10px]'>I am a
             <span className='text-[#7a16a8] font-black px-10'>Front-end Developer</span> 
             specialized in<span  className='text-[#7a16a8] px-2'> React.js</span> and 
             <span  className='text-[#7a16a8] px-2'> Next.js</span>, dedicated to turning complex ideas into user-friendly websites. I focus on creating seamless digital experiences with clean code and modern styling...
             </p>
           
        </div>
       </div>
       
       
    </section>
  )
}

export default AboutSection