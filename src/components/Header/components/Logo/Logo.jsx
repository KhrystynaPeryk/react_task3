import React from 'react';
import logo from '../../../../assets/logo.webp';

const Logo = () => {
	const style = {
		width: '9rem',
		height: 'auto',
	};
	return (
		<div>
			<img style={style} src={logo} alt='logo' />
		</div>
	);
};

export default Logo;
