import React from 'react'
import Film from './film';
import Part2 from './part2';



function Home  () {
  return(
    <div>
      <SearchBox/>

      <Part2/>
       <div className=" container-fliud lescard">
          <Film />
      </div>



    </div>
   )

 }

export default Home