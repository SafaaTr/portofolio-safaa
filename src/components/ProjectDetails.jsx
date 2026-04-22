
import React from 'react'
import icons from '/images/Icons.png'//مالقيتا ايقونة
// import imgscrren from '/images/Full_alt.png'
import { IoExpandOutline } from "react-icons/io5";

function projectDetails({project}) {
    const openFullScreen=(imgRef)=>{
        if (imgRef.current.requestFullscreen) {
            imgRef.current.requestFullscreen()
        }
    }
    const imgRef=React.useRef(null)
  return (

              <div className="md:mx-68 mx-20 md:flex items-center gap-40">
                    <div className=' relative group overflow-hidden md:w-613 h-400'>
                        <img ref={imgRef} src={project.img} alt="" className='w-full h-auto object-cover rounded-lg' />
                        <div className=' hidden absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-auto md:flex items-center justify-center gap-10 '>
                            <button className='w-70 h-70 flex justify-center items-center' onClick={()=>openFullScreen(imgRef)}>
                                <IoExpandOutline size={38} color='white'/>
                            </button>
                            <button className='w-50 h-47 flex justify-center items-center'>
                                
                                <a href={project.url}> <img src={icons} alt=""  className='w-38 h-38'/></a>
                                
                            </button>
                        </div>
                    </div>
                    
                    <div className='md:mt-20 md:w-573'>
                        <div className="flex justify-between items-center ">
                            <div>
                                <h2 className="font-semibold text-2xl ">{project.paragraph}</h2>
                                <p className="text-[#A6A6A6]">{project.date}</p>
                            </div>
                            <div>
                                <a href={project.url}>
                                <img src={project.icon} alt="icon" className="w-35 h-35" />
                                </a>
                            </div>
                        
                        </div> 
                        <p className='mt-10 text-lg tracking-3p'>{project.content}</p>
                        <p className="font-medium mt-10 mb-10 text-lg  mr-3 ">Basic Languages: <span className='font-normal '>{project.Basic}</span></p>
                        {project.Framework &&(    <p className="font-medium mt-10 mb-10 text-lg  mr-3">Framework: <span className='font-normal'>{project.Framework}</span></p>)}
                        {project.Library &&( <p className="font-medium mt-10 mb-10 text-lg  mr-3">Libraries: <span className='font-normal'>{project.Library}</span></p>)}   
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <button className="w-163 h-50 mt-40 rounded-lg bg-[#0C96E2] text-white">
                            {project.contentButton}
                        </button>
                        </a>
                    </div>
               
              </div>
            );
  
}

export default projectDetails

