/* eslint-disable import/no-anonymous-default-export */
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from './actionTypes';
const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};
export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case REGISTER_SUCCESS:
			return {
				...state,
				isAuth: false,
			};
		case REGISTER_FAIL:
			return {
				...state,
				isAuth: false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuth: user.successful,
				name: user.user.name,
				email: user.user.email,
				token: user.result,
				// user: payload.user,
			};
		case LOGIN_FAIL:
			return {
				...state,
				isAuth: false,
			};
		case LOGOUT:
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		default:
			return state;
	}
}
