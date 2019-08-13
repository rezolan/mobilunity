import {
	SIGNIN_REQUEST,
	SIGNIN_SUCCESS,
	SIGNIN_ERROR,
	SIGNOUT_REQUEST,
	SIGNOUT_SUCCESS, SIGNOUT_ERROR
} from '../constants/actionTypes';

export const loginState = {
	username: null,
	loginStatus: false,
	isSubmitting: false,
	isSignOutProcess: false,
	error: null
};

export const login = (state = loginState, action) => {
	const { type, payload } = action;

	switch(type) {
		case SIGNIN_REQUEST:
			return {...state, isSubmitting: true};
		case SIGNIN_SUCCESS:
			return {...state, username: payload.username, isSubmitting: false, loginStatus: true};
		case SIGNIN_ERROR:
			return {...state, error: payload, isSubmitting: false};
		case SIGNOUT_REQUEST:
			return {...state, isSignOutProcess: true};
		case SIGNOUT_SUCCESS:
			return {...state, username: null, isSignOutProcess: false, loginStatus: false};
		case SIGNOUT_ERROR:
			return {...state, error: payload, isSignOutProcess: false};
		default:
			return {...state};
	}
};
