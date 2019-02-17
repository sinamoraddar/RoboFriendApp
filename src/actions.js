import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
	REQUEST_STARWARS_PENDING,
	REQUEST_STARWARS_SUCCESS,
 	REQUEST_STARWARS_FAILED
			}from './constants.js';

export const setSearchField=(text)=>({
	type:CHANGE_SEARCHFIELD,
	payload:text
});
export const requestRobots=()=>(dispatch)=>{
	dispatch({type:REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
		.catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED,payload:error}))
}
export const requestStarwars=()=>(dispatch)=>{
	dispatch({type:REQUEST_STARWARS_PENDING});
	fetch(`https://swapi.co/api/people/?format=json`)
	.then(response=>response.json())
	.then(data=>dispatch({type:REQUEST_STARWARS_SUCCESS,payload:data}))
	.catch(error=>dispatch({type:REQUEST_STARWARS_FAILED,payload:error}))




}