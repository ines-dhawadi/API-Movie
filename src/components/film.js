import  {useState, useEffect} from 'react'
import '../components/style.css'






function Film({search}) {
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
    search===''?
    film.map(el=>
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
         
          <li>Add to  <a href="#"><img  src="./heart.png" /></a></li>
        </ul>
      </div>
    </div>
  </div>
    
    </div>
    
   ):
   film.filter(el=>
    el.Title.toLowerCase().includes(search.toLowerCase())).map(el=>
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
         
          <li>Add to  <a href="#"><img  src="./heart.png" /></a></li>
        </ul>
      </div>
    </div>
  </div>
    
    </div>
    
   )
   
   )


 }

export default Film