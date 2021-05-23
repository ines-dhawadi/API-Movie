import  "./App.css";
import './components/style.css';
// import Film from './components/film';
// import { } from "react-bootstrap";


// import Part2 from "./components/part2";
import {BrowserRouter as Router,Route  } from "react-router-dom";
import Favor from "./components/favored";
import Home from "./components/home";
import { useState} from "react";
import Dashbord from "./components/dashbord";
// import Dashb from "./components/Dash1";
import Newdash from "./components/newdash";
import User from './components/user';






function App({film,handleChange,search}) {
//-----------------fetch  json
//   const [film, setFilm] = useState([])  

//   const getFilm=()=>{
//       fetch('film.json').then(Response => Response.json()).then
//                          (lesfilm => setFilm(lesfilm));
//  }


//  useEffect(()=>{getFilm()},[])



//----- incrémentation favories
  const [favorites,setFavorites]=useState(0)
 const getFavorites=()=>{
    setFavorites(favorites+1)
 }
  console.log('favrt', favorites)


  //----------------Add getFavoritMovies

  const [favoritMovie,setFavoritMovies]=useState([])

const getFavoritMovies=(e)=>{

favoritMovie.push(e)
console.log(favoritMovie)
}

  return (
      <div className="App">

<Router>
 
<Route exact path="/"   ><Home favorites={favorites} getFavorites={getFavorites} getFavoritMovies={getFavoritMovies} /> </Route>
{/* <Route  path="/"  component={non de componen} /> */}
<Route  path="/favored"   > <Favor favorites={favorites} favoritMovie={favoritMovie} getFavoritMovies={getFavoritMovies} /> </Route>

{/* <Route path="/admin" ><Dashbord favorites={favorites} handleChange={handleChange} search={search} film={film}/></Route> */}
{/* <Route path="/dachbord"><Dashbord favorites={favorites} handleChange={handleChange} search={search} film={film}/> </Route> */}
<Route path="/Dashb">< Newdash/></Route>

<Route path="/user"><User/></Route>
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
