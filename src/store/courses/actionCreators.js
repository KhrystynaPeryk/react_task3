import {
	GET_ALL_COURSES,
	SAVE_NEW_COURSE,
	UPDATE_COURSE,
	DELETE_COURSE,
} from './actionTypes';
import Services from '../../services';
export const getAllCourses = () => (dispatch) => {
	return Services.getAllCourses().then((res) =>
		dispatch({
			type: GET_ALL_COURSES,
			payload: res.data.result,
		})
	);
};

export const saveNewCourse = (newCourse) => (dispatch) => {
	return dispatch({
		type: SAVE_NEW_COURSE,
		payload: newCourse,
	});
};

export const deleteCourse = (id) => (dispatch) => {
	// return Services.deleteCourse(courseTobeDeleted).then((res) => {
	return dispatch({
		type: DELETE_COURSE,
		payload: id,
	});
	// });
};
