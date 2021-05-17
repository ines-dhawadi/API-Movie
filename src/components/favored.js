import React from 'react'
import Part11 from './Part1';



const Favor = ({favoritMovie}) => {
  return(
    <div>
       <Part11 />
       {
         favoritMovie.map(el=>
          <div className="cwartttet">
      
      
      
       
       <div className="card">
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
   )

 }

export default Favor