import React, { useState } from 'react'
import DarkMode from './DarkMode'

import MenuNav from './MenuNav'
import LinksNav from './LinksNav'

function NavBar() {

    const [active , setActive]=useState("Home")

       const linksNav={
        name:"Safaa",
       }
        

return (
    <nav className='flex justify-between items-center mt-40  md:mx-70 mx-20'>
        <h1 className='font-semibold text-xl'>{linksNav.name}</h1>
        <div className='md:flex hidden'> <LinksNav active={active} setActive={setActive} /></div>
        
        <div className='flex gap-10'>
     
        <DarkMode DarkMode={DarkMode}/>
        <MenuNav/>
        </div>
     
    </nav>
 )
}

export default NavBar