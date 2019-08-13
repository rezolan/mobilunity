import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';

class Default extends Component {
	render() {
		return (
			<div>
				Welcome {this.props.username}
				<button onClick={this.props.onSubmit}>Sign Out</button>
			</div>
		)
	}
}

const mapStateToProps = ({ login: { username }}) => ({ username });
const mapDispatchToProps = dispatch => ({
	onSubmit: (payload) => dispatch(logout(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Default);


