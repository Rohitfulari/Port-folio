import React from 'react';
import './WorkCard.css';
import Whather from './Wheather.jpeg'
import Rest from './Resturant.jpeg'
import login from './Login.jpeg'
import Adv from './Advanture.png'
 
const WorkCard = () => {
  return (
    <div className="dad">
      <h1 style={{textAlign:"center",paddingTop:"50px",paddingBottom:"30px"}}>MY WORK</h1>


      <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank" className="card-link">
        <div className="card" >
          <div className="wrapper" >
            <img src="" className="cover-image"  />
          </div>

          
          <img src={Whather} className="title"  />
          <img src="" className="character"  />

        </div>
      </a>

      <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank" className="card-link">
        <div className="card" >
          <div className="wrapper1" >
            <img src="" className=""  />
          </div>


          <img src={Rest} className="title" alt="Force Mage Title" />
          <img src="" className="character" alt="Force Mage Character" />


        </div>
      </a>

      <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank" className="card-link">
        <div className="card" >
          <div className="wrapper" >
            <img src="" />
          </div>
          <img src={login} className="title" alt="Force Mage Title"/>
          <img src="" className="character" alt="Force Mage Character" />
        </div>
      </a>


      {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank" className="card-link">
        <div className="card" >
          <div className="wrapper" style={{}}>
            <img src="" />
          </div>
          <img src={Adv} className="title" style={{height:"80%"}} />
          <img src="" className="character"  />
        </div>
      </a>

      <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank" className="card-link">
        <div className="card" >
          <div className="wrapper" >
            <img src="" />
          </div>
          <img src="" className="title" alt="" />
          <img src="" className="character" alt="" />
        </div>
      </a>


       */}



    </div>

    
  );
}

export default WorkCard;
