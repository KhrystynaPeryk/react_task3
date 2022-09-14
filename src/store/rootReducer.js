import { combineReducers } from 'redux';
import user from '../store/user/reducer';
import courses from './courses/reducer';
import authors from './authors/reducer';

const rootReducer = combineReducers({
	courses,
	user,
	authors,
});

export default rootReducer;
