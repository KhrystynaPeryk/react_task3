import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../store/user/actionCreators';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { labelText, placeholderText, buttonText } from '../../constants';

const Registration = () => {
	const [regName, setRegName] = useState('');
	const [regEmail, setRegEmail] = useState('');
	const [regPassword, setRegPassword] = useState('');
	const [successful, setSuccessful] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!regName || !regEmail || !regPassword) {
			alert('Fill in all the fields');
			setSuccessful(false);
		} else {
			console.log({ name: regName, email: regEmail, password: regPassword });
			dispatch(register(regName, regEmail, regPassword))
				.then(() => {
					setSuccessful(true);
					navigate('/login');
					console.log('Successfully registered');
				})
				.catch(() => {
					setSuccessful(false);
					navigate('/error');
				});
		}
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='d-flex flex-column justify-content-center align-items-center mt-5'
		>
			<h4>Registration</h4>
			<div className='my-3'>
				<Input
					labelText={labelText.registration.name}
					label='name'
					placeholderText={placeholderText.registration.name}
					onChange={(e) => setRegName(e.target.value)}
					type='text'
					id='name'
					name='name'
					value={regName}
				/>
			</div>
			<div>
				<Input
					labelText={labelText.registration.email}
					label='email'
					placeholderText={placeholderText.registration.email}
					onChange={(e) => setRegEmail(e.target.value)}
					type='email'
					id='email'
					name='email'
					value={regEmail}
				/>
			</div>
			<div className='my-3'>
				<Input
					labelText={labelText.registration.password}
					label='password'
					placeholderText={placeholderText.registration.password}
					onChange={(e) => setRegPassword(e.target.value)}
					type='password'
					id='password'
					name='password'
					value={regPassword}
					minLength={6}
				/>
			</div>
			<Button buttonText={buttonText.registration} type='submit' />
			<p className='my-3'>
				If you have an account, you can <Link to='/login'>Login</Link>
			</p>
		</form>
	);
};

export default Registration;
