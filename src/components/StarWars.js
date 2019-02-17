import React,{Component}from 'react';
class StarWars extends Component{
	render(){
		return (
			<div className="tc bg-light-green dib bw2 shadow-5 ma3 br3 grow">
				
				<img alt="roboPhoto" src={`https://robohash.org/${this.props.input.created}?200*200`}/>
				<div>
					<h2>{this.props.input.name}</h2>
				</div>
			</div>
			);
	}
}
export default StarWars;