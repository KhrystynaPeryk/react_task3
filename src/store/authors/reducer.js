/* eslint-disable import/no-anonymous-default-export */
import { GET_ALL_AUTHORS, SAVE_NEW_AUTHOR } from './actionTypes';
const initialState = {
	authors: [],
};
export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_ALL_AUTHORS:
			return {
				...state,
				authors: payload,
			};
		case SAVE_NEW_AUTHOR:
			console.log('from save author reducer', payload);
			return {
				...state,
				authors: [...state.authors, payload],
			};
		default:
			return state;
	}
}
