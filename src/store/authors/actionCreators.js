import { GET_ALL_AUTHORS, SAVE_NEW_AUTHOR } from './actionTypes';
import Services from '../../services';
export const getAllAuthors = () => (dispatch) => {
	return Services.getAllAuthors().then((res) => {
		return dispatch({
			type: GET_ALL_AUTHORS,
			payload: res.data.result,
		});
	});
};

export const saveNewAuthor = (newAuthor) => (dispatch) => {
	return dispatch({
		type: SAVE_NEW_AUTHOR,
		payload: newAuthor,
	});
};
