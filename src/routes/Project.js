import React from 'react'

import Navbar from "../components/Navbar"
import Fotter from '../components/Fotter'
import Heroimg from '../components/Heroimg'
import WorkCard from '../components/WorkCard'


const Project = () => {
  return (
    <div >
      <Navbar/>
      <Heroimg  heading="PROJECTS." text="Some Of My Most Recent Works"/>
      <WorkCard></WorkCard>
      
      <Fotter/>
      
    </div>
  )
}

export default Project
