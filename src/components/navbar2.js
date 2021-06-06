import  "../components/style.css";
import { Navbar,FormControl,Button,Nav,Form } from "react-bootstrap";
import {Link} from "react-router-dom"
import SignInForm from './sign-in-form';
import SignUpForm from './sign-up-form';
import getFirebase from "./Firebase";
import React, { useEffect,useState } from 'react';



function Nnabar2({handelSearch,favorites}) {
 

  //******************************firebase AUth */
 


// Create a currentUser state
const [currentUser, setCurrentUser] = useState(null);

// Listen to onAuthStateChanged
useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  },[]);

  return(
    <div>
    <div className=" container-fluid col-md-12 ">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img className="logo" src="https://baptistedrapeau.files.wordpress.com/2019/02/logo-cave-c3a0-film-rond-blanc-noir.png" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link   to="/">Home</Link>
      <Link to="/About">About</Link>
       <Link to="/favored"><img src="./heart.png" /> </Link>
      
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={handelSearch} />
      <Button variant="outline-danger"  >Search</Button>
    </Form> */}

    <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" class="form-control" onChange={handelSearch}  placeholder="Search..."/>
                <button type="submit" class="btn btn-default btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
  </Navbar.Collapse>
</Navbar>


 
    </div>

    </div>)

 }

export default Nnabar2 