import { combineReducers } from 'redux';
import user from '../store/user/reducer';
import courses from '../store/courses/reducer';
export default combineReducers({
	user,
	courses,
});
