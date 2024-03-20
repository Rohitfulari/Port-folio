import React from 'react'
import './Hero.css';
//import { Divider } from '@mui/material';
import introbg from '../asset/intro-bg.jpg';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={introbg} alt='introImg'></img>

        </div>
        <div className='content'>
           <p>HI , I'M A FULL STACK DEVELOPER</p>
           <h1>React Developer.</h1>
           <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/project" className="btn btn-light">Contact</Link>
          
           </div> 

        </div>

      
    </div>
  )
}

export default Hero
