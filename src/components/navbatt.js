import React from 'react'
import  "../components/style.css";
import { Navbar,FormControl,Button,Nav,Form } from "react-bootstrap";


function Nnabarr() {
    

  return(
    <div className=" container-fluid col-md-12">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img src="clapper.png" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
       <Nav.Link href="#link"> <img src="heart.png" /> favored</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
   )

 }

export default Nnabarr 