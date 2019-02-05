import React from 'react';
import Card from './Card';
const CardList =({robots})=>{
	return(
		<div>
	{robots.map((currentValue,index)=> {
		return (<Card 
				key={currentValue.id} 
				input={currentValue}/>);
	})}
	</div>
		);
}
export default CardList;