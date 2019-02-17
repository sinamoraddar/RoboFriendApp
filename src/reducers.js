import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
	REQUEST_STARWARS_PENDING,
	REQUEST_STARWARS_SUCCESS,
 	REQUEST_STARWARS_FAILED
			}from './constants.js';


const initialStateSearch={
	searchField:''
}

export const serachRobots=(state=initialStateSearch,action={})=>{
	switch (action.type) {
		case CHANGE_SEARCHFIELD:
			return {...state,searchField:action.payload}
		default:
			return state;
			
	}
}
const initialStateRobots={
	robots:[],
	starwars:[],
	isPending:false,
	error:''
}
export const requestRobots =(state=initialStateRobots,action={})=>{
	switch(action.type)
		{
			case REQUEST_ROBOTS_PENDING :
				return Object.assign({},state,{isPending:true})
			case REQUEST_ROBOTS_SUCCESS:
				return Object.assign({},state,{robots:action.payload,isPending:false})
			case REQUEST_ROBOTS_FAILED:
				return Object.assign({},state,{error:action.payload,isPending:false})
			case REQUEST_STARWARS_PENDING :
				return Object.assign({},state,{isPending:true})
			case REQUEST_STARWARS_SUCCESS:
				return Object.assign({},state,{starwars:action.payload,isPending:false})
			case REQUEST_STARWARS_FAILED:
				return Object.assign({},state,{error:action.payload,isPending:false})
			default :
				return state;
		}
}