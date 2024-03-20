import "./Fotter.css"

import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import face from './bg.jpeg'

const Fotter = () => {
  return (
    <div className="fotter">
        <img src={face}></img>
        <div className="fotter-container">

            <div className="left" >
                <div className="location" style={{color:"#fff",marginRight:"2rem"}}>
                    <HomeIcon style={{color:"#fff" ,marginRight:"2rem"}}/>

                    Somesh Colony ,Nanded
                </div>
                
                <div className="phone" style={{color:"#fff",marginRight:"2rem"}}>

                    <PhoneAndroidIcon style={{color:"#fff" ,marginRight:"2rem"}}/>
                    9860691525 / 9890805984

                </div>

                <div className="email" style={{color:"#fff" ,marginRight:"2rem",marginTop:"18px"}}>
                    <MarkEmailReadIcon style={{color:"#fff" ,marginRight:"2rem"}}/>

                    rohitfulari2000@gmail.com


                </div>
            </div>
            <div className="right">
                <h5 style={{color:"#fff",marginTop:"20px"}}>About Me</h5>

                <p style={{fontSize:"1.2rem"}}>Hi their , I'm a 23-year-old Full Stack Developer,
                    Being a CDAC Aspirant eager to contribute
                    and bring a fresh perspective to the team.
                    Looking forward for new opportunities to
                    enhance my skills set and kick start my 
                    career in prestigious firm.
                </p>

                <div className="social" style={{ color: "#fff", marginRight: "2rem", display: "flex", alignItems: "center" }}>
                    <InstagramIcon style={{ fontSize: 40, marginRight: "1rem" }} />
                    <LinkedInIcon style={{ fontSize: 40 }} />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Fotter
