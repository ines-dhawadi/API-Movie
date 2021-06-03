import  {useState, useEffect} from 'react'
import '../components/style.css'
import {Button} from 'react-bootstrap'
import axios from "axios"






function Film({search,getFavorites,getFavoritMovies}) {
  const [film, setFilm] = useState([])  

  const getFilm=()=>{
    
    axios.get('https://movies-762da-default-rtdb.firebaseio.com/posts.json').then((response) => {
      setFilm((response.data) );
      console.log()
    });
                         
 }


 useEffect(()=>{getFilm()},[])



 /************************************* */
//  const [Movie,setMovie]= useState([])
//  const getMovie=()=> {
//      axios.get('http://localhost:3004/posts').then((response) => {
       
//          setMovie( response.data);
        
//        });

//  }
//  useEffect(()=>{getMovie()},[])




   





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
   
    Object.keys(film).filter(id=>
    film[id].Title.toLowerCase().includes(search.toLowerCase())).map(id=>
    <div className="cwartttet">



 
 <div className="card">
    <div className="image">
      <img  src={film[id].Images[2]}/>
   
    </div>
    <div className="details">
      <div className="center">
        <h1>{film[id].Title}<br></br><span>{film[id].Actors}</span></h1>
        <p><b>Language :</b> {film[id].Language}</p>
        <ul >
         
          <li>Add to  <a href="#"><img  onClick={()=>{getFavorites() ;getFavoritMovies(film[id])}} src="./heart.png" /></a></li>
        </ul>
      </div>
    </div>
  </div>
  <img className="freeichom" src="../images/free.png" />
    </div>
    
   )
   
   )


 }

export default Film