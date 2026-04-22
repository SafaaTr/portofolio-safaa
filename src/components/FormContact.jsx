import React from 'react'

function FormContact() {
   
    const  contentInput=[
        {
            type:"text",
            name:"full name",
            placeholder:"Full name"
        },
        {
            type:"email",
            name:"Your email",
            placeholder:"Your email"
        },
        {
            type:"text",
            name:"Phone number",
            placeholder:"Phone number"
        },
        {
            type:"textarea",
            name:"Message",
            placeholder:"Message"
        },
        {
            type:"submit",
            name:"submit",
            text:"Send Message"
           
        },
    ]
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-26 md:w-779'>
        
            {contentInput.map((item ,index)=>(
                <div key={index}  className={
                    item.type === "textarea" || item.type === "submit" || item.name === "phone"
                      ? "col-span-2 w-full"
                      : ""
                  }>
                    {item.type==="textarea"?(
                        <textarea
                         name={item.name}
                        placeholder={item.placeholder} 
                        className='border w-full h-190 p-15  border-[#BEC0BF] rounded-lg '></textarea>
                    ): item.type==="submit" ?(
                        <button
                        type={item.type}
                        className='w-200 h-50 text-white bg-[#0C96E2] rounded-lg'
                        >{item.text} 
                        
                        </button>
                    ):(
                        <input
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        className='border border-[#BEC0BF] h-56 w-full outline-0 rounded-lg p-15 '
                        />
                    )}
                     
                </div>
          
            ))}
        
      
    </form>
  )
}

export default FormContact
