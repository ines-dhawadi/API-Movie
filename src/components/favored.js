import React from 'react'
import Part11 from './Part1';
import Nnabarr from './navbatt';
import  "../components/style.css";
import { Container } from 'react-bootstrap';
import Footer from "./footer";

const Favor = ({favoritMovie, favorites, handelSearch}) => {
  return(
    <div>
       <Nnabarr   handelSearch={handelSearch} favorites={favorites}/>
       <Part11 />

       <div className="container d-flex flex-wrap mt-5">
       {
         favoritMovie.map(el=>
          <div className="cwartttet">
      
      
      
       
       <div className="card ms-3">
          <div className="image">
            <img  src={el.Images[0]}/>
          </div>
          <div className="details">
            <div className="center">
              <h1>{el.Title}<br></br><span>{el.Actors}</span></h1>
              <p><b>Language :</b> {el.Language}</p>
              <ul >
               {/* wrapper function */}
              </ul>
            </div>
          </div>
        </div>
          
         <img className="playy" src="../images/play.png" />
         <img className="freeic" src="../images/free.png" />
         
         </div>
         
          
         )
       }

</div>
       
   <Footer />     
    </div>
   )

 }

export default Favor