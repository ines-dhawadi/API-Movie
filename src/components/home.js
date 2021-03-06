

import Film from './film';

import Part2 from './part2';
import SearchBox from './SearchBox';
import React, {useState} from 'react'
import Nnabarr from './navbatt';
import Footer from "./footer";
import Footer2 from './Footer2';



function Home  ({favorites,getFavorites,getFavoritMovies}) {

  const[search, setSearch]= useState("");
  const handelSearch =(event)=>{
    let value =event.target.value
    setSearch(value)
  }
  console.log(search)
  return(
    <div>
   {/* <Part11 /> */}
 <Nnabarr handelSearch={handelSearch} favorites={favorites}/>
      <Part2/>
      <SearchBox handelSearch={handelSearch}/>

       <div className=" container-fliud lescard">
          <Film search={search} getFavorites={getFavorites} getFavoritMovies={getFavoritMovies} />
      </div>

<Footer2 />
      <Footer />
    </div>
   )

 }

export default Home