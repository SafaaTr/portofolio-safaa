import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import FormContact from './FormContact'
function ContactSection() {
  const contentContact=[
        {   icon:<FaPhoneAlt size={34} color='white'/>,
            parargraph:"Call me",
            content:"0984786399"
        },
        {   icon:<HiOutlineMail size={34} color='white'/>,
            parargraph:"Call me",
            content:"safaatr782@gmail.com"
        },
        {   icon:<SlLocationPin size={34} color='white'/>,
            parargraph:"Call me",
            content:"Damascus,syria"
        }
    ]
  return (
    <section id='contact' className='md:mx-70 mx-20 mt-90'>
           <p className=' text-[#0c96e2] font-medium '>Contact</p>
            <h1 className='font-semibold md:text-4xl  text-3xl mt-8'>Let’s Discuss Your <span className='text-[#0c96e2]'>Project</span> </h1>
            <div className=' md:flex md:gap-59  gap-20 mt-56'>
                <div className='mb-20'>
                    {contentContact.map((item ,index)=>(
                        <div key={index} className='flex items-center gap-20 mt-24 h-104 md:w-387 rounded-lg  shadow-2xl'>
                            <div className='w-61 h-56 bg-[#0C96E2] rounded-lg flex justify-center items-center'>
                              {/* <img src={item.icon} alt="" className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' /> */}
                              {item.icon}
                            </div>
                            <div>
                            <p className='text-[#92929D] mb-10' >{item.parargraph}</p>
                            <p className=''>{item.content}</p>
                            </div>
                         
                        </div>
                    ))}
                </div>
                <div>
                    <FormContact/>
                </div>
            </div>
    </section>
  )
}

export default ContactSection