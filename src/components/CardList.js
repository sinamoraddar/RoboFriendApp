import React from 'react';
import Card from './Card';
import StarWars from './StarWars.js';
const CardList =({robots,starwars})=>{
	let tempStarWars=[];
	if(starwars.results){
		tempStarWars= starwars.results.map((currentValue,index)=> {
		return (<StarWars
				key={currentValue.created} 
				input={currentValue}/>);})
	}
	return(
		<div>
	{robots.map((currentValue,index)=> {
		return (<Card 
				key={currentValue.id} 
				input={currentValue}/>);
	})}
	{	
		tempStarWars.map((item)=>
			item
			)
	}</div>)}

	
		

export default CardList;