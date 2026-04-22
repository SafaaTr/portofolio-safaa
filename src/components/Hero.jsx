import React from 'react'
import myImg from '/images/myimg.png'



function Hero() {
    const contentHero={
        Hey:"HEY!",
        myself:" I’m Safaa, Frontend Developer",
        paragraph:"Agency-quality Webflow websites with the personal touch of a freelancer.",
        contentButton:"Download Cv"
        
    }
    
  return (
    <div className=' pt-100 '>
          <div className="md:flex justify-between items-center bg-[url(/images/Lines.svg)] bg-cover bg-center   ">
           
            <div className='z-10  mx-20 md:mx-70 sm:mx-20 pb-20 relative'>
                <div className="absolute inset-0 left-[-42%] top-[-25%] bg-[radial-gradient(circle_at_center,rgba(155,255,165,0.1)_0%,rgba(174,211,255,0.18)_30%,rgba(201,212,239,0.15)_60%,rgba(215,152,225,0)_80%,rgba(202,207,250,0.15)_100%)]  blur-xl"></div>
                <h1 className=' font-semibold md:text-5xl text-3xl md:w-545 z-10'> <span className='font-normal'>{contentHero.Hey}</span>{contentHero.myself}</h1>
                <p className='text-[#43495B] md:w-274 pt-12 pb-30'>{contentHero.paragraph}</p>
                <button className='w-155  h-50 bg-white rounded-md font-medium opacity-78  text-white dark:text-black' > <a href=" public/file/safaaCv.pdf"> {contentHero.contentButton}</a> </button>
            </div>
            <img src={myImg} alt="myimg"  className=' md:mx-70 sm:mx-20 pb-20'/>
          </div>
   
    </div>
  )
}

export default Hero