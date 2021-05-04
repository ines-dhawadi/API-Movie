import  "./App.css";
import './components/style.css';
import Film from './components/film';
// import { } from "react-bootstrap";
import Nnabarr from "./components/navbatt";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
<Nnabarr />
      <div className=" container lescard">
          <Film />
      </div>
<div>

  <Footer />
</div>

 
    </div>
  );
}

export default App;
