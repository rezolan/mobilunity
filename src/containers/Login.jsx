import React, { Component } from 'react'
import { connect } from 'react-redux';
import { LoginForm } from '../components/LoginForm';
import { login } from '../actions';

class Login extends Component {
	render() {
		const { onSubmit, login: { isSubmitting } } = this.props;
		return (
			<div className="login">
				<LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting}/>
			</div>
		)
	}
}

const mapStateToProps = ({ login }) => ({ login });
const mapDispatchToProps = dispatch => ({
	onSubmit: (payload) => dispatch(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
