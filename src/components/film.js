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

   





  return(
    film.map(el=>
    <div className="cwartttet">
<Card className="carete">
  <Card.Img className="imgfilm" variant="top" src={el.Images[0]} />
  <Card.Body>
    <Card.Title className="text-center">{el.Title}</Card.Title>
    <Card.Text>
      <p className="actorts"> <b>Actors :</b>  {el.Actors}</p>
      <div > <p className="actorts"> <b>Language :</b> {el.Language}</p></div>
     
    </Card.Text>
   
  </Card.Body>
</Card>
    </div>)
   )

 }

export default Film