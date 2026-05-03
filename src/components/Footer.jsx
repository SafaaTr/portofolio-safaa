import React from 'react'

// import faceIcon from '/images/facebook.png'
// import twitterIcon from '/images/twitter.png'
// import linkedinIcon from '/images/linkedin.png'
// import instaIcon from '/images/instagram.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
   <footer className='border-t border-[#BEC0BF] mt-40 md:mt-94 md:mx-70 mx-20'>
    <div className='md:flex justify-between items-center md:mb-40 mb-20 md:mt-39 mt-10 '>
        <p>@ 2026. All Rights Reserved</p>
        <p className='my-10 md:my-0'>Develpoment by Safaa</p>
        <div className='flex gap-16'>
            <a href="https://www.facebook.com/" className='bg-[#0C96E2] rounded-[50%] w-25 h-25 flex justify-center items-center'><FaFacebookF size={18} color='white'/> </a>
            <a href="https://x.com/?lang=ar" className='bg-[#0C96E2] rounded-[50%] w-25 h-25 flex justify-center items-center'> <FaTwitter size={18} color='white' /></a>
            <a href="https://www.linkedin.com/in/safaa-altarshan-6860b62a7?utm_source=share_via&utm_content=profile&utm_medium=member_android" className='bg-[#0C96E2] rounded-[50%] w-25 h-25 flex justify-center items-center'> <FaLinkedinIn size={18} color='white'/> </a>
            <a href="https://www.instagram.com/safaa_altarshan?igsh=aG82aTk3NWgwcXlw"className='bg-[#0C96E2] rounded-[50%] w-25 h-25 flex justify-center items-center'><FaInstagram size={18} color='white'/></a>
        </div>
    </div>
      
   </footer>
  )
}

export default Footer