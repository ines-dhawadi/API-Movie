
import  "../components/style.css";
import { Navbar,FormControl,Button,Nav,Form } from "react-bootstrap";
import {Link} from "react-router-dom"
import React from 'react'


function Nnabarr({handelSearch,favorites}) {
 

  return(
    <div>
    <div className=" container-fluid col-md-12 navvvv">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img className="logo" src="https://baptistedrapeau.files.wordpress.com/2019/02/logo-cave-c3a0-film-rond-blanc-noir.png" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link   to="/">Home</Link>
      <Link to="/about">About</Link>
       <Link to="/favored"><img src="./heart.png" /> <span className="val-favorite"> {favorites}</span></Link>
      
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={handelSearch} />
      <Button variant="outline-danger"  >Search</Button>
    </Form> */}

    <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" onChange={handelSearch}  placeholder="Search..."/>
                <button type="submit" class="btn btn-default btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
  </Navbar.Collapse>
</Navbar>

<div className="grantitre">
    <p  className="titre"> <span>This site  offers <br></br>a list of 1150  </span>   </p> <br></br> 
    <Button className="bbbttt" variant="light">Light</Button>
  </div>
 
    </div>

    </div>)

 }

export default Nnabarr 