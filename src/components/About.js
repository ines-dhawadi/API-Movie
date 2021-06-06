import React from 'react'
import Footer from './footer'
import Footer2 from './Footer2'
import Nnabar2 from './navbar2'
import Part11 from './Part1'
import Part2about from './part2about'
import Part3About from './Part3about'





function About() {
  return(
    <div>
<div className="bg-navbar-about">
<Nnabar2 />
<div className="grantitre-about">
    <p  className="titre"> <span>This site  offers <br></br>a list of 1150  </span>  <p id="parg-top-hom-ptit">Actor The Concept Movie High Concept <br></br> Theory see the post</p>  </p> <br></br> 
    {/* <Button className="bbbttt" variant="light">Light</Button> */}
    
    {/* /************ button Sign up  */}
  </div>
</div>

<Part11 />
<Part3About />
<Part2about />
<Footer2 />

<Footer />


    </div>
   )

 }

export default About