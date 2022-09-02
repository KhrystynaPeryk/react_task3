import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from './actionTypes';
import AuthService from '../../services';
export const register = (name, email, password) => (dispatch) => {
	return AuthService.register(name, email, password).then(
		(response) => {
			dispatch({
				type: REGISTER_SUCCESS,
			});
			return Promise.resolve();
		},
		(error) => {
			dispatch({
				type: REGISTER_FAIL,
			});
			return Promise.reject();
		}
	);
};
export const login = (email, password) => (dispatch) => {
	return AuthService.login(email, password).then(
		(data) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: { user: data.user },
			});
			return Promise.resolve();
		},
		(error) => {
			dispatch({
				type: LOGIN_FAIL,
			});
			return Promise.reject();
		}
	);
};
export const logout = () => (dispatch) => {
	AuthService.logout();
	dispatch({
		type: LOGOUT,
	});
};
