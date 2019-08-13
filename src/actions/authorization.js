import {
	SIGNIN_REQUEST,
	SIGNIN_SUCCESS,
	SIGNIN_ERROR,
	SIGNOUT_REQUEST,
	SIGNOUT_SUCCESS,
	SIGNOUT_ERROR } from '../constants/actionTypes';
import {signIn, signOut} from '../api-calls/authorization';

export const login = (payload) => dispatch => {
	const { username, password } = payload;

	dispatch({type: SIGNIN_REQUEST});
	setTimeout(() => {
		signIn(username, password)
			.then((data) => {
				const userData = { ...data, loginStatus: true };
				localStorage.setItem('auth', JSON.stringify(userData));
				dispatch({type: SIGNIN_SUCCESS, payload: data});
			})
			.catch(error => {
				dispatch({type: SIGNIN_ERROR, payload: error});
			})
	},1000);
};

export const logout = () => dispatch => {
	dispatch({type: SIGNOUT_REQUEST});
	signOut()
		.then((data) => {
			localStorage.removeItem('auth');
			dispatch({type: SIGNOUT_SUCCESS, payload: data});
		})
		.catch(error => {
			dispatch({type: SIGNOUT_ERROR, payload: error});
		})
};

export const checkUser = () => dispatch => {
	const checkData = localStorage.getItem('auth');
	if (!checkData) {
		return;
	}
	const userData = JSON.parse(checkData);
	dispatch({type: SIGNIN_SUCCESS, payload: userData});
};
