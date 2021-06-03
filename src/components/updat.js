import React from 'react'
import axios from "axios"
import  {useState, useEffect} from 'react'
import { Button, Form,Modal } from "react-bootstrap";


function Updat({id,film}) {

    const[input2,setInput2]=useState(
        {Title :film[id].Title,
        Language:film[id].Language,
        Actors:film[id].Actors,
        Images :film[id].Images
    
       }
      )
     const handleChanget=(e)=>{
    const {name,value}= e.target;
    setInput2(
    {  ...input2,
      [name]:value
    });
    console.log(input2 ,' input2eeeeeeeee');
     }

{/***********function updat  */}
     const updatRow=(id)=> {

        axios.put(`https://movies-762da-default-rtdb.firebaseio.com/posts/${id}.json`, input2)
        .then(response => {
          setInput2( response.data);})
      }
      console.log('updaaaaaate', input2)
      
      
/************************function modal */
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return(
    <div>

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

<Form   className="">

<Form.Group controlId="formGroupPassword">
{/* <Form.Label>Titre de votre film</Form.Label> */}
<Form.Control   onChange={handleChanget} defaultValue={film[id].Title} name="Title"  type="text" placeholder="Modifier le titre de votre film" />
</Form.Group>


<Form.Group controlId="formGroupEmail">
{/* <Form.Label>Langue de votre film</Form.Label> */}
<Form.Control   onChange={handleChanget} defaultValue={film[id].Language} name="Language" type="text" placeholder="Modifier la langue de votre film" />
</Form.Group>


<Form.Group controlId="formGroupPassword">
{/* <Form.Label>Acteur  de votre film</Form.Label> */}
<Form.Control    onChange={handleChanget}  name="Actors" defaultValue={film[id].Actors} type="text" placeholder="Modifier le nom de votre acteur de film" />
</Form.Group>

<Form.Group controlId="formGroupPassword">
{/* <Form.Label>Image</Form.Label> */}
<Form.Control   onChange={handleChanget}  name="Images" defaultValue={film[id].Images}  type="text" placeholder="Modifier l'URL de l'image" />
</Form.Group>
<Button   onClick={() =>updatRow(id)}  > Valider</Button>
</Form>


</div>
{/* ********************************* */}
    </Modal.Body>
    {/* <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
      
Fermer
      </Button>
      <Button variant="primary"    onClick={ () =>{ updatRow(el.id);handleClose()}}>
      Modifier
      </Button>
    </Modal.Footer>*/}
  </Modal> 
</>



{/* ******************** END modal********************* */}

      
        {/* ******************** end madal updt *********************  */}
    </div>
   )

 }

export default Updat