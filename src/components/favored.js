import React from 'react'
import Part11 from './Part1';
import Nnabarr from './navbatt';
import  "../components/style.css";
import { Row,Col } from 'react-bootstrap';
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
            <img  src={el.Images[2]}/>
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
        //  **********************new card *******************
        // <div>
        // <Row>
        //         <Col md={3}>
        //            <img className="fav--movie--pic" src={el.Images[2]} alt={el.Title}/>
        //         </Col>
        //         <Col md={9} className="fav--movie--info mt-2">
        //            <h2>{el.Title}</h2>
        //            <span>{el.Year} | {el.Runtime} | {el.Genre}</span>
        //            <div>
        //               <span><i class="fas fa-star"></i>  &nbsp; {el.Rate}</span>
        //               <span>{el.Metascore}</span> &nbsp; &nbsp; 
        //               <spann>Metascore</spann>
        //            </div>
        //            <div>
        //            <Rater total={10} rating={2}/>
        //            </div>
        //            <div>
        //                <span>{el.Actors}</span>
        //            </div>
        //            <div>
        //                <p>{el.Plot}</p>
        //            </div>
        //            <span>
        //            {/* callback */}
        //            {/* <button onClick={()=>removeFromWishlist(element)}>Remove from your Wishlist</button> */}
        //            <button className="ml-2">Watch</button>
        //            </span>
        //         </Col>
        //     </Row>
        //     </div>
            //****************************************end */

          
         )
       }

</div>
       
   <Footer />     
    </div>
   )

 }

export default Favor