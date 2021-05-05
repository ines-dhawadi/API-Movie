import  "./App.css";
import './components/style.css';
import Film from './components/film';
// import { } from "react-bootstrap";
import Nnabarr from "./components/navbatt";
import Footer from "./components/footer";
import Part2 from "./components/part2";
import {BrowserRouter as Router,Route  } from "react-router-dom";
import Favor from "./components/favored";
import Home from "./components/home";

function App() {
  return (
    <div className="App">

<Router>
<Nnabarr />
<Route exact path="/"  component={Home} />
{/* <Route  path="/"  component={non de componen} /> */}
<Route  path="/favored"  component={Favor} />
<Footer />
</Router>



{/* <Nnabarr />
<div>
  <Part2 />
</div>
      <div className=" container-fliud lescard">
          <Film />
      </div>
<div>

  <Footer />
</div>

  */}
    </div>
  );
}

export default App;
