import React from 'react';
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
				<Button
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
			</div>
		</section>
	);
};

export default CourseCard;
