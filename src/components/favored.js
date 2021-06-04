import React, { useState } from 'react'
import Part11 from './Part1';
import Nnabarr from './navbatt';
import  "../components/style.css";
import { Row,Col } from 'react-bootstrap';
import Footer from "./footer";
import Footer2 from './Footer2';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const Favor = ({favoritMovie,DeleteFavoritMovie, favorites, handelSearch}) => {

/*******************delet favoritMovie */






  return(
    <div>
       <Nnabarr   handelSearch={handelSearch} favorites={favorites}/>
       {/* <Part11 /> */}

       <div className="container d-flex flex-wrap mt-5">
       {
        Object.keys (favoritMovie).map(el=>
      //     <div className="cwartttet">
      
      
      
       
      //  <div className="card ms-3">
      //     <div className="image">
      //       <img  src={el.Images[2]}/>
      //     </div>
      //     <div className="details">
      //       <div className="center">
      //         <h1>{el.Title}<br></br><span>{el.Actors}</span></h1>
      //         <p><b>Language :</b> {el.Language}</p>
      //         <ul >
      //          {/* wrapper function */}
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
          
      //    <img className="playy" src="../images/play.png" />
      //    <img className="freeic" src="../images/free.png" />
         
      //    </div>
        //  **********************new card *******************
        <div>
        <Row>
                <Col md={3} className="mb-5">
                   <img className="fav--movie--pic" src={favoritMovie[el].Images[2]} alt={favoritMovie[el].Title}/>
                </Col>
                <Col md={9} id="fav--movie--info" className=" mt-2">
                   <h2 id="titl-fav">{favoritMovie[el].Title}</h2>
                   <span id="lign-y-r">{favoritMovie[el].Year} | {favoritMovie[el].Runtime} | {favoritMovie[el].Genre}</span>
                   <div>
                      <span><Rater id="retiong" total={10} rating={favoritMovie[el].imdbRating} />  &nbsp; {favoritMovie[el].Rate}</span>
                      <span>{favoritMovie[el].Metascore}</span> &nbsp; &nbsp; 
                      <spann>Metascore</spann>
                   </div>
                   <div>
                   {/* <Rater total={10} rating={2}/> */}
                   </div>
                   <div>
                       <span>{favoritMovie[el].Actors}</span>
                   </div>
                   <div>
                       <p>{favoritMovie[el].Plot}</p>
                   </div>
                   <span>
                   {/* callback */}
                   {/* <button onClick={()=>removeFromWishlist(element)}>Remove from your Wishlist</button> */}
                   <button onClick={DeleteFavoritMovie} className="bnt-fav-pag ml-2">Remove from your favorite list</button>
                   </span>
                </Col>
            </Row>
            </div>
            //****************************************end */

          
         )
       }

</div>
       <Footer2/>
   <Footer />     
    </div>
   )

 }

export default Favor