/* eslint-disable import/no-anonymous-default-export */
import { GET_ALL_COURSES } from './actionTypes';
const initialState = {
	courses: [],
};
export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_ALL_COURSES:
			return {
				...state,
				courses: payload.courses,
				// or just courses: payload,
			};

		default:
			return state;
	}
}
