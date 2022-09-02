import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/user/actionCreators';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { labelText, placeholderText, buttonText } from '../../constants';

const Login = () => {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	// const [loading, setLoading] = useState(false);
	const { isAuth } = useSelector((state) => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth) {
			navigate('/courses');
		}
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// setLoading(true);
		if (!loginEmail || !loginPassword) {
			alert('Fill in all the fields');
			// setLoading(false);
		} else {
			dispatch(login(loginEmail, loginPassword))
				.then(() => {
					navigate('/courses');
				})
				.catch((e) => {
					console.log(e);
					// setLoading(false);
					navigate('/error');
				});
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='d-flex flex-column justify-content-center align-items-center mt-5'
		>
			<h4>Login</h4>
			<div className='my-3'>
				<Input
					labelText={labelText.registration.email}
					label='email'
					placeholderText={placeholderText.registration.email}
					onChange={(e) => setLoginEmail(e.target.value)}
					type='email'
					id='email'
					name='email'
					value={loginEmail}
				/>
			</div>
			<div className='mb-3'>
				<Input
					labelText={labelText.registration.password}
					label='password'
					placeholderText={placeholderText.registration.password}
					onChange={(e) => setLoginPassword(e.target.value)}
					type='password'
					id='password'
					name='password'
					value={loginPassword}
					minLength={6}
				/>
			</div>
			<Button buttonText={buttonText.login} type='submit' />
			<p className='my-3'>
				If you don't have an account, please proceed to{' '}
				<Link to='/registration'>Registration</Link>
			</p>
		</form>
	);
};

export default Login;
