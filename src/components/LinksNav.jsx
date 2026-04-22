import React  from 'react'
import { Link } from 'react-router-dom'

function LinksNav( { active ,setActive ,darkMode,onClickItem }) {

    // const [active , setActive]=useState("Home")
    const links=[
        {text:'Home' ,path:"",  type:"page" },
        {text:'About me' ,path:"#about-me", type :"section"  },
        {text:'Education' ,path:"#education"  , type :"section" },
        {text:'Projects' ,path:"/projects" , type :"page" },
        {text:'Contact' ,path:"#contact" , type :"section"  },
    ]
  return (
    <div>
   <ul  className=' md:flex flex-row  items-center md:gap-24 '>
            {links.map((link ,index)=>{
                return(
                    <li key={index} className='font-medium text-lg mb-10'>
                        {
                            link.type ==="page"?
                                (  <Link to={link.path}
                                     onClick={
                                        ()=>{  setActive(link.text)
                                            onClickItem && onClickItem()//مشان تسكر  منيو الناف بس اضغط
                                        }
                                    } 
                                     className={
                                        darkMode
                                        ? (active === link.text ? "text-[#0C96E2]" : "")
                                        : (active === link.text ? "text-[#0C96E2]" : "")
                                     }
                                  
                                    >{link.text}
                                   </Link>
                                ) : ( <a href={link.path} onClick={()=>onClickItem && onClickItem()} >{link.text}</a>)
                        }
                    </li>
            )})}
        </ul>
    </div>
  )
}

export default LinksNav
{/**
  <Link
              to={link.path}
              onClick={() => {
                setActive(link.text)
                onClickItem && onClickItem()   // ← أهم سطر
              }}
              className={active === link.text ? "text-[#0C96E2]" : ""}
            >
              {link.text}
            </Link>
 */}