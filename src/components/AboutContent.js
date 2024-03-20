import { Link } from 'react-router-dom'
import './AboutCon.css'
import React from 'react'
import imgg from './img.jpg'
import img2 from './img2.jpg'

const AboutContent = () => {
  return (

    <div className="row">


        <div class="col-xl-6">

           <div className='left'> 

                <h1>Who Am I?</h1>
                <p> Im a react Front-End-Developer. I create 
                    responsive secure websites for my clients.
                </p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>


            </div>
            
            
        </div>

        <div class="col-xl-6">

            <div className='right'>
                <div className="img-container">
                
                <div className="top">
                    <img src={imgg} className="img"/>                    
                </div>

                <div className="bottom">
                    <img src={img2} className="img"/>
                </div>

            </div>

        </div>
            
            
        </div>


        

    </div>

  )
}

export default AboutContent