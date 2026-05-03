import React from 'react'
import line from '/images/Frame11.png'
function Experience() {

    const contentExperience=[
        {
            
            paragraph:"Education:",
            content:"Associate Degree in Software Engineering  ​Damascus University - Computer Technical Institute."
        },
        {
            paragraph:"Technical Skills:",
            content:`Languages: JavaScript (ES6+), HTML5, CSS3.
            ​Frameworks & Libraries: React, React DOM, Tailwind CSS, Bootstrap , Material Ui.
              ​Integration: REST APIs, JSON, Node.js (Runtime).
            ​Tools: Figma, Git, GitHub.`
        },
        {
            paragraph:"Technical Experience (1)",
            content:`
            .​Front-end Development :    ​Building React.js web applications.
            ​Converting Figma designs to pixel-perfect code.
            ​Responsive UI using Tailwind & Bootstrap.`
        },
        {
            paragraph:"Technical Experience (2)",
            content:`
            ​.Data & Integration :  ​Integrating REST APIs & handling JSON data.
            ​Managing environment via Node.js.
            ​.Version Control :  ​Managing code and repositories using Git & GitHub.`
        }  
      
      
    ];
  return (
    <div>
        <div className='md:grid grid-cols-2 gap-20 md:h-287 mt-91'>
            <div className='flex md:w-498 w-full '>
                <img src={line} alt=""  className='h-367'/> 
                <div className=' md:pl-47 pl-10 '>
                    {contentExperience.map((item ,index)=>( 
                        index < 2 &&(
                            <div key={index} className='mb-46' >
                                <h2 className='font-medium  text-2xl md:text-[26px] mb-14'>{item.paragraph}</h2>
                                <p className='  tracking-normal md:w-400 md:text-[18px]  leading-loose  '>{item.content}</p>
                            </div>
                                  
                        )   
                  ))}
                </div> 
            </div>
            <div className='flex md:w-498 w-full md:pl-47'>
                <img src={line} alt="" className='h-367'/> 
                <div className='md:pl-47 pl-10 '>
                    {contentExperience.map((item ,index)=>( 
                        index >= 2 &&(
                            <div key={index} className='mb-46 ' >
                                <h2 className='font-medium  text-2xl md:text-[26px] mb-14'>{item.paragraph}</h2>
                                <p className='  tracking-normal md:w-400 md:text-[18px]  leading-loose  '>{item.content}</p>
                             
                            </div>
                                  
                        )    
                  ))}
                </div> 
            </div>   
        </div>
    </div>
  )
}

export default Experience