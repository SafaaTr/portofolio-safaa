import React from 'react'
// import rate90 from '/images/rate90.png'
// import rate95 from '/images/rate95.png'
// import rate85 from '/images/rate85.png'
// import sk1 from '/images/html.jpg'
// import sk2 from '/images/css.jfif'
// import sk3 from '../../public/images/js.jfif'
// import sk4 from '../../public/images/bootst.jfif'
// import sk5 from '../../public/images/react.jfif'
// import sk6 from '../../public/images/tailwind.jpg'
// import sk7 from '../../public/images/mtui.png'
// import sk8 from '../../public/images/ts.jpg'
// import sk9 from '../../public/images/next.jfif'
// import sk10 from '../../public/images/git.png'

function Skills() {
    const Skills =[
        { name:"HTML5",img:'/images/html.jpg',id:1},
        { name:"Css" ,img:'/images/css.jfif' ,id:2},
        { name:"JavaScript" ,img:'/images/js.jfif',id:3},
        { name:"JavaScript" ,img:'/images/bootst.jfif' ,id:4},
        { name:"React" ,img:'/images/react.jfif' ,id:5},
        { name:"TailwindCss" ,img:'/images/tailwind.jpg' ,id:6},
        { name:"MatrialUi" ,img:'/images/mtui.png' ,id:7},
        { name:"TypeScript" ,img:'/images/ts.jpg' ,id:8},
        { name:"Next.js" ,img:'/images/next.jfif' ,id:9},
        { name:"Git" ,img:'/images/git.png' ,id:10},

    ]
    return(
        <div className=' '>
            <h1 className='font-semibold text-center md:text-4xl text-3xl mt-50 mb-23 '>Skills</h1>
            <div className='flex  flex-wrap gap-20  md:gap-0  justify-center md:justify-between items-center mx-20 mt-40 mb-100  md:mx-70 '> 
               {
                Skills.map((skill)=>(
                <div key={skill.name} className=' w-100 h-100  md:mb-4'>
                    
                    <img src={skill.img} alt="img" className=' flex   bg-fuchsia-100  rounded-2xl ' />
                    
                </div >
                    ))
                }
                        {/* // <div key={skill.name} className='mb-29'>
                        //     <div className='flex items-center  justify-between'>
                        //         <span className="font-semibold text-xl  mb-2">{skill.name}</span>
                        //         <span className='mb-13 mr-45'><img src={skill.img} alt="img" /></span>
                        //     </div>
                        //     <div className="w-full h-11 rounded-2xl bg-[#EDECEC]">
                        //         <div className="h-full rounded-2xl bg-[#0C96E2] relative" */}
                        {/* //            style={{ width: `${skill.value}%` }}>
                        //             <span className="w-25 h-25 border-3 border-[#0C96E2] rounded-full bg-[#EDECEC] absolute -right-3 -bottom-8.5"></span>
                        //            </div>
                        //     </div> */}

                        {/* // </div> */}
            </div>
        </div>
       
    )

 
}

export default Skills

