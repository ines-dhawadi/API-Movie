import  {useState, useEffect} from 'react'
import '../components/style.css'
import {Button} from 'react-bootstrap'
import axios from "axios"
import Cont from './copdash';
import Nnabarr from './navbatt';






function Dashbord({favorites}) {

    // const[search, setSearch]= useState("");
    // const handelSearch =(event)=>{
    //   let value =event.target.value
    //   setSearch(value)
    // }
  const [film, setFilm] = useState([])  

  const getFilm=()=>{
    axios.get('http://localhost:3005/posts').then((response) => {
      setFilm( response.data);
    });
                         
 }


 useEffect(()=>{getFilm()},[])

 const[search, setSearch]= useState("");
 const handelSearch =(event)=>{
   let value =event.target.value
   setSearch(value)
 }
 console.log(search)

 


   return(

<div>
<Nnabarr  favorites={favorites}/>
<Cont  />

    {search===''?
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
         {/* wrapper function */}
          <li>Add to  <Button ><img  src="./heart.png" /></Button></li>
        </ul>
      </div>
    </div>
  </div>
    
  
   <img className="freeic" src="../images/free.png" />
   
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
    
   )}
    
   </div> )


 }

export default Dashbord
  