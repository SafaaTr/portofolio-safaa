import React, { useEffect, useState } from 'react'

function ButtonSecroll() {
    const [showButton ,setShowButton]=useState(false)
    useEffect(()=>{
        const handleScroll=()=>{
            // const education = document.getElementById("education");
            const header =document.getElementById("header")
            const footer =document.getElementById("footer")
            if (!header || !footer) return
            
            const headerBottom = header.offsetTop + header.offsetHeight;    // 1. حساب النقطة التي ينتهي عندها الهيدر (بداية ظهور الزر)
            const footerTop = footer.offsetTop // 2. حساب النقطة التي يبدأ عندها الفوتر (نقطة اختفاء الزر)
              // 3. التحقق إذا كان المستخدم قد تجاوز الهيدر ولم يصل بعد إلى الفوتر
            if (window.scrollY >= headerBottom && window.scrollY < footerTop -window.innerHeight) {
                setShowButton(true)
                
            }else{
                setShowButton(false)
            }
        }
       
        window.addEventListener("scroll", handleScroll)
        return ()=> window.removeEventListener("scroll", handleScroll)
    },[])

  return (
    <>
    
    {
            showButton && (
                <button 
                    className="w-50 h-50 bg-[#0C96E2] rounded-2xl fixed bottom-5 right-10 z-50 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 animate-[bounce_4s_ease-in-out_infinite]" 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <img src="/images/Arrow_Up_MD.png" alt="Up" className="w-20 h-20" />
                </button>
            )
        }
  
    </>
   
  )
}

export default ButtonSecroll
