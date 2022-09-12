/* eslint-disable import/no-anonymous-default-export */
import {
	GET_ALL_COURSES,
	SAVE_NEW_COURSE,
	UPDATE_COURSE,
	DELETE_COURSE,
} from './actionTypes';
const initialState = {
	courses: [],
};
export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_ALL_COURSES:
			return {
				...state,
				courses: payload,
			};
		case SAVE_NEW_COURSE:
			console.log('from save course reducer', payload);
			return {
				...state,
				courses: [...state.courses, payload],
			};
		case UPDATE_COURSE:
			const courseIdToUpdate = payload.id;
			return {
				...state,
				courses: state.courses.map((course) => {
					if (courseIdToUpdate === course.id) {
						const updatedCourse = { ...course, payload };
						return updatedCourse;
					} else {
						return course;
					}
				}),
			};
		case DELETE_COURSE:
			const courseIdToDelete = payload.id;
			return {
				...state,
				courses: state.courses.filter(
					(course) => course.id !== courseIdToDelete
				),
			};
		default:
			return state;
	}
}
