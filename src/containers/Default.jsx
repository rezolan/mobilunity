import React, { Component } from 'react';

export default class Default extends Component {
	render() {
		return (
			<div className="login">
				<form>
					<input type="text"/>
					<input type="password"/>
					<button>Sign In</button>
				</form>
			</div>
		)
	}
}
