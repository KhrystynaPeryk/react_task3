import React from 'react';

const Button = ({ buttonText, onClick, type, style }) => {
	return (
		<div style={style}>
			<button onClick={onClick} className='btn btn-info' type={type}>
				{buttonText}
			</button>
		</div>
	);
};

export default Button;
