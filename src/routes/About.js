import React from 'react'

import Navbar from "../components/Navbar"
import Fotter from '../components/Fotter'
import Heroimg from '../components/Heroimg'
import AboutContent from '../components/AboutContent'


const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg heading="ABOUT." text="I'm a FRONT END DEVELOPER"/>
      <AboutContent></AboutContent>
      <Fotter></Fotter>
      
      
    </div>
  )
}

export default About
