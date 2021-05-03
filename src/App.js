import  "./App.css";
import './components/style.css';
import Film from './components/film';
import { Container,Row,Col } from "react-bootstrap";
import Nnabarr from "./components/navbatt";

function App() {
  return (
    <div className="App">
<Nnabarr />
      <div className=" container lescard">
          <Film />
      </div>
 <img src="heart.png" />
    </div>
  );
}

export default App;
