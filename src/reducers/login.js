import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_ERROR } from '../constants/actionTypes';

export const loginState = {
	username: null,
	isSubmitting: false,
	error: null
};

export const login = (state = loginState, action) => {
	const { type, payload } = action;

	switch(type) {
		case SIGNIN_REQUEST:
			return {...state, isSubmitting: true};
		case SIGNIN_SUCCESS:
			return {...state, username: payload, isSubmitting: false};
		case SIGNIN_ERROR:
			return {...state, error: payload, isSubmitting: false};
		default:
			return {...state};
	}
};
