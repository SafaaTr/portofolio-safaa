import React from 'react'
import rate90 from '/images/rate90.png'
import rate95 from '/images/rate95.png'
import rate85 from '/images/rate85.png'

function Skills() {
    const Skills =[
        { name:"HTML5" , value:"90" ,img:rate90},
        { name:"Css" , value:"85" ,img:rate85},
        { name:"JavaScript" , value:"95" ,img:rate95},
        { name:"React" , value:"90" ,img:rate90},

    ]
    return(
        <div className='md:w-587'> 
        {
            Skills.map((skill)=>(
                <div key={skill.name} className='mb-29'>
                    <div className='flex items-center  justify-between'>
                        <span className="font-semibold text-xl  mb-2">{skill.name}</span>
                        <span className='mb-13 mr-45'><img src={skill.img} alt="img" /></span>
                    </div>
                    <div className="w-full h-11 rounded-2xl bg-[#EDECEC]">
                        <div className="h-full rounded-2xl bg-[#0C96E2] relative"
                           style={{ width: `${skill.value}%` }}>
                            <span className="w-25 h-25 border-3 border-[#0C96E2] rounded-full bg-[#EDECEC] absolute -right-3 -bottom-8.5"></span>
                           </div>
                    </div>

                </div>
            ))
        }

        </div>
    )

 
}

export default Skills

