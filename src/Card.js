import React,{Component}from 'react';
class Card extends Component{
	render(){
		return (
			<div className="tc bg-light-green dib bw2 shadow-5 ma3 br3 grow">
				<img alt="roboPhoto" src={`https://robohash.org/${this.props.input.id}?200*200`}/>
				<div>
					<h2>{this.props.input.name}</h2>
					<p>{this.props.input.email}</p>
				</div>
			</div>
			);
	}
}
export default Card;