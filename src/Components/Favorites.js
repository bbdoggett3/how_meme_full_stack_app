import React, { Component } from "react";
import {connect} from 'react-redux'
import Meme from "./Meme";

class Favorites extends Component {
	
	render() {
		console.log(this.props.favorites)
		return (
			<div className="meme-dashboard">
				<div className="memes-container">
					{this.props.favorites.map(element => {
						return (
							<Meme
								key={element.id}
								memeInfo={element}
								//need to pass down the function reRender here
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		favorites: state.reducer.favorited
	};
}

export default connect(mapStateToProps)(Favorites);
