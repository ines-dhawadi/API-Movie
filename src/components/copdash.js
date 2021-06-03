import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form,Modal } from "react-bootstrap";



function Cont(){

    const[input,setInput]=useState(
      {Title :"",
      Language:"",
      Actors:"",
      Images :""

     }
    )
   const handleChange=(e)=>{
const {name,value}= e.target;
setInput(
  {  ...input,
    [name]:value
});

   }
//*************add to file json */
const handleSubmit=(e)=>{
e.preventDefault()
console.log('input',input)

axios.post('https://movies-762da-default-rtdb.firebaseio.com/posts.json', input)
.then((response)=> console.log(response))
.catch((error)=> console.log('error'))


}
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
{/* ********************modal********************* */}

    <>
      <Button variant="primary" onClick={handleShow}>
      Ajouter un nouveau film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vous pouvez Ajouter un nouveau film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
{/* ************************************* */}
<div>

<Form onSubmit={handleSubmit} className="">

<Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Titre de votre film</Form.Label> */}
    <Form.Control  onChange={handleChange}  value={input.Title} name="Title"  type="text" placeholder="Entrez le titre de votre film" />
    </Form.Group>


  <Form.Group controlId="formGroupEmail">
    {/* <Form.Label>Langue de votre film</Form.Label> */}
    <Form.Control onChange={handleChange} value={input.Language} name="Language" type="text" placeholder="Entrez la langue de votre film" />
  </Form.Group>


  <Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Acteur  de votre film</Form.Label> */}
    <Form.Control  onChange={handleChange}  value={input.Actors} name="Actors"  type="text" placeholder="Entrez le nom de votre acteur de film" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Image</Form.Label> */}
    <Form.Control  onChange={handleChange}  value={input.Images} name="Images"  type="text" placeholder="Entrez l'URL de l'image" />
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
          Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
 


{/* ******************** END modal********************* */}


    </div>
   )

 }

export default Cont