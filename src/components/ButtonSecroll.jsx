import React, { useEffect, useState } from 'react'

function ButtonSecroll() {
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
    <>
    {
        showButton &&(
            <button className='w-50 h-50 bg-[#0C96E2] rounded-2xl  bottom-5 right-5 relative ' onClick={()=>window.scrollTo({top :0 ,behavior :"smooth"})}>
            <a href="" className=' relative'>
                <img src="/images/Arrow_Up_MD.png" alt=""className='absolute top-1/2 left-1/2  -translate-x-1/2  -translate-y-1/2' />
            </a>
        </button>
        )
    }
  
    </>
   
  )
}

export default ButtonSecroll