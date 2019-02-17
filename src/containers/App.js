import React,{Component} from 'react';
import {connect}from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField,requestRobots,requestStarwars} from '../actions';

const mapStateToProps=(state)=>{
	return {
		searchField:state.serachRobots.searchField,
		robots:state.requestRobots.robots,
		starwars:state.requestRobots.starwars,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
		onRequestRobots:()=>dispatch(requestRobots()),
		onStarWars:()=>dispatch(requestStarwars())
	}
}

class App extends Component{
	

	componentDidMount(){
		this.props.onRequestRobots();
		this.props.onStarWars();
	}

	render(){
		const{searchField,onSearchChange,robots,isPending,starwars}=this.props;
		// console.log(robots,'askljfajkdsl')
		console.log(starwars,'askljfaj156116kdsl')
		const filteredRobots=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return(isPending)?
			 <h1>Loading...</h1>
		:(<div className='tc'>
		<h1 className="f1" id="header">RoboFriends</h1>
		<SearchBox searchField={searchField} searchChange={onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
		<CardList id="cardList" robots={filteredRobots} starwars={starwars}/>
		</ErrorBoundry>
		</Scroll>
		</div>);}
		
	}
	


export default connect(mapStateToProps,mapDispatchToProps)(App);