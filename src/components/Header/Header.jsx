import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { buttonText } from '../../constants';
import { logout } from '../../store/user/actionCreators';
import { useDispatch } from 'react-redux';

const Header = () => {
	const state = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleLogOut = () => {
		// localStorage.removeItem('user');
		dispatch(logout());
		navigate('/login');
	};

	return (
		<div className='d-flex justify-content-between align-items-center'>
			<Logo />
			{state.isAuth ? (
				<>
					<div className='container text-end'>
						<b>{state.name}</b>
					</div>
					<Button buttonText={buttonText.logout} onClick={handleLogOut} />
				</>
			) : null}
		</div>
	);
};

export default Header;
