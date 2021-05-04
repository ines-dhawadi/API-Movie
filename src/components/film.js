import  {useState, useEffect} from 'react'
import '../components/style.css'

import {Card} from "react-bootstrap";




function Film() {
  const [film, setfilm] = useState([])  

  const getFilm=()=>{
      fetch('film.json').then(Response => Response.json()).then
                         (lesfilm => setfilm(lesfilm));
 }


 useEffect(()=>{getFilm()},[])

   





  /*return(
    film.map(el=>
    <div className="cwartttet">
<Card className="carete">
  <Card.Img className="imgfilm" variant="top" src={el.Images[0]} />
  <Card.Body>
    <Card.Title className="text-center">{el.Title}</Card.Title>
    <Card.Text>
      <p className="actorts"> <b>Actors :</b>  {el.Actors}</p>
      <div > <p className="actorts"> <b>Language :</b> {el.Language}</p></div>
      <div > <p className="text-center"> {el.imdbRating} <img src="star.png" /> </p></div>
     
    </Card.Text>
   
  </Card.Body>
</Card>
    </div>)
   )*/


   return(
    film.map(el=>
    <div>

<div className="grid">
			<figure className="effect-oscar">
				<img src={el.Images[0]} alt="img09"/>
				<figcaption>
					<h2>{el.Title}</h2>
					<p>{el.Actors}</p>
          <div > <p > <b>Language :</b> {el.Language}</p></div>
      <div > <p> <br></br> <b className="number">{el.imdbRating}</b>  <img className="startt" src="star.png" /> </p></div>
					<a href="#">View more</a>
				</figcaption>			
			</figure>
		
		</div>
    </div>
   ))


 }

export default Film