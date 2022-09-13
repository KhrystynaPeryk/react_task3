import React from 'react';

import { ReactComponent as TrashLogo } from '../../../../assets/trash.svg';
import { ReactComponent as PencilLogo } from '../../../../assets/edit-pencil.svg';

import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import { buttonText } from '../../../../constants';

const CourseCard = ({
	id,
	title,
	duration,
	creationDate,
	description,
	authors,
}) => {
	const ellipsisStyle = {
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
	};

	const navigate = useNavigate();

	return (
		<section className='container row mt-5 border border-info rounded p-3 m-1'>
			<div className='col'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='col-5'>
				<p style={ellipsisStyle}>
					<b>Authors: </b>
					{authors}
				</p>
				<p>
					<b>Duration: </b>
					{duration} hours
				</p>
				<p>
					<b>Created: </b>
					{creationDate}
				</p>
				<div className='d-flex align-items-center'>
					<Button
						style={{ marginRight: '5px' }}
						buttonText={buttonText.courseCard}
						type='button'
						onClick={() =>
							navigate(`/courses/${id}`, {
								state: {
									id,
									title,
									duration,
									creationDate,
									description,
									authors,
								},
							})
						}
					/>
					<Button
						style={{ marginRight: '5px' }}
						buttonText={<PencilLogo></PencilLogo>}
						type='button'
					/>

					<Button
						style={{ marginRight: '5px' }}
						buttonText={<TrashLogo></TrashLogo>}
						type='button'
					/>
				</div>
			</div>
		</section>
	);
};

export default CourseCard;
