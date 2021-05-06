import React from 'react'
import Film from './film';
import Part11 from './Part1';
import Part2 from './part2';
import SearchBox from './SearchBox';



function Home  () {
  return(
    <div>
     <Part11 />
      <Part2/>
      <SearchBox />

       <div className=" container-fliud lescard">
          <Film />
      </div>



    </div>
   )

 }

export default Home