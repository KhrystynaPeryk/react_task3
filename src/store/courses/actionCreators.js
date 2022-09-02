import { GET_ALL_COURSES } from './actionTypes';
import Services from '../../services';
export const getAllCourses = () => (dispatch) => {
	return Services.getAllCourses().then((data) => {
		dispatch({
			type: GET_ALL_COURSES,
			payload: { courses: data.result },
		});
		return Promise.resolve();
	});
};
