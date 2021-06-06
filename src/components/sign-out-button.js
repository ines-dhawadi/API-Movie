import React from "react";
import {Button} from 'react-bootstrap'

import getFirebase from "./Firebase";

const SignOutButton = () => {
  const firebaseInstance = getFirebase();

  const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
};

export default SignOutButton;