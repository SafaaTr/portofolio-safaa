import React, { useEffect, useState } from 'react'
import { VscListSelection } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import LinksNav from './LinksNav'

function MenuNav({active,setActive}) {
    const [menu , setMenu]=useState(false)
    const[isDark , setIsDark]=useState(false)
    useEffect(()=>{
        const root =document.documentElement
        if (isDark) {
            root.classList.add("dark")
        }else{
            root.classList.remove("dark")
        }
    },[isDark])
  return (
    <div className='flex md:hidden'>
        

        <button onClick={()=>{setMenu(true)}}>
            <VscListSelection  size={30} className=' className="text-black dark:text-[#0C96E2]"'/>
            {/* {isDark ? <VscListSelection color='#0C96E2' size={30}/> : <VscListSelection color='black' size={30} />} */}
        </button>
        <div className={`fixed z-20 top-0 right-0 h-full w-250 bg-white text-black dark:bg-white   transform transition-transform duration-300 ${ menu? "translate-x-0" :"translate-x-full"} `}>
            <div className='flex flex-col   md:hidden mx-10'>
                <div className='flex justify-between items-center '>
                    <h1 className='font-semibold text-xl my-20'>Safaa</h1>
                    <button onClick={()=>setMenu(false)}>
                    <IoMdClose  size={30} className=' className="text-black dark:text-[#0C96E2]"'/>
                    {/* {isDark ? <IoMdClose color='#0C96E2' size={30}/> : <IoMdClose color='black' size={30} />} */}
                    </button>
                   
                </div>
                <LinksNav 
                    active={active}
                    setActive={setActive}
                    onClickItem={()=>setMenu(false)}
                />
            </div>
      
        </div>
    </div>
  )
}

export default MenuNav