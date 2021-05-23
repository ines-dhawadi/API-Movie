import  {useState, useEffect} from 'react'
import '../components/style.css'
import {Button} from 'react-bootstrap'
import axios from "axios"
// import Cont from './copdash';
// import Nnabarr from './navbatt';
import {  Form,Modal } from "react-bootstrap";






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
    
/************************function modal */
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   return(

<div>
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
            
           
          
          {/* ********************modal********************* */}

    <>
      
      <img  id="bnt-updt"  onClick={handleShow} src="./pen.png" />
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vous pouvez éditer ce film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
{/* ************************************* */}
<div>

<Form  className="">

<Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Titre de votre film</Form.Label> */}
    <Form.Control    name="Title"  type="text" placeholder="Modifier le titre de votre film" />
    </Form.Group>


  <Form.Group controlId="formGroupEmail">
    {/* <Form.Label>Langue de votre film</Form.Label> */}
    <Form.Control  name="Language" type="text" placeholder="Modifier la langue de votre film" />
  </Form.Group>


  <Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Acteur  de votre film</Form.Label> */}
    <Form.Control    name="Actors"  type="text" placeholder="Modifier le nom de votre acteur de film" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Image</Form.Label> */}
    <Form.Control   name="Images"  type="text" placeholder="Modifier l'URL de l'image" />
  </Form.Group>
  <Button type="submit">  Valider</Button>
</Form>


</div>
{/* ********************************* */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          
Fermer
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Modifier
          </Button>
        </Modal.Footer>
      </Modal>
    </>
 


{/* ******************** END modal********************* */}

          
            {/* ******************** end madal updt *********************  */}
          
          
          
          
          
          
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
  