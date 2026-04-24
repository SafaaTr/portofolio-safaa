import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import imgProject from '/images/Image.png'
import iconDemo from '/images/icondemo.png'
import trippy from '/images/trippy.png'
import dashboard from '/images/dashboard.png'
import yourname from '/images/yourname.png'
import managepost from'/images/manngepost.png'
import travel from'/images/travel.png'
import flora from'/images/flora.png'
import crud from'/images/crud.png'
import digital from '/images/Digital.png'
import mid from '/images/maid.png'
import toList from '/images/to.png'
import doob from '/images/doob.png'
import skiing from '/images/skiing.png'

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function Card({slider =false}) {
    const [index ,setIndex] =useState(0)
    const itemsPrev=window.innerWidth >=1024 ? 3 :1;
    const contentCards=[

        { img: trippy, paragraph: "Educational Platform", content: "React.js-javascript-Tailwind", icon: iconDemo, url: "https://trippy.sandysmith4490.workers.dev/" },
        { img: dashboard, paragraph: "Educational Platform", content: "React.js-javascript-Tailwind-api", icon: iconDemo, url: "https://dashboard-api-vica.netlify.app" },
        { img: yourname, paragraph: "Educational Platform", content: "Html-Css3-javscript", icon: iconDemo, url: "https://yourname-popup.netlify.app/" },
        { img: travel, paragraph: "Educational Platform", content: "Html-Css3", icon: iconDemo, url: "https://safaatr.github.io/Travel-Css/" },
        { img: mid, paragraph: "Educational Platform", content: "Html-Css3-Pootstrap", icon: iconDemo, url: "https://safaatr.github.io/one-bootstrap-project/" },
        { img: managepost, paragraph: "Educational Platform", content: "Html-Css3-javscript-api", icon: iconDemo, url: "https://safaatr.github.io/Manage-Posts-api-js/" },
        { img: flora, paragraph: "Educational Platform", content: "Html-Css3", icon: iconDemo, url: "https://safaatr.github.io/flora-css/" },
        { img: crud, paragraph: "Educational Platform", content: "Html-Css3-javscript", icon: iconDemo, url: "safaatr.github.io/Product-Cart-CRUD/" },
        { img: digital, paragraph: "Educational Platform", content: "Html-Pootstrap", icon: iconDemo, url: "https://safaatr.github.io/one-bootstrap-project/" },
        { img: toList, paragraph: "Educational Platform", content: "Html-Css3-javascript", icon: iconDemo, url: "https://safaatr.github.io/To-Do-List-/" },
        { img: doob, paragraph: "Educational Platform", content: "Html-Css3", icon: iconDemo, url: "https://safaatr.github.io/First-front-end-project/" },
        { img: skiing, paragraph: "Educational Platform", content: "Html-Css3", icon: iconDemo, url: "https://k2skiing.netlify.app/" },
    ]
    const next=()=>{
        if (index < contentCards.length -itemsPrev ) {///وقف عند آخر مجموعة فيها 3 كروت
          setIndex(index +1)
        }
    }
    const prev=()=>{
        if (index > 0) {
            setIndex(index -1)
        }
    }
    const firstCards=contentCards.slice(0 , 6)
    const sliderCards=contentCards

    if (!slider) {
        return (
            <div className=''>
                <div className="cards  flex md:flex-wrap gap-39 items-center mt-56 overflow-x-auto  md:overflow-visible   md:grid md:grid-cols-3">
                    {
                        firstCards.map((item ,index)=>(
                            <div key={index} className="card min-w-273 snap-center  mb-16" >
                            <div className=' group relative overflow-hidden'>
                                <Link to={`/projects/${index}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} key={index}>
                                        
                                    <img src={item.img} alt="imgProject" className='w-full h-250  object-cover rounded-lg' />
                                    <p class="absolute top-0 left-0 w-full h-full bg-black/50 text-white text-2xl rounded-lg  text-center  py-100 p-4  -translate-x-full group-hover:translate-x-0 opacity-100   transition-transform duration-400">
                                     Click for more details 
                                    </p>
                                </Link>
                                
                            </div>
                             
                               
                                <h2 className='font-semibold text-2xl mt-32'>{item.paragraph}</h2>
                                <div className='flex justify-between items-center'>
                                        <p className='text-[#1D2130 pt-18]'>{item.content}</p>
                                        <a href={item.url}><img src={iconDemo} alt="icon" className='w-35 h-35' /></a>
                                </div>
                             
                            </div>
                        ))
                    }
                </div>
            </div>
          )
    }
    // slider
    return(
        <div className=' relative w-full mt-20 '>
            <div className='md:flex justify-between items-center md:mb-56 mb-30 md:mx-70 mx-20'>
                <div>
                    <p className=' text-[#0c96e2] font-medium '>Portfolio</p>
                    <h1 className='font-semibold md:text-4xl text-2xl  mt-8'>The Best <span className='text-[#0c96e2]'>Project</span> </h1>
                </div>
                <div className='flex'>
                    <button onClick={prev} className='flex justify-center items-center rounded-[50%] w-35 h-35 border border-[#0c96e2] mr-6'><MdArrowBackIosNew size={12} color='#A6A6A6' className=''/></button>
                    <button onClick={next} className='flex justify-center items-center rounded-[50%] w-35 h-35  bg-[#0c96e2]'> <MdArrowForwardIos color='white' size={12}/></button>
                </div>
            </div>
           <div className='overflow-hidden md:mx-70 mx-20'>

            <div className='flex h-300   transition-transform  duration-500' style={{transform :`translateX(-${index*(100/itemsPrev)}%)`}}>
                {sliderCards.map((item ,i)=>(
                    <div key={i}  className='flex w-full sm:w-full md:w-full lg:w-1/3 h-210 shrink-0 md:px-12 '>
                        <div className=' w-full'>
                            <div className=' group relative overflow-hidden'>
                            <Link to={`/projects/${i}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >
                                    <img src={item.img} alt="imgProject" className=' w-full h-220 object-cover rounded-lg' />
                                    <p class="absolute top-0 left-0 w-full h-full bg-black/50 text-white text-2xl rounded-lg  text-center  py-100 p-4  -translate-x-full group-hover:translate-x-0 opacity-100   transition-transform duration-400">
                                     Click for more details 
                                    </p>
                                    
                            </Link>
                            </div>
                    
                               
                            <h2 className="font-semibold text-xl mt-6">{item.paragraph}</h2>
                            <div className="flex justify-between items-center mt-2">
                                        <p>{item.content}</p>
                                        <a href={item.url}><img src={item.icon} className="w-35 h-35" /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           </div>
        </div>
    )
 
}

export default Card

