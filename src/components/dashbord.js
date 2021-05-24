import  {useState, useEffect} from 'react'
import '../components/style.css'
import {Button} from 'react-bootstrap'
import axios from "axios"
// import Cont from './copdash';
// import Nnabarr from './navbatt';

import Updat from './updat';






function Dashbord({handleChanget,el,input2,favorites}) {

  

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

 
//****************************delet */
const deleteRow=(id, e)=>{  

  axios.delete(`http://localhost:3005/posts/${id}`)  
    .then(response => {  
      console.log("response: hahaha", response);
    }) 
    .catch(err=> 
      console.log(err)
    );
  }
// *************************axios.put*********************
// const updatRow=(id)=>{  

//   axios.put(`http://localhost:3005/posts/${id}`,input2)  
//     .then(response => {  
//       setInput2(response.data);})
     
    
//     }
//     console.log("response: updat", input2)
//     // .catch(err=> 
//     //   console.log(err)
//     // );
  
//   useEffect(()=>{updatRow()},[])




   return(

<div id="row-card-dashb" >
{/* <Nnabarr handelSearch={handelSearch} favorites={favorites}/>
<Cont  /> */}

    {
   film.filter(el=>
    el.Title.toLowerCase().includes(search.toLowerCase())).map(el=>
    <div className="cwartttet">



 
 <div className="card">
    <div className="image">
      <img  src={el.Images}/>
    </div>
    <div className="details">
      <div className="center">
        <h1>{el.Title}<br></br><span>{el.Actors}</span></h1>
        <p><b>Language :</b> {el.Language}</p>
        <ul >
         
          <li id="upd-supp" >
           {/* ********************madal updt *********************  */}
            <Updat  input2={input2} el={el} deleteRow={deleteRow} handleChanget={handleChanget}  />
           
          
     
          
          
          
          
          
          
           <a href="#">  <img  onClick={(e) => deleteRow(el.id, e)} src="./delete.png" />  </a></li>
        </ul>
        
      </div>
    </div>
  </div>
 
    </div>
    
   )}
{/* ********************New card******************** */}





    
   </div> )


 }

export default Dashbord
  