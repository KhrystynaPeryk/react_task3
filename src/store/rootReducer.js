import { combineReducers } from 'redux';
import user from '../store/user/reducer';
import courses from './courses/reducer';

const rootReducer = combineReducers({
	courses,
	user,
});

export default rootReducer;
