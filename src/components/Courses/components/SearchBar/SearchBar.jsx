import React from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { buttonText, placeholderText } from '../../../../constants';

const SearchBar = ({ onChange, onClick, value }) => {
	return (
		<section className='d-flex justify-content-between align-items-center'>
			<div className='flex-grow-1 m-3 d-flex justify-content-center align-items-center'>
				<Input
					placeholderText={placeholderText.searchBar}
					onChange={onChange}
					value={value}
				/>
			</div>
			<div>
				<Button buttonText={buttonText.searchBar} onClick={onClick} />
			</div>
		</section>
	);
};

export default SearchBar;
