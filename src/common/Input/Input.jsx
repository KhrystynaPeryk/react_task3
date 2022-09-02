import React from 'react';

const Input = ({
	labelText,
	placeholderText,
	onChange,
	id,
	name,
	type,
	minLength,
	min,
	value,
	label,
}) => {
	return (
		<>
			<label htmlFor={label} className='d-block'>
				{labelText}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholderText}
				className='form-control bg-light'
				onChange={onChange}
				minLength={minLength}
				min={min}
				value={value}
			/>
		</>
	);
};

export default Input;
