import React, { useEffect, useState } from 'react'
import { BiSolidSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa6";
// import moon from '/images/moon.png'
// import sun from '/images/Sun_fill.png'
////
//import { FaArrowRight } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";
function DarkMode() {
    const [darkMode , setDarkMode]=useState(false)
    useEffect(()=>{
        if (darkMode) {
            document.documentElement.classList.add("dark")
            
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[darkMode])
  return (
    <div>
        
        <button onClick={()=>{
            setDarkMode(!darkMode) }} >
                { darkMode ?(<BiSolidSun size={30}/>) :( <FaMoon size={30}/>)}
            </button>
           
    </div>
  )
}

export default DarkMode