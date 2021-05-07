import React from 'react';

const SearchBox = ({handelSearch}) => {
	return (
<div>
		<div className="paainpt">
			<h4>Describe a movie</h4>
			<h1 className="titreh1">search with title of movie </h1>
			<h4> We find movies for you to watch.</h4>
				 
				
		</div>
		<div className='col col-sm-4 inptsearch'>
			<input
				className='form-control'
				onChange={handelSearch}
				/*value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}*/
				placeholder='Type to search ====>title of movie'
			></input>
		</div></div>
	);
};

export default SearchBox;