import React from 'react'

import AboutSection from './AboutSection'
import EducationSection from './EducationSection'
import CreativeWorksSection from './CreativeWorksSection'
import ContactSection from './ContactSection'
import PortfolioSection from './PortfolioSection'
import Linear from './Linear'
import Skills from './Skills'
import Card from './Card'

function Maincomponent() {
  return (
    <div className=' '>
       
        <Linear/>
       <AboutSection/>
       <Skills/>
       <EducationSection/>
       {/* <CreativeWorksSection/> */}
       <PortfolioSection/>
       <ContactSection/>
    </div>
  )
}

export default Maincomponent