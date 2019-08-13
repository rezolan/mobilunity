import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Login from './containers/Login';
import  Default from './containers/Default';
import { checkUser } from './actions';

const App = ({ loginStatus, checkUser }) => {
	useEffect(() => {
		checkUser();
	}, []);
	return (
		<div className="App">
			{loginStatus ? <Default/> : <Login/>}
		</div>
	)
};

const mapStateToProps = ({ login: { loginStatus } }) => ({ loginStatus });
const mapDispatchToProps = dispatch => ({
	checkUser: (payload) => dispatch(checkUser(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
