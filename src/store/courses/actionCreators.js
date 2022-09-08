import { GET_ALL_COURSES } from './actionTypes';
import Services from '../../services';
export const getAllCourses = () => (dispatch) => {
	return (
		Services.getAllCourses()
			// .then((data) => data.json())
			.then((res) =>
				dispatch({
					type: GET_ALL_COURSES,
					payload: res.data.result,
				})
			)
	);
};
