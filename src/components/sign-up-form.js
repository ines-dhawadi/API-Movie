import React, {useState} from "react";
// import styled from "styled-components";
import {Form,Button,Modal  } from "react-bootstrap";
import getFirebase from "./Firebase";
import useInput from "./useInput";
import "../components/newdash.css"
import SignOutButton from "./sign-out-button";


const SignUpForm = () => {
    const firebaseInstance = getFirebase();
    const email = useInput("");
    const password = useInput("");

    const signUp = async (event) => {
        event.preventDefault();

        try {
            if (firebaseInstance) {
            const user = await firebaseInstance
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            console.log("user", user);
            alert(`Welcome ${email.value}!`);
            }
        } catch (error) {
            console.log("error", error);
            alert(error.message);
        }
    };
/**************************Function modal */
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <>
       

{/* /*******************start modal *********** */ }


      <Button id="style-Button-sign-up" variant="primary" onClick={handleShow}>
      Sign up
      </Button>

      <Modal className="bg-gr-modal"   show={show} onHide={handleClose}>
        <Modal.Header className="bg-modal" closeButton>
          <Modal.Title id="modal-title">Sign up</Modal.Title>
        </Modal.Header >
        <Modal.Body className="bg-modal">
{/* ********************START FORM** signUp************ */}
<Form onSubmit={signUp}>
<input  class="form-control" placeholder="Fist Name" /> <br></br><br></br>
<input  class="form-control" placeholder="Last Name" /> <br></br><br></br>
            <input  class="form-control" placeholder="Email" {...email} /> <br></br><br></br>
            <input class="form-control" placeholder="Password" type="password" {...password} /><br></br>
            <div className="d-flex">  
            <Button id="bnt-sign" type="submit">Sign up</Button>
        <SignOutButton /> 
            </div>

        </Form>

{/* ************************END FORM *****signUp************* */}
        </Modal.Body >
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
/*******************End modal *********** */

    );
};

export default SignUpForm;