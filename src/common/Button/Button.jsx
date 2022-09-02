import React from 'react';

const Button = ({ buttonText, onClick, type }) => {
	return (
		<div>
			<button onClick={onClick} className='btn btn-info' type={type}>
				{buttonText}
			</button>
		</div>
	);
};

export default Button;
