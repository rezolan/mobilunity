import React from 'react';
import Login from './containers/Login';
import  Default from './containers/Default';

const isLogin = false;
const App = () => (
	<div className="App">
		{ isLogin ? <Default/> : <Login/> }
	</div>
);

export default App;
