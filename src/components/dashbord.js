import  {useState, useEffect} from 'react'
import '../components/style.css'
import {Button} from 'react-bootstrap'
import axios from "axios"
// import Cont from './copdash';
// import Nnabarr from './navbatt';

import Updat from './updat';






function Dashbord({handleChanget,input2,favorites}) {

  

    // const[search, setSearch]= useState("");
    // const handelSearch =(event)=>{
    //   let value =event.target.value
    //   setSearch(value)
    // }
  const [film, setFilm] = useState([])  

  
  
  const getFilm=()=>{
    axios.get('https://movies-762da-default-rtdb.firebaseio.com/posts.json').then((response) => {
      setFilm(response.data);
      console.log("mchitchi ", response.data)
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

  axios.delete(`https://movies-762da-default-rtdb.firebaseio.com/posts/${id}.json`)  
    .then(response => {  
      console.log("response:", response);
    }) 
    .then(response=> window.location.reload()) 
    
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

<div  >
{/* <Nnabarr handelSearch={handelSearch} favorites={favorites}/>
<Cont  /> */}

   <div className='d-flex justify-content-around flex-wrap '>
   {
  // Object.keys(film).filter(id=>
  //   film[id].Title.toLowerCase().includes(search.toLowerCase()))
    
  Object.keys(film).map(id=>
    <div className="cwartttet">



 
 <div className="card">
    <div className="image">
      <img  src={film[id].Images}/>
    </div>
    <div className="details">
      <div className="center">
        <h1>{film[id].Title}<br></br><span>{film[id].Actors}</span></h1>
        <p><b>Language :</b> {film[id].Language}</p>
        <ul >
         
          <li id="upd-supp" >
           {/* ********************madal updt *********************  */}

           <div id="icon-updat">
           <Updat  input2={input2} film={film} id={id}   handleChanget={handleChanget}  />
           </div>
           
           
          
     
          
          
          
          
          
          
           <a href="#">  <img  id="icon-supp" onClick={() => deleteRow(id)} src="./delete.png" />  </a></li>
        </ul>
        
      </div>
    </div>
  </div>
 
    </div>
    
   )}
   </div>
{/* ********************New card******************** */}





    
   </div> )


 }

export default Dashbord
  