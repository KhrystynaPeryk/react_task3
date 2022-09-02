import axios from 'axios';
const register = (name, email, password) => {
	return axios.post('http://localhost:4000/register', {
		name,
		email,
		password,
	});
};
const login = (email, password) => {
	return axios
		.post('http://localhost:4000/login', {
			email,
			password,
		})
		.then((response) => {
			if (response.data.successful) {
				// const userToken = response.data.result.split(' ')[1];
				// console.log(`UserToken from auth.service.js - ${userToken}`);
				localStorage.setItem('user', JSON.stringify(response.data));
			}
			return response.data;
		});
};
const logout = () => {
	localStorage.removeItem('user');
};
const getAllCourses = () => {
	return axios.get('http://localhost:4000/courses/all');
};
export default { register, login, logout, getAllCourses };
